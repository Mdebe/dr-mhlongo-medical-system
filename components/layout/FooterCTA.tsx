import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section id="book" className="relative bg-[#0B1B33] overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1.6fr_1fr] gap-10 items-center">
        <div>
          <p className="text-[#D9A24B] tracking-[0.2em] text-sm font-semibold mb-3">YOUR JOURNEY TO A PAIN-FREE LIFE</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">Ready to Take the First Step?</h2>
          <p className="text-white/70 mb-8">Compassionate care. Advanced treatment. Better tomorrow.</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#book" variant="primary"><CalendarCheck className="w-4 h-4" />Book an Appointment Today</Button>
            <Button href="tel:+27136553057" variant="secondary"><Phone className="w-4 h-4" />Call Us Now</Button>
          </div>
        </div>
        <div className="relative h-56 lg:h-72 hidden md:block">
          <Image src="/images/bone.jpg" alt="Orthopaedic x-ray illustration" fill sizes="400px" className="object-contain object-right opacity-80" />
        </div>
      </div>
    </section>
  );
}