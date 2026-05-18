window.CUSDIS = {};
const makeIframeContent = (target) => {
  const host = target.dataset.host || "https://cusdis.com";
  const iframeJsPath = target.dataset.iframe || `${host}/js/iframe.umd.js`;
  const cssPath = `${host}/js/style.css`;
  return `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="${cssPath}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet">
    <base target="_parent" />
    <link>
    <script>
      window.CUSDIS_LOCALE = ${JSON.stringify(window.CUSDIS_LOCALE)}
      window.__DATA__ = ${JSON.stringify(target.dataset)}
    <\/script>
    <style>
      :root {
        color-scheme: light;
      }
      
      /* THEME CUSTOMIZATION */
      body, button, input, textarea {
        font-family: 'Fraunces', serif !important;
        background: transparent !important;
        color: #1A1410 !important;
      }
      
      /* REMOVE SCROLLBARS */
      ::-webkit-scrollbar { display: none !important; }
      * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      
      /* STYLE INPUTS */
      input, textarea {
        background-color: #F5EDE0 !important;
        border: 1px solid rgba(26, 20, 16, 0.15) !important;
        border-radius: 12px !important;
        color: #1A1410 !important;
        padding: 0.75rem !important;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.02) !important;
        transition: all 0.2s ease !important;
      }
      
      input:focus, textarea:focus {
        outline: none !important;
        border-color: #E8A317 !important;
        box-shadow: 0 0 0 3px rgba(232, 163, 23, 0.15) !important;
      }
      
      /* STYLE BUTTONS */
      button {
        background-color: #1B3A5C !important;
        color: #F5EDE0 !important;
        border-radius: 50px !important;
        padding: 0.5rem 1.5rem !important;
        font-weight: 500 !important;
        transition: all 0.2s ease !important;
        border: none !important;
        cursor: pointer !important;
        display: inline-block !important;
      }
      
      button:hover {
        background-color: #122842 !important;
        transform: translateY(-1px) !important;
      }
      
      /* STYLE AVATARS AND NAMES */
      .cusdis-avatar {
        border-radius: 8px !important;
        display: none !important;
      }
      .cusdis-name {
        color: #1B3A5C !important;
        font-weight: 600 !important;
        display: none !important;
      }
      
      /* HIDE ALL SIBLINGS AND PARTS OF COMMENTS */
      .cusdis-name ~ *,
      .cusdis-avatar ~ *,
      [class*="avatar"] ~ *,
      [class*="avatar"],
      [class*="cusdis-comment"],
      [class*="comment-item"],
      .cusdis-comments {
        display: none !important;
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="${iframeJsPath}" type="module"></script>
  </body>
</html>`;
};
let singleTonIframe;
function createIframe(target) {
  if (!singleTonIframe) {
    singleTonIframe = document.createElement("iframe");
    listenEvent(singleTonIframe, target);
  }
  singleTonIframe.srcdoc = makeIframeContent(target);
  singleTonIframe.style.width = "100%";
  singleTonIframe.style.border = "0";
  return singleTonIframe;
}
function postMessage(event, data) {
  if (singleTonIframe) {
    singleTonIframe.contentWindow.postMessage(
      JSON.stringify({
        from: "cusdis",
        event,
        data
      })
    );
  }
}
function listenEvent(iframe, target) {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onMessage = (e) => {
    try {
      const msg = JSON.parse(e.data);
      if (msg.from === "cusdis") {
        switch (msg.event) {
          case "onload":
            {
              if (target.dataset.theme === "auto") {
                postMessage(
                  "setTheme",
                  darkModeQuery.matches ? "dark" : "light"
                );
              }
            }
            break;
          case "resize":
            {
              // Add extra 20px padding to prevent scrollbar popping due to strict exact height
              iframe.style.height = (parseInt(msg.data) + 20) + "px";
            }
            break;
        }
      }
    } catch (e2) {
    }
  };
  window.addEventListener("message", onMessage);
  function onChangeColorScheme(e) {
    const isDarkMode = e.matches;
    if (target.dataset.theme === "auto") {
      postMessage("setTheme", isDarkMode ? "dark" : "light");
    }
  }
  darkModeQuery.addEventListener("change", onChangeColorScheme);
  return () => {
    darkModeQuery.removeEventListener("change", onChangeColorScheme);
    window.removeEventListener("message", onMessage);
  };
}
function render(target) {
  if (target) {
    target.innerHTML = "";
    const iframe = createIframe(target);
    // Explicitly add scrolling=no to iframe tag
    iframe.scrolling = "no";
    target.appendChild(iframe);
  }
}
window.renderCusdis = render;
window.CUSDIS.renderTo = render;
window.CUSDIS.setTheme = function(theme) {
  postMessage("setTheme", theme);
};
function initial() {
  let target;
  if (window.cusdisElementId) {
    target = document.querySelector(`#${window.cusdisElementId}`);
  } else if (document.querySelector("#cusdis_thread")) {
    target = document.querySelector("#cusdis_thread");
  } else if (document.querySelector("#cusdis")) {
    console.warn(
      "id `cusdis` is deprecated. Please use `cusdis_thread` instead"
    );
    target = document.querySelector("#cusdis");
  }
  if (window.CUSDIS_PREVENT_INITIAL_RENDER === true)
    ;
  else {
    if (target) {
      render(target);
    }
  }
}
window.CUSDIS.initial = initial;
initial();
