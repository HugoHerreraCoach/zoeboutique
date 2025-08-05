// src/components/home/HeroSection.tsx

import Link from 'next/link';
import Image from 'next/image'; // 1. Importar el componente Image

export default function HeroSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-[90vh] text-center text-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/homeHeader.jpg" 
                    alt="Modelo luciendo joyería de Zoe Boutique"
                    layout="fill" 
                    objectFit="cover" 
                    priority 
                    quality={80} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            </div>

            {/* Contenido Principal */}
            <div className="z-10 flex flex-col justify-center items-center px-4">
                {/* Título Principal */}
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium tracking-wider uppercase">
                    ZOE BOUTIQUE
                </h1>
                <p className="mt-4 mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl font-sans">
                    Conoce toda nuestra colección de productos.
                </p>

                {/* Botón de Acción */}
                <Link
                    href="https://wa.link/pxluiq"
                    className="font-sans bg-white text-gray-900 py-3 px-8 tracking-widest text-lg lg:text-xl
                     hover:bg-opacity-90 transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                    Comprar ahora
                </Link>
            </div>
        </section>
    );
}
