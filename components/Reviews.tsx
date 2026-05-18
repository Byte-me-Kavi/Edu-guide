import Script from "next/script";

export default function Reviews() {
  return (
    <section id="reviews" className="relative border-t border-navy/10 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-baseline gap-4 justify-center">
            <span className="font-display italic text-gold text-xl">✱</span>
            <h2 className="font-display text-4xl lg:text-5xl text-navy tracking-tightest">
              Leave a <em className="italic text-gold/90">Review</em>
            </h2>
          </div>
          <p className="text-sm text-navy/70 bg-navy/5 px-5 py-2.5 rounded-full border border-navy/10 inline-flex items-center gap-2 mt-4">
            <span>Include your Role and Institute in the <strong>Nickname</strong> field (e.g. Kavi - 2nd Year - SLIIT)</span>
          </p>
        </div>
        
        <div className="bg-cream-paper p-6 md:p-10 rounded-3xl border border-navy/10 shadow-sm min-h-[350px] w-full">
          <style dangerouslySetInnerHTML={{ __html: `
            #cusdis_thread iframe {
              min-height: 350px !important;
            }
          `}} />
          <div 
            id="cusdis_thread"
            data-host="https://cusdis.com"
            data-app-id="bdb02ed7-a892-49d2-97a3-a634bc0cdaff"
            data-page-id="edu-guide-home"
            data-page-url="https://eduguidesl.com/"
            data-page-title="Edu Guide Sri Lanka"
          ></div>
          <Script src="/cusdis.js" strategy="lazyOnload" />
        </div>
      </div>
    </section>
  );
}
