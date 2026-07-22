import Link from "next/link";
import { Phone, Mail, MapPin, Clock,   ArrowUpRight } from "lucide-react";

const hospitals = [
  { name: "Emalahleni Private Hospital", suite: "Suite 201", address: "39 Mandela Street, Emalahleni, 1035", city: "Emalahleni" },
  { name: "Life Cosmos Hospital", address: "Cnr OR Tambo & Mandela Ave, Witbank", city: "Witbank" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr Mhlongo" },
  { href: "/services", label: "Services" },
  { href: "/#hospitals", label: "Hospitals" },
  { href: "/book", label: "Book Consultation" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1B33] text-white relative overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w- h- bg-[#D9A24B]/10 blur- rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1.1fr_1.2fr] gap-10 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-xl bg-white grid place-items-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-serif font-black text-[#0B1B33] text- leading-none">N</span>
              </div>
              <div className="leading-tight">
                <p className="font-bold text- tracking-tight">Dr Nkosinathi Mhlongo</p>
                <p className="text- tracking-[0.18em] text-white/50 uppercase font-bold">Orthopaedic Surgeon • MP 0691410</p>
              </div>
            </Link>
            <p className="text-white/60 text-[13.5px] leading-[1.75] max-w- mb-6">
              Specialist care in adult & paediatric orthopaedic trauma, arthroplasty and reconstruction. Restoring mobility, dignity and quality of life since 2017.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#D9A24B] tracking-[0.18em] text- font-bold mb-5 uppercase">Quick Links</p>
            <ul className="space-y-3 text-[13.5px] text-white/70">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white hover:translate-x-0.5 inline-flex transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitals - FIXED LIST */}
          <div>
            <p className="text-[#D9A24B] tracking-[0.18em] text- font-bold mb-5 uppercase">Practising Hospitals</p>
            <ul className="space-y-4">
              {hospitals.map(h => (
                <li key={h.name} className="flex gap-2.5 text- leading-[1.5] group">
                  <MapPin className="w-4 h-4 text-[#D9A24B] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    <span className="text-white font-semibold block leading-tight">{h.name}</span>
                    {h.suite && <span className="text-white/40 text-">{h.suite} • </span>}
                    <span className="text-white/50 text-">{h.address}</span>
                  </span>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/#hospitals" className="inline-flex items-center gap-1 text- font-semibold text-[#D9A24B] hover:text-[#E8B86A] transition-colors">
                  View on Map <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#D9A24B] tracking-[0.18em] text- font-bold mb-5 uppercase">Get In Touch</p>
            <ul className="space-y-3.5 text-[13.5px]">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center shrink-0"><Phone className="w-3.5 h-3.5 text-[#D9A24B]" /></div>
                <div className="leading-tight">
                  <a href="tel:+27136553057" className="text-white font-semibold hover:text-[#D9A24B] transition-colors block">013 655 3057/8</a>
                  <span className="text-white/40 text-">Reception • Suite 201</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center shrink-0"><Mail className="w-3.5 h-3.5 text-[#D9A24B]" /></div>
                <div className="leading-tight">
                  <a href="mailto:info@drmhlongo.co.za" className="text-white/80 hover:text-white transition-colors block">info@drmhlongo.co.za</a>
                  <span className="text-white/40 text-">Email us anytime</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center shrink-0"><Clock className="w-3.5 h-3.5 text-[#D9A24B]" /></div>
                <span className="text-white/60 leading-[1.5] text-[12.5px]">Mon - Fri: 08:00 - 17:00<br />Sat: By appointment • Sun: Closed</span>
              </li>
            </ul>
            <Link href="/book" className="mt-6 inline-flex h-11 px-6 items-center justify-center gap-2 rounded-full bg-[#D9A24B] text-[#0B1B33] text- font-bold hover:bg-[#E8B86A] transition-colors shadow-[0_8px_20px_rgba(217,162,75,0.25)] w-full sm:w-auto">
              Book Appointment <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text- text-white/40">
          <p>© {new Date().getFullYear()} Dr Nkosinathi D. Mhlongo Inc. • Practice No. 0691410 • All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/popia" className="hover:text-white/70 transition-colors">POPIA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}