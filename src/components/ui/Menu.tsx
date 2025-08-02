// src/components/ui/Menu.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { BsHandbag } from 'react-icons/bs';

// Los enlaces ahora usarán la fuente Open Sans
const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
];

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 bg-white backdrop-blur-md z-40 border-b border-gray-200">
                <div className="container mx-auto flex items-center justify-between p-4">
                    {/* Logo: Hereda la fuente Cormorant del body. Mantenemos font-serif por claridad. */}
                    <Link href="/" className="font-serif text-2xl tracking-widest text-black">
                        ZOE BOUTIQUE
                    </Link>

                    {/* Menú de Escritorio: Aplicamos font-sans para usar Open Sans */}
                    <nav className="hidden md:flex items-center gap-8 font-sans">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-gray-600 text-xl hover:text-black transition-colors">
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/cesta" className="flex items-center gap-2 text-gray-600 text-xl hover:text-black transition-colors">
                            Cesta
                            <BsHandbag size={18} className=' text-black'/>
                        </Link>
                    </nav>

                    {/* Iconos Móvil */}
                    <div className="flex items-centertext-black gap-4 md:hidden">
                        <Link href="/cesta">
                            <BsHandbag size={22} className=' text-black'/>
                        </Link>
                        <button onClick={() => setIsMenuOpen(true)}>
                            <CiMenuFries size={28} className=' text-black'/>
                        </button>
                    </div>
                </div>
            </header>

            {/* Panel del Menú Móvil (overlay) */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div
                        className="fixed inset-0 bg-black/30"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                    <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl">
                        <div className="flex justify-end p-4 text-black">
                            <button onClick={() => setIsMenuOpen(false)}>
                                <IoClose size={32} className=' text-black'/>
                            </button>
                        </div>
                        {/* Aplicamos font-sans a los enlaces del menú móvil */}
                        <nav className="flex flex-col p-4 font-sans">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="py-3 text-lg border-b text-black border-gray-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
