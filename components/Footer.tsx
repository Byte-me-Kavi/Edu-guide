import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70 border-t border-cream/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 flex items-start gap-4">
            <ScrollReveal variant="fade">
              <Image
                src="/logo.png"
                alt="EduGuide"
                width={56}
                height={56}
                className="rounded-sm shrink-0"
              />
            </ScrollReveal>
            <ScrollReveal variant="up" delay={100}>
              <div>
                <div className="font-display text-2xl tracking-tight">
                  <span className="text-cream">Edu</span>
                  <span className="text-gold">Guide</span>
                </div>
                <p className="mt-3 text-sm text-cream/55 max-w-sm leading-relaxed">
                  A small studio for student work. Made with steady hands and warm
                  coffee, somewhere between Colombo and Bangalore.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-3 text-sm">
            <ScrollReveal variant="up" delay={200}>
              <div className="text-[11px] uppercase tracking-[0.2em] text-cream/45 mb-3">
                Navigate
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="hover:text-gold transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-gold transition">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#domains" className="hover:text-gold transition">
                    Domains
                  </a>
                </li>
                <li>
                  <a href="#voices" className="hover:text-gold transition">
                    Student voices
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gold transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <div className="md:col-span-4 text-sm">
            <ScrollReveal variant="up" delay={300}>
              <div className="text-[11px] uppercase tracking-[0.2em] text-cream/45 mb-3">
                Talk to us
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:kaveeshatmdss@gmail.com"
                    className="hover:text-gold transition"
                  >
                    kaveeshatmdss@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hasindubandara759@gmail.com"
                    className="hover:text-gold transition"
                  >
                    hasindubandara759@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/94789910287"
                    className="hover:text-gold transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp — 078 991 0287
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal variant="fade" delay={500}>
          <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-cream/45">
            <p>
              © {new Date().getFullYear()} EduGuide. Student work, taken seriously.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
