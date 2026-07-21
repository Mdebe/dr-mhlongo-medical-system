"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarCheck, Phone, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  "/images/bone.jpg",
  "/images/about-doctor.png",
  "/images/bone-3.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[#0B1B33] overflow-hidden isolate">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              i === current? "opacity-[0.45]" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#0B1B33]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-0">
        {/* Left */}
        <div className="relative z-10 py-8 lg:py-28">
          <p className="font-body text- font-bold tracking-[0.22em] uppercase text-[#D9A24B] mb-5">
            Orthopaedic Surgeon
          </p>

          <h1 className="font-heading text- sm:text- lg:text- font-[800] leading-[0.88] tracking-[-0.05em] text-white mb-6">
            BONES
            <br />
            <span className="text-[#D9A24B]">RESTORED</span>
            <br />
            BEST
          </h1>

          <span className="block w-16 h- bg-[#D9A24B] rounded-full mb-7" />

          <p className="font-body text- leading-[1.65] text-white/85 max-w- mb-9">
            Specialist orthopaedic care focused on restoring mobility, reducing pain, and improving quality of life.
            Excellence. Compassion. Results.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button href="#book" variant="primary" className="h- px-8 rounded-full text- font-semibold">
              <CalendarCheck className="w-5 h-5" />
              Book an Appointment
            </Button>
            <Button href="tel:+27136553057" variant="secondary" className="h- px-8 rounded-full text- font-semibold bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0B1B33]">
              <Phone className="w-5 h-5" />
              Call Us
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-10">
            {[
              { icon: ShieldCheck, title: "Expert Care", sub: "Patient Focused" },
              { icon: Sparkles, title: "Advanced Techniques", sub: "Modern, Minimally Invasive" },
              { icon: Users, title: "Compassionate Team", sub: "Here for You" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-[#D9A24B] shrink-0" />
                <div className="leading-tight">
                  <p className="font-body text-white text- font-semibold">{item.title}</p>
                  <p className="font-body text-white/60 text-[13.5px] mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === current? "w-8 bg-[#D9A24B]" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>

        {/* Right - Doctor - card removed */}
        <div className="relative h- sm:h- lg:h- -mx-6 lg:mx-0">
          <Image
            src="/images/hero-doctor.jpg"
            alt="Dr Nkosinathi Mhlongo"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/10 to-transparent lg:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/80 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}