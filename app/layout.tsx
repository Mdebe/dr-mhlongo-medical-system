import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";

export const metadata: Metadata = {
  title: {
    default: "Dr Nkosinathi Mhlongo | Orthopaedic Surgeon - Witbank",
    template: "%s | Dr N Mhlongo",
  },
  description: "Expert orthopaedic surgeon in Witbank. Joint replacement, trauma, paediatric orthopaedics. Emalahleni Private & Life Cosmos Hospital.",
  metadataBase: new URL("https://drmhlongo.co.za"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F7F5F1] antialiased overflow-x-hidden">
        <TopBar />
        <Navbar />
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}