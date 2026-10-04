// // app/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   FaStar,
//   FaClock,
//   FaAward,
//   FaLeaf,
//   FaCoffee,
//   FaMugHot,
//   FaCookieBite,
//   FaBirthdayCake,
//   FaQuoteLeft,
//   FaShoppingBag,
//   FaMotorcycle,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// import Header from "@/components/header";
// import Footer from "@/components/footer";

// type Boisson = {
//   id: number;
//   nom: string;
//   image: string;
//   description: string;
//   prix: number;
//   categorie: string;
//   populaire: boolean;
// };

// const formatPrice = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} Fcfa`;

// /* ----- Contenu (à adapter) ----- */

// const valeurs = [
//   {
//     icon: FaLeaf,
//     titre: "100% Bio",
//     texte: "Des grains de café sélectionnés avec soin, cultivés de manière durable et responsable.",
//   },
//   {
//     icon: FaAward,
//     titre: "Expertise",
//     texte: "Nos baristas certifiés maîtrisent parfaitement l'art de la préparation du café.",
//   },
//   {
//     icon: FaClock,
//     titre: "Torréfaction Maison",
//     texte: "Nous torréfions nos grains sur place pour garantir une fraîcheur et un arôme optimaux.",
//   },
// ];

// // Chiffres indicatifs : remplacez-les par vos vrais chiffres.
// const chiffres = [
//   { valeur: "1985", label: "Année de notre ouverture" },
//   { valeur: "25+", label: "Boissons et gourmandises" },
//   { valeur: "10 000+", label: "Clients servis chaque année" },
//   { valeur: "100%", label: "Arabica sélectionné" },
// ];

// const categories = [
//   {
//     icon: FaCoffee,
//     titre: "Cafés et thés",
//     texte: "L'art du café dans sa pure expression, du cappuccino au thé glacé.",
//   },
//   {
//     icon: FaMugHot,
//     titre: "Boissons rafraîchissantes",
//     texte: "Milkshakes et smoothies pour accompagner vos journées ensoleillées.",
//   },
//   {
//     icon: FaCookieBite,
//     titre: "Mangeons local",
//     texte: "Beignets, bouillies et plats locaux, les préférés de nos clients.",
//   },
//   {
//     icon: FaBirthdayCake,
//     titre: "Mignardises",
//     texte: "Des créations artisanales préparées chaque jour pour votre pause.",
//   },
// ];

// const etapes = [
//   {
//     icon: FaCoffee,
//     titre: "Choisissez",
//     texte: "Parcourez notre carte et ajoutez vos boissons et gourmandises préférées au panier.",
//   },
//   {
//     icon: FaShoppingBag,
//     titre: "Commandez",
//     texte: "Validez votre commande en ligne en quelques clics, sans file d'attente.",
//   },
//   {
//     icon: FaMotorcycle,
//     titre: "Savourez",
//     texte: "Récupérez votre commande sur place ou faites-vous livrer à votre porte.",
//   },
// ];

// // Avis d'exemple : remplacez-les par de vrais avis clients.
// const avis = [
//   {
//     nom: "Aïcha N.",
//     role: "Cliente fidèle",
//     texte: "Le meilleur cappuccino de Douala. L'accueil est chaleureux et tout est toujours frais.",
//   },
//   {
//     nom: "Patrick M.",
//     role: "Travaille au café",
//     texte: "Une ambiance calme et propre, idéale pour travailler ou retrouver des amis.",
//   },
//   {
//     nom: "Linda T.",
//     role: "Commande en ligne",
//     texte: "Commande simple, prête rapidement, et les beignets sont délicieux. Je recommande.",
//   },
// ];

// // Horaires d'exemple : remplacez-les par vos vrais horaires.
// const horaires = [
//   { jour: "Lundi – Vendredi", heures: "7h00 – 21h00" },
//   { jour: "Samedi", heures: "8h00 – 22h00" },
//   { jour: "Dimanche", heures: "9h00 – 20h00" },
// ];

