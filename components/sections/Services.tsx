import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 scroll-mt-24">
      <p className="font-body text- font-bold tracking-[0.24em] uppercase text-[#D9A24B] mb-4">
        Our Specialist Services
      </p>

      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <h2 className="font-heading text- sm:text- lg:text- font-bold tracking-[-0.03em] leading-[0.92] text-[#0B1B33] max-w-">
          Comprehensive orthopaedic care, without compromise.
        </h2>
        <p className="font-body text- leading-[1.6] text-[#0B1B33]/60 max-w-">
          Advanced, minimally invasive techniques for both adults and children.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14 [perspective:1200px]">
        {services.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="group relative bg-white rounded- p-8 lg:p-9 border border-black/[0.06] transition-all duration-500
            hover:border-black/10 hover:-translate-y-3 hover:shadow-[0_30px_60px_-18px_rgba(11,27,51,0.22),0_10px_24px_-10px_rgba(11,27,51,0.12)]
            [transform-style:preserve-3d] hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateY(-12px)]
            overflow-hidden"
          >
            {/* shine sweep */}
            <div className="pointer-events-none absolute -inset- opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white via-transparent to-[#D9A24B]/15" />

            {/* top highlight */}
            <div className="absolute top-0 inset-x-0 h- bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* BIGGER ICON - 3D */}
            <div className="relative w- h- rounded- bg-[#0B1B33] text-white flex items-center justify-center mb-7 shadow-[0_12px_24px_-8px_rgba(11,27,51,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] group-hover:shadow-[0_18px_32px_-10px_rgba(11,27,51,0.55)] group-hover:scale-[1.06] group-hover:[transform:translateZ(24px)] transition-all duration-500">
              <div className="absolute inset-0 rounded- bg-gradient-to-b from-white/15 to-transparent" />
              <Icon className="relative w-8 h-8 stroke-[1.75]" />
            </div>

            <h3 className="relative font-heading font-bold text- tracking-[-0.02em] text-[#0B1B33] mb-3 leading-[1.15] group-hover:[transform:translateZ(18px)] transition-transform duration-500">
              {title}
            </h3>
            <p className="relative font-body text- leading-[1.65] text-[#0B1B33]/60 mb-8 group-hover:text-[#0B1B33]/75 group-hover:[transform:translateZ(12px)] transition-all duration-500">
              {description}
            </p>

            <a href="#contact" className="relative inline-flex w-11 h-11 items-center justify-center rounded-full bg-[#F7F5F1] border border-black/10 text-[#0B1B33] group-hover:bg-[#D9A24B] group-hover:border-[#D9A24B] group-hover:text-white group-hover:rotate-[-12deg] group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_18px_-6px_rgba(217,162,75,0.6)]">
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button href="#services" variant="dark" className="rounded-full px-9 h- text-[15.5px] font-semibold shadow-[0_12px_24px_-12px_rgba(11,27,51,0.4)] hover:shadow-[0_18px_32px_-12px_rgba(11,27,51,0.5)] hover:-translate-y-0.5 transition-all">
          View All Services
        </Button>
      </div>
    </section>
  );
}