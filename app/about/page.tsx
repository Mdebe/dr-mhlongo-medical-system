import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, GraduationCap, Stethoscope, Award, HeartPulse, Users, ArrowRight, Phone, CalendarCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const timeline = [
  { year: "2016", title: "MMed Orthopaedic Surgery", desc: "Master of Medicine, University of KwaZulu-Natal" },
  { year: "2018", title: "FCS (Orth) SA", desc: "Fellow of the College of Surgeons - Orthopaedics" },
  { year: "2019 - Present", title: "Private Practice", desc: "Specialist Orthopaedic Surgeon, Mpumalanga & KZN" },
];

const expertise = [
  { icon: HeartPulse, title: "Adult Trauma", desc: "Complex fractures, polytrauma, non-union and malunion correction" },
  { icon: Users, title: "Paediatric Orthopaedics", desc: "Children's fractures, deformity correction, growth disorders" },
  { icon: Stethoscope, title: "Arthroplasty", desc: "Hip & knee replacement, revision surgery, joint preservation" },
  { icon: Award, title: "Reconstruction", desc: "Limb reconstruction, deformity correction, limb lengthening" },
];

// Put your photos here:
// /public/images/dr-mhlongo-hero.jpg (main portrait)
// /public/images/dr-mhlongo-theatre.jpg (optional background)
const HERO_PORTRAIT = "/images/dr1.jpg";
const HERO_BG = "/images/dr2.jpg";

