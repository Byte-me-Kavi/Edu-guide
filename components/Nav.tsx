import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 backdrop-blur-md bg-cream/70 supports-[backdrop-filter]:bg-cream/55">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3.5 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="EduGuide"
            width={34}
            height={34}
            className="rounded-sm transition-transform group-hover:-rotate-3"
            priority
          />
          <span className="font-display text-xl tracking-tight">
            <span className="text-navy">Edu</span>
            <span className="text-gold">Guide</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13px] text-navy">
          <a href="#services" className="hover:text-navy transition">
            Services
          </a>
          <a href="#process" className="hover:text-navy transition">
            Process
          </a>
          <a href="#domains" className="hover:text-navy transition">
            Domains
          </a>
          <a href="#samples" className="hover:text-navy transition">
            Samples
          </a>
          <a href="#voices" className="hover:text-navy transition">
            Reviews
          </a>
          <a href="#faq" className="hover:text-navy transition">
            FAQ
          </a>
        </nav>

        <a
          href="https://wa.me/94789910287"
          className="group inline-flex items-center gap-2 rounded-full bg-navy px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-sm text-cream hover:bg-navy-deep transition"
        >
          Send Assignment
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}
