  // import Head from 'next/head';
  // import { 
  //   FaCoffee, 
  // FaHeart, 
  // FaAward, 
  // FaUsers, 
  //   FaLeaf
  // } from 'react-icons/fa';

  // const valeurs = [
  //   {
  //     icon: <FaLeaf className="text-2xl" />,
  //     title: "Durabilité",
  //     description: "Nous nous engageons à utiliser des produits locaux et durables dans toutes nos préparations."
  //   },
  //   {
  //     icon: <FaAward className="text-2xl" />,
  //     title: "Excellence",
  //     description: "La recherche de la perfection dans chaque détail, de la sélection des grains à la présentation."
  //   },
  //   {
  //     icon: <FaHeart className="text-2xl" />,
  //     title: "Passion",
  //     description: "Notre amour pour le café se ressent dans chaque boisson que nous créons avec soin."
  //   },
  //   {
  //     icon: <FaUsers className="text-2xl" />,
  //     title: "Communauté",
  //     description: "Créer un espace chaleureux où chacun se sent comme à la maison."
  //   }
  // ];
  // export default function APropos() {

  //   const equipe = [
  //     {
  //       nom: "Sophie Martin",
  //       role: "Fondatrice & Barista Chef",
  //       image: "/team/sophie.jpg",
  //       description: "15 ans d'expérience dans l'art du café"
  //     },
  //     {
  //       nom: "Thomas Lefebvre",
  //       role: "Maître Torréfacteur",
  //       image: "/team/thomas.jpg",
  //       description: "Spécialiste des blends maison"
  //     },
  //     {
  //       nom: "Camille Dubois",
  //       role: "Mixologue",
  //       image: "/team/camille.jpg",
  //       description: "Créatrice de nos cocktails signature"
  //     },
  //     {
  //       nom: "Lucas Moreau",
  //       role: "Responsable Service",
  //       image: "/team/lucas.jpg",
  //       description: "Garant de votre expérience unique"
  //     }
  //   ];

  //   // const certifications = [
  //   //   { nom: "Café Bio Équitable", icon: "🌱" },
  //   //   { nom: "Artisan Torréfacteur de France", icon: "🏆" },
  //   //   { nom: "Établissement Responsable", icon: "♻️" },
  //   //   { nom: "Meilleur Café Paris 2023", icon: "⭐" }
  //   // ];

  //   return (
  //     <>
  //       <Head>
  //         <title>À Propos - Le Café Parisien | Notre Histoire</title>
  //         <meta name="description" content="Découvrez l'histoire et les valeurs du Café Parisien, un établissement d'exception au cœur de Paris." />
  //       </Head>

  //       {/* Hero Section */}
  //       <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url("/about-hero.jpg")'}}>
  //         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  //         <div className="relative z-10 h-full flex items-center justify-center text-center">
  //           <div className="max-w-4xl mx-auto px-6">
  //             <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
  //               Notre Histoire
  //             </h1>
  //             <p className="text-xl text-white opacity-90">
  //               Depuis 2010, l&apos;art du café réinventé
  //             </p>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Histoire Section */}
  //       <section className="py-20 bg-white">
  //         <div className="container mx-auto px-6">
  //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  //             <div>
  //               <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-6">
  //                 L&apos;Art du Café Réinventé
  //               </h2>
  //               <div className="space-y-4 text-lg text-gray-600">
  //                 <p>
  //                   Fondé en 2010 par Sophie Martin, Le Café Parisien est né d&apos;une passion 
  //                   profonde pour l&apos;artisanat du café et du désir de créer un lieu unique 
  //                   où tradition et innovation se rencontrent.
  //                 </p>
  //                 <p>
  //                   Notre établissement s&apos;est rapidement imposé comme une référence 
  //                   parisienne grâce à notre engagement envers la qualité, la durabilité 
  //                   et lexpérience client exceptionnelle.
  //                 </p>
  //                 <p>
  //                   Aujourd&apos;hui, nous sommes fiers de compter parmi les cafés les plus 
  //                   réputés de la capitale, reconnus pour notre expertise et notre 
  //                   approche innovante des boissons caféinées.
  //                 </p>
  //               </div>
  //             </div>
              
  //             <div className="relative">
  //               <div className="bg-[#3C2A21] rounded-2xl p-8 text-white">
  //                 <h3 className="text-2xl font-serif font-bold mb-6 text-[#D4A574]">
  //                   Notre Philosophie
  //                 </h3>
  //                 <p className="text-lg mb-6">
  //                   &quot;Chez Le Café Parisien, nous croyons que chaque tasse de café 
  //                   raconte une histoire. De la plantation à votre tasse, nous 
  //                   veillons à ce que chaque étape respecte les plus hauts standards 
  //                   de qualité et d&apos;éthique.&quot;
  //                 </p>
  //                 <div className="flex items-center space-x-4">
  //                   <div className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center">
  //                     <FaCoffee className="text-2xl text-[#3C2A21]" />
  //                   </div>
  //                   <div>
  //                     <div className="font-semibold">Sophie Martin</div>
  //                     <div className="text-[#D4A574] text-sm">Fondatrice</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Stats Section */}
  //       <section>
  //                       <div className="py-16 grid grid-cols-4 px-6 gap-6">
  //                 <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
  //                   <div className="text-3xl font-bold text-[#D4A574] mb-2">50+</div>
  //                   <div className="text-gray-600">Boissons Uniques</div>
  //                 </div>
  //                 <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
  //                   <div className="text-3xl font-bold text-[#D4A574] mb-2">12</div>
  //                   <div className="text-gray-600">Ans d&apos;Expérience</div>
  //                 </div>
  //                 <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
  //                   <div className="text-3xl font-bold text-[#D4A574] mb-2">1000+</div>
  //                   <div className="text-gray-600">Clients Satisfaits</div>
  //                 </div>
  //                 <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
  //                   <div className="text-3xl font-bold text-[#D4A574] mb-2">15</div>
  //                   <div className="text-gray-600">Pays Fournisseurs</div>
  //                 </div>
  //               </div>
  //       </section>

  //       {/* Valeurs Section */}
  //       <section className="py-20 bg-[#F8F4F0]">
  //         <div className="container mx-auto px-6">
  //           <div className="text-center mb-16">
  //             <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-4">
  //               Nos Valeurs
  //             </h2>
  //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
  //               Les principes qui guident chacune de nos actions
  //             </p>
  //           </div>
            
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //             {valeurs.map((valeur, index) => (
  //               <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
  //                 <div className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center text-white mx-auto mb-4">
  //                   {valeur.icon}
  //                 </div>
  //                 <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">
  //                   {valeur.title}
  //                 </h3>
  //                 <p className="text-gray-600">
  //                   {valeur.description}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Équipe Section */}
  //       <section className="py-20 bg-white">
  //         <div className="container mx-auto px-6">
  //           <div className="text-center mb-16">
  //             <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-4">
  //               Notre Équipe
  //             </h2>
  //             <p className="text-xl text-gray-600">
  //               Des passionnés à votre service
  //             </p>
  //           </div>
            
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //             {equipe.map((membre, index) => (
  //               <div key={index} className="text-center group">
  //                 <div className="relative mb-6 overflow-hidden rounded-2xl">
  //                   <div className="w-full h-80 bg-gradient-to-br from-[#3C2A21] to-[#D4A574] rounded-2xl flex items-center justify-center text-white text-lg">
  //                     Image de {membre.nom}
  //                   </div>
  //                   <div className="absolute inset-0 bg-[#D4A574] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
  //                 </div>
  //                 <h3 className="text-xl font-semibold text-[#3C2A21] mb-2">
  //                   {membre.nom}
  //                 </h3>
  //                 <div className="text-[#D4A574] font-medium mb-2">
  //                   {membre.role}
  //                 </div>
  //                 <p className="text-gray-600 text-sm">
  //                   {membre.description}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Certifications Section */}
  //       {/* <section className="py-20 bg-[#3C2A21] text-white">
  //         <div className="container mx-auto px-6">
  //           <div className="text-center mb-16">
  //             <h2 className="text-4xl font-serif font-bold mb-4">
  //               Certifications & Reconnaissances
  //             </h2>
  //             <p className="text-xl text-[#D4A574]">
  //               L&apos;excellence récompensée
  //             </p>
  //           </div>
            
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
  //             {certifications.map((certification, index) => (
  //               <div key={index} className="text-center p-6 bg-[#4A3728] rounded-2xl hover:bg-[#5A4738] transition-colors duration-300">
  //                 <div className="text-3xl mb-3">{certification.icon}</div>
  //                 <h3 className="font-semibold">{certification.nom}</h3>
  //               </div>
  //             ))}
  //           </div>
            
  //           <div className="text-center mt-12">
  //             <button className="bg-[#D4A574] hover:bg-[#B8865B] text-[#3C2A21] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
  //               Voir notre carte
  //             </button>
  //           </div>
  //         </div>
  //       </section> */}
  //     </>
  //   );
  // };


  // app/a-propos/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCoffee,
  FaHeart,
  FaAward,
  FaUsers,
  FaLeaf,
  FaArrowRight,
  FaQuoteLeft,
  FaCheckCircle,
  FaSeedling,
  FaMugHot,
} from "react-icons/fa";

