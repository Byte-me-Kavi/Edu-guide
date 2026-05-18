import ScrollReveal from "./ScrollReveal";

const domains = [
  "Web development",
  "Mobile apps",
  "Backend systems",
  "Database design",
  "Data Science",
  "Machine Learning",
  "AI & LLM projects",
  "DevOps & Cloud",
  "Cybersecurity",
  "UI / UX design",
  "Computer networks",
  "IoT & embedded",
  "Game development",
  "Computer graphics",
  "Operating systems",
  "Compiler theory",
  "Algorithms & DS",
  "Distributed systems",
];

export default function Domains() {
  return (
    <section
      id="domains"
      className="relative border-t border-navy/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-14">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal variant="up">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display italic text-gold text-xl">✱ 004</span>
                <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
                  Domains we{" "}
                  <em className="italic text-gold/90">cover</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={150}>
              <p className="text-navy/70 max-w-2xl leading-relaxed text-[17px]">
                Anything you&rsquo;d find under &ldquo;IT&rdquo; or &ldquo;Computing&rdquo;
                in your course handbook — and a few things you wouldn&rsquo;t. If your
                brief sits at the edge of these, ask us anyway.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:text-right text-navy/55 text-sm leading-relaxed">
            <ScrollReveal variant="fade" delay={300}>
              <p>
                <span className="font-display italic text-navy">A note —</span> if your
                course mandates a specific framework, that&rsquo;s the one we use. We
                don&rsquo;t push our favourites on you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <ScrollReveal variant="fade" delay={200}>
        <div className="relative overflow-hidden border-y border-navy/15 py-7 bg-cream-paper">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-paper to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-paper to-transparent z-10"
          />
          <div className="marquee-track flex gap-4 whitespace-nowrap w-max">
            {[...domains, ...domains].map((d, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-[14px] transition ${
                  i % 5 === 1
                    ? "bg-navy text-cream border-navy"
                    : i % 7 === 0
                    ? "bg-gold/15 text-navy border-gold/40 font-display italic"
                    : "text-navy border-navy/20 bg-cream/40"
                }`}
              >
                <span className={i % 5 === 1 ? "text-gold" : "text-gold"}>✱</span>
                <span>{d}</span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Notes */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid md:grid-cols-3 gap-10 text-navy/75 text-[15px] leading-relaxed">
        <ScrollReveal variant="up" delay={100}>
          <div>
            <h4 className="font-display italic text-navy text-xl mb-2">
              A note on tech.
            </h4>
            <p>
              We work in whatever stack your course mandates — React or Vue, Django or
              Spring, MySQL or Mongo. The brief is the brief.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={200}>
          <div>
            <h4 className="font-display italic text-navy text-xl mb-2">
              A note on theses.
            </h4>
            <p>
              Final-year and master&rsquo;s projects are most of what we do. Send your
              proposal early; we&rsquo;ll tell you honestly if it&rsquo;s scoped right.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={300}>
          <div>
            <h4 className="font-display italic text-navy text-xl mb-2">
              A note on viva.
            </h4>
            <p>
              Before every viva or defence, we run a free mock session. You&rsquo;ll
              know your project well enough to defend it on your own two feet.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
