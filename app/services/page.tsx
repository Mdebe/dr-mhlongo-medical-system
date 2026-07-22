import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/button";
import { services, bookingLinks } from "@/lib/data";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F5F1]">
      <section className="bg-[#0B1B33] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <SectionLabel light withDot>Specialist Services</SectionLabel>
          <h1 className="font-serif text- sm:text- font-bold leading-[0.95] text-white mt-3 max-w-3xl">Expert Orthopaedic Care, Tailored to You</h1>
          <p className="text-white/60 text-[15.5px] mt-5 max-w-xl leading-[1.7]">From joint replacement to complex trauma and reconstruction, Dr Mhlongo provides evidence-based treatment with compassion.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group bg-white rounded- border border-black/[0.06] p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F7F5F1] border border-black/5 grid place-items-center mb-5 group-hover:bg-[#0B1B33] transition-colors"><s.icon className="w-5 h-5 text-[#0B1B33] group-hover:text-white" /></div>
              <h3 className="font-semibold text-[#0B1B33] text-">{s.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-[#0B1B33]/65 mt-2.5 line-clamp-3">{s.description}</p>
              <span className="inline-flex items-center gap-1.5 text- font-semibold text-[#D9A24B] mt-5">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#0B1B33] rounded- p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div><h3 className="text-white font-serif text- font-bold">Not sure which service you need?</h3><p className="text-white/60 text- mt-1">Book a consultation and we will guide you.</p></div>
          <Button href={bookingLinks.primary} variant="primary" size="lg" className="w-full lg:w-auto"><CalendarCheck className="w-5 h-5" />Book Appointment</Button>
        </div>
      </section>
    </main>
  );
}