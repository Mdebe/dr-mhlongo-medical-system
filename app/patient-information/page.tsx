import { SectionLabel } from "@/components/ui/SectionLabel";
import { FileText, CreditCard, Clock, ShieldCheck } from "lucide-react";

export default function PatientInfo() {
  return (
    <main className="bg-white">
      <section className="bg-[#0B1B33] py-16"><div className="max-w-7xl mx-auto px-5 lg:px-10"><SectionLabel light>Patient Information</SectionLabel><h1 className="font-serif text- sm:text- font-bold text-white leading-[0.95] mt-2">What to Expect</h1></div></section>
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-12 grid lg:grid-cols-2 gap-8">
        {[
          { icon: Clock, t: "Your First Visit", d: "Arrive 15 min early. Bring ID, medical aid card, X-rays/MRI, medication list. Consultation 30-45 min including examination and plan." },
          { icon: CreditCard, t: "Fees & Medical Aid", d: "We charge private rates. Most medical aids accepted. Please confirm benefits. Cash patients - ask for estimate before procedure." },
          { icon: FileText, t: "Medico-Legal", d: "Road Accident Fund, IOD, assessments. Bring all clinical notes, accident report, ID. Comprehensive report within 10 working days." },
          { icon: ShieldCheck, t: "After Surgery", d: "Wound care instructions, physiotherapy referral, pain management, follow-up dates. 24hr emergency line for post-op concerns." },
        ].map(b=>(
          <div key={b.t} className="bg-[#F7F5F1] rounded- p-7 border border-black/5"><div className="w-10 h-10 rounded-xl bg-white grid place-items-center mb-4 border border-black/5"><b.icon className="w-5 h-5 text-[#0B1B33]" /></div><h3 className="font-semibold text-[#0B1B33]">{b.t}</h3><p className="text- text-[#0B1B33]/70 mt-2 leading-[1.7]">{b.d}</p></div>
        ))}
      </section>
    </main>
  );
}