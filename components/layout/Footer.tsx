import Link from "next/link";
import { Phone, Mail, MapPin, Clock, BookIcon,  } from "lucide-react";

const hospitals = [
  { name: "Mediclinic Highveld", city: "Trichardt" },
  { name: "Mediclinic Ermelo", city: "Ermelo" },
  { name: "Life Midmed Hospital", city: "Middelburg" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1B33] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white grid place-items-center shrink-0">
                <span className="font-serif font-bold text-[#0B1B33] text-">N</span>
              </div>
              <div className="leading-tight">
                <p className="font-bold text-">Dr Nkosinathi Mhlongo</p>
                <p className="text- tracking-[0.18em] text-white/50 uppercase font-semibold">Orthopaedic Surgeon</p>
              </div>
            </Link>
            <p className="text-white/60 text- leading-[1.7] max-w- mb-6">
              Specialist care in adult & paediatric orthopaedic trauma, arthroplasty and reconstruction. Restoring mobility, dignity and quality of life.
            </p>
            <div className="flex gap-2">
              <Link href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 grid place-items-center transition-colors">
                <BookIcon className="w-4 h-4" />
              </Link>
               
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#D9A24B] tracking-[0.18em] text- font-bold mb-5 uppercase">Quick Links</p>
            <ul className="space-y-3 text- text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Dr Mhlongo</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#hospitals" className="hover:text-white transition-colors">Hospitals</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Booking</Link></li>
            </ul>
          </div>

          {/* Hospitals */}
          <div>
            <p className="text-[#D9A24B] tracking-[0.18em] text- font-bold mb-5 uppercase">Practising Hospitals</p>
            <ul className="space-y-3">
              {hospitals.map(h => (
                <li key={h.name} className="flex gap-2.5 text-[13.5px] leading-[1.5]">
                  <MapPin className="w-4 h-4 text-[#D9A24B] mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">{h.name}</span><br /><span className="text-white/50">{h.city}</span></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#D9A24B] tracking-[0.18em] text- font-bold mb-5 uppercase">Get In Touch</p>
            <ul className="space-y-3.5 text-[13.5px]">
              <li className="flex gap-3"><Phone className="w-4 h-4 text-[#D9A24B] mt-0.5 shrink-0" /><a href="tel:+27136553057" className="text-white/80 hover:text-white">+27 13 655 3057</a></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-[#D9A24B] mt-0.5 shrink-0" /><a href="mailto:info@drmhlongo.co.za" className="text-white/80 hover:text-white">info@drmhlongo.co.za</a></li>
              <li className="flex gap-3"><Clock className="w-4 h-4 text-[#D9A24B] mt-0.5 shrink-0" /><span className="text-white/60 leading-[1.5]">Mon - Fri: 08:00 - 17:00<br />Sat: 08:00 - 13:00</span></li>
            </ul>
            <Link href="/#book" className="mt-6 inline-flex h-10 px-5 items-center justify-center rounded-full bg-[#D9A24B] text-[#0B1B33] text-[13.5px] font-bold hover:bg-[#E0AD5A] transition-colors">Book Appointment</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12.5px] text-white/40">
          <p>© {new Date().getFullYear()} Dr Nkosinathi D. Mhlongo. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link><Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}