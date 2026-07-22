import { SectionLabel } from "@/components/ui/SectionLabel";
import { Bone, Activity, HeartPulse, Baby, ShieldAlert } from "lucide-react";

const conditions = [
  { icon: Bone, title: "Osteoarthritis", desc: "Hip & knee wear-and-tear, joint stiffness and deformity." },
  { icon: Activity, title: "Rotator Cuff Tears", desc: "Shoulder pain, weakness, night pain and impingement." },
  { icon: ShieldAlert, title: "Fractures & Dislocations", desc: "Acute trauma, sports injuries, non-union and malunion." },
  { icon: HeartPulse, title: "Back & Joint Pain", desc: "Chronic pain, fibromyalgia and multiple joint pains." },
  { icon: Baby, title: "Paediatric Deformities", desc: "Clubfoot, bow legs, knock knees, growth disorders." },
  { icon: Bone, title: "Bone Infections & Tumours", desc: "Sepsis, osteomyelitis, benign and malignant lesions." },
];

export default function ConditionsPage() {
  return (
    <main className="bg-[#F7F5F1]">
      <section className="bg-[#0B1B33] py-16"><div className="max-w-7xl mx-auto px-5 lg:px-10"><SectionLabel light>Conditions Treated</SectionLabel><h1 className="font-serif text- sm:text- font-bold text-white leading-[0.95] mt-2">Conditions We Treat Every Day</h1></div></section>
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conditions.map(c=>(
          <div key={c.title} className="bg-white rounded- p-7 border border-black/5">
            <div className="w-11 h-11 rounded-xl bg-[#D9A24B]/15 grid place-items-center mb-4"><c.icon className="w-5 h-5 text-[#D9A24B]" /></div>
            <h3 className="font-semibold text-[#0B1B33] text-">{c.title}</h3>
            <p className="text-[13.5px] text-[#0B1B33]/65 mt-2 leading-[1.6]">{c.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}