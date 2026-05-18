import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import VoicesCarousel from "./VoicesCarousel";

export default async function Voices() {
  const staticVoices = [
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

  let displayVoices = staticVoices;

  try {
    const res = await fetch(
      "https://cusdis.com/api/open/comments?appId=bdb02ed7-a892-49d2-97a3-a634bc0cdaff&pageId=edu-guide-home",
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const json = await res.json();
      const comments = json.data?.data || [];
      if (comments.length > 0) {
        displayVoices = comments.map((c: any) => {
          let name = c.by_nickname || "Anonymous";
          let role = "Recent Client";
          let school = "Sri Lanka";

          if (name.includes('|')) {
             const parts = name.split('|').map((s: string) => s.trim());
             name = parts[0];
             if (parts[1]) role = parts[1];
             if (parts[2]) school = parts[2];
          } else if (name.includes('-')) {
             const parts = name.split('-').map((s: string) => s.trim());
             name = parts[0];
             if (parts[1]) role = parts[1];
             if (parts[2]) school = parts[2];
          }

          return {
            quote: c.parsedContent || c.content,
            name,
            role,
            school,
          };
        });
        
        if (displayVoices.length < 3) {
          displayVoices = [
            ...displayVoices,
            ...staticVoices.slice(displayVoices.length, 3)
          ];
        }
      }
    }
  } catch (err) {
    console.error("Failed to fetch reviews", err);
  }

  return (
    <section
      id="voices"
      className="relative border-t border-navy/10 bg-cream-deep/40 py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-10 right-10 font-display italic text-[10rem] lg:text-[14rem] text-gold/10 select-none leading-none gentle-float"
      >
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal variant="up">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div className="flex items-baseline gap-4">
              <span className="font-display italic text-gold text-xl">✱ 005</span>
              <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
                Student{" "}
                <em className="italic text-gold/90">voices</em>
              </h2>
            </div>
            <p className="text-sm text-navy/55 max-w-xs leading-relaxed">
              Real feedback from recent students.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={200}>
          <VoicesCarousel voices={displayVoices} />
        </ScrollReveal>

        <ScrollReveal variant="up" delay={400}>
          <div className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/12 border border-navy/12 rounded-3xl overflow-hidden shadow-sm">
            {[
              { n: "73", l: "Projects shipped" },
              { n: "11", l: "Institutions" },
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
        </ScrollReveal>
      </div>
    </section>
  );
}
