import { notFound } from "next/navigation";
import { services, bookingLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.href.split("/").pop()! }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.href.endsWith(params.slug));
  if (!service) return notFound();

  return (
    <main className="bg-white">
      <section className="bg-[#0B1B33] py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Link href="/services" className="text-white/60 hover:text-white text- inline-flex items-center gap-2 mb-6"><ArrowLeft className="w-4 h-4" />All Services</Link>
          <div className="flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#D9A24B]/15 grid place-items-center shrink-0"><service.icon className="w-7 h-7 text-[#D9A24B]" /></div>
            <div><h1 className="font-serif text- sm:text- font-bold text-white leading-[0.95]">{service.title}</h1><p className="text-white/65 mt-4 max-w-2xl leading-[1.7]">{service.description}</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        <div className="prose prose-slate max-w-none">
          <h3 className="font-semibold text-[#0B1B33] text-">What we treat</h3>
          <ul className="mt-4 space-y-3">
            {["Comprehensive clinical assessment","On-site X-ray & referral for MRI/CT","Personalised non-surgical & surgical plan","Minimally invasive techniques where possible","Post-op rehab & follow-up"].map(i=>(
              <li key={i} className="flex gap-2.5 text-[14.5px] text-[#0B1B33]/75"><CheckCircle2 className="w-5 h-5 text-[#D9A24B] shrink-0" />{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#F7F5F1] rounded- p-7 border border-black/5 h-fit">
          <h4 className="font-semibold text-[#0B1B33]">Book for {service.title}</h4>
          <p className="text-[13.5px] text-[#0B1B33]/65 mt-2 leading-[1.6]">Our team will confirm within 2 hours during working hours.</p>
          <Button href={bookingLinks.primary} className="w-full mt-6 h-12">Book Now</Button>
          <a href={bookingLinks.tel} className="w-full mt-3 h-12 rounded-full border border-black/10 grid place-items-center font-semibold text- hover:bg-white">Call Clinic</a>
        </div>
      </section>
    </main>
  );
}