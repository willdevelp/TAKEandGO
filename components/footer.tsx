// "use client"

// import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
// import Image from "next/image"

// export default function Footer() {
//   return (
//     <footer className="bg-[#3C2A21] text-[#fef7f1] px-10">
//       <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
//         {/* Logo + description */}
//         <div className="">
//           <div className="flex items-center gap-4 mb-6">
//             <Image 
//                 src="/take.jpg" 
//                 alt="Logo Mon Café" 
//                 width={100} 
//                 height={100}
//                 className="rounded-full w-15 h-15"
//             />
//             <p>TAKE and GO</p>
//           </div>
//           <p className="text-sm text-gray-300">
//             Un lieu chaleureux pour savourer des cafés d’exception, des pâtisseries artisanales et des moments de détente.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Navigation</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li className="hover:text-white cursor-pointer">Accueil</li>
//             <li className="hover:text-white cursor-pointer">Menu</li>
//             <li className="hover:text-white cursor-pointer">À propos</li>
//             <li className="hover:text-white cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact</h3>
//           <ul className="space-y-3 text-gray-300">
//             <li className="flex items-center gap-2">
//               <FaMapMarkerAlt /> Douala, Cameroun
//             </li>
//             <li className="flex items-center gap-2">
//               <FaPhoneAlt /> +237 699 12 34 56
//             </li>
//             <li className="flex items-center gap-2">
//               <FaEnvelope /> contact@moncafe.com
//             </li>
//           </ul>
//         </div>

//         {/* Réseaux sociaux */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
//           <div className="flex gap-4">
//             <div className="bg-[#6F4E37] p-3 rounded-full hover:bg-[#8B5E3C] transition">
//               <FaFacebookF />
//             </div>
//             <div className="bg-[#6F4E37] p-3 rounded-full hover:bg-[#8B5E3C] transition">
//               <FaInstagram />
//             </div>
//             <div className="bg-[#6F4E37] p-3 rounded-full hover:bg-[#8B5E3C] transition">
//               <FaTwitter />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Bas du footer */}
//       <div className="border-t border-[#6F4E37] text-center py-4 text-sm text-gray-400">
//         © {new Date().getFullYear()} Mon Café. Tous droits réservés.
//       </div>
//     </footer>
//   )
// }


// components/footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/carte", label: "Speisekarte" },
  { href: "/a-propos", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
  { href: "/panier", label: "Warenkorb" },
];

const legal = [
  { href: "/politique-confidentialite", label: "Datenschutz" },
  { href: "/mentions-legales", label: "Impressum" },
  { href: "/cgv", label: "AGB" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#2A1D16] text-[#F0E6D2]">
      {/* Décor */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D4A574]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#B8865B]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#F0E6D2_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ---------- Newsletter ---------- */}
        <div className="border-b border-white/10 py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D4A574]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A574]">
                  Newsletter
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
                Erhalten Sie unsere Angebote und
                <br />
                <span className="italic text-[#D4A574]">kulinarische Neuigkeiten.</span>
              </h2>
            </div>

            <form onSubmit={handleSubscribe} className="w-full">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.com"
                  aria-label="Ihre E-Mail-Adresse"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur transition-all duration-200 focus:border-[#D4A574] focus:bg-white/10 focus:ring-4 focus:ring-[#D4A574]/15"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#D4A574] px-6 py-4 text-sm font-semibold text-[#2A1D16] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  {subscribed ? (
                    <>
                      <FaCheckCircle className="h-3.5 w-3.5" />
                      Angemeldet
                    </>
                  ) : (
                    <>
                      Abonnieren
                      <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 text-xs text-white/40">
                Kein Spam. Abmeldung mit einem Klick.
              </p>
            </form>
          </div>
        </div>

        {/* ---------- Colonnes ---------- */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/take.jpg"
                  alt="Take and Go"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  TAKE <span className="text-[#D4A574]">&</span> GO
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Schweizer Kaffee
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              Ein gemütlicher Ort für außergewöhnlichen Kaffee, handgemachtes Gebäck
              und entspannte Momente.
            </p>

            {/* Réseaux */}
            <div className="mt-7 flex gap-3">
              {[
                { icon: FaInstagram, label: "Instagram", href: "#" },
                { icon: FaFacebookF, label: "Facebook", href: "#" },
                { icon: FaTwitter, label: "Twitter", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A574] hover:bg-[#D4A574] hover:text-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A574]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#D4A574] transition-all duration-300 group-hover:w-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A574]">
              So finden Sie uns
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              {[
                { icon: FaMapMarkerAlt, text: "Douala, Kamerun" },
                { icon: FaPhoneAlt, text: "+237 699 12 34 56", href: "tel:+237699123456" },
                {
                  icon: FaEnvelope,
                  text: "contact@takeandgo.com",
                  href: "mailto:contact@takeandgo.com",
                },
                { icon: FaClock, text: "Mo – So · 7:00 – 22:00 Uhr" },
              ].map(({ icon: Icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/8">
                    <Icon className="h-3.5 w-3.5 text-[#D4A574]" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="pt-2 text-white/65 transition-colors hover:text-white"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="pt-2 text-white/65">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A574]">
              Bestellen
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Bestellen Sie online und holen Sie Ihr Getränk ohne Wartezeit ab.
            </p>
            <Link
              href="/carte"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4A574] px-5 py-3 text-sm font-semibold text-[#2A1D16] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
            >
              Speisekarte ansehen
              <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-white/70">
                Jetzt geöffnet · bis 22 Uhr
              </span>
            </div>
          </div>
        </div>

        {/* ---------- Bas ---------- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Take and Go. Alle Rechte vorbehalten.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legal.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-white/80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-1.5">
            Mit <span className="text-[#D4A574]">♥</span> in Douala gemacht
          </p>
        </div>
      </div>
    </footer>
  );
}