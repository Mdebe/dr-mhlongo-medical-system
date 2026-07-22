"use client";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { hospitals, bookingLinks } from "@/lib/data";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent,setSent]=useState(false);
  return (
    <main className="bg-[#F7F5F1]">
      <section className="bg-[#0B1B33] py-16"><div className="max-w-7xl mx-auto px-5 lg:px-10"><SectionLabel light>Contact Us</SectionLabel><h1 className="font-serif text- sm:text- font-bold text-white leading-[0.95] mt-2">We Are Here to Help</h1></div></section>
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="bg-white rounded- p-7 sm:p-8 border border-black/5">
          <h3 className="font-semibold text-[#0B1B33] text-">Send a Message</h3>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <input required placeholder="Full Name" className="h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] outline-none focus:border-[#D9A24B] text-" />
            <input required placeholder="Phone" className="h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] outline-none focus:border-[#D9A24B] text-" />
            <input placeholder="Email" className="sm:col-span-2 h-12 px-4 rounded-xl border border-black/10 bg-[#FCFBF9] outline-none focus:border-[#D9A24B] text-" />
            <textarea required rows={5} placeholder="How can we help?" className="sm:col-span-2 p-4 rounded-xl border border-black/10 bg-[#FCFBF9] outline-none focus:border-[#D9A24B] text- resize-none" />
          </div>
          <button className="mt-6 h-12 w-full sm:w-auto px-7 rounded-full bg-[#D9A24B] text-white font-semibold inline-flex items-center justify-center gap-2">{sent?"Message Sent":"Send Message"}<Send className="w-4 h-4" /></button>
          {sent && <p className="text-green-600 text- mt-3 font-medium">Thank you, we will respond shortly.</p>}
        </form>
        <div className="space-y-6">
          <div className="bg-[#0B1B33] rounded- p-7 text-white">
            <h4 className="font-semibold mb-4">Direct Contacts</h4>
            <div className="space-y-3 text-"><p className="flex gap-2.5"><Phone className="w-4 h-4 text-[#D9A24B]" /> 013 655 3057 / 8</p><p className="flex gap-2.5"><Mail className="w-4 h-4 text-[#D9A24B]" /> info@drmhlongo.co.za</p><p className="flex gap-2.5"><MapPin className="w-4 h-4 text-[#D9A24B]" /> Witbank, Mpumalanga</p></div>
          </div>
          {hospitals.map(h=>(
            <div key={h.slug} className="bg-white rounded- p-6 border border-black/5"><p className="font-semibold text-[#0B1B33]">{h.name}</p><p className="text- text-[#0B1B33]/60 mt-1">{h.address.join(", ")}</p></div>
          ))}
        </div>
      </section>
    </main>
  );
}