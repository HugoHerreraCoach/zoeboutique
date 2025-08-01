// src/components/home/SportswearCollection.tsx
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
        name: 'Conjunto Deportivo',
        price: 50.00,
        imageUrl: '/images/home/deporte1.jpg',
        href: '/productos/enterizo-alma-libre',
    },
    {
        id: 2,
        name: 'deporte Rojo Jardín',
        price: 50.00,
        imageUrl: '/images/home/deporte2.jpg',
        href: '/productos/deporte-rojo-jardin',
    },
    {
        id: 3,
        name: 'Conjunto Deportivo',
        price: 60.00,
        imageUrl: '/images/home/deporte3.jpg',
        href: '/productos/deporte-verano-beige',
    },
    {
        id: 4,
        name: 'Conjunto 3 Piezas',
        price: 60.00,
        imageUrl: '/images/home/deporte4.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 5,
        name: 'Enterizo deportivo Gris',
        price: 60.00,
        imageUrl: '/images/home/deporte5.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 6,
        name: 'Enterizo deportivo Azul',
        price: 50.00,
        imageUrl: '/images/home/deporte6.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 7,
        name: 'Enterizo rojo fuego',
        price: 50.00,
        imageUrl: '/images/home/deporte7.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 8,
        name: 'Conjunto Deportivo',
        price: 60.00,
        imageUrl: '/images/home/deporte8.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
];

// Usamos nuestro componente reutilizable para mostrar la nueva colección
export default function SportswearCollection() {
    return (
        <ProductGrid
            title="Colección Deportiva"
            addBottomPadding={true}
            products={sportswearProducts}
            categoryHref="/deportiva"
            buttonText="Ver todo lo deportivo"
        />
    );
}
