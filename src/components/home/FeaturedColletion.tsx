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
        name: 'Vestido divina',
        price: 70.00,
        imageUrl: '/images/home/vestido3.jpg',
        href: '#',
    },
    {
        id: 2,
        name: 'Enterizo deportivo Azul',
        price: 50.00,
        imageUrl: '/images/home/deporte6.jpg',
        href: '/',
    },
    {
        id: 3,
        name: 'chaqueta Denim rebelde',
        price: 55.00,
        imageUrl: '/images/home/casaca2.jpg',
        href: '/',
    },
    {
        id: 4,
        name: 'Jeans black',
        price: 48.00,
        imageUrl: '/images/productos/pantalon5.jpg',
        href: '/',
    },
    {
        id: 5,
        name: 'Vestido camisero',
        price: 58.00,
        imageUrl: '/images/productos/exclusivo4.jpg',
        href: '/',
    },
    {
        id: 6,
        name: 'Vestido clásico moderno',
        price: 75.00,
        imageUrl: '/images/productos/exclusivo5.jpg',
        href: '/',
    },
];

// Ahora el componente es mucho más simple
export default function FeaturedCollection() {
    return (
        <ProductGrid
            title="Nuestra Colección"
            addBottomPadding={true}
            products={dressProducts}
            categoryHref="/productos"
            buttonText="Todos los productos"
        />
    );
}
