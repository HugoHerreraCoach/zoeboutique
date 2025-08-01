// src/components/ui/ProductGrid.tsx
import Image from 'next/image';
import Link from 'next/link';

// Definimos un tipo de dato reutilizable para nuestros productos
type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    href: string;
};

// El componente de la tarjeta de producto individual
function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={product.href} className="group text-center">
            <div className="relative w-full overflow-hidden bg-gray-100 aspect-[3/4]">
                <Image
                    src={product.imageUrl}
                    alt={`Imagen de ${product.name}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
            <div className="mt-4">
                <h3 className="font-serif text-sm uppercase tracking-wider text-gray-800">
                    {product.name}
                </h3>
                <p className="mt-1 font-sans text-base text-gray-600">
                    {product.price.toFixed(2)} PEN
                </p>
            </div>
        </Link>
    );
}

// Definimos las propiedades que nuestro componente genérico aceptará
type ProductGridProps = {
    title: string;
    products: Product[];
    categoryHref: string;
    buttonText: string;
    addBottomPadding?: boolean; // Prop opcional para añadir padding inferior
};

// El componente genérico para mostrar la cuadrícula de productos
export default function ProductGrid({ title, products, categoryHref, buttonText, addBottomPadding = false }: ProductGridProps) {
    return (
        // Aplicamos padding inferior solo si la prop es true
        <section className={`pt-16 sm:pt-24 ${addBottomPadding ? 'pb-16 sm:pb-24' : ''}`}>
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-center uppercase tracking-widest text-gray-800">
                    {title}
                </h2>
                <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Link
                        href={categoryHref}
                        className="font-sans inline-block border border-gray-400 py-3 px-10 text-sm uppercase tracking-widest
                       text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
