import Image from "next/image";
import { BadgeCheck, Users, MapPin, ArrowRight } from "lucide-react";
import { credentials, hospitals } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1.3fr_1fr] gap-10 scroll-mt-24">
      <div className="relative rounded-xl overflow-hidden min-h- bg-gray-200">
        <Image src="/images/about-doctor.png" alt="Dr Nkosinathi D. Mhlongo" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
      </div>
      <div>
        <SectionLabel>About The Surgeon</SectionLabel>
        <h2 className="font-serif text-3xl font-bold text-[#0B1B33] mb-4">Dr Nkosinathi D. Mhlongo</h2>
        <p className="text-[#0B1B33]/70 leading-relaxed mb-6">Dr Nkosinathi D. Mhlongo is a specialist Orthopaedic Surgeon with expertise in adult and paediatric orthopaedic trauma, arthroplasty, reconstruction surgery, and general orthopaedic care.</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {credentials.map(cred => (
            <span key={cred} className="flex items-center gap-2 text-xs font-semibold text-[#0B1B33] bg-[#F1EEE7] border border-black/5 px-4 py-2 rounded-full"><BadgeCheck className="w-4 h-4 text-[#D9A24B]" />{cred}</span>
          ))}
        </div>
        <ul className="space-y-2 mb-8 text-sm text-[#0B1B33]/80">
          <li className="flex gap-2"><span className="text-[#D9A24B]">✓</span> Fellow of the College of Medicine of South Africa</li>
          <li className="flex gap-2"><span className="text-[#D9A24B]">✓</span> Master of Medicine in Orthopaedic Surgery (2016)</li>
        </ul>
        <Button href="#about" variant="primary"><Users className="w-4 h-4" />Learn More About Dr Mhlongo</Button>
      </div>
      <div id="hospitals" className="bg-[#0B1B33] rounded-xl p-6 scroll-mt-24 self-start">
        <p className="text-[#D9A24B] tracking-[0.2em] text-xs font-semibold mb-5">PRACTISING HOSPITALS</p>
        <div className="space-y-6 mb-6">
          {hospitals.map(h => (
            <div key={h.name} className="flex gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white/10"><Image src={h.image} alt={h.name} fill sizes="56px" className="object-cover" /></div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{h.name}</p>
                <p className="text-white/60 text-xs leading-relaxed">{h.address.map(l => <span key={l} className="block">{l}</span>)}</p>
                <p className="text-[#D9A24B] text-xs font-semibold mt-1">Tel: {h.tel}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#hospitals" className="flex items-center justify-between border border-white/20 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-white/5 transition-colors"><span className="flex items-center gap-2"><MapPin className="w-4 h-4" />View All Locations</span><ArrowRight className="w-4 h-4" /></a>
      </div>
    </section>
  );
}