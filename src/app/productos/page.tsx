// src/app/page.tsx

import HeroSection from "@/components/productos/HeroSection";
import VestidosCollection from "@/components/productos/VestidosCollection"; 
import SportswearCollection from "@/components/productos/SportswearCollection";
import CasacasCollection from "@/components/productos/CasacasSection";
import PantalonesCollection from "@/components/productos/pantalonesCollection"; 
import ExclusivoCollection from "@/components/productos/ExclusivoCollection";


export default function Productos() {
    return (
        <>
            <HeroSection/>
            <VestidosCollection /> 
            <SportswearCollection />
            <CasacasCollection />
            <PantalonesCollection />
            <ExclusivoCollection />
        </>
    );
}