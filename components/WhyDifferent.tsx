const pillars = [
  {
    t: "Live sessions",
    d: "1-on-1 walkthroughs via Zoom or Meet so you understand every line of code.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="9" width="26" height="20" rx="2" />
        <path d="M30 16 L36 12 V26 L30 22Z" />
        <circle cx="12" cy="17" r="2" />
        <path d="M9 25 C 12 22, 16 22, 19 25" />
      </svg>
    ),
  },
  {
    t: "Group coordination",
    d: "We help your whole team split the work fairly and merge it cleanly.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="14" r="4" />
        <circle cx="28" cy="14" r="4" />
        <circle cx="20" cy="26" r="4" />
        <path d="M14 18 L18 23 M26 18 L22 23 M16 14 L24 14" />
      </svg>
    ),
  },
  {
    t: "Mentor, not vendor",
    d: "We stay in touch. We prep you for your viva and help you next semester too.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4 L24 14 L34 15 L26 22 L29 32 L20 27 L11 32 L14 22 L6 15 L16 14 Z" />
      </svg>
    ),
  },
];

export default function WhyDifferent() {
  return (
    <section className="relative border-t border-navy/10 py-24 lg:py-36 bg-navy text-cream overflow-hidden">
      {/* beam */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[-20%] h-[700px] w-[900px] rotate-[-12deg] bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-3xl beam-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-10%] h-[400px] w-[700px] rotate-[8deg] bg-gradient-to-tl from-gold/12 to-transparent blur-3xl"
      />
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5EDE0 1px, transparent 1px), linear-gradient(to bottom, #F5EDE0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-display italic text-gold text-xl">✱ 003</span>
          <span className="uppercase tracking-[0.22em] text-[11px] text-cream/60">
            What makes us different
          </span>
        </div>

        <p className="font-display font-light text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tightest max-w-5xl">
          We don&rsquo;t just do the work. We make sure you{" "}
          <em className="italic text-gold">understand</em> it.
        </p>

        <p className="mt-8 max-w-2xl text-cream/65 leading-relaxed">
          Three core promises for every project, from simple assignments to full thesis systems.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-cream/10 border border-cream/15 rounded-3xl overflow-hidden">
          {pillars.map((p, i) => {
            const isNavy = i % 2 !== 0; // index 1 is Navy, 0 and 2 are Cream
            return (
              <div
                key={p.t}
                className={`relative p-8 lg:p-10 transition group ${
                  isNavy ? "bg-navy hover:bg-navy-deep" : "bg-cream-paper hover:bg-cream"
                }`}
              >
                <div className={`${isNavy ? "text-gold" : "text-navy"} mb-5`}>{p.icon}</div>
                <h3 className={`font-display text-2xl lg:text-3xl mb-3 tracking-tight ${
                  isNavy ? "text-cream" : "text-navy"
                }`}>
                  {p.t}
                </h3>
                <p className={`leading-relaxed text-[15px] ${
                  isNavy ? "text-cream/70" : "text-navy/70"
                }`}>{p.d}</p>
                <span
                  aria-hidden
                  className={`absolute top-6 right-6 font-display italic text-sm ${
                    isNavy ? "text-gold/40" : "text-navy/40"
                  }`}
                >
                  — 0{i + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* fine print */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/55">
          <span className="flex items-center gap-2">
            <span className="text-gold">✱</span> No subscriptions
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✱</span> No bots, no templates
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✱</span> Quoted up front, every time
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✱</span> Real human, first reply
          </span>
        </div>
      </div>
    </section>
  );
}
