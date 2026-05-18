import ScrollReveal, { StaggerReveal } from "./ScrollReveal";

const categories = [
  {
    title: "Research & Theses",
    description: "Comprehensive final year projects and MPhil-level research documentation.",
    items: [
      { title: "MPhil Research: Image Based Advertising", file: "Image Based Advertising Mphill Research.docx", type: "DOCX" },
      { title: "Final Year Thesis", file: "Thesis.docx", type: "DOCX" },
      { title: "General Research Project", file: "Research project Final.docx", type: "DOCX" }
    ]
  },
  {
    title: "Cybersecurity & Networking",
    description: "Detailed security analysis, attack simulations, and network monitoring.",
    items: [
      { title: "Cyber Operations: Attack Simulation", file: "Cyber Operations Report - Attack Simulation.docx", type: "DOCX" },
      { title: "Network Monitoring Final Report", file: "Final Report - Network Monitoring Project.docx", type: "DOCX" }
    ]
  },
  {
    title: "Data Science & Machine Learning",
    description: "Real-world dataset analysis, algorithms, and API integrations.",
    items: [
      { title: "Classification: Actual vs Fake Job Postings", file: "Actual vs Fake Job Posting - Final.docx", type: "DOCX" },
      { title: "Machine Learning API Documentation", file: "Machine Learning API Sample.pdf", type: "PDF" },
      { title: "Visual Programming Assignment", file: "AlgorithmVisualizer/CSCI_22042___Visual_Programming__2023_2024____Individual_Assignment_Handout.pdf", type: "PDF" }
    ]
  },
  {
    title: "Software Engineering & IT",
    description: "Database architectures, methodologies, and practical lab implementations.",
    items: [
      { title: "NoSQL & MongoDB Lab Implementation", file: "SE2020 - Lab Sheet 09 - NoSQL and Mongo DB.pdf", type: "PDF" },
      { title: "Web & Mobile Technologies: Lab 1", file: "WMT_Lab_1.pdf", type: "PDF" },
      { title: "Web & Mobile Technologies: Lab 3", file: "WMT_Lab_3.pdf", type: "PDF" }
    ]
  },
  {
    title: "Project Management & Strategy",
    description: "Stakeholder management, risk analysis, and business reports.",
    items: [
      { title: "Risk Analysis & Stakeholder Management", file: "Assessment 2 - Risk Analysis and Stakeholder Management Plan (1).docx", type: "DOCX" },
      { title: "Tesla Business/Strategy Report", file: "Tesle.docx", type: "DOCX" },
      { title: "Dish Final Analysis Report", file: "Dish Final Report.docx", type: "DOCX" },
      { title: "Misc Report 01", file: "01.docx", type: "DOCX" },
      { title: "HP Domain Report", file: "HP_D_1_Final.docx", type: "DOCX" }
    ]
  }
];

export default function Samples() {
  return (
    <section id="samples" className="relative border-t border-navy/10 py-24 lg:py-32 bg-cream">
      {/* Decorative background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1B3A5C 1px, transparent 1px), linear-gradient(to bottom, #1B3A5C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal variant="up">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display italic text-gold text-xl">✱ 005</span>
            <h2 className="font-display text-4xl lg:text-6xl text-navy tracking-tightest leading-[1]">
              Previous <em className="italic text-gold/90">Work</em>
            </h2>
          </div>
          <p className="text-navy/70 leading-relaxed max-w-xl mb-16 lg:mb-24 text-[17px]">
            We let the quality of our work speak for itself. Browse through anonymized past projects, from thesis documentation to network architectures and machine learning analyses.
          </p>
        </ScrollReveal>

        <div className="space-y-20 lg:space-y-28">
          {categories.map((cat, i) => (
            <div key={cat.title} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <ScrollReveal variant="left" delay={i * 100} className="lg:col-span-4 lg:sticky lg:top-32">
                <h3 className="font-display text-2xl lg:text-3xl text-navy tracking-tight mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-navy/65 leading-relaxed max-w-sm">
                  {cat.description}
                </p>
              </ScrollReveal>
              
              <div className="lg:col-span-8">
                <StaggerReveal stagger={80} variant="up" className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  {cat.items.map((item) => (
                    <a
                      key={item.file}
                      href={`/samples/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 lg:p-8 rounded-2xl bg-cream-paper border border-navy/10 hover:border-gold/40 hover:bg-gold/5 transition duration-300 relative overflow-hidden"
                    >
                      {/* Document icon */}
                      <div className="h-10 w-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy/60 mb-5 group-hover:scale-110 group-hover:bg-gold/15 group-hover:text-gold group-hover:border-gold/30 transition duration-300">
                        {item.type === "PDF" ? (
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M9 15v-4" />
                            <path d="M12 15v-4" />
                            <path d="M15 15v-4" />
                          </svg>
                        )}
                      </div>

                      <h4 className="font-display text-lg text-navy leading-snug mb-2 group-hover:text-gold-warm transition">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-navy/40 font-medium group-hover:text-gold-warm/70">
                        <span>{item.type} Document</span>
                        <span>&rarr;</span>
                      </div>
                    </a>
                  ))}
                </StaggerReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
