// src/components/home/SaleBanner.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function SaleBanner() {
    return (
        <section className="relative">
            {/* Este div ahora se extiende a todo lo ancho, ya que no está dentro de un 'container' */}
            <div className="relative flex items-center justify-center text-center text-white aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/7] overflow-hidden">
                {/* Imagen de Fondo Optimizada */}
                <Image
                    src="/images/home/saleBackground.jpg" // Asegúrate de tener una imagen en esta ruta
                    alt="Modelo vistiendo ropa de la nueva colección en oferta"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Capa de Gradiente Oscuro para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                {/* Contenido de la Oferta */}
                <div className="relative z-10 flex flex-col items-center px-4">
                    <h2 className="font-serif text-3xl md:text-5xl font-medium uppercase tracking-wider">
                        20% DESCUENTO
                    </h2>
                    <p className="font-serif mt-2 text-xl md:text-2xl uppercase tracking-wider">
                        EN TU PRIMERA COMPRA
                    </p>
                    <Link
                        href="/ofertas"
                        className="font-sans mt-6 bg-gray-900 bg-opacity-80 text-white py-2 px-8 text-lg lg:text-xl tracking-widest
                       hover:bg-opacity-100 transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                        Comprar ahora
                    </Link>
                </div>
            </div>
        </section>
    );
}
