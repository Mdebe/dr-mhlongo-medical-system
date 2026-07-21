"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* Main Navbar */}
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-5 group shrink-0"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#D9A24B] bg-[#0B1B33] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-2xl font-black tracking-wide text-white">
                NM
              </span>
            </div>

            <div className="leading-none">
              <p className="text-[13px] uppercase tracking-[0.32em] font-semibold text-[#0B1B33]">
                Dr Nkosinathi
              </p>

              <h1 className="text-[32px] font-black tracking-tight text-[#0B1B33]">
                MHLONGO
              </h1>

              <p className="text-[11px] uppercase tracking-[0.34em] font-bold text-[#D9A24B] mt-1">
                Bones Restored Best
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[16px] font-semibold transition-all duration-300
                ${
                  index === 0
                    ? "text-[#0B1B33]"
                    : "text-slate-600 hover:text-[#0B1B33]"
                }

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:bg-[#D9A24B]
                after:w-0
                hover:after:w-full
                after:transition-all
                after:duration-300
                ${
                  index === 0
                    ? "after:w-full"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            <Button
              href="#book"
              className="hidden md:flex items-center gap-2 rounded-full h-14 px-8 bg-[#D9A24B] hover:bg-[#c89131] text-white shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </Button>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-12 h-12 rounded-full bg-[#0B1B33] text-white flex items-center justify-center"
            >
              {open ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[340px] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-24 px-6 border-b">

          <h2 className="font-black text-2xl text-[#0B1B33]">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

        <div className="px-6 py-8 flex flex-col">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-5 border-b border-slate-100 text-lg font-semibold text-[#0B1B33] hover:text-[#D9A24B] transition-colors"
            >
              {link.label}

              <ChevronRight className="w-5 h-5" />
            </Link>
          ))}

          <Button
            href="#book"
            className="mt-10 h-14 rounded-full bg-[#D9A24B] hover:bg-[#c89131] text-white font-semibold"
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Appointment
          </Button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Mon – Fri 08:00 – 17:00
          </p>

        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}
    </header>
  );
}