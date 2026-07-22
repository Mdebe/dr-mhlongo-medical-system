"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CalendarCheck, Phone, ChevronLeft, ChevronRight, ShieldCheck, Clock3 } from "lucide-react";

const ctaImages = [
  { src: "/images/bone.jpg", alt: "Orthopaedic x-ray illustration" },
  { src: "/images/hero-doctor.jpg", alt: "Dr Mhlongo in theatre" },
  { src: "/images/about-doctor.jpg", alt: "Patient consultation" },
];

const AUTOPLAY_MS = 5000;

export function BottomCTA() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % ctaImages.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + ctaImages.length) % ctaImages.length), []);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [next, isPaused]);

  return (
    <section id="book" className="relative bg-white overflow-hidden scroll-mt-24 border-t border-black/[0.06]">
      {/* Decorative glow - white theme */}
      <div className="pointer-events-none absolute -top-40 -right-40 w- h- rounded-full bg-[#D9A24B]/10 blur-" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w- h- rounded-full bg-[#0B1B33]/5 blur-" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[#F7F5F1] border border-black/5 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[#0B1B33]/70 tracking-[0.2em] text- font-bold uppercase">
              Your Journey To A Pain-Free Life
            </p>
          </div>

          <h2 className="font-serif text- sm:text- lg:text- leading-[0.95] font-bold tracking-[-0.02em] text-[#0B1B33] mb-4 text-balance">
            Ready to Take <span className="text-[#D9A24B] relative inline-block">the First Step?<span className="absolute bottom-1.5 left-0 w-full h- bg-[#D9A24B]/15 rounded-full -z-10" /></span>
          </h2>

          <p className="text-[#0B1B33]/60 text- sm:text- leading-[1.7] mb-7 sm:mb-8 max-w-">
            Compassionate care. Advanced treatment. Better tomorrow. Book your consultation with <span className="font-semibold text-[#0B1B33]">Dr Nkosinathi D. Mhlongo</span> today at Emalahleni Private Hospital.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/book" className="inline-flex h- sm:h- w-full sm:w-auto px-7 rounded-full bg-[#0B1B33] text-white font-semibold text- items-center justify-center gap-2 hover:bg-black transition-all shadow-[0_10px_24px_rgba(11,27,51,0.18)] hover:shadow-[0_14px_32px_rgba(11,27,51,0.24)] hover:-translate-y-0.5">
              <CalendarCheck className="w-4 h-4" />
              Book an Appointment
            </a>
            <a href="tel:+27136553057" className="inline-flex h- sm:h- w-full sm:w-auto px-7 rounded-full bg-white border border-black/10 text-[#0B1B33] font-semibold text- items-center justify-center gap-2 hover:bg-[#F7F5F1] hover:border-black/15 transition-colors">
              <Phone className="w-4 h-4" />
              013 655 3057/8
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text- text-[#0B1B33]/55">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> HPCSA Registered</span>
            <span className="w-1 h-1 rounded-full bg-black/15 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5"><Clock3 className="w-3.5 h-3.5" /> Mon-Fri 08:00-17:00</span>
            <span className="w-1 h-1 rounded-full bg-black/15 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Accepting New Patients</span>
          </div>
        </div>

        {/* Right - Image Slider - FIXED HEIGHTS */}
        <div
          className="relative w-full h- sm:h- lg:h- rounded- sm:rounded- overflow-hidden bg-[#F7F5F1] ring-1 ring-black/5 shadow-[0_20px_60px_rgba(11,27,51,0.12)] group shrink-0 order-1 lg:order-2 isolate"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Clinic highlights"
        >
          {ctaImages.map((img, i) => (
            <div
              key={img.src}
              aria-hidden={i!== current}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                i === current? "opacity-100 scale-100 z-[1]" : "opacity-0 scale-[1.06] z-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority={i === 0}
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}

          {/* Light overlay for white theme */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0B1B33]/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-white/0 via-transparent to-transparent lg:from-white/10 pointer-events-none" />

          {/* Controls - white theme */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all hover:bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-black/5"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all hover:bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-black/5"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots + Progress */}
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md rounded-full px-2.5 py-1.5 border border-white/10">
                {ctaImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current? "w-6 bg-[#D9A24B]" : "w-1.5 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
              <span className="text- font-bold tracking-widest text-white bg-black/30 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                {String(current + 1).padStart(2, "0")} / {String(ctaImages.length).padStart(2, "0")}
              </span>
            </div>
            <div className="h- bg-black/10">
              <div
                key={`${current}-${isPaused}`}
                className="h-full bg-[#D9A24B] origin-left"
                style={{ animation: isPaused? "none" : `cta-progress ${AUTOPLAY_MS}ms linear forwards` }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cta-progress { from { transform: scaleX(0) } to { transform: scaleX(1) } }
      `}</style>
    </section>
  );
}