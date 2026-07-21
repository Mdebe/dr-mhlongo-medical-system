"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CalendarCheck, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="book" className="relative bg-[#0B1B33] overflow-hidden scroll-mt-24">
      {/* Decorative glow - FIXED */}
      <div className="pointer-events-none absolute -top-32 -right-32 w- h- rounded-full bg-[#D9A24B]/10 blur-" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w- h- rounded-full bg-white/[0.04] blur-" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-[1.6fr_1fr] gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-[#D9A24B] tracking-[0.22em] text- sm:text-xs font-bold mb-3">
            YOUR JOURNEY TO A PAIN-FREE LIFE
          </p>
          <h2 className="font-serif text- sm:text- leading-[1.05] font-bold tracking-tight text-white mb-3 text-balance">
            Ready to Take the First Step?
          </h2>
          <p className="text-white/65 text- leading-relaxed mb-8 max-w-xl">
            Compassionate care. Advanced treatment. Better tomorrow. Book your consultation with Dr Nkosinathi D. Mhlongo today.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Button href="#book" variant="primary" className="h-11 px-6 rounded-full gap-2">
              <CalendarCheck className="w-4 h-4" />
              Book an Appointment Today
            </Button>
            <Button
              href="tel:+27136553057"
              variant="secondary"
              className="h-11 px-6 rounded-full gap-2 bg-white text-[#0B1B33] hover:bg-white/90 border-0"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </Button>
          </div>
        </div>

        {/* Right - Image Slider - FIXED HEIGHT */}
        <div
          className="relative w-full h- sm:h- lg:h- rounded-2xl overflow-hidden bg-white/[0.04] ring-1 ring-white/10 group shrink-0"
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
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                i === current? "opacity-100 scale-100 z-[1]" : "opacity-0 scale-[1.03] z-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                priority={i === 0}
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0B1B33]/60 via-[#0B1B33]/0 to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0B1B33]/40 to-transparent pointer-events-none hidden lg:block" />

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all hover:bg-white shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-[#0B1B33] grid place-items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all hover:bg-white shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots + Progress */}
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {ctaImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current? "w-6 bg-[#D9A24B]" : "w-1.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
              <span className="text- font-semibold tracking-widest text-white/80 bg-black/20 backdrop-blur px-2 py-0.5 rounded-full">
                {String(current + 1).padStart(2, "0")} / {String(ctaImages.length).padStart(2, "0")}
              </span>
            </div>
            <div className="h- bg-white/15">
              <div
                key={`${current}-${isPaused}`}
                className="h-full bg-[#D9A24B] origin-left"
                style={{ animation: isPaused? "none" : `cta-progress ${AUTOPLAY_MS}ms linear forwards` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}