import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

const serviceImages = {
  "Joint Replacements": "/images/services/joint.jpg",
  "Shoulder Conditions": "/images/services/shoulder.jpg",
  "Pain Management": "/images/services/pain.jpg",
  "Trauma": "/images/services/trauma.jpg",
  "Limb Deformity Correction": "/images/services/deformity.jpg",
  "Tumours and Sepsis": "/images/services/tumour.jpg",
  "Medico-Legal Services": "/images/services/medico-legal.jpg",
}

export function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-">
      <div className="mx-auto max-w- px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
        <div className="mb-10 sm:mb-14">
          <p className="text- font-bold uppercase tracking-[0.24em] text-[#D9A24B] mb-4">
            Our Specialist Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="font-heading text- sm:text- lg:text- font-bold leading-[0.95] tracking-[-0.03em] text-[#0B1B33] max-w- text-balance">
              Comprehensive orthopaedic care, without compromise.
            </h2>
            <p className="max-w- text-[14.5px] leading-[1.6] text-[#0B1B33]/60">
              MBChB (Natal) FC Ortho (SA) • Practice No. 0691410
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map(({ title, description, icon: Icon, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative flex min-h- sm:min-h- flex-col overflow-hidden rounded- border border-black/[0.06] bg-[#0B1B33] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-16px_rgba(11,27,51,0.35)]"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={serviceImages[title]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-[0.28] group-hover:opacity-[0.38] group-hover:scale-[1.06] transition-all duration- ease-out"
                />
                {/* Gradients for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/85 to-[#0B1B33]/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#D9A24B]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded- bg-white/10 backdrop-blur-md border border-white/15 text-white shadow-lg group-hover:bg-[#D9A24B] group-hover:border-[#D9A24B] group-hover:scale-105 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text- font-bold leading-[1.15] tracking-[-0.02em] text-white">
                  {title}
                </h3>
                <p className="mt-2.5 line-clamp-3 text- leading-[1.6] text-white/65 group-hover:text-white/80 transition-colors">
                  {description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="text- font-semibold tracking-wide text-white/80 group-hover:text-white">
                    Explore service
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B1B33] group-hover:bg-[#D9A24B] group-hover:text-white group-hover:rotate-[-12deg] transition-all duration-300 shadow-md">
                    <ArrowRight className="h- w-" />
                  </span>
                </div>
              </div>

              {/* Top gold line on hover */}
              <div className="absolute top-0 inset-x-0 h- bg-gradient-to-r from-transparent via-[#D9A24B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}

          {/* CTA Card - fills last grid slot nicely */}
          <div className="relative flex min-h- flex-col justify-center overflow-hidden rounded- bg-[#F7F5F1] border border-black/[0.06] p-8 sm:p-8">
            <div className="absolute -right-16 -top-16 h- w- rounded-full bg-[#D9A24B]/15 blur-" />
            <h3 className="relative text- font-bold leading-[1.2] text-[#0B1B33] text-balance">
              Need a consultation at Emalahleni Private Hospital?
            </h3>
            <p className="relative mt-3 text- leading-[1.6] text-[#0B1B33]/60">
              Second Floor, Suite 201 • 39 Mandela Street<br />
              Tel: 013 655 3057/8
            </p>
            <div className="relative mt-7 flex flex-col gap-3">
              <Link
                href="/#book"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0B1B33] px-6 text- font-semibold text-white hover:bg-black transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="tel:0136553057"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white border border-black/10 px-6 text- font-semibold text-[#0B1B33] hover:bg-[#0B1B33] hover:text-white hover:border-[#0B1B33] transition-colors"
              >
                Call Clinic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}