// export default function Accueil() {
//   const [boissonsPopulaires, setBoissonsPopulaires] = useState<Boisson[]>([]);

//   useEffect(() => {
//     // Simuler un appel API
//     const populaires: Boisson[] = [
//       {
//         id: 1,
//         nom: "Espresso Classique",
//         image: "/caffee.jpg",
//         description: "Un espresso intense et corsé",
//         prix: 2000,
//         categorie: "chaude",
//         populaire: true,
//       },
//       {
//         id: 2,
//         nom: "Latte Macchiato",
//         image: "/creme.jpg",
//         description: "Lait vapeur, espresso et mousse de lait crémeuse",
//         prix: 2500,
//         categorie: "chaude",
//         populaire: true,
//       },
//       {
//         id: 3,
//         image: "/capuccino.jpg",
//         nom: "Smoothie Tropical",
//         description: "Mangue, ananas et fruits de la passion",
//         prix: 1500,
//         categorie: "sans-alcool",
//         populaire: true,
//       },
//       {
//         id: 4,
//         nom: "Cappuccino",
//         image: "/capuccino.jpg",
//         description: "Espresso, lait chaud et fine mousse onctueuse",
//         prix: 2500,
//         categorie: "chaude",
//         populaire: true,
//       },
//       {
//         id: 5,
//         nom: "Café Crème",
//         image: "/creme.jpg",
//         description: "Un café doux et crémeux, parfait pour la pause",
//         prix: 2000,
//         categorie: "chaude",
//         populaire: true,
//       },
//       {
//         id: 6,
//         nom: "Café Serré",
//         image: "/caffee.jpg",
//         description: "Un concentré d'arômes pour les amateurs de café fort",
//         prix: 1500,
//         categorie: "chaude",
//         populaire: true,
//       },
//     ];
//     setBoissonsPopulaires(populaires);
//   }, []);

//   return (
//     <>
//       <Header />

