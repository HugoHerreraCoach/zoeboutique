// src/components/productos/Pantalones Collection.tsx
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
        name: 'Vestido parisian',
        price: 65.00,
        imageUrl: '/images/productos/exclusivo1.jpg',
        href: '/productos/enterizo-alma-libre',
    },
    {
        id: 2,
        name: 'Vestido noche pasión',
        price: 65.00,
        imageUrl: '/images/productos/exclusivo2.jpg',
        href: '/productos/panralon-rojo-jardin',
    },
    {
        id: 3,
        name: 'Vestido silueta Denim',
        price: 65.00,
        imageUrl: '/images/productos/exclusivo3.jpg',
        href: '/productos/panralon-verano-beige',
    },
    {
        id: 4,
        name: 'Vestido camisero',
        price: 58.00,
        imageUrl: '/images/productos/exclusivo4.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 5,
        name: 'Vestido clásico moderno',
        price: 75.00,
        imageUrl: '/images/productos/exclusivo5.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
];

// Usamos nuestro componente reutilizable para mostrar la nueva colección
export default function ExclusivoCollection() {
    return (
        <ProductGrid
            title="Colección Exclusiva"
            addBottomPadding={true}
            products={sportswearProducts}
            categoryHref="https://wa.link/ouzc8l"
            buttonText="Comprar Vestido Exclusivo"
        />
    );
}
