"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  CalendarCheck, Phone, Clock, MapPin, ShieldCheck,
  ArrowLeft, Send, MessageCircle, CheckCircle2,
  Building2, AlertCircle, ChevronRight
} from "lucide-react";
import { hospitals } from "@/lib/data";

const services = [
  "Adult Trauma Consultation",
  "Paediatric Orthopaedics",
  "Hip Replacement",
  "Knee Replacement",
  "Joint Pain / Arthritis",
  "Fracture / Injury",
  "Limb Reconstruction",
  "Shoulder Surgery",
  "Second Opinion",
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"
];

// Simulated booked slots - replace with API later
const bookedSlots: Record<string, string[]> = {
  // "2026-07-23": ["09:00", "10:30"]
};

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    hospital: hospitals[0]?.name || "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedHospital = hospitals.find(h => h.name === form.hospital);

  const availableSlots = useMemo(() => {
    if (!form.date) return timeSlots;
    const booked = bookedSlots[form.date] || [];
    return timeSlots.map(t => ({ time: t, available:!booked.includes(t) }));
  }, [form.date]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name required";
    if (!/^0\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Valid SA number required";
    if (!form.hospital) e.hospital = "Select hospital";
    if (!form.service) e.service = "Select service";
    if (!form.date) e.date = "Select date";
    if (!form.time) e.time = "Select time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // TODO: Replace with API
    // await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1400));

    setLoading(false);
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dr Mhlongo team,%0A%0AI would like to book:%0AName: ${form.name}%0APhone: ${form.phone}%0AHospital: ${form.hospital}%0AService: ${form.service}%0ADate: ${form.date} at ${form.time}%0AMessage: ${form.message || "N/A"}`
  );

  if (success) {
    return (
      <main className="min-h-screen bg-[#F7F5F1] grid place-items-center px-4 sm:px-6 py-20">
        <div className="w-full max-w- bg-white rounded- p-8 sm:p-10 text-center shadow-[0_20px_60px_rgba(11,27,51,0.08)] border border-black/[0.06]">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 grid place-items-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="font-serif text- sm:text- font-bold text-[#0B1B33] mb-3 leading-tight">Appointment Request Received</h1>
          <p className="text- leading-[1.7] text-[#0B1B33]/70 mb-2">Thank you <b>{form.name.split(" ")[0]}</b>.</p>
          <p className="text- leading-[1.6] text-[#0B1B33]/60 mb-8">We will confirm <b>{form.date} at {form.time}</b> at {form.hospital} within 2 hours during working hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex h-12 px-7 rounded-full bg-[#0B1B33] text-white font-semibold items-center justify-center hover:bg-black transition">Back to Home</Link>
            <a href={`https://wa.me/27136553057?text=${whatsappMessage}`} target="_blank" className="inline-flex h-12 px-7 rounded-full bg-[#D9A24B] text-white font-semibold items-center justify-center gap-2 hover:bg-[#c89131] transition"><MessageCircle className="w-4 h-4" /> Message on WhatsApp</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F5F1]">
      {/* Header */}
      <section className="bg-[#0B1B33] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D9A24B]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -right-32 -top-32 w- h- bg-[#D9A24B]/10 blur- rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-14 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text- font-medium mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-end">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text- font-bold tracking-widest uppercase text-white/80">Live Booking • Same Day Response</span>
              </div>
              <h1 className="font-serif text- sm:text- lg:text- leading-[0.95] tracking-tight font-bold text-white mb-4">Take the First Step to a Pain-Free Life</h1>
              <p className="text-white/60 text- sm:text- leading-[1.7] max-w-xl">Choose hospital, service and slot. We confirm within 2 hours. No payment required to request.</p>
            </div>
            <div className="hidden lg:flex gap-3 justify-end pb-1">
              <div className="bg-white/[0.08] backdrop-blur border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 min-w-">
                <div className="w-10 h-10 rounded-xl bg-[#D9A24B]/20 grid place-items-center"><Clock className="w-5 h-5 text-[#D9A24B]" /></div>
                <div><p className="text-white text- font-semibold">Mon - Fri</p><p className="text-white/60 text-">08:00 - 17:00</p></div>
              </div>
              <div className="bg-white/[0.08] backdrop-blur border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 min-w-">
                <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center"><Phone className="w-5 h-5 text-white" /></div>
                <div><p className="text-white text- font-semibold">Emergency?</p><p className="text-[#D9A24B] text- font-bold">013 655 3057</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-start">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded- sm:rounded- border border-black/[0.06] p-5 sm:p-8 lg:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-7 sm:mb-8">
            <h2 className="font-serif text- sm:text- font-bold text-[#0B1B33]">Patient Details</h2>
            <span className="inline-flex items-center gap-1.5 text- font-bold tracking-widest uppercase bg-[#F7F5F1] border border-black/5 px-3 py-1.5 rounded-full text-[#0B1B33]/60"><ShieldCheck className="w-3.5 h-3.5" /> Secure & POPIA Compliant</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="sm:col-span-2">
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} placeholder="e.g. Thabo Nkosi" className={`w-full h- px-4 rounded-xl border bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- transition-all ${errors.name? "border-red-300 ring-4 ring-red-50" : "border-black/10"}`} />
              {errors.name && <p className="text- text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Phone Number *</label>
              <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="082 123 4567" className={`w-full h- px-4 rounded-xl border bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- transition-all ${errors.phone? "border-red-300" : "border-black/10"}`} />
              {errors.phone && <p className="text- text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Email <span className="text-black/30 font-normal">(optional)</span></label>
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@email.com" className="w-full h- px-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text-" />
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Preferred Hospital *</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0B1B33]/30 pointer-events-none" />
                <select required name="hospital" value={form.hospital} onChange={handleChange} className={`w-full h- pl-10 pr-4 rounded-xl border bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- appearance-none ${errors.hospital? "border-red-300" : "border-black/10"}`}>
                  {hospitals.map((h) => <option key={h.name} value={h.name}>{h.name}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Service Needed *</label>
              <select required name="service" value={form.service} onChange={handleChange} className={`w-full h- px-4 rounded-xl border bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- ${errors.service? "border-red-300" : "border-black/10"}`}>
                <option value="">Select a service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="text- text-red-500 mt-1">{errors.service}</p>}
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Preferred Date *</label>
              <div className="relative">
                <CalendarCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0B1B33]/30 pointer-events-none" />
                <input required name="date" value={form.date} onChange={handleChange} type="date" min={new Date().toISOString().split('T')[0]} className={`w-full h- pl-10 pr-4 rounded-xl border bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- ${errors.date? "border-red-300" : "border-black/10"}`} />
              </div>
              {errors.date && <p className="text- text-red-500 mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Preferred Time *</label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0B1B33]/30 pointer-events-none" />
                <select required name="time" value={form.time} onChange={handleChange} className={`w-full h- pl-10 pr-4 rounded-xl border bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- ${errors.time? "border-red-300" : "border-black/10"}`}>
                  <option value="">Select time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              {errors.time && <p className="text- text-red-500 mt-1">{errors.time}</p>}
            </div>

            {/* Available slots visual */}
            {form.date && (
              <div className="sm:col-span-2 bg-[#F7F5F1] rounded-2xl border border-black/5 p-4">
                <p className="text- font-semibold text-[#0B1B33] mb-3 flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#D9A24B]" /> Available slots for {new Date(form.date).toLocaleDateString('en-ZA', { weekday: 'short', day: 'numeric', month: 'short' })} {selectedHospital && `• ${selectedHospital.name}`}</p>
                <div className="flex flex-wrap gap-2">
                  {availableSlots.map((s: any) => (
                    <button key={s.time} type="button" disabled={!s.available} onClick={() => setForm({...form, time: s.time })} className={`h-8 px-3.5 rounded-full text- font-semibold border transition-all ${form.time === s.time? "bg-[#0B1B33] text-white border-[#0B1B33]" : s.available? "bg-white border-black/10 text-[#0B1B33] hover:border-[#D9A24B] hover:text-[#D9A24B]" : "bg-black/5 border-transparent text-black/20 cursor-not-allowed line-through"}`}>{s.time}</button>
                  ))}
                </div>
                <p className="text- text-[#0B1B33]/40 mt-2.5">Green = free • Grey = booked • API will replace mock data</p>
              </div>
            )}

            <div className="sm:col-span-2">
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Tell us more <span className="text-black/30 font-normal">(optional)</span></label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe pain, injury, previous surgery, medical aid..." className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- resize-none" />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button disabled={loading} type="submit" className="inline-flex h- px-7 rounded-full bg-[#D9A24B] hover:bg-[#c89131] text-white font-semibold text- items-center justify-center gap-2 transition-all disabled:opacity-60 w-full sm:w-auto shadow-[0_8px_20px_rgba(217,162,75,0.25)]">
              {loading? "Sending..." : <><Send className="w-4 h-4" /> Request Appointment</>}
            </button>
            <a href={`https://wa.me/27136553057?text=${whatsappMessage}`} target="_blank" className="inline-flex h- px-7 rounded-full bg-[#0B1B33] hover:bg-[#122a50] text-white font-semibold text- items-center justify-center gap-2 w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" /> WhatsApp Instead
            </a>
          </div>

          <p className="text- leading-[1.6] text-[#0B1B33]/45 mt-5 flex gap-1.5"><ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-0.5" />By submitting, you agree to our privacy policy. We never share your details. Emergency? Call, do not book online.</p>
        </form>

        {/* Sidebar */}
        <div className="space-y-5 lg:sticky lg:top-6 self-start">
          <div className="bg-[#0B1B33] rounded- sm:rounded- p-6 sm:p-7 text-white overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w- h- bg-[#D9A24B]/15 blur- rounded-full pointer-events-none" />
            <h3 className="font-semibold text- mb-5 flex items-center gap-2"><Building2 className="w-4 h-4 text-[#D9A24B]" /> Practising Hospitals</h3>
            <div className="space-y-0">
              {hospitals.map((h, idx) => (
                <div key={h.name} className={`flex gap-3 py-4 ${idx!== hospitals.length - 1? "border-b border-white/10" : ""}`}>
                  <div className="w-9 h-9 rounded-full bg-white/10 grid place-items-center shrink-0 mt-0.5"><MapPin className="w-4 h-4 text-white/70" /></div>
                  <div className="min-w-0 flex-1"><p className="text-[13.5px] font-semibold leading-tight">{h.name}</p><p className="text-white/50 text- mt-1 leading-[1.5] line-clamp-2">{h.address?.[0]}</p><a href={`tel:${h.tel?.replace(/\s/g, "")}`} className="inline-flex items-center gap-1 text-[#D9A24B] text- font-bold mt-1.5 hover:underline">{h.tel} <ChevronRight className="w-3 h-3" /></a></div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-white/10 backdrop-blur rounded-xl px-4 py-3 border border-white/10 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#D9A24B] shrink-0" /><p className="text- text-white/70"><span className="text-white font-semibold">Hours:</span> Mon - Fri 08:00 - 17:00 • Sat by appointment</p>
            </div>
          </div>

          <div className="bg-white rounded- border border-black/[0.06] p-6 shadow-sm">
            <h4 className="font-semibold text-[#0B1B33] text- mb-3.5 flex items-center gap-2"><Clock className="w-4 h-4 text-[#D9A24B]" /> What to Bring</h4>
            <ul className="space-y-2.5 text- leading-[1.6] text-[#0B1B33]/70">
              {["ID & Medical aid card", "Previous X-rays / MRI on CD/USB", "Current medication list", "Referral letter if available"].map(i => (
                <li key={i} className="flex gap-2.5 items-start"><span className="w-5 h-5 rounded-full bg-[#D9A24B]/12 grid place-items-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3 text-[#D9A24B]" /></span>{i}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FFFBF0] border border-[#D9A24B]/20 rounded- p-5">
            <p className="text- font-bold uppercase tracking-widest text-[#D9A24B] mb-1">Need urgent help?</p>
            <p className="text- leading-[1.6] text-[#0B1B33]/70 mb-3">For fractures, severe pain or trauma, please call directly.</p>
            <a href="tel:0136553057" className="inline-flex h-10 px-5 rounded-full bg-[#D9A24B] text-white text- font-bold items-center gap-2 hover:bg-[#c89131] transition"><Phone className="w-3.5 h-3.5" /> Call 013 655 3057/8</a>
          </div>
        </div>
      </section>
    </main>
  );
}