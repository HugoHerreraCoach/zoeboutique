// src/components/productos/vestidosCollection.tsx
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
        price: 75.00,
        imageUrl: '/images/home/vestido1.jpg',
        href: '',
    },
    {
        id: 2,
        name: 'Vestido princesa',
        price: 70.00,
        imageUrl: '/images/home/vestido2.jpg',
        href: '',
    },
    {
        id: 3,
        name: 'Vestido divina',
        price: 70.00,
        imageUrl: '/images/home/vestido3.jpg',
        href: '',
    },
    {
        id: 4,
        name: 'Enterizo rojo fuego',
        price: 75.00,
        imageUrl: '/images/home/vestido4.jpg',
        href: '',
    },
    {
        id: 5,
        name: 'Enterizo Esmeralda',
        price: 75.00,
        imageUrl: '/images/home/vestido5.jpg',
        href: '',
    },
    {
        id: 6,
        name: 'Vestido Verde Limón',
        price: 70.00,
        imageUrl: '/images/home/vestido6.jpg',
        href: '',
    },
    {
        id: 7,
        name: 'Vestido Fucsia Jardin',
        price: 70.00,
        imageUrl: '/images/home/vestido7.jpg',
        href: '',
    },
    {
        id: 8,
        name: 'Vestido Angelica ',
        price: 70.00,
        imageUrl: '/images/home/vestido8.jpg',
        href: '',
    },
];

// Ahora el componente es mucho más simple
export default function VestidosCollection() {
    return (
        <ProductGrid
            title="Nuestra Colección de Vestidos"
            products={dressProducts}
            categoryHref="https://wa.link/d66buz"
            buttonText="Comprar vestido"
        />
    );
}
