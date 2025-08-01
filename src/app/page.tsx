// src/app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import FeaturedCollection from "@/components/home/FeaturedColletion";
import SaleBanner from "@/components/home/SaleBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection /> 
      <SaleBanner />
    </>
  );
}