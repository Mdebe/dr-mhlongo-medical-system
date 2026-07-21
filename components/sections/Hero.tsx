import Image from "next/image";
import { CalendarCheck, Phone, ShieldCheck, Sparkles, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-[#0B1B33] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-0">
        <div className="relative z-10 py-6 lg:py-24">
          <p className="text-[#D9A24B] tracking-[0.2em] text-sm font-semibold mb-4">ORTHOPAEDIC SURGEON</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold leading-[1.05] text-white mb-6">BONES<br /><span className="text-[#D9A24B]">RESTORED</span><br />BEST</h1>
          <span className="block w-16 h-1 bg-[#D9A24B] mb-6" />
          <p className="text-white/80 max-w-md mb-8 leading-relaxed">Specialist orthopaedic care focused on restoring mobility, reducing pain, and improving quality of life. Excellence. Compassion. Results.</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button href="#book" variant="primary"><CalendarCheck className="w-4 h-4" />Book an Appointment</Button>
            <Button href="tel:+27136553057" variant="secondary"><Phone className="w-4 h-4" />Call Us</Button>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { icon: ShieldCheck, title: "Expert Care", sub: "Patient Focused" },
              { icon: Sparkles, title: "Advanced Techniques", sub: "Modern, Minimally Invasive" },
              { icon: Users, title: "Compassionate Team", sub: "Here for You" },
            ].map(item => (
              <div key={item.title} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-[#D9A24B]" />
                <div className="leading-tight"><p className="text-white text-sm font-semibold">{item.title}</p><p className="text-white/60 text-xs">{item.sub}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h- lg:h- -mx-6 lg:mx-0">
          <Image src="/images/hero-doctor.jpg" alt="Dr Nkosinathi Mhlongo" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
          <div className="absolute bottom-6 right-6 max-w-xs bg-[#0B1B33]/90 border border-[#D9A24B]/40 backdrop-blur-sm rounded-lg p-5">
            <div className="w-9 h-9 rounded-md border border-[#D9A24B] flex items-center justify-center mb-3"><Award className="w-5 h-5 text-[#D9A24B]" /></div>
            <p className="text-white font-semibold mb-2 leading-snug">Trusted Orthopaedic Care in Mpumalanga</p>
            <p className="text-white/70 text-sm leading-relaxed">We help our patients move better, live with less pain, and return to doing what matters most.</p>
          </div>
        </div>
      </div>
    </section>
  );
}