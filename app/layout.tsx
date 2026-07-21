import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr Nkosinathi Mhlongo | Orthopaedic Surgeon",
  description: "Specialist orthopaedic care focused on restoring mobility, reducing pain, and improving quality of life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-[family-name:var(--font-body)] antialiased tracking-[-0.01em] bg-[#F7F5F1] text-[#101826] text- leading-[1.7]">
        {children}
      </body>
    </html>
  );
}