//       {/* Hero Section */}
//       <section className="relative py-32 flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image src="/caffe.jpg" alt="Café ambiance" fill className="object-cover" priority />
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-transparent"></div>
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center">
//             <span className="text-white text-lg font-light tracking-widest">DEPUIS 1985</span>
//             <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mt-4 mb-6 leading-tight">
//               L&apos;art du café
//               <br />à la française
//             </h1>
//             <p className="text-xl text-amber-100 mb-8 leading-relaxed">
//               Découvrez une expérience unique où chaque tasse raconte une histoire de passion et de
//               savoir-faire.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/carte"
//                 className="bg-[#D4A574] text-white px-8 py-4 rounded-full hover:bg-amber-500 transition text-lg font-semibold shadow-xl"
//               >
//                 Déguster maintenant
//               </Link>
//               <a
//                 href="#histoire"
//                 className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition text-lg font-semibold"
//               >
//                 Notre histoire
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bandeau chiffres */}
//       <section className="bg-[#3C2A21] py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {chiffres.map((c) => (
//               <div key={c.label}>
//                 <p className="text-4xl md:text-5xl font-serif font-bold text-[#D4A574]">{c.valeur}</p>
//                 <p className="mt-2 text-sm text-gray-300">{c.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Valeurs */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Notre Philosophie
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">L&apos;excellence dans chaque détail</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {valeurs.map(({ icon: Icon, titre, texte }) => (
//               <div key={titre} className="text-center p-6">
//                 <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Icon className="text-3xl text-[#D4A574]" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">{titre}</h3>
//                 <p className="text-gray-600">{texte}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Catégories */}
//       <section className="py-20 bg-[#F5F5F5]">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Notre Univers
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Quatre façons de faire une pause gourmande
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {categories.map(({ icon: Icon, titre, texte }) => (
//               <Link
//                 key={titre}
//                 href="/carte"
//                 className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="bg-[#F0E6D2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Icon className="text-2xl text-[#D4A574]" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">{titre}</h3>
//                 <p className="text-gray-600 text-sm">{texte}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Boissons Populaires */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Nos Incontournables
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Les préférés de nos clients</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {boissonsPopulaires.map((boisson) => (
//               <div
//                 key={boisson.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <Image
//                   src={boisson.image}
//                   alt={boisson.nom}
//                   width={300}
//                   height={200}
//                   className="object-cover w-full h-72 rounded-t-lg transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-semibold text-[#3C2A21]">{boisson.nom}</h3>
//                     <div className="flex items-center space-x-1 shrink-0">
//                       <FaStar className="text-[#D4A574]" />
//                       <span className="text-lg font-bold text-[#D4A574]">{formatPrice(boisson.prix)}</span>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-4">{boisson.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
//                       Populaire
//                     </span>
//                     <Link
//                       href="/commande"
//                       className="bg-[#D4A574] hover:bg-[#B8865B] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
//                     >
//                       Commander
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               href="/carte"
//               className="inline-block bg-[#3C2A21] hover:bg-[#2C1B14] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
//             >
//               Voir toute la carte
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Section Notre histoire */}
//       <section id="histoire" className="py-20 bg-[#F5F5F5] scroll-mt-20">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="relative h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
//               <Image src="/caffe.jpg" alt="Notre café" fill className="object-cover" />
//             </div>
//             <div>
//               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-6">
//                 Plus qu&apos;un café, une véritable expérience
//               </h2>
//               <p className="text-gray-600 text-lg leading-relaxed mb-4">
//                 Depuis 1985, nous sélectionnons les meilleurs grains et les torréfions sur place pour
//                 vous offrir des arômes toujours frais.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                 Notre équipe vous accueille dans un espace chaleureux et convivial, pensé pour se
//                 détendre, travailler ou partager un moment entre amis.
//               </p>
//               <Link
//                 href="/contact"
//                 className="inline-block bg-[#3C2A21] hover:bg-[#2C1B14] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300"
//               >
//                 Nous rendre visite
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Comment commander */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Commander en 3 étapes
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple, rapide et sans attente</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {etapes.map(({ icon: Icon, titre, texte }, i) => (
//               <div key={titre} className="text-center p-6">
//                 <div className="relative bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Icon className="text-3xl text-[#D4A574]" />
//                   <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#3C2A21] text-white text-sm font-bold flex items-center justify-center">
//                     {i + 1}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">{titre}</h3>
//                 <p className="text-gray-600">{texte}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Avis clients */}
//       <section className="py-20 bg-[#F5F5F5]">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Ils nous font confiance
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ce que disent nos clients</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {avis.map((a) => (
//               <figure key={a.nom} className="bg-white rounded-2xl shadow-lg p-8">
//                 <FaQuoteLeft className="text-2xl text-[#D4A574] mb-4" />
//                 <blockquote className="text-gray-600 leading-relaxed mb-6">{a.texte}</blockquote>
//                 <div className="flex items-center justify-between">
//                   <figcaption>
//                     <p className="font-semibold text-[#3C2A21]">{a.nom}</p>
//                     <p className="text-sm text-gray-500">{a.role}</p>
//                   </figcaption>
//                   <div className="flex gap-1 text-[#D4A574]" aria-label="5 étoiles sur 5">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} className="h-4 w-4" />
//                     ))}
//                   </div>
//                 </div>
//               </figure>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Infos pratiques */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Venez nous voir
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Un espace chaleureux, ouvert tous les jours</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div className="bg-[#F5F5F5] rounded-2xl p-8">
//               <h3 className="text-xl font-semibold text-[#3C2A21] mb-6 flex items-center gap-3">
//                 <FaClock className="text-[#D4A574]" /> Horaires d&apos;ouverture
//               </h3>
//               <ul className="space-y-3">
//                 {horaires.map((h) => (
//                   <li key={h.jour} className="flex justify-between gap-4 text-gray-600">
//                     <span>{h.jour}</span>
//                     <span className="font-semibold text-[#3C2A21]">{h.heures}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-[#F5F5F5] rounded-2xl p-8">
//               <h3 className="text-xl font-semibold text-[#3C2A21] mb-6 flex items-center gap-3">
//                 <FaMapMarkerAlt className="text-[#D4A574]" /> Nous trouver
//               </h3>
//               <ul className="space-y-4 text-gray-600">
//                 <li className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-[#D4A574] shrink-0" /> Douala, Cameroun
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-[#D4A574] shrink-0" /> +237 6 xx xx xx xx
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaEnvelope className="text-[#D4A574] shrink-0" /> contact@coffeehouse.com
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section CTA */}
//       <section className="py-20 bg-[#F0E6D2] text-[#3C2A21]">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Prêt à Découvrir ?</h2>
//           <p className="text-xl text-[#3C2A21] mb-10 mx-auto max-w-2xl">
//             Commandez en ligne et profitez de votre boisson préférée en quelques minutes
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/commande"
//               className="bg-[#D4A574] hover:bg-[#B8865B] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Commander Maintenant
//             </Link>
//             <Link
//               href="/contact"
//               className="bg-transparent text-[#3C2A21] font-semibold py-4 px-8 rounded-full transition-all duration-300 border-2 border-[#3C2A21] hover:bg-[#3C2A21] hover:text-white transform hover:scale-105"
//             >
//               Nous Contacter
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }



// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaStar,
  FaClock,
  FaAward,
  FaLeaf,
  FaCoffee,
  FaMugHot,
  FaCookieBite,
  FaBirthdayCake,
  FaQuoteLeft,
  FaShoppingBag,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  listCategoriesAction,
  listFeaturedProductsAction,
} from "@/lib/actions/products";

type Boisson = {
  id: number;
  nom: string;
  image: string;
  description: string;
  prix: number;
  categorie: string;
  populaire: boolean;
};

type Categorie = {
  id: number;
  nom: string;
};

const formatPrice = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} €`;

/* ----- Contenu (à adapter) ----- */

const valeurs = [
  {
    icon: FaLeaf,
    titre: "100% Bio",
    texte: "Des grains de café sélectionnés avec soin, cultivés de manière durable et responsable.",
  },
  {
    icon: FaAward,
    titre: "Expertise",
    texte: "Nos baristas certifiés maîtrisent parfaitement l'art de la préparation du café.",
  },
  {
    icon: FaClock,
    titre: "Torréfaction Maison",
    texte: "Nous torréfions nos grains sur place pour garantir une fraîcheur et un arôme optimaux.",
  },
];

const chiffres = [
  { valeur: "1985", label: "Année de notre ouverture" },
  { valeur: "25+", label: "Boissons et gourmandises" },
  { valeur: "10 000+", label: "Clients servis chaque année" },
  { valeur: "100%", label: "Arabica sélectionné" },
];

function getCategoryPresentation(name: string) {
  const normalizedName = name.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (normalizedName.includes("cafe") || normalizedName.includes("the")) {
    return {
      icon: FaCoffee,
      texte: "L'art du café dans sa pure expression, du cappuccino au thé glacé.",
    };
  }

  if (
    normalizedName.includes("boisson") ||
    normalizedName.includes("smoothie") ||
    normalizedName.includes("jus")
  ) {
    return {
      icon: FaMugHot,
      texte: "Des boissons rafraîchissantes pour accompagner vos journées.",
    };
  }

  if (
    normalizedName.includes("patisserie") ||
    normalizedName.includes("dessert") ||
    normalizedName.includes("gateau")
  ) {
    return {
      icon: FaBirthdayCake,
      texte: "Des créations gourmandes préparées avec soin.",
    };
  }

  if (
    normalizedName.includes("local") ||
    normalizedName.includes("snack") ||
    normalizedName.includes("viennoiserie")
  ) {
    return {
      icon: FaCookieBite,
      texte: "Des gourmandises locales, préparées chaque jour.",
    };
  }

  return {
    icon: FaCookieBite,
    texte: `Découvrez nos produits de la catégorie ${name}.`,
  };
}

const etapes = [
  {
    icon: FaCoffee,
    titre: "Choisissez",
    texte: "Parcourez notre carte et ajoutez vos boissons et gourmandises préférées au panier.",
  },
  {
    icon: FaShoppingBag,
    titre: "Commandez",
    texte: "Validez votre commande en ligne en quelques clics, sans file d'attente.",
  },
  {
    icon: FaMotorcycle,
    titre: "Savourez",
    texte: "Récupérez votre commande sur place ou faites-vous livrer à votre porte.",
  },
];

const avis = [
  {
    nom: "Aïcha N.",
    role: "Cliente fidèle",
    texte:
      "Le meilleur cappuccino de Douala. L'accueil est chaleureux et tout est toujours frais.",
  },
  {
    nom: "Patrick M.",
    role: "Travaille au café",
    texte:
      "Une ambiance calme et propre, idéale pour travailler ou retrouver des amis.",
  },
  {
    nom: "Linda T.",
    role: "Commande en ligne",
    texte:
      "Commande simple, prête rapidement, et les beignets sont délicieux. Je recommande.",
  },
];

const horaires = [
  { jour: "Lundi – Vendredi", heures: "7h00 – 21h00" },
  { jour: "Samedi", heures: "8h00 – 22h00" },
  { jour: "Dimanche", heures: "9h00 – 20h00" },
];

export default function Accueil() {
  const [boissonsPopulaires, setBoissonsPopulaires] = useState<Boisson[]>([]);
  const [categoriesFromDb, setCategoriesFromDb] = useState<Categorie[]>([]);
  const [productsError, setProductsError] = useState("");
  const [categoriesError, setCategoriesError] = useState("");

  useEffect(() => {
    let isMounted = true;

    void Promise.all([listFeaturedProductsAction(), listCategoriesAction()]).then(
      ([productsResult, categoriesResult]) => {
        if (!isMounted) return;

        if (productsResult.success) {
          setBoissonsPopulaires(
            productsResult.data.map((product) => ({
              id: Number(product.id),
              nom: product.nom,
              image: product.image || "/caffee.jpg",
              description: product.description || "Préparé avec soin dans notre café",
              prix: Number(product.prix),
              categorie: String(product.categorie_nom ?? product.categorie_id),
              populaire: true,
            })),
          );
        } else {
          setProductsError(productsResult.error);
        }

        if (categoriesResult.success) {
          setCategoriesFromDb(
            categoriesResult.data.map((category) => ({
              id: Number(category.id),
              nom: String(category.nom),
            })),
          );
        } else {
          setCategoriesError(categoriesResult.error);
        }
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#FDFBF8] text-[#3C2A21] antialiased selection:bg-[#D4A574]/40">
        {/* Animations & motifs globaux */}
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(22px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatY {
            0%,100% { transform: translateY(0); }
            50%     { transform: translateY(-10px); }
          }
          .reveal { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) both; }
          .d-1 { animation-delay: .1s } .d-2 { animation-delay: .2s }
          .d-3 { animation-delay: .3s } .d-4 { animation-delay: .4s }
          .dotgrid {
            background-image: radial-gradient(rgba(60,42,33,.13) 1px, transparent 1px);
            background-size: 26px 26px;
          }
          .floaty { animation: floatY 6s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .reveal, .floaty { animation: none; }
          }
        `}</style>

        {/* ================= HERO ================= */}
        <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/caffe.jpg"
              alt="Ambiance du café"
              fill
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A1D16]/92 via-[#3C2A21]/75 to-[#3C2A21]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/70 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4A574]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4A574]">
                  Depuis 1985
                </span>
              </div>

              <h1 className="reveal d-1 mt-6 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
                L&apos;art du café,
                <br />
                <span className="italic text-[#D4A574]">à la française.</span>
              </h1>

              <p className="reveal d-2 mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                Découvrez une expérience unique où chaque tasse raconte une histoire de
                passion et de savoir-faire.
              </p>

              <div className="reveal d-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/carte"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-8 py-4 text-sm font-semibold text-[#3C2A21] shadow-[0_20px_40px_-15px_rgba(212,165,116,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Déguster maintenant
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#histoire"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Notre histoire
                </a>
              </div>

              {/* Mini-infos hero */}
              <div className="reveal d-4 mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <FaClock className="h-3.5 w-3.5 text-[#D4A574]" />
                  Ouvert 7j/7
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="h-3.5 w-3.5 text-[#D4A574]" />
                  Torréfaction maison
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="h-3.5 w-3.5 text-[#D4A574]" />
                  Douala, Cameroun
                </span>
              </div>
            </div>
          </div>

          {/* Badge flottant */}
          <div className="pointer-events-none absolute bottom-10 right-6 z-10 hidden lg:block">
            <div className="floaty rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-1 text-[#D4A574]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-2 font-serif text-2xl font-bold text-white">4,9 / 5</p>
              <p className="mt-0.5 text-xs uppercase tracking-wider text-white/60">
                2 400+ avis clients
              </p>
            </div>
          </div>
        </section>

        {/* ================= BANDEAU CHIFFRES ================= */}
        <section className="border-b border-[#3C2A21]/8 bg-[#F7F2EA]">
          <div className="mx-auto max-w-6xl px-6">
            <dl className="grid grid-cols-2 divide-[#3C2A21]/8 md:grid-cols-4 md:divide-x">
              {chiffres.map((c, i) => (
                <div
                  key={c.label}
                  className={`py-10 px-4 text-center ${i < 2 ? "border-b border-[#3C2A21]/8 md:border-b-0" : ""}`}
                >
                  <dd className="font-serif text-4xl font-bold tabular-nums text-[#3C2A21] md:text-5xl">
                    {c.valeur}
                  </dd>
                  <dt className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#3C2A21]/50">
                    {c.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ================= VALEURS ================= */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Philosophie
                </span>
                <span className="h-px w-8 bg-[#B8865B]" />
              </div>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                L&apos;excellence dans
                <br />
                <span className="italic text-[#B8865B]">chaque détail.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {valeurs.map(({ icon: Icon, titre, texte }, i) => (
                <div
                  key={titre}
                  className="group relative overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4A574]/25" />

                  <div className="relative flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="text-2xl text-[#3C2A21]" />
                    </span>
                    <span className="font-serif text-sm font-bold text-[#3C2A21]/20">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-7 font-serif text-xl font-bold">{titre}</h3>
                  <p className="relative mt-3 leading-relaxed text-[#3C2A21]/60">{texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CATÉGORIES ================= */}
        <section className="relative overflow-hidden bg-[#F7F2EA] py-24">
          <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Notre univers
                </span>
                <span className="h-px w-8 bg-[#B8865B]" />
              </div>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Quatre façons de faire
                <br />
                <span className="italic text-[#B8865B]">une pause gourmande.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categoriesFromDb.map((category) => {
                const { icon: Icon, texte } = getCategoryPresentation(category.nom);
                return (
                <Link
                  key={category.id}
                  href="/carte"
                  className="group relative overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4A574]/25" />

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-2xl text-[#3C2A21]" />
                  </span>

                  <h3 className="relative mt-7 font-serif text-lg font-bold leading-snug">
                    {category.nom}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-[#3C2A21]/60">
                    {texte}
                  </p>

                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B8865B] transition-colors group-hover:text-[#3C2A21]">
                    Explorer
                    <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                );
              })}
            </div>
            {categoriesError && (
              <p role="alert" className="mt-6 text-center text-red-700">
                {categoriesError}
              </p>
            )}
            {!categoriesError && categoriesFromDb.length === 0 && (
              <p className="mt-6 text-center text-[#3C2A21]/65">
                Aucune catégorie disponible pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* ================= BOISSONS POPULAIRES ================= */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B8865B]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                    Incontournables
                  </span>
                </div>
                <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                  Les préférés de
                  <br />
                  <span className="italic text-[#B8865B]">nos clients.</span>
                </h2>
              </div>

              <Link
                href="/carte"
                className="group inline-flex items-center gap-2 rounded-full border border-[#3C2A21]/25 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#3C2A21] hover:bg-[#3C2A21] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
              >
                Toute la carte
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {boissonsPopulaires.map((boisson) => (
                <article
                  key={boisson.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F0E6D2]/40">
                    <Image
                      src={boisson.image}
                      alt={boisson.nom}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {boisson.populaire && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3C2A21] shadow-[0_6px_18px_-8px_rgba(60,42,33,0.5)] backdrop-blur">
                        <FaStar className="h-2.5 w-2.5 text-[#D4A574]" />
                        Populaire
                      </span>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg font-bold leading-snug">
                        {boisson.nom}
                      </h3>
                      <span className="shrink-0 font-serif text-lg font-bold tabular-nums text-[#B8865B]">
                        {formatPrice(boisson.prix)}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#3C2A21]/55">
                      {boisson.description}
                    </p>

                    <Link
                      href="/carte"
                      className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#3C2A21] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] hover:shadow-[0_14px_28px_-14px_rgba(60,42,33,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                    >
                      <FaShoppingBag className="h-3.5 w-3.5" />
                      Commander
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {productsError && (
              <p role="alert" className="mt-6 text-center text-red-700">
                {productsError}
              </p>
            )}
            {!productsError && boissonsPopulaires.length === 0 && (
              <p className="mt-6 text-center text-[#3C2A21]/65">
                Aucun produit disponible pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* ================= HISTOIRE ================= */}
        <section id="histoire" className="scroll-mt-20 bg-[#F7F2EA] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/70 shadow-[0_30px_70px_-35px_rgba(60,42,33,0.5)]">
                  <Image src="/caffe.jpg" alt="Notre café" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D16]/40 via-transparent to-transparent" />

                  {/* Badge années */}
                  <div className="absolute bottom-5 left-5 rounded-2xl border border-white/30 bg-white/15 px-5 py-4 backdrop-blur-xl">
                    <p className="font-serif text-3xl font-bold text-white">40</p>
                    <p className="text-xs uppercase tracking-wider text-white/75">
                      ans de passion
                    </p>
                  </div>
                </div>
              </div>

              {/* Texte */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B8865B]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                    Notre histoire
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                  Plus qu&apos;un café,
                  <br />
                  <span className="italic text-[#B8865B]">une véritable expérience.</span>
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-[#3C2A21]/65">
                  Depuis 1985, nous sélectionnons les meilleurs grains et les torréfions sur
                  place pour vous offrir des arômes toujours frais.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-[#3C2A21]/65">
                  Notre équipe vous accueille dans un espace chaleureux et convivial, pensé
                  pour se détendre, travailler ou partager un moment entre amis.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Grains 100% Arabica torréfiés sur place",
                    "Baristas formés à l'art du latte",
                    "Espace chaleureux et WiFi gratuit",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[#3C2A21]/75">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#B8865B]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#3C2A21] px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_34px_-16px_rgba(60,42,33,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  Nous rendre visite
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMMENT COMMANDER ================= */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Commande
                </span>
                <span className="h-px w-8 bg-[#B8865B]" />
              </div>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Commander en
                <br />
                <span className="italic text-[#B8865B]">3 étapes simples.</span>
              </h2>
            </div>

            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Ligne de connexion (desktop) */}
              <div className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#3C2A21]/15 to-transparent md:block" />

              {etapes.map(({ icon: Icon, titre, texte }, i) => (
                <div key={titre} className="relative text-center">
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                    <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 hover:scale-105" />
                    <Icon className="relative text-3xl text-[#3C2A21]" />
                    <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#3C2A21] font-serif text-sm font-bold text-white shadow-lg">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">{titre}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#3C2A21]/60">
                    {texte}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AVIS CLIENTS ================= */}
        <section className="relative overflow-hidden bg-[#F7F2EA] py-24">
          <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Témoignages
                </span>
                <span className="h-px w-8 bg-[#B8865B]" />
              </div>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Ils nous font
                <br />
                <span className="italic text-[#B8865B]">confiance.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {avis.map((a) => (
                <figure
                  key={a.nom}
                  className="group relative flex flex-col rounded-3xl border border-[#3C2A21]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
                >
                  <FaQuoteLeft className="text-2xl text-[#D4A574]" />

                  <blockquote className="mt-5 flex-1 leading-relaxed text-[#3C2A21]/75">
                    {a.texte}
                  </blockquote>

                  <div className="mt-7 flex items-center justify-between border-t border-[#3C2A21]/8 pt-5">
                    <figcaption className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E6D2] font-serif text-sm font-bold text-[#3C2A21]">
                        {a.nom.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{a.nom}</p>
                        <p className="text-xs text-[#3C2A21]/50">{a.role}</p>
                      </div>
                    </figcaption>

                    <div
                      className="flex gap-0.5 text-[#D4A574]"
                      aria-label="5 étoiles sur 5"
                    >
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="h-3 w-3" />
                      ))}
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INFOS PRATIQUES ================= */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Infos pratiques
                </span>
                <span className="h-px w-8 bg-[#B8865B]" />
              </div>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Venez nous
                <br />
                <span className="italic text-[#B8865B]">voir.</span>
              </h2>
              <p className="mt-5 text-lg text-[#3C2A21]/60">
                Un espace chaleureux, ouvert tous les jours.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Horaires */}
              <div className="rounded-3xl border border-[#3C2A21]/10 bg-white p-8">
                <h3 className="flex items-center gap-3 font-serif text-xl font-bold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D2]">
                    <FaClock className="h-4 w-4 text-[#3C2A21]" />
                  </span>
                  Horaires d&apos;ouverture
                </h3>

                <dl className="mt-6 divide-y divide-[#3C2A21]/8">
                  {horaires.map((h) => (
                    <div key={h.jour} className="flex justify-between gap-4 py-3.5 first:pt-0">
                      <dt className="text-sm text-[#3C2A21]/60">{h.jour}</dt>
                      <dd className="text-sm font-semibold tabular-nums">{h.heures}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#F0E6D2]/70 px-4 py-3 text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
                  </span>
                  Happy Hour de 16h à 19h — −20% sur les boissons
                </div>
              </div>

              {/* Nous trouver */}
              <div className="rounded-3xl border border-[#3C2A21]/10 bg-white p-8">
                <h3 className="flex items-center gap-3 font-serif text-xl font-bold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D2]">
                    <FaMapMarkerAlt className="h-4 w-4 text-[#3C2A21]" />
                  </span>
                  Nous trouver
                </h3>

                <ul className="mt-6 space-y-5">
                  {[
                    { icon: FaMapMarkerAlt, text: "Douala, Cameroun" },
                    { icon: FaPhoneAlt, text: "+237 6 xx xx xx xx" },
                    { icon: FaEnvelope, text: "contact@coffeehouse.com" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0E6D2]">
                        <Icon className="h-3.5 w-3.5 text-[#3C2A21]" />
                      </span>
                      <span className="text-[#3C2A21]/75">{text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21]"
                >
                  Voir l&apos;itinéraire
                  <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] px-8 py-16 text-center text-white md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#D4A574]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#B8865B]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#D4A574]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A574]">
                  Prêt à découvrir
                </span>
                <span className="h-px w-8 bg-[#D4A574]" />
              </div>

              <h2 className="mx-auto max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
                Votre pause café vous
                <br />
                <span className="italic text-[#D4A574]">attend.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
                Commandez en ligne et profitez de votre boisson préférée en quelques minutes.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/carte"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-7 py-4 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Commander maintenant
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Nous contacter
                </Link>
              </div>

              {/* Réseaux */}
              <div className="mt-12 flex items-center justify-center gap-3 border-t border-white/10 pt-8">
                {[
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaFacebookF, label: "Facebook" },
                  { icon: FaTwitter, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A574] hover:bg-[#D4A574] hover:text-[#3C2A21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}