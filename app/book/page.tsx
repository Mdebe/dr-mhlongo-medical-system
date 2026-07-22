"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck, Phone, Clock, MapPin, ShieldCheck, ArrowLeft, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { hospitals } from "@/lib/data";

const services = [
  "Adult Trauma Consultation",
  "Paediatric Orthopaedics",
  "Hip Replacement",
  "Knee Replacement",
  "Joint Pain / Arthritis",
  "Fracture / Injury",
  "Limb Reconstruction",
  "Second Opinion",
];

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
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your API / Resend / Supabase
    // await fetch('/api/book', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dr Mhlongo team, I would like to book an appointment:\nName: ${form.name}\nPhone: ${form.phone}\nHospital: ${form.hospital}\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
  );

  if (success) {
    return (
      <main className="min-h-screen bg-[#F7F5F1] grid place-items-center px-6 py-20">
        <div className="w-full max-w- bg-white rounded- p-8 sm:p-10 text-center shadow-[0_20px_60px_rgba(11,27,51,0.08)] border border-black/[0.06]">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 grid place-items-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="font-serif text- font-bold text-[#0B1B33] mb-3">Appointment Request Received</h1>
          <p className="text- leading-[1.7] text-[#0B1B33]/70 mb-8">Thank you {form.name.split(" ")[0]}. Our reception team will confirm your appointment within 2 hours during working hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/" variant="dark" size="lg" className="w-full sm:w-auto">Back to Home</Button>
            <Button href={`https://wa.me/27136553057?text=${whatsappMessage}`} variant="primary" size="lg" className="w-full sm:w-auto gap-2"><MessageCircle className="w-4 h-4" /> Message on WhatsApp</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F5F1]">
      {/* Header */}
      <section className="bg-[#0B1B33] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D9A24B]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-14 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text- font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
            <div>
              <SectionLabel light withDot>Book an Appointment</SectionLabel>
              <h1 className="font-serif text- sm:text- leading-[0.95] tracking-tight font-bold text-white mt-2 mb-4">Take the First Step to a Pain-Free Life</h1>
              <p className="text-white/65 text-[15.5px] leading-[1.7] max-w-xl">Choose your preferred hospital, service and date. Our team will confirm within 2 hours.</p>
            </div>
            <div className="hidden lg:flex gap-3 justify-end pb-2">
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D9A24B]/20 grid place-items-center"><Clock className="w-5 h-5 text-[#D9A24B]" /></div>
                <div><p className="text-white text- font-semibold">Mon - Fri</p><p className="text-white/60 text-">08:00 - 17:00</p></div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center"><Phone className="w-5 h-5 text-white" /></div>
                <div><p className="text-white text- font-semibold">Emergency?</p><p className="text-[#D9A24B] text- font-bold">013 655 3057</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 lg:py-14 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded- border border-black/[0.06] p-6 sm:p-8 lg:p-9 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text- font-bold text-[#0B1B33]">Patient Details</h2>
            <span className="inline-flex items-center gap-1.5 text- font-bold tracking-widest uppercase bg-[#F7F5F1] border border-black/5 px-3 py-1.5 rounded-full text-[#0B1B33]/60"><ShieldCheck className="w-3.5 h-3.5" /> Secure & Confidential</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} placeholder="e.g. Thabo Nkosi" className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- transition-all" />
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Phone Number *</label>
              <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="0 82 123 4567" className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- transition-all" />
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Email Address</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@email.com" className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- transition-all" />
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Preferred Hospital *</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0B1B33]/40 pointer-events-none" />
                <select required name="hospital" value={form.hospital} onChange={handleChange} className="w-full h-12 pl-10 pr-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- appearance-none">
                  {hospitals.map((h) => <option key={h.name} value={h.name}>{h.name}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Service Needed *</label>
              <select required name="service" value={form.service} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text-">
                <option value="">Select a service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Preferred Date *</label>
              <div className="relative">
                <CalendarCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0B1B33]/40 pointer-events-none" />
                <input required name="date" value={form.date} onChange={handleChange} type="date" min={new Date().toISOString().split('T')[0]} className="w-full h-12 pl-10 pr-4 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text-" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="text- font-semibold text-[#0B1B33] mb-2 block">Tell us more (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your pain, injury or previous surgery..." className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FCFBF9] focus:bg-white focus:border-[#D9A24B] focus:ring-4 focus:ring-[#D9A24B]/15 outline-none text- resize-none" />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button disabled={loading} type="submit" className="inline-flex h-12 px-7 rounded-full bg-[#D9A24B] hover:bg-[#c89131] text-white font-semibold text-[14.5px] items-center justify-center gap-2 transition-all disabled:opacity-60 w-full sm:w-auto">
              {loading? "Sending..." : <><Send className="w-4 h-4" /> Request Appointment</>}
            </button>
            <a href={`https://wa.me/27136553057?text=${whatsappMessage}`} target="_blank" className="inline-flex h-12 px-7 rounded-full bg-[#0B1B33] hover:bg-[#122a50] text-white font-semibold text-[14.5px] items-center justify-center gap-2 w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" /> WhatsApp Instead
            </a>
          </div>

          <p className="text-[11.5px] leading-[1.6] text-[#0B1B33]/50 mt-5">By submitting, you agree to our practice privacy policy. We never share your details. Emergency? Please call, do not book online.</p>
        </form>

        {/* Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="bg-[#0B1B33] rounded- p-6 sm:p-7 text-white">
            <h3 className="font-semibold text- mb-5">Practising Hospitals</h3>
            <div className="space-y-4">
              {hospitals.map(h => (
                <div key={h.name} className="flex gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="w-9 h-9 rounded-full bg-white/10 grid place-items-center shrink-0"><MapPin className="w-4 h-4 text-white/70" /></div>
                  <div><p className="text-[13.5px] font-semibold leading-tight">{h.name}</p><p className="text-white/55 text- mt-1 leading-[1.5]">{h.address[0]}</p><p className="text-[#D9A24B] text- font-bold mt-1">{h.tel}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded- border border-black/[0.06] p-6">
            <h4 className="font-semibold text-[#0B1B33] text- mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-[#D9A24B]" /> What to Bring</h4>
            <ul className="space-y-2.5 text-[13.5px] leading-[1.6] text-[#0B1B33]/70">
              <li className="flex gap-2"><span className="text-[#D9A24B]">•</span> ID & Medical aid card</li>
              <li className="flex gap-2"><span className="text-[#D9A24B]">•</span> Previous X-rays / MRI on CD</li>
              <li className="flex gap-2"><span className="text-[#D9A24B]">•</span> Current medication list</li>
              <li className="flex gap-2"><span className="text-[#D9A24B]">•</span> Referral letter if available</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}