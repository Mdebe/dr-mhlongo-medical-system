import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <p className="font-body text- font-bold tracking-superwide uppercase text-[#D9A24B] mb-4">
        Our Specialist Services
      </p>

      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <h2 className="font-heading text- sm:text- font-bold tracking-[-0.03em] leading-[0.9] text-[#0B1B33] max-w-">
          Comprehensive orthopaedic care, without compromise.
        </h2>
        <p className="font-body text- leading-[1.6] text-[#0B1B33]/60 max-w-">
          Advanced, minimally invasive techniques for both adults and children.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="group bg-white rounded- p-8 border border-black/[0.06] hover:border-black/10 hover:shadow-[0_20px_40px_-16px_rgba(11,27,51,0.12)] hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="w- h- rounded-full bg-[#0B1B33] text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Icon className="w- h-" />
            </div>
            <h3 className="font-heading font-semibold text- tracking-[-0.02em] text-[#0B1B33] mb-2.5">
              {title}
            </h3>
            <p className="font-body text-[14.5px] leading-[1.65] text-[#0B1B33]/60 mb-7">
              {description}
            </p>
            <a href="#contact" className="inline-flex w-9 h-9 items-center justify-center rounded-full border border-black/10 text-[#0B1B33] group-hover:bg-[#D9A24B] group-hover:border-[#D9A24B] group-hover:text-[#0B1B33] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button href="#services" variant="dark" className="rounded-full px-8 h-12 font-body font-semibold">
          View All Services
        </Button>
      </div>
    </section>
  );
}