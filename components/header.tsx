// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   FaShoppingCart, 
//   FaBars,
//   FaTimes 
// } from "react-icons/fa";
// // import { Utilisateur } from '../../lib/data';

// import Image from 'next/image';

// // interface HeaderProps {
// //   utilisateur?: Utilisateur;
// //   panierCount: number;
// // }

// export default function Header () {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#3C2A21] text-[#F0E6D2] sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <Image 
//               src="/take.jpg" 
//               alt="Le Café Parisien Logo"
//               width={40}
//               height={40}
//               className='rounded-full'
//             />
//             <span className="text-xl font-serif font-bold">TAKE <span className="text-sm">AND</span> GO</span>
//           </Link>

//           {/* Navigation Desktop */}
//           <nav className="hidden md:flex space-x-8 items-center">
//             <Link href="/" className="hover:text-[#D4A574] transition-colors duration-300">
//               Accueil
//             </Link>
//             <Link href="/carte" className="hover:text-[#D4A574] transition-colors duration-300">
//               Notre Carte
//             </Link>
//             <Link href="/a-propos" className="hover:text-[#D4A574] transition-colors duration-300">
//               À Propos
//             </Link>
//             <Link href="/contact" className="hover:text-[#D4A574] transition-colors duration-300">
//               Contact
//             </Link>
            
//             {/* Actions utilisateur */}
//             <div className="flex items-center space-x-4 ml-4">
//               <Link href="/panier" className="relative hover:text-[#D4A574] transition-colors duration-300">
//                 <FaShoppingCart className="text-xl" />
//                 {/* {panierCount > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-[#D4A574] text-[#3C2A21] rounded-full w-5 h-5 text-xs flex items-center justify-center">
//                     {panierCount}
//                   </span>
//                 )} */}
//               </Link>
//             </div>
//           </nav>

//           {/* Menu Mobile */}
//           <button 
//             className="md:hidden text-xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Navigation Mobile */}
//         {menuOpen && (
//           <nav className="md:hidden mt-4 space-y-4 pb-4">
//             <Link href="/" className="block hover:text-[#D4A574] transition-colors duration-300">
//               Accueil
//             </Link>
//             <Link href="/carte" className="block hover:text-[#D4A574] transition-colors duration-300">
//               Notre Carte
//             </Link>
//             <Link href="/a-propos" className="block hover:text-[#D4A574] transition-colors duration-300">
//               À Propos
//             </Link>
//             <Link href="/contact" className="block hover:text-[#D4A574] transition-colors duration-300">
//               Contact
//             </Link>
            
//             <div className="pt-4 border-t border-[#4A3728] space-y-4">
//               <Link href="/panier" className="flex items-center space-x-2 hover:text-[#D4A574] transition-colors duration-300">
//                 <FaShoppingCart />
//                 <span>Panier </span>
//               </Link>
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// // interface LayoutProps {
// //   children: React.ReactNode;
// //   utilisateur?: Utilisateur;
// //   panierCount?: number;
// // }

// // const Layout = ({ children, utilisateur, panierCount = 0 }: LayoutProps) => {
// //   return (
// //     <>
// //       <Header utilisateur={utilisateur} panierCount={panierCount} />
// //       {children}
// //     </>
// //   );
// // };

// // export default Layout;




// components/header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useCart } from "@/app/(full)/context/Cartcontext";
// import { useCart } from "@/context/Cartcontext";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "Notre Carte" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  /* Ombre + fond au scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Ferme le menu mobile au changement de route */
  useEffect(() => setMenuOpen(false), [pathname]);

  /* Bloque le scroll quand le menu mobile est ouvert */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#3C2A21]/8 bg-[#FDFBF8]/85 shadow-[0_10px_30px_-20px_rgba(60,42,33,0.5)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#FDFBF8]/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-20 items-center justify-between gap-6">
            {/* ---------- Logo ---------- */}
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-[#3C2A21]/10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/take.jpg"
                  alt="Take and Go"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                  priority
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-tight text-[#3C2A21]">
                  TAKE <span className="text-[#B8865B]">&</span> GO
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3C2A21]/45">
                  Café Parisien
                </span>
              </span>
            </Link>

            {/* ---------- Navigation desktop ---------- */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "text-[#3C2A21]"
                        : "text-[#3C2A21]/60 hover:text-[#3C2A21]"
                    }`}
                  >
                    {label}
                    {/* soulignement animé */}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left rounded-full bg-[#B8865B] transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ---------- Actions ---------- */}
            <div className="flex items-center gap-2">
              {/* Panier */}
              <Link
                href="/panier"
                aria-label={`Panier (${totalItems} article${totalItems > 1 ? "s" : ""})`}
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#3C2A21]/12 bg-white text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3C2A21] hover:bg-[#3C2A21] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
              >
                <FaShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D4A574] px-1.5 font-serif text-[11px] font-bold text-[#3C2A21] shadow-[0_4px_10px_-2px_rgba(212,165,116,0.9)] ring-2 ring-[#FDFBF8]">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </Link>

              {/* CTA desktop */}
              <Link
                href="/carte"
                className="group hidden items-center gap-2 rounded-full bg-[#3C2A21] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_-14px_rgba(60,42,33,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] lg:inline-flex"
              >
                Commander
                <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              {/* Burger mobile */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3C2A21]/12 bg-white text-[#3C2A21] transition-colors hover:bg-[#F0E6D2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] md:hidden"
              >
                {menuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Menu mobile (overlay) ---------- */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-[#1F140E]/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panneau */}
        <nav
          className={`absolute right-0 top-20 mx-4 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-[#FDFBF8] shadow-[0_30px_70px_-30px_rgba(60,42,33,0.55)] transition-all duration-300 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <ul className="divide-y divide-[#3C2A21]/8">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center justify-between px-6 py-4 text-base font-medium transition-colors ${
                      active
                        ? "bg-[#F0E6D2]/50 text-[#3C2A21]"
                        : "text-[#3C2A21]/75 hover:bg-[#FBF9F6] hover:text-[#3C2A21]"
                    }`}
                  >
                    {label}
                    <FaArrowRight className="h-3 w-3 text-[#B8865B]" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-[#3C2A21]/8 bg-[#FBF9F6]/60 p-4">
            <Link
              href="/carte"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#3C2A21] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2A1D16]"
            >
              Commander maintenant
              <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}