const steps = [
  {
    n: "01",
    t: "Send the brief",
    d: "PDF, screenshot, or just a paragraph in a message. Whatever your lecturer gave you, we&rsquo;ll read it carefully.",
  },
  {
    n: "02",
    t: "We scope it together",
    d: "A short reply with what&rsquo;s realistic for your deadline, what it&rsquo;ll cost, and where we think the tricky parts are.",
  },
  {
    n: "03",
    t: "Build, with check-ins",
    d: "We don&rsquo;t disappear. Mid-way drafts, short screen recordings, and quick clarifying calls when the brief is fuzzy.",
  },
  {
    n: "04",
    t: "Walk-through, if you want one",
    d: "We sit on a call and go through the work line by line. By the end, you can defend it to anyone.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-navy/10 bg-cream-deep/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display italic text-gold text-xl">✱ 002</span>
              <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
                How it{" "}
                <em className="italic text-gold/90">works</em>
              </h2>
            </div>

            {/* small illustration: stacked lines like book spines */}
            <div className="hidden lg:block mt-10 space-y-1.5 max-w-[160px]">
              <div className="h-2 w-full bg-navy/60 rounded-sm" />
              <div className="h-2 w-[88%] bg-navy/40 rounded-sm" />
              <div className="h-2 w-[94%] bg-gold/80 rounded-sm" />
              <div className="h-2 w-[78%] bg-navy/30 rounded-sm" />
            </div>
          </div>

          <ol className="lg:col-span-8 relative">
            {/* connector line */}
            <span
              aria-hidden
              className="absolute left-7 lg:left-10 top-2 bottom-8 w-px bg-gradient-to-b from-gold/60 via-navy/15 to-transparent hidden sm:block"
            />
            {steps.map((s, i) => (
              <li key={s.n} className="relative flex gap-5 lg:gap-8 pb-10 last:pb-0">
                <div className="relative shrink-0 z-10">
                  <span className="flex items-center justify-center h-14 w-14 lg:h-20 lg:w-20 rounded-full bg-cream-paper border border-navy/15 font-display italic text-gold text-xl lg:text-3xl shadow-[0_8px_24px_-10px_rgba(232,163,23,0.5)]">
                    {s.n}
                  </span>
                </div>
                <div className="pt-2 lg:pt-3 flex-1 pb-6 border-b border-navy/10 last:border-b-0">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-display text-2xl lg:text-4xl text-navy tracking-tight leading-tight">
                      {s.t}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-navy/40">
                      step {i + 1}/4
                    </span>
                  </div>
                  <p
                    className="mt-3 text-navy/70 leading-relaxed max-w-xl text-[15px]"
                    dangerouslySetInnerHTML={{ __html: s.d }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
