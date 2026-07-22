import { Award, Building2, Users, ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white to-[#f8f9fc] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* subtle bg accent */}
      <div className="pointer-events-none absolute -top-32 -left-32 h- w- rounded-full bg-[#D9A24B]/10 blur-" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h- w- rounded-full bg-[#0B1B33]/5 blur-" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* IMAGE - YOUR CONTAINER - FIXED */}
        <div className="relative overflow-hidden rounded- sm:rounded- shadow-[0_20px_60px_rgba(11,27,51,0.18)] sm:shadow-[0_32px_80px_rgba(11,27,51,0.22)] order-1 group isolate">
          <img
            src="/images/hero-doctor.jpg"
            alt="Dr Nkosinathi Mhlongo - Specialist Orthopaedic Surgeon"
            className="w-full h- sm:h- lg:h- object-cover object-top group-hover:scale-[1.03] transition-transform duration- ease-out will-change-transform"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 via-[#0B1B33]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-white/60 sm:min-w-">
             
            <div className="mt-2.5 flex items-center gap-2 text- text-[#0B1B33]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>HPCSA Reg • Practice No. 0691410</span>
            </div>
          </div>

          <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-sm border border-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text- font-bold tracking-wide text-[#0B1B33]">Accepting Referrals</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2">
          <div className="inline-flex items-center gap-2 bg-white border border-black/5 shadow-sm rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A24B] animate-pulse" />
            <span className="uppercase tracking-[0.2em] text- font-bold text-[#0B1B33]/70">
              Bones Restored Best
            </span>
          </div>

          <h2 className="font-serif font-bold tracking-[-0.03em] text-[#0B1B33] text- sm:text- lg:text- leading-[0.95] mt-5 text-balance">
            Restoring Mobility.
            <br />
            <span className="text-[#D9A24B] relative inline-block">
              Improving Lives.
              <span className="absolute bottom-1 left-0 w-full h- bg-[#D9A24B]/15 -z-10 rounded-full hidden sm:block" />
            </span>
          </h2>

          <p className="text-[#0B1B33]/70 mt-6 leading-[1.75] text- sm:text- max-w-">
            <span className="font-semibold text-[#0B1B33]">Dr Nkosinathi Mhlongo Inc.</span> is a specialist Orthopaedic Surgery practice based in Emalahleni, Mpumalanga. Since 2017, providing compassionate, evidence-based care for bone, joint, muscle and spine conditions in adults and children.
          </p>

          <p className="text-[#0B1B33]/60 mt-4 leading-[1.7] text-[14.5px] sm:text- max-w-">
            Practising at <span className="font-medium text-[#0B1B33]">Emalahleni Private Hospital</span> and <span className="font-medium text-[#0B1B33]">Life Cosmos Hospital</span> — advanced surgical techniques, patient-centred recovery.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["MBChB (Natal)", "FC Ortho (SA)", "MMed Ortho (UP)", "HPCSA Registered"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-[12.5px] font-semibold text-[#0B1B33] hover:border-[#D9A24B]/30 hover:bg-[#FFFBF5] transition-colors">
                {item}
              </span>
            ))}
          </div>

          {/* STATS - MODERN WITH ICONS */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-9 sm:mt-10">
            <div className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D9A24B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-xl bg-[#D9A24B]/12 grid place-items-center"><Award className="w-5 h-5 text-[#D9A24B]" /></div>
              <h3 className="relative mt-3 text- sm:text- font-black text-[#0B1B33] leading-none">2017</h3>
              <p className="relative mt-1.5 text- sm:text- font-bold uppercase tracking-widest text-[#0B1B33]/50">Established</p>
            </div>

            <div className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B33]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-xl bg-[#0B1B33]/6 grid place-items-center"><Building2 className="w-5 h-5 text-[#0B1B33]" /></div>
              <h3 className="relative mt-3 text- sm:text- font-black text-[#0B1B33] leading-none">2</h3>
              <p className="relative mt-1.5 text- sm:text- font-bold uppercase tracking-widest text-[#0B1B33]/50">Hospitals</p>
            </div>

            <div className="group relative bg-[#0B1B33] rounded-2xl p-4 sm:p-5 border border-white/10 shadow-[0_12px_32px_rgba(11,27,51,0.25)] hover:shadow-[0_20px_48px_rgba(11,27,51,0.35)] hover:-translate-y-0.5 transition-all duration-300 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-xl bg-white/10 grid place-items-center"><Users className="w-5 h-5 text-[#D9A24B]" /></div>
              <h3 className="relative mt-3 text- sm:text- font-black text-white leading-none">Adult & Child</h3>
              <p className="relative mt-1.5 text- sm:text- font-bold uppercase tracking-widest text-white/60">Orthopaedic Care</p>
            </div>
          </div>

          {/* CTA - MODERN DUAL BUTTON */}
          <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3">
            <a href="/book" className="inline-flex h- sm:h- w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0B1B33] text-white px-7 text- font-semibold hover:bg-black hover:gap-3 transition-all shadow-[0_8px_20px_rgba(11,27,51,0.18)]">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:0136553057" className="inline-flex h- sm:h- w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-black/10 text-[#0B1B33] px-7 text- font-semibold hover:bg-[#F7F5F1] hover:border-black/15 transition-colors">
              <Phone className="w-4 h-4" /> 013 655 3057/8
            </a>
          </div>

          <p className="mt-3 text- text-[#0B1B33]/45">Suite 201, Emalahleni Private Hospital • 39 Mandela Street • Mon-Fri 08:00-17:00</p>
        </div>
      </div>
    </section>
  );
}