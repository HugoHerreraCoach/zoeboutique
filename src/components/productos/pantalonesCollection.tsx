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
        name: 'Jean stelar urbano',
        price: 50.00,
        imageUrl: '/images/productos/pantalon1.jpg',
        href: '/productos/enterizo-alma-libre',
    },
    {
        id: 2,
        name: 'Jean bootcut Glam',
        price: 49.00,
        imageUrl: '/images/productos/pantalon2.jpg',
        href: '/productos/panralon-rojo-jardin',
    },
    {
        id: 3,
        name: 'Jean sky roto',
        price: 48.00,
        imageUrl: '/images/productos/pantalon3.jpg',
        href: '/productos/panralon-verano-beige',
    },
    {
        id: 4,
        name: 'Jean sculpt 2 botones',
        price: 48.00,
        imageUrl: '/images/productos/pantalon4.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 5,
        name: 'Jeans black',
        price: 48.00,
        imageUrl: '/images/productos/pantalon5.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 6,
        name: 'Jean Mom Fit arena',
        price: 48.00,
        imageUrl: '/images/productos/pantalon6.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 7,
        name: 'Jean Mom rígido',
        price: 48.00,
        imageUrl: '/images/productos/pantalon7.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
    {
        id: 8,
        name: 'Jean Jogger Denim',
        price: 50.00,
        imageUrl: '/images/productos/pantalon8.jpg',
        href: '/productos/enterizo-rojo-fuego',
    },
];

// Usamos nuestro componente reutilizable para mostrar la nueva colección
export default function PantalonesCollection() {
    return (
        <ProductGrid
            title="Colección de Pantalones"
            addBottomPadding={true}
            products={sportswearProducts}
            categoryHref="https://wa.link/ypb7xv"
            buttonText="Comprar pantalón"
        />
    );
}
