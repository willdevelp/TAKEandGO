"use client"

import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#3C2A21] text-[#fef7f1] px-10">
      <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo + description */}
        <div className="">
          <div className="flex items-center gap-4 mb-6">
            <Image 
                src="/take.jpg" 
                alt="Logo Mon Café" 
                width={100} 
                height={100}
                className="rounded-full w-15 h-15"
            />
            <p>TAKE and GO</p>
          </div>
          <p className="text-sm text-gray-300">
            Un lieu chaleureux pour savourer des cafés d’exception, des pâtisseries artisanales et des moments de détente.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Accueil</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">À propos</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Douala, Cameroun
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +237 699 12 34 56
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contact@moncafe.com
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <div className="bg-[#6F4E37] p-3 rounded-full hover:bg-[#8B5E3C] transition">
              <FaFacebookF />
            </div>
            <div className="bg-[#6F4E37] p-3 rounded-full hover:bg-[#8B5E3C] transition">
              <FaInstagram />
            </div>
            <div className="bg-[#6F4E37] p-3 rounded-full hover:bg-[#8B5E3C] transition">
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      {/* Bas du footer */}
      <div className="border-t border-[#6F4E37] text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Mon Café. Tous droits réservés.
      </div>
    </footer>
  )
}