const valeurs = [
  {
    icon: FaLeaf,
    title: "Durabilité",
    description:
      "Nous nous engageons à utiliser des produits locaux et durables dans toutes nos préparations.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description:
      "La recherche de la perfection dans chaque détail, de la sélection des grains à la présentation.",
  },
  {
    icon: FaHeart,
    title: "Passion",
    description:
      "Notre amour pour le café se ressent dans chaque boisson que nous créons avec soin.",
  },
  {
    icon: FaUsers,
    title: "Communauté",
    description:
      "Créer un espace chaleureux où chacun se sent comme à la maison.",
  },
];

const equipe = [
  {
    nom: "Sophie Martin",
    role: "Fondatrice & Barista Chef",
    initiales: "SM",
    description: "15 ans d'expérience dans l'art du café",
  },
  {
    nom: "Thomas Lefebvre",
    role: "Maître Torréfacteur",
    initiales: "TL",
    description: "Spécialiste des blends maison",
  },
  {
    nom: "Camille Dubois",
    role: "Mixologue",
    initiales: "CD",
    description: "Créatrice de nos cocktails signature",
  },
  {
    nom: "Lucas Moreau",
    role: "Responsable Service",
    initiales: "LM",
    description: "Garant de votre expérience unique",
  },
];

const chiffres = [
  { valeur: "50+", label: "Boissons uniques" },
  { valeur: "15", label: "Années d'expérience" },
  { valeur: "10 000+", label: "Clients satisfaits" },
  { valeur: "15", label: "Pays fournisseurs" },
];

