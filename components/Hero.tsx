import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Lighthouse beam */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[700px] w-[1100px] rotate-[18deg] bg-gradient-to-tr from-gold/25 via-gold/8 to-transparent blur-3xl beam-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-[-10%] h-[400px] w-[600px] -rotate-[8deg] bg-gradient-to-br from-gold/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-14 lg:pt-24 pb-20 lg:pb-28">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 text-sm text-navy/60 mb-10 rise"
          style={{ animationDelay: "60ms" }}
        >
          <span className="text-gold text-lg leading-none">✱</span>
          <span className="uppercase tracking-[0.22em] text-[11px]">
            A small studio for student work
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-navy/20" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.22em] text-navy/40">
            Est. 2021 — Issue Nº&nbsp;47
          </span>
        </div>

        {/* Headline */}
        <h1
          className="rise font-display font-light text-[3rem] sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.92] tracking-tightest text-navy max-w-[18ch]"
          style={{ animationDelay: "180ms" }}
        >
          Find your way{" "}
          <span className="relative inline-block">
            <span className="relative">through</span>
          </span>{" "}
          the fog of{" "}
          <em className="italic font-display text-gold relative whitespace-nowrap">
            coursework.
            <svg
              aria-hidden
              viewBox="0 0 320 20"
              preserveAspectRatio="none"
              className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-3 lg:h-4"
            >
              <path
                d="M5 12 C 60 4, 140 16, 220 10 S 315 14, 315 7"
                stroke="#E8A317"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </em>
        </h1>

        {/* Subhead + CTAs */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <p
            className="lg:col-span-7 text-lg lg:text-xl text-navy/80 leading-relaxed max-w-2xl rise"
            style={{ animationDelay: "320ms" }}
          >
            EduGuide is a small team of senior students and recent graduates helping you
            ship assignments, projects, and final-year work across the entire IT domain
            — with <span className="ink-underline">live walk-throughs</span> when you
            actually want to understand it.
          </p>

          <div
            className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5 rise"
            style={{ animationDelay: "440ms" }}
          >
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-cream hover:bg-navy-deep transition shadow-[0_8px_30px_-12px_rgba(18,40,66,0.5)]"
              >
                Send your brief
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3.5 text-navy hover:border-navy hover:bg-navy/5 transition"
              >
                How it works ↓
              </a>
            </div>
            <p className="text-[13px] text-navy/55 max-w-[22rem] lg:text-right leading-relaxed">
              Most students reach out the week before a deadline. We&rsquo;d rather hear
              from you a fortnight before — but we&rsquo;ll work with what you have.
            </p>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="mt-20 lg:mt-24 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center pt-10 border-t border-navy/15 fade"
          style={{ animationDelay: "700ms" }}
        >
          <div className="lg:col-span-3 flex items-center gap-4">
            <div className="relative">
              <Image
                src="/logo.png"
                alt=""
                width={68}
                height={68}
                className="rounded-sm"
              />
              <span
                aria-hidden
                className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-gold animate-pulse"
              />
            </div>
            <div className="font-display text-sm text-navy/75 leading-tight">
              <div className="italic">Quietly guiding</div>
              <div>students since 2021</div>
            </div>
          </div>
          <p className="lg:col-span-9 text-sm text-navy/65 leading-relaxed lg:border-l lg:border-navy/15 lg:pl-8">
            Trusted by students at{" "}
            <span className="text-navy font-medium">IIT</span>,{" "}
            <span className="text-navy font-medium">SLIIT</span>,{" "}
            <span className="text-navy font-medium">NSBM</span>,{" "}
            <span className="text-navy font-medium">NIBM</span>,{" "}
            <span className="text-navy font-medium">APIIT</span>, and twenty-six other
            institutions across South Asia. We don&rsquo;t take every brief — but if we
            take yours, we finish it.
          </p>
        </div>
      </div>
    </section>
  );
}
