import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { BottomCTA } from "@/components/layout/FooterCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101826] font-sans antialiased selection:bg-[#D9A24B]/20">
      {/* TopBar - NOT sticky, scrolls away */}
      <TopBar />

      {/* Navbar - sticky, now alone */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="relative bg-white">
        <Hero />

        {/* Add white spacing wrapper */}
        <div className="bg-white">
          <Services />
        </div>

        <StatsBar />

        <div className="bg-[#F7F5F1]">
          <About />
        </div>

        <BottomCTA />
      </main>

      <Footer />
    </div>
  );
}