export default function AboutPage() {
  return (
    <main className="bg-[#F7F5F1]">
      {/* Hero */}
      <section className="relative bg-[#0B1B33] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={HERO_BG}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/92 to-[#0B1B33]/60" />
          <div className="absolute inset-0 bg-[#0B1B33]/40" />
        </div>

        <div className="relative max-w- mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[#D9A24B] tracking-[0.22em] text- font-bold mb-4">ABOUT THE SURGEON</p>
            <h1 className="font-heading text- sm:text- lg:text- leading-[0.95] font-bold tracking-[-0.03em] text-white mb-5 text-balance">
              Dedicated to <br className="hidden sm:block" />
              <span className="text-[#D9A24B]">Restoring</span> Mobility
            </h1>
            <p className="text-white/70 text- sm:text- leading-[1.7] max-w- mx-auto lg:mx-0 mb-8">
              Dr Nkosinathi D. Mhlongo is a specialist Orthopaedic Surgeon committed to excellence, compassion and evidence-based care for every patient.
            </p>

            {/* Mobile portrait */}
            <div className="relative w-full h- sm:h- rounded- overflow-hidden ring-1 ring-white/10 lg:hidden mb-8 shadow-2xl bg-[#0B1B33]">
              <Image
                src={HERO_PORTRAIT}
                alt="Dr Nkosinathi D. Mhlongo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur rounded-xl p-3.5 flex gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-full bg-[#D9A24B]/15 grid place-items-center shrink-0"><Quote className="w-4 h-4 text-[#D9A24B]" /></div>
                  <p className="text- leading-[1.5] text-[#0B1B33] font-medium">Restoring lives, dignity and movement.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button href="/#book" className="h- px-7 rounded-full gap-2 bg-[#D9A24B] hover:bg-[#c89131] text-white text-[14.5px] font-semibold w-full sm:w-auto justify-center">
                <CalendarCheck className="w- h-" />Book Consultation
              </Button>
              <Button href="tel:+27136553057" className="h- px-7 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#0B1B33] backdrop-blur gap-2 text-[14.5px] font-semibold w-full sm:w-auto justify-center">
                <Phone className="w- h-" />Call Clinic
              </Button>
            </div>
          </div>

          {/* Desktop portrait - RIGHT SIDE */}
          <div className="relative w-full h- lg:h- rounded- overflow-hidden ring-1 ring-white/15 hidden lg:block shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#12223f]">
            <Image
              src={HERO_PORTRAIT}
              alt="Dr Nkosinathi D. Mhlongo - Orthopaedic Surgeon"
              fill
              sizes="560px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/20 to-transparent" />
            <div className="absolute bottom-0 p-7 w-full">
              <div className="bg-white rounded-2xl p-5 shadow-xl">
                <div className="flex gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#D9A24B]/15 grid place-items-center shrink-0"><Quote className="w-5 h-5 text-[#D9A24B]" /></div>
                  <div>
                    <p className="text-[14.5px] leading-[1.6] text-[#0B1B33] font-medium">“My goal is not just to treat bones, but to restore lives, dignity and movement.”</p>
                    <p className="text- text-[#0B1B33]/50 mt-1.5 font-semibold tracking-wide">Dr N. D. Mhlongo • Orthopaedic Surgeon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + Credentials */}
      <section className="bg-white">
        <div className="max-w- mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          <div className="min-w-0">
            <SectionLabel>Biography</SectionLabel>
            <h2 className="font-heading text- sm:text- lg:text- leading-[1.08] font-bold text-[#0B1B33] mb-6 sm:mb-8 text-balance mt-2">A Surgeon Who Listens First, Operates With Precision</h2>
            <div className="space-y-5 text-[15.5px] sm:text- leading-[1.85] text-[#0B1B33]/70">
              <p>Dr Nkosinathi D. Mhlongo is a South African trained Specialist Orthopaedic Surgeon with a focus on adult and paediatric trauma, joint replacement and reconstructive surgery.</p>
              <p>He completed his undergraduate and postgraduate training at the University of KwaZulu-Natal, obtaining his Master of Medicine in Orthopaedic Surgery in 2016 and his Fellowship of the College of Medicine of South Africa (FCS Orth SA).</p>
              <p>Known for his calm, patient-centred approach, Dr Mhlongo believes in shared decision making, clear communication and minimally invasive techniques where possible to ensure faster recovery and better outcomes.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["FCS (Orth) - CMSA", "MMed Ortho - UKZN", "MBChB - UKZN", "HPCSA Registered Specialist"].map(c => (
                <span key={c} className="inline-flex items-center gap-2.5 text-[13.5px] font-semibold bg-[#F7F5F1] border border-black/[0.06] px-4 py-3.5 rounded-xl"><BadgeCheck className="w- h- text-[#D9A24B] shrink-0" />{c}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#F7F5F1] lg:bg-white rounded- border border-black/[0.06] p-6 sm:p-8 shadow-sm lg:shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-9 h-9 rounded-xl bg-[#D9A24B]/15 grid place-items-center"><GraduationCap className="w-5 h-5 text-[#D9A24B]" /></div>
              <h3 className="font-bold text-[#0B1B33] text-">Professional Journey</h3>
            </div>
            <div className="relative border-l border-black/10 ml- pl-9 space-y-9">
              {timeline.map(item => (
                <div key={item.year} className="relative">
                  <div className="absolute -left- top-1 w-6 h-6 rounded-full bg-[#0B1B33] border- border-[#D9A24B] shadow-[0_0_0_4px_rgba(217,162,75,0.15)]" />
                  <p className="text- font-bold tracking-[0.18em] text-[#D9A24B] mb-1 uppercase">{item.year}</p>
                  <p className="font-semibold text-[#0B1B33] text-[15.5px] leading-tight">{item.title}</p>
                  <p className="text-[13.5px] text-[#0B1B33]/60 leading-[1.6] mt-1.5">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/hospitals" className="mt-9 flex items-center justify-between text- font-semibold text-[#0B1B33] border border-black/10 rounded-xl px-5 py-4 hover:bg-white transition-colors group">
              View Practising Hospitals <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white border-t border-black/[0.06]">
        <div className="max-w- mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <SectionLabel>Clinical Focus</SectionLabel>
            <h2 className="font-heading text- sm:text- leading-[1.1] font-bold text-[#0B1B33] mt-2">Comprehensive Orthopaedic Care</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertise.map(e => (
              <div key={e.title} className="rounded- bg-[#F7F5F1] border border-black/[0.05] p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white border border-black/5 grid place-items-center mb-5 shadow-sm"><e.icon className="w- h- text-[#0B1B33]" /></div>
                <h3 className="font-semibold text-[#0B1B33] mb-2 text-">{e.title}</h3>
                <p className="text- leading-[1.6] text-[#0B1B33]/65">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/[0.06]">
        <div className="max-w- mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-14">
          <div className="rounded- sm:rounded- bg-[#0B1B33] px-7 py-9 sm:px-10 lg:px-12 lg:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
            <div>
              <h3 className="font-heading text- sm:text- font-bold text-white leading-[1.1] mb-2.5">Ready to restore your mobility?</h3>
              <p className="text-white/60 text-[14.5px]">Book a consultation with Dr Mhlongo today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Button href="/#book" className="h-12 px-7 rounded-full bg-[#D9A24B] hover:bg-[#c89131] text-white w-full sm:w-auto justify-center">Book Now</Button>
              <Button href="tel:+27136553057" className="h-12 px-7 rounded-full bg-white text-[#0B1B33] hover:bg-white/90 w-full sm:w-auto justify-center">Call Us</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}