// src/components/productos/CasacasCollection.tsx
import ProductGrid from '@/components/ui/ProductGrid';

// Definimos el tipo de producto
type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    href: string;
};

// Creamos una lista de productos de ropa deportiva
const sportswearProducts: Product[] = [
    {
        id: 1,
        name: 'Abrigo corderoy negro',
        price: 55.00,
        imageUrl: '/images/home/casaca1.jpg',
        href: '/productos/enterizo-alma-libre',
    },
    {
        id: 2,
        name: 'chaqueta Denim rebelde',
        price: 55.00,
        imageUrl: '/images/home/casaca2.jpg',
        href: '/productos/casaca-rojo-jardin',
    },
    {
        id: 3,
        name: '⁠Abrigo Plush Glam',
        price: 55.00,
        imageUrl: '/images/home/casaca3.jpg',
        href: '/productos/casaca-verano-beige',
    },
    {
        id: 4,
        name: 'Abrigo Silueta',
        price: 50.00,
        imageUrl: '/images/home/casaca4.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 5,
        name: 'Casaca Denim cozy',
        price: 55.00,
        imageUrl: '/images/home/casaca5.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 6,
        name: 'chaqueta Denim rebelde',
        price: 55.00,
        imageUrl: '/images/home/casaca6.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
];

// Usamos nuestro componente reutilizable para mostrar la nueva colección
export default function CasacasCollection() {
    return (
        <ProductGrid
            title="Colección de Casacas"
            products={sportswearProducts}
            categoryHref="https://wa.link/h5sr1l"
            buttonText="Comprar casaca"
        />
    );
}
