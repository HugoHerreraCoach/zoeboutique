// src/app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import FeaturedCollection from "@/components/home/FeaturedCollection"; // 👈 1. Importa el nuevo componente
import SaleBanner from "@/components/home/SaleBanner";
import SportswearCollection from "@/components/home/SportswearCollection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection /> 
      <SportswearCollection />
      <SaleBanner />
    </>
  );
}