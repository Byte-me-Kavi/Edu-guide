const voices = [
  {
    quote:
      "I came in panicked the night before a database deadline. They didn&rsquo;t just hand back a finished file — they sat with me on a call for an hour, until I could walk a TA through the schema myself.",
    name: "Imali F.",
    role: "2nd year Software Engineering",
    school: "SLIIT",
  },
  {
    quote:
      "Our group of four was completely stuck on a MERN project. They helped us split the work, set up a clean repo, and reviewed each of our pieces before we merged. Best mark we&rsquo;ve had as a team.",
    name: "Tharindu S.",
    role: "Final year IT",
    school: "NSBM",
  },
  {
    quote:
      "Honest, fair, and they actually care if you understand the code. I&rsquo;ve come back three semesters in a row.",
    name: "Rashmi P.",
    role: "HND in Information Technology",
    school: "NIBM",
  },
];

export default function Voices() {
  return (
    <section
      id="voices"
      className="relative border-t border-navy/10 bg-cream-deep/40 py-24 lg:py-32 overflow-hidden"
    >
      {/* subtle ornament */}
      <div
        aria-hidden
        className="absolute -top-10 right-10 font-display italic text-[10rem] lg:text-[14rem] text-gold/10 select-none leading-none"
      >
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <div className="flex items-baseline gap-4">
            <span className="font-display italic text-gold text-xl">✱ 005</span>
            <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
              Student{" "}
              <em className="italic text-gold/90">voices</em>
            </h2>
          </div>
          <p className="text-sm text-navy/55 max-w-xs leading-relaxed">
            Names changed, schools real. Lightly edited for length and the usual
            late-night typos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {voices.map((v, i) => (
            <figure
              key={i}
              className={`relative bg-cream-paper border border-navy/15 rounded-3xl p-7 lg:p-9 shadow-[0_30px_60px_-30px_rgba(18,40,66,0.18)] ${
                i === 1 ? "md:translate-y-10" : ""
              } ${i === 2 ? "md:translate-y-3" : ""}`}
            >
              <span
                aria-hidden
                className="absolute -top-5 left-7 font-display text-8xl text-gold leading-none select-none"
              >
                &ldquo;
              </span>
              <blockquote
                className="font-display text-lg lg:text-xl text-navy leading-snug pt-4 tracking-tight"
                dangerouslySetInnerHTML={{ __html: v.quote }}
              />
              <figcaption className="mt-6 pt-5 border-t border-navy/15 flex items-baseline justify-between gap-3">
                <div>
                  <div className="font-display italic text-navy text-[15px]">
                    — {v.name}
                  </div>
                  <div className="text-xs text-navy/55 mt-0.5">{v.role}</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  {v.school}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* small stats strip */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/12 border border-navy/12 rounded-3xl overflow-hidden">
          {[
            { n: "640+", l: "Projects shipped" },
            { n: "31", l: "Institutions" },
            { n: "97%", l: "First-time pass rate" },
            { n: "4.9/5", l: "Avg. student rating" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-cream-paper p-7 lg:p-8 text-center flex flex-col items-center justify-center min-h-[140px]"
            >
              <div className="font-display text-4xl lg:text-5xl text-navy tracking-tight">
                {s.n}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-navy/55">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