const jalons = [
  {
    annee: "2010",
    titre: "Une idée née d'une passion",
    texte:
      "Sophie Martin ouvre un petit comptoir à café avec une seule conviction : servir le meilleur espresso de la ville.",
  },
  {
    annee: "2015",
    titre: "La torréfaction maison",
    texte:
      "Installation de notre premier torréfacteur artisanal. Nos grains sont désormais torréfiés sur place, chaque semaine.",
  },
  {
    annee: "2020",
    titre: "Une communauté grandissante",
    texte:
      "Un espace repensé, plus chaleureux, pensé pour travailler, se retrouver et partager un moment.",
  },
  {
    annee: "Aujourd'hui",
    titre: "Toujours plus curieux",
    texte:
      "Nouvelles créations, événements live et collaborations locales — l'aventure continue.",
  },
];

const engagements = [
  "Grains 100% Arabica torréfiés sur place",
  "Producteurs locaux et commerce équitable",
  "Zéro plastique à usage unique en salle",
  "Formation continue de nos baristas",
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#3C2A21] antialiased selection:bg-[#D4A574]/40">
      {/* Animations & motifs */}
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
        .d-1{animation-delay:.1s} .d-2{animation-delay:.2s}
        .d-3{animation-delay:.3s} .d-4{animation-delay:.4s}
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
      <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="Ambiance du café"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A1D16]/92 via-[#3C2A21]/75 to-[#3C2A21]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A574]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4A574]">
                Notre histoire
              </span>
            </div>

            <h1 className="reveal d-1 mt-6 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Depuis 2010,
              <br />
              <span className="italic text-[#D4A574]">l&apos;art du café réinventé.</span>
            </h1>

            <p className="reveal d-2 mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              Un lieu né d&apos;une passion profonde pour l&apos;artisanat du café, où tradition
              et innovation se rencontrent dans chaque tasse.
            </p>

            <div className="reveal d-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/carte"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-8 py-4 text-sm font-semibold text-[#3C2A21] shadow-[0_20px_40px_-15px_rgba(212,165,116,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Découvrir la carte
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#histoire"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notre parcours
              </a>
            </div>
          </div>
        </div>

        {/* Badge flottant */}
        <div className="pointer-events-none absolute bottom-10 right-6 z-10 hidden lg:block">
          <div className="floaty rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
            <FaCoffee className="h-5 w-5 text-[#D4A574]" />
            <p className="mt-3 font-serif text-2xl font-bold text-white">15 ans</p>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-white/60">
              de savoir-faire
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
                className={`px-4 py-10 text-center ${
                  i < 2 ? "border-b border-[#3C2A21]/8 md:border-b-0" : ""
                }`}
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

      {/* ================= HISTOIRE ================= */}
      <section id="histoire" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Texte */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Notre philosophie
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                L&apos;art du café,
                <br />
                <span className="italic text-[#B8865B]">réinventé.</span>
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#3C2A21]/65">
                <p>
                  Fondé en 2010 par Sophie Martin, Le Café Parisien est né d&apos;une passion
                  profonde pour l&apos;artisanat du café et du désir de créer un lieu unique où
                  tradition et innovation se rencontrent.
                </p>
                <p>
                  Notre établissement s&apos;est rapidement imposé comme une référence grâce à
                  notre engagement envers la qualité, la durabilité et l&apos;expérience client
                  exceptionnelle.
                </p>
                <p>
                  Aujourd&apos;hui, nous sommes fiers de compter parmi les cafés les plus
                  réputés, reconnus pour notre expertise et notre approche innovante des
                  boissons caféinées.
                </p>
              </div>
            </div>

            {/* Carte citation */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] p-8 text-white shadow-[0_30px_70px_-35px_rgba(60,42,33,0.6)] md:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D4A574]/20 blur-3xl" />

                <FaQuoteLeft className="relative text-3xl text-[#D4A574]" />

                <p className="relative mt-6 font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
                  Chez Le Café Parisien, nous croyons que chaque tasse de café raconte une
                  histoire. De la plantation à votre tasse, nous veillons à ce que chaque étape
                  respecte les plus hauts standards de qualité et d&apos;éthique.
                </p>

                <div className="relative mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4A574] font-serif text-lg font-bold text-[#3C2A21]">
                    SM
                  </span>
                  <div>
                    <p className="font-serif text-base font-bold">Sophie Martin</p>
                    <p className="text-sm text-[#D4A574]">Fondatrice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALEURS ================= */}
      <section className="relative overflow-hidden bg-[#F7F2EA] py-24">
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8865B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                Nos valeurs
              </span>
              <span className="h-px w-8 bg-[#B8865B]" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Les principes qui guident
              <br />
              <span className="italic text-[#B8865B]">chacune de nos actions.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4A574]/25" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-xl text-[#3C2A21]" />
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3C2A21]/20">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative mt-6 font-serif text-lg font-bold">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[#3C2A21]/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARCOURS / JALONS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8865B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                Notre parcours
              </span>
              <span className="h-px w-8 bg-[#B8865B]" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Quinze années
              <br />
              <span className="italic text-[#B8865B]">de passion partagée.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#3C2A21]/15 via-[#3C2A21]/10 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

            <ol className="space-y-10">
              {jalons.map(({ annee, titre, texte }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <li key={annee} className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* Point central */}
                    <span className="pointer-events-none absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[#3C2A21] ring-4 ring-[#FDFBF8] md:left-1/2 md:block" />

                    {/* Contenu */}
                    <div
                      className={`relative md:col-span-1 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div className="group rounded-3xl border border-[#3C2A21]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]">
                        <span className="inline-block rounded-full bg-[#F0E6D2] px-3 py-1 font-serif text-xs font-bold uppercase tracking-wider text-[#3C2A21]">
                          {annee}
                        </span>
                        <h3 className="mt-4 font-serif text-xl font-bold">{titre}</h3>
                        <p className="mt-2 leading-relaxed text-[#3C2A21]/60">{texte}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= ÉQUIPE ================= */}
      <section className="relative overflow-hidden bg-[#F7F2EA] py-24">
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8865B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                L&apos;équipe
              </span>
              <span className="h-px w-8 bg-[#B8865B]" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Des passionnés
              <br />
              <span className="italic text-[#B8865B]">à votre service.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((membre) => (
              <article
                key={membre.nom}
                className="group relative overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
              >
                {/* "Photo" stylisée */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#3C2A21] to-[#5A4738]">
                  <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(#F0E6D2_1px,transparent_1px)] [background-size:22px_22px]" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-[#F0E6D2]/90 transition-transform duration-500 group-hover:scale-105">
                      {membre.initiales}
                    </span>
                  </div>

                  {/* Voile doré au survol */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#D4A574]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icône décorative en haut */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <FaMugHot className="h-3.5 w-3.5 text-[#D4A574]" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold leading-snug">{membre.nom}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#B8865B]">{membre.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#3C2A21]/55">
                    {membre.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENTS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Visuel */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/70 shadow-[0_30px_70px_-35px_rgba(60,42,33,0.5)]">
                <Image src="/caffe.jpg" alt="Nos engagements" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D16]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/15 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4A574]">
                      <FaSeedling className="h-4 w-4 text-[#3C2A21]" />
                    </span>
                    <div>
                      <p className="font-serif text-base font-bold text-white">
                        Engagement durable
                      </p>
                      <p className="text-xs text-white/70">
                        Local, équitable et responsable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liste */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Nos engagements
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Le bon goût,
                <br />
                <span className="italic text-[#B8865B]">sans compromis.</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#3C2A21]/65">
                Parce qu&apos;un grand café commence par des choix responsables, nous
                sélectionnons chaque partenaire avec soin.
              </p>

              <ul className="mt-8 space-y-3">
                {engagements.map((point) => (
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

      {/* ================= CTA FINAL ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] px-8 py-16 text-center text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#D4A574]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#B8865B]/20 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D4A574]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A574]">
                Prêt à nous rejoindre
              </span>
              <span className="h-px w-8 bg-[#D4A574]" />
            </div>

            <h2 className="mx-auto max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
              Une table vous
              <br />
              <span className="italic text-[#D4A574]">attend chez nous.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
              Découvrez notre carte, poussez la porte, et laissez-vous porter par
              l&apos;expérience.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/carte"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-7 py-4 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Voir la carte
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}