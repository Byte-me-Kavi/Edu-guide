import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-navy/10 bg-navy text-cream overflow-hidden py-24 lg:py-36"
    >
      {/* beams */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[700px] w-[1000px] rotate-[18deg] bg-gradient-to-tr from-gold/30 via-gold/12 to-transparent blur-3xl beam-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[500px] w-[800px] rotate-[-8deg] bg-gradient-to-br from-gold/15 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5EDE0 1px, transparent 1px), linear-gradient(to bottom, #F5EDE0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ScrollReveal variant="up">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display italic text-gold text-xl">✱ 007</span>
                <span className="uppercase tracking-[0.22em] text-[11px] text-cream/60">
                  Get in touch
                </span>
              </div>

              <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest">
                Send us the brief.
                <br />
                <em className="italic text-gold">
                  We&rsquo;ll read it
                  <br className="hidden sm:block" /> carefully.
                </em>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={200}>
              <p className="mt-8 text-cream/75 leading-relaxed max-w-xl text-[17px]">
                The first reply comes from a real person, usually within a few hours.
                Tell us the deadline, the course code, and anything you&rsquo;ve already
                tried. No commitment yet — we&rsquo;ll quote first.
              </p>
            </ScrollReveal>

            {/* hours */}
            <ScrollReveal variant="fade" delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/65">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  Online now
                </span>
                <span>Mon — Sun · 6am to 12pm</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 space-y-3 w-full">
            <ScrollReveal variant="left" delay={100}>
              <a
                href="https://wa.me/94789910287"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-cream/[0.06] border border-cream/15 hover:bg-cream/[0.1] hover:border-gold/40 transition p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-cream/55 mb-0.5">
                      WhatsApp
                    </div>
                    <div className="font-display text-lg lg:text-xl">
                      078 991 0287
                    </div>
                  </div>
                </div>
                <span className="text-gold text-2xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={200}>
              <a
                href="mailto:kaveeshatmdss@gmail.com"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-cream/[0.06] border border-cream/15 hover:bg-cream/[0.1] hover:border-gold/40 transition p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-cream/55 mb-0.5">
                      Email
                    </div>
                    <div className="font-display text-lg lg:text-xl">
                      kaveeshatmdss<wbr/>@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-gold text-2xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={300}>
              <a
                href="mailto:hasindubandara759@gmail.com"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-cream/[0.06] border border-cream/15 hover:bg-cream/[0.1] hover:border-gold/40 transition p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-cream/55 mb-0.5">
                      Email
                    </div>
                    <div className="font-display text-lg lg:text-xl">
                      hasindubandara759<wbr/>@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-gold text-2xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={500}>
              <div className="pt-4 text-xs text-cream/55 leading-relaxed">
                <span className="text-gold">✱</span> Prefer a form? We trust you to
                write a clear message more than we trust a form to extract one. But
                if you really want — drop an email and ask for the brief template.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
