// components/Sidebar.tsx
"use client";

import { LogOut, LayoutDashboard, Coffee, Calendar, Users, ShoppingBag, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Tableau de bord", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Commandes", icon: ShoppingBag, href: "/dashboard/commandes" },
    { name: "Produits", icon: Coffee, href: "/dashboard/produits" },
    { name: "Réservations", icon: Calendar, href: "/dashboard/reservations" },
    { name: "Clients", icon: Users, href: "/dashboard/clients" },
    { name: "Paramètres", icon: Settings, href: "/dashboard/parametres" },
  ];

  return (
    <div className="w-1/5 h-full bg-white fixed border-r border-gray-200 space-y-6 p-4 flex flex-col justify-between min-h-screen">
      <div className="space-y-8">
        {/* Logo & profil */}
        <div className="flex items-center gap-4">
          <Image src="/take.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
          <div>
            <p className="font-bold text-[#3C2A21]">TAKE & GO</p>
            <p className="text-sm text-gray-500">admin@takeandgo.fr</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-[#3C2A21] text-white"
                    : "text-gray-700 hover:bg-amber-50 hover:text-[#3C2A21]"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-8 bg-amber-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Déconnexion */}
      <form action="/api/logout" method="POST">
        <button className="flex items-center justify-center gap-3 w-full border border-red-200 hover:bg-red-50 p-3 rounded-xl transition text-red-600">
          <LogOut size={20} />
          <span className="font-medium">Se déconnecter</span>
        </button>
      </form>
    </div>
  );
}