"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { BadgeCheck, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { credentials, hospitals } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/button";

const aboutImages = [
  {
    src: "/images/hero-doctor.jpg",
    alt: "Dr Nkosinathi D. Mhlongo portrait",
    title: "Specialist Orthopaedic Surgeon",
    subtitle: "15+ Years of Clinical Excellence",
  },
  {
    src: "/images/about-doctor.jpg",
    alt: "Dr Mhlongo consultation",
    title: "Patient-Centred Care",
    subtitle: "Adult & Paediatric Orthopaedics",
  },
];

const AUTOPLAY_MS = 4000;

export function About() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % aboutImages.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + aboutImages.length) % aboutImages.length), []);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion.current) setIsPaused(true);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [next, isPaused]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.05fr_1.3fr_1fr] gap-8 lg:gap-10 scroll-mt-24 items-start"
    >
      {/* Image Slider - FIXED */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="About Dr Mhlongo images"
        className="relative isolate w-full h- sm:h- lg:h- rounded-2xl overflow-hidden bg-[#E9E6DF] group shrink-0 outline-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {aboutImages.map((img, i) => {
          const isActive = i === current;
          return (
            <div
              key={img.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                isActive? "opacity-100 z-[1]" : "opacity-0 z-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  priority={i === 0}
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/90 via-[#0B1B33]/30 to-transparent" />

                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 pb-12 transition-all duration-700 ease-out ${
                    isActive? "translate-y-0 opacity-100 delay-150" : "translate-y-6 opacity-0"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 bg-[#D9A24B] text-[#0B1B33] text- font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full mb-3">
                    <span className="w-1 h-1 rounded-full bg-[#0B1B33] animate-pulse" />
                    {img.subtitle}
                  </div>
                  <h3 className="font-serif text- sm:text- leading-[1.15] font-bold text-white text-balance">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 transition-all hover:bg-white shadow-lg focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 transition-all hover:bg-white shadow-lg focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-0 inset-x-0 z-10 p-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5" role="tablist">
            {aboutImages.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}: ${aboutImages[i].title}`}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === current? "w-7 bg-[#D9A24B]" : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
          <span className="text- font-semibold tracking-widest text-white bg-black/30 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
            {String(current + 1).padStart(2, "0")} / {String(aboutImages.length).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10 overflow-hidden">
          <div
            key={`${current}-${isPaused}`}
            className="h-full bg-[#D9A24B] origin-left will-change-transform"
            style={{ animation: isPaused? "none" : `progress ${AUTOPLAY_MS}ms linear forwards` }}
          />
        </div>
      </div>

      <div className="min-w-0">
        <SectionLabel>About The Surgeon</SectionLabel>
        <h2 className="font-serif text- sm:text- leading-[1.1] font-bold tracking-tight text-[#0B1B33] mb-4 text-balance">
          Dr Nkosinathi D. Mhlongo
        </h2>
        <p className="text-[#0B1B33]/70 leading-relaxed text-[15.5px] mb-6 text-pretty">
          Dr Nkosinathi D. Mhlongo is a specialist Orthopaedic Surgeon with expertise in adult and paediatric orthopaedic
          trauma, arthroplasty, reconstruction surgery, and general orthopaedic care.
        </p>
        <div className="flex flex-wrap gap-2.5 mb-6">
          {credentials.map((cred) => (
            <span
              key={cred}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1B33] bg-[#F1EEE7] border border-black/[0.06] px-3.5 py-2 rounded-full"
            >
              <BadgeCheck className="w-4 h-4 text-[#D9A24B] shrink-0" />
              {cred}
            </span>
          ))}
        </div>
        <ul className="space-y-2.5 mb-8 text-[14.5px] text-[#0B1B33]/80">
          <li className="flex gap-2.5">
            <span className="text-[#D9A24B] font-bold leading-none mt-0.5">✓</span>
            Fellow of the College of Medicine of South Africa
          </li>
          <li className="flex gap-2.5">
            <span className="text-[#D9A24B] font-bold leading-none mt-0.5">✓</span>
            Master of Medicine in Orthopaedic Surgery (2016)
          </li>
        </ul>
        <Button href="#about" variant="primary" className="h-11 px-6 rounded-full gap-2">
          <Users className="w-4 h-4" />
          Learn More About Dr Mhlongo
        </Button>
      </div>

      <div id="hospitals" className="bg-[#0B1B33] rounded-2xl p-6 lg:p-7 scroll-mt-24 self-start lg:sticky lg:top-24 shadow-xl shadow-[#0B1B33]/10">
        <p className="text-[#D9A24B] tracking-[0.2em] text- font-bold mb-6">PRACTISING HOSPITALS</p>
        <div className="space-y-6 mb-6">
          {hospitals.map((h) => (
            <div key={h.name} className="flex gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white/10 ring-1 ring-white/10">
                <Image src={h.image} alt={h.name} fill sizes="56px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold text- mb-1 leading-tight">{h.name}</p>
                <p className="text-white/55 text-[12.5px] leading-[1.5]">
                  {h.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <p className="text-[#D9A24B] text-[12.5px] font-semibold mt-1.5">Tel: {h.tel}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#hospitals"
          className="group flex items-center justify-between border border-white/15 text-white text-[13.5px] font-semibold px-4 py-3 rounded-xl hover:bg-white/[0.06] hover:border-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A24B]"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
            View All Locations
          </span>
          <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <style>{`@keyframes progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </section>
  );
}