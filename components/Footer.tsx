import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 flex items-start gap-4">
            <Image
              src="/logo.png"
              alt="EduGuide"
              width={56}
              height={56}
              className="rounded-sm shrink-0"
            />
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
          </div>

          <div className="md:col-span-3 text-sm">
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
          </div>

          <div className="md:col-span-4 text-sm">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cream/45 mb-3">
              Talk to us
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@eduguide.io"
                  className="hover:text-gold transition"
                >
                  hello@eduguide.io
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94770000000"
                  className="hover:text-gold transition"
                >
                  WhatsApp — +94 77 000 0000
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/eduguide"
                  className="hover:text-gold transition"
                >
                  Telegram — @eduguide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-cream/45">
          <p>
            © {new Date().getFullYear()} EduGuide. Student work, taken seriously.
          </p>
          <p className="flex items-center gap-2">
            <span className="text-gold">✱</span> Issue Nº&nbsp;47 — set in Fraunces
            &amp; Instrument Sans
          </p>
        </div>
      </div>
    </footer>
  );
}
