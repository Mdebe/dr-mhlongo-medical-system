"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, X, ChevronRight } from "lucide-react";
import { navLinks, bookingLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w- mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h- sm:h-24 flex items-center justify-between gap-4">

          {/* Logo - scales down on mobile */}
          <Link href="/" className="flex items-center gap-3 sm:gap-5 shrink-0 min-w-0">
            <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full border-2 border-[#D9A24B] bg-[#0B1B33] flex items-center justify-center shrink-0">
              <span className="text- sm:text-2xl font-black text-white">NM</span>
            </div>
            <div className="leading-none min-w-0">
              <p className="text- sm:text- uppercase tracking-[0.2em] sm:tracking-[0.32em] font-semibold text-[#0B1B33] truncate">Dr Nkosinathi</p>
              <h1 className="text- sm:text- font-black tracking-tight text-[#0B1B33] leading-none">MHLONGO</h1>
              <p className="hidden sm:block text- uppercase tracking-[0.34em] font-bold text-[#D9A24B] mt-1">Bones Restored Best</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 shrink-0">
            {navLinks.slice(0,5).map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.label} href={link.href} className={`text- font-semibold transition-colors ${active? "text-[#0B1B33]" : "text-slate-600 hover:text-[#0B1B33]"}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Button href={bookingLinks.primary} className="hidden md:inline-flex h-11 sm:h-14 px-5 sm:px-8 text- sm:text- rounded-full">
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden xl:inline">Book Appointment</span><span className="xl:hidden">Book</span>
            </Button>
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B1B33] text-white grid place-items-center">
              {open? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER - FIXED */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${open? "visible" : "invisible pointer-events-none"}`}>
        {/* Overlay */}
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${open? "opacity-100" : "opacity-0"}`} />
        {/* Panel */}
        <div className={`absolute top-0 right-0 h- w-[88%] max-w- bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open? "translate-x-0" : "translate-x-full"}`}>
          <div className="h- flex items-center justify-between px-5 border-b shrink-0">
            <span className="font-black text-">Menu</span>
            <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-2 py-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between px-4 py-4 rounded-xl text- font-semibold text-[#0B1B33] active:bg-slate-50">
                {link.label} <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
          <div className="p-5 border-t bg-slate-50/50 shrink-0">
            <Button href={bookingLinks.primary} className="w-full h-12 rounded-full text-" onClick={() => setOpen(false) as any}>
              <CalendarCheck className="w-5 h-5" /> Book Appointment
            </Button>
            <p className="text-center text- text-slate-500 mt-3">Mon – Fri 08:00 – 17:00 • {bookingLinks.tel.replace('tel:','')}</p>
          </div>
        </div>
      </div>
    </header>
  );
}