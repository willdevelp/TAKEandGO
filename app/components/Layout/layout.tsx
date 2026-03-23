"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaShoppingCart, 
  FaBars,
  FaTimes 
} from "react-icons/fa";
import { Utilisateur } from '../../lib/data';

import Image from 'next/image';

interface HeaderProps {
  utilisateur?: Utilisateur;
  panierCount: number;
}

const Header = ({ panierCount }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#3C2A21] text-[#F0E6D2] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/take.jpg" 
              alt="Le Café Parisien Logo"
              width={40}
              height={40}
              className='rounded-full'
            />
            <span className="text-xl font-serif font-bold">TAKE <span className="text-sm">AND</span> GO</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-[#D4A574] transition-colors duration-300">
              Accueil
            </Link>
            <Link href="/carte" className="hover:text-[#D4A574] transition-colors duration-300">
              Notre Carte
            </Link>
            <Link href="/a-propos" className="hover:text-[#D4A574] transition-colors duration-300">
              À Propos
            </Link>
            <Link href="/contact" className="hover:text-[#D4A574] transition-colors duration-300">
              Contact
            </Link>
            
            {/* Actions utilisateur */}
            <div className="flex items-center space-x-4 ml-4">
              <Link href="/panier" className="relative hover:text-[#D4A574] transition-colors duration-300">
                <FaShoppingCart className="text-xl" />
                {panierCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4A574] text-[#3C2A21] rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {panierCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>

          {/* Menu Mobile */}
          <button 
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block hover:text-[#D4A574] transition-colors duration-300">
              Accueil
            </Link>
            <Link href="/carte" className="block hover:text-[#D4A574] transition-colors duration-300">
              Notre Carte
            </Link>
            <Link href="/a-propos" className="block hover:text-[#D4A574] transition-colors duration-300">
              À Propos
            </Link>
            <Link href="/contact" className="block hover:text-[#D4A574] transition-colors duration-300">
              Contact
            </Link>
            
            <div className="pt-4 border-t border-[#4A3728] space-y-4">
              <Link href="/panier" className="flex items-center space-x-2 hover:text-[#D4A574] transition-colors duration-300">
                <FaShoppingCart />
                <span>Panier ({panierCount})</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  utilisateur?: Utilisateur;
  panierCount?: number;
}

const Layout = ({ children, utilisateur, panierCount = 0 }: LayoutProps) => {
  return (
    <>
      <Header utilisateur={utilisateur} panierCount={panierCount} />
      {children}
    </>
  );
};

export default Layout;