import Image from "next/image";
import { hospitals, bookingLinks } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapPin, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HospitalsPage() {
  return (
    <main className="bg-[#F7F5F1]">
      <section className="bg-[#0B1B33] py-16"><div className="max-w-7xl mx-auto px-5 lg:px-10"><SectionLabel light>Practising Hospitals</SectionLabel><h1 className="font-serif text- sm:text- font-bold text-white mt-2 leading-[0.95]">Where We See Patients</h1></div></section>
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-12 grid md:grid-cols-2 gap-8">
        {hospitals.map(h=>(
          <div key={h.slug} className="bg-white rounded- overflow-hidden border border-black/5 shadow-sm">
            <div className="relative w-full h- bg-[#12223f] overflow-hidden">
              <div className="relative w-full h-full">
                <Image src={h.image} alt={h.name} fill sizes="600px" className="object-cover" />
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-serif text- font-bold text-[#0B1B33]">{h.name}</h3>
              <div className="mt-3 flex gap-2 text-[13.5px] text-[#0B1B33]/70"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><div>{h.address.map(l=><p key={l}>{l}</p>)}</div></div>
              <div className="mt-4 flex gap-3">
                <Button href={bookingLinks.tel.replace('tel:','tel:'+h.telLink)} variant="dark" size="sm" className="gap-1.5"><Phone className="w-4 h-4" />{h.tel}</Button>
                <a href={h.mapsUrl} target="_blank" className="inline-flex h-9 px-4 rounded-full border border-black/10 items-center gap-1.5 text- font-semibold hover:bg-[#F7F5F1]"><Navigation className="w-4 h-4" />Directions</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}