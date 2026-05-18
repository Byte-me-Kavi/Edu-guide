const faqs = [
  {
    q: "Will the work pass plagiarism checks?",
    a: "Everything we deliver is written from scratch for your brief. We run it through Turnitin-equivalent tools on our side before sending it over. If your institution uses a specific tool, tell us — we&rsquo;ll match its threshold.",
  },
  {
    q: "How fast can you turn things around?",
    a: "A small assignment can be done in 24–48 hours. A full project usually takes one to three weeks. We&rsquo;ll always tell you upfront what&rsquo;s realistic for your deadline before you commit.",
  },
  {
    q: "Do you do final-year projects and theses?",
    a: "Yes — they&rsquo;re a large part of what we do. We work alongside you from proposal through viva, including the report, the prototype, and the defence preparation.",
  },
  {
    q: "What if I just need help understanding, not the work done?",
    a: "Book a tutoring session instead. We charge by the hour, and we&rsquo;ll teach you what you need. No project, no deliverable — just clarity on the thing you&rsquo;re stuck on.",
  },
  {
    q: "How does pricing work?",
    a: "Per-project, quoted up front. No hidden hourly creep. We take a small deposit to start and the balance on delivery. Student rates only — we know you&rsquo;re not a corporate client.",
  },
  {
    q: "Can I message you next semester too?",
    a: "Please do. About half of our work comes from students who&rsquo;ve worked with us before. We remember you, and we remember your stack.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative border-t border-navy/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display italic text-gold text-xl">✱ 006</span>
            <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
              Questions,{" "}
              <em className="italic text-gold/90">asked honestly</em>
            </h2>
          </div>
          <p className="text-navy/70 leading-relaxed max-w-sm">
            If something isn&rsquo;t here, send us the question. We answer all
            messages within a day, usually within an hour during exam weeks.
          </p>

          {/* paper-ish marginalia */}
          <div className="mt-10 hidden lg:block">
            <div className="dotted-rule text-navy/30 mb-3" />
            <p className="font-display italic text-navy/55 text-sm leading-relaxed">
              &ldquo;The only foolish question is the one you didn&rsquo;t ask before
              the viva.&rdquo;
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-navy/40">
              — a tutor of ours, once
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 divide-y divide-navy/15 border-y border-navy/15">
          {faqs.map((f, i) => (
            <details key={i} className="group py-6 lg:py-7">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="font-display text-xl lg:text-2xl text-navy pr-6 leading-snug tracking-tight">
                  <span className="text-gold italic mr-2 font-display">Q.</span>
                  {f.q}
                </h3>
                <span className="text-gold text-3xl leading-none mt-0.5 transition-transform duration-300 group-open:rotate-45 select-none">
                  +
                </span>
              </summary>
              <p
                className="mt-4 pl-8 text-navy/75 leading-relaxed max-w-prose text-[15.5px]"
                dangerouslySetInnerHTML={{
                  __html: `<span class="font-display italic text-gold mr-1">A.</span> ${f.a}`,
                }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
