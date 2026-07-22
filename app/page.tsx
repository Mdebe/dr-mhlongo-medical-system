import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import AboutUs  from "@/components/sections/AboutSection";
import { Services } from "@/components/sections/Services";
import { StatsBar } from "@/components/sections/StatsBar";
import { BottomCTA } from "@/components/layout/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101826] font-sans antialiased selection:bg-[#D9A24B]/20 overflow-x-clip">
       
      <main className="relative bg-white">
        <Hero />
        <AboutUs/>
        <Services />
        <StatsBar />
        <BottomCTA />
      </main>
    </div>
  );
}