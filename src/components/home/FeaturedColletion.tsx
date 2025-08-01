// src/components/home/FeaturedCollection.tsx
import ProductGrid from '@/components/ui/ProductGrid';

// Definimos el tipo de producto
type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    href: string;
};

// Mantenemos tu lista de productos de vestidos
const dressProducts: Product[] = [
    {
        id: 1,
        name: 'Conjunto Cielo Sereno',
        price: 65.00,
        imageUrl: '/images/home/vestido1.jpg',
        href: '/productos/enterizo-alma-libre',
    },
    {
        id: 2,
        name: 'Vestido Rojo Jardín',
        price: 52.00,
        imageUrl: '/images/home/vestido2.jpg',
        href: '/productos/vestido-rojo-jardin',
    },
    {
        id: 3,
        name: 'Vestido de Verano (Beige)',
        price: 52.00,
        imageUrl: '/images/home/vestido3.jpg',
        href: '/productos/vestido-verano-beige',
    },
    {
        id: 4,
        name: 'Enterizo rojo fuego',
        price: 55.00,
        imageUrl: '/images/home/vestido4.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 5,
        name: 'Enterizo Esmeralda',
        price: 55.00,
        imageUrl: '/images/home/vestido5.jpg',
        href: '/productos/enterizo-esmeralda',
    },
    {
        id: 6,
        name: 'Vestido Verde Limón',
        price: 52.00,
        imageUrl: '/images/home/vestido6.jpg',
        href: '/productos/vestido-verde-limon',
    },
    {
        id: 7,
        name: 'Vestido Fucsia Jardin',
        price: 55.00,
        imageUrl: '/images/home/vestido7.jpg',
        href: '/productos/vestido-fucsia-jardin',
    },
    {
        id: 8,
        name: 'Vestido Noche de Flores',
        price: 55.00,
        imageUrl: '/images/home/vestido8.jpg',
        href: '/productos/vestido-noche-flores',
    },
];

// Ahora el componente es mucho más simple
export default function FeaturedCollection() {
    return (
        <ProductGrid
            title="Nuestra Colección de Vestidos"
            addBottomPadding={true}
            products={dressProducts}
            categoryHref="/productos"
            buttonText="Todos los productos"
        />
    );
}
