"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  GraduationCap,
  Stethoscope,
  Award,
  HeartPulse,
  Users,
  ArrowRight,
  Phone,
  CalendarCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

// PUT YOUR IMAGES IN /public/images/
const doctorImages = [
  { src: "/images/dr1.jpg", alt: "Dr Nkosinathi D. Mhlongo portrait", title: "Specialist Orthopaedic Surgeon", subtitle: "15+ Years Excellence" },
  { src: "/images/dr2.jpg", alt: "Dr Mhlongo in consultation", title: "Patient-Centred Care", subtitle: "Compassion & Precision" },
  { src: "/images/hero-doctor.jpg", alt: "Dr Mhlongo in theatre", title: "Advanced Surgical Expertise", subtitle: "Adult & Paediatric Trauma" },
  { src: "/images/about-doctor.jpg", alt: "Dr Mhlongo with patient", title: "Restoring Mobility", subtitle: "Evidence-Based Practice" },
];

const AUTOPLAY_MS = 4500;

export default function AboutPage() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % doctorImages.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + doctorImages.length) % doctorImages.length), []);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [next, isPaused]);

  return (
    <main className="bg-[#F7F5F1]">
      {/* Hero with Doctor Slider */}
      <section className="relative bg-[#0B1B33] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-[#D9A24B] tracking-[0.22em] text- font-bold mb-4">ABOUT THE SURGEON</p>
            <h1 className="font-heading text- sm:text- lg:text- leading-[0.95] font-bold tracking-[-0.03em] text-white mb-5 text-balance">
              Dedicated to <br className="hidden sm:block" />
              <span className="text-[#D9A24B]">Restoring</span> Mobility
            </h1>
            <p className="text-white/70 text- sm:text- leading-[1.7] max-w-xl mx-auto lg:mx-0 mb-8">
              Dr Nkosinathi D. Mhlongo is a specialist Orthopaedic Surgeon committed to excellence, compassion and
              evidence-based care for every patient.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button href="/#book" className="h-11 px-7 rounded-full gap-2 bg-[#D9A24B] hover:bg-[#c89131] text-white text-[14.5px] font-semibold w-full sm:w-auto justify-center">
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </Button>
              <Button href="tel:+27136553057" className="h-11 px-7 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#0B1B33] backdrop-blur gap-2 text-[14.5px] font-semibold w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4" />
                Call Clinic
              </Button>
            </div>
          </div>

          {/* Right - Doctor Image Slider Panel */}
          <div
            className="relative order-1 lg:order-2 w-full h- sm:h- lg:h- rounded- overflow-hidden ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#12223f] group isolate"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {doctorImages.map((img, i) => {
              const active = i === current;
              return (
                <div key={img.src} aria-hidden={!active} className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${active? "opacity-100 scale-100 z-[1]" : "opacity-0 scale-[1.04] z-0"}`}>
                  <div className="relative w-full h-full">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 100vw, 560px" priority={i === 0} className="object-cover object-top" />
                    {/* gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B33]/60 to-transparent opacity-60" />
                  </div>

                  {/* Title overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-7 transition-all duration-700 ${active? "translate-y-0 opacity-100 delay-150" : "translate-y-6 opacity-0"}`}>
                    <div className="inline-flex items-center gap-2 bg-[#D9A24B] text-[#0B1B33] text- font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-3">
                      <span className="w-1 h-1 rounded-full bg-[#0B1B33] animate-pulse" />
                      {img.subtitle}
                    </div>
                    <h3 className="font-serif text- sm:text- leading-[1.15] font-bold text-white text-balance mb-4">{img.title}</h3>
                    <div className="bg-white rounded-2xl p-4 shadow-xl">
                      <div className="flex gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-[#D9A24B]/15 grid place-items-center shrink-0">
                          <Quote className="w-4 h-4 text-[#D9A24B]" />
                        </div>
                        <div>
                          <p className="text-[13.5px] leading-[1.6] text-[#0B1B33] font-medium">“My goal is not just to treat bones, but to restore lives, dignity and movement.”</p>
                          <p className="text- text-[#0B1B33]/50 mt-1 font-semibold tracking-wide uppercase">Dr N. D. Mhlongo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Controls */}
            <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-lg">
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots + progress */}
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="px-5 pb-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {doctorImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === current? "w-7 bg-[#D9A24B]" : "w-1.5 bg-white/50 hover:bg-white"}`} />
                  ))}
                </div>
                <span className="text- font-bold tracking-widest text-white/70 bg-black/30 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                  {String(current + 1).padStart(2, "0")} / {String(doctorImages.length).padStart(2, "0")}
                </span>
              </div>
              <div className="h-1 bg-white/15">
                <div key={`${current}-${isPaused}`} className="h-full bg-[#D9A24B] origin-left" style={{ animation: isPaused? "none" : `slideProgress ${AUTOPLAY_MS}ms linear forwards` }} />
              </div>
            </div>
          </div>
        </div>

        {/* subtle glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 w- h- rounded-full bg-[#D9A24B]/10 blur-" />
      </section>

      {/* Bio + Credentials */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          <div className="min-w-0">
            <SectionLabel>Biography</SectionLabel>
            <h2 className="font-heading text- sm:text- lg:text- leading-[1.08] font-bold text-[#0B1B33] mb-6 sm:mb-8 text-balance mt-2">
              A Surgeon Who Listens First, Operates With Precision
            </h2>
            <div className="space-y-5 text-[15.5px] sm:text- leading-[1.85] text-[#0B1B33]/70">
              <p>Dr Nkosinathi D. Mhlongo is a South African trained Specialist Orthopaedic Surgeon with a focus on adult and paediatric trauma, joint replacement and reconstructive surgery.</p>
              <p>He completed his undergraduate and postgraduate training at the University of KwaZulu-Natal, obtaining his Master of Medicine in Orthopaedic Surgery in 2016 and his Fellowship of the College of Medicine of South Africa (FCS Orth SA).</p>
              <p>Known for his calm, patient-centred approach, Dr Mhlongo believes in shared decision making, clear communication and minimally invasive techniques where possible to ensure faster recovery and better outcomes.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["FCS (Orth) - CMSA", "MMed Ortho - UKZN", "MBChB - UKZN", "HPCSA Registered Specialist"].map((c) => (
                <span key={c} className="inline-flex items-center gap-2.5 text-[13.5px] font-semibold bg-[#F7F5F1] border border-black/[0.06] px-4 py-3.5 rounded-xl">
                  <BadgeCheck className="w-4 h-4 text-[#D9A24B] shrink-0" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#F7F5F1] lg:bg-white rounded-2xl border border-black/[0.06] p-6 sm:p-8 shadow-sm lg:shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-9 h-9 rounded-xl bg-[#D9A24B]/15 grid place-items-center">
                <GraduationCap className="w-5 h-5 text-[#D9A24B]" />
              </div>
              <h3 className="font-bold text-[#0B1B33] text-">Professional Journey</h3>
            </div>
            <div className="relative border-l border-black/10 ml-3 pl-9 space-y-9">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left- top-1 w-6 h-6 rounded-full bg-[#0B1B33] border-2 border-[#D9A24B] shadow-[0_0_0_4px_rgba(217,162,75,0.15)]" />
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <SectionLabel>Clinical Focus</SectionLabel>
            <h2 className="font-heading text- sm:text- leading-[1.1] font-bold text-[#0B1B33] mt-2">Comprehensive Orthopaedic Care</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertise.map((e) => (
              <div key={e.title} className="rounded-2xl bg-[#F7F5F1] border border-black/[0.05] p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white border border-black/5 grid place-items-center mb-5 shadow-sm">
                  <e.icon className="w-5 h-5 text-[#0B1B33]" />
                </div>
                <h3 className="font-semibold text-[#0B1B33] mb-2 text-">{e.title}</h3>
                <p className="text-[13.5px] leading-[1.6] text-[#0B1B33]/65">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-14">
          <div className="rounded-2xl sm:rounded- bg-[#0B1B33] px-7 py-9 sm:px-10 lg:px-12 lg:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
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

      <style>{`@keyframes slideProgress{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </main>
  );
}