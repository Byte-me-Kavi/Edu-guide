import ScrollReveal from "./ScrollReveal";

const services = [
  {
    num: "01",
    title: "Assignments",
    body: "From a single problem set to a forty-page report — done well, on time, and written like a real student would.",
    tag: "Most common",
  },
  {
    num: "02",
    title: "Coding projects",
    body: "Working code, clean structure, and comments that actually help you read it back a month later.",
    tag: null,
  },
  {
    num: "03",
    title: "Web development",
    body: "Full-stack builds from landing pages to dashboards — React, Next, Vue, Node, Django, Spring. Your stack, our hands.",
    tag: null,
  },
  {
    num: "04",
    title: "Group projects",
    body: "One coordinated body of work for your whole team. We help you split it cleanly so nobody carries the load alone.",
    tag: null,
  },
  {
    num: "05",
    title: "Live walk-throughs",
    body: "A one-to-one session that turns the brief into your own understanding. Bring your questions; bring your viva nerves.",
    tag: "Free with every project",
  },
  {
    num: "06",
    title: "Code reviews",
    body: "A second pair of eyes before submission. We&rsquo;ll mark up what to fix, what to keep, and why it matters.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-navy/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal variant="up">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div className="flex items-baseline gap-4">
              <span className="font-display italic text-gold text-xl">✱ 001</span>
              <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
                What we{" "}
                <em className="italic text-gold/90">help</em> with
              </h2>
            </div>
            <p className="text-sm text-navy/55 max-w-xs leading-relaxed">
              Six things we do well. Most students need two or three of these at once
              — we&rsquo;ll bundle them.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-3xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(18,40,66,0.18)]">
          {services.map((s, i) => {
            const isNavy = i % 2 !== 0;
            return (
              <ScrollReveal key={s.num} variant="scale" delay={i * 100}>
                <article
                  className={`group relative transition p-8 lg:p-10 flex flex-col gap-5 min-h-[280px] ${
                    isNavy
                      ? "bg-navy hover:bg-navy-deep"
                      : "bg-cream-paper/85 hover:bg-cream-paper"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display italic text-gold/90 text-lg">
                      — {s.num}
                    </span>
                    {s.tag && (
                      <span
                        className={`text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full ${
                          isNavy ? "bg-cream text-navy" : "bg-navy text-cream"
                        }`}
                      >
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-display text-3xl tracking-tight leading-[1.05] ${
                      isNavy ? "text-cream" : "text-navy"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-[15px] ${
                      isNavy ? "text-cream/70" : "text-navy/70"
                    }`}
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                  <div
                    className={`mt-auto pt-3 inline-flex items-center gap-2 text-sm transition ${
                      isNavy
                        ? "text-cream/55 group-hover:text-gold"
                        : "text-navy/55 group-hover:text-gold"
                    }`}
                  >
                    <span>Talk to us about this</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  {/* corner star */}
                  <span
                    aria-hidden
                    className="absolute bottom-4 right-5 text-gold/0 group-hover:text-gold/30 transition text-sm"
                  >
                    ✱
                  </span>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
