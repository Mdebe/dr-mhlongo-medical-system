import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { BottomCTA } from "@/components/layout/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F1] text-[#101826] font-sans antialiased">
      <TopBar />
      <Navbar />
      <main> 
        <Hero />
        <Services />
        <StatsBar />
        <About />
        <BottomCTA />
      </main>
    </div>
  );
}