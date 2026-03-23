"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from "@/app/components/Layout/layout"
import { 
  FaCoffee, 
  FaStar, 
  FaClock,
  FaAward,
  FaLeaf
} from "react-icons/fa";

type Boisson = {
  id: number;
  nom: string;
  image: string;
  description: string;
  prix: number;
  categorie: string;
  populaire: boolean;
};

export default function Accueil() {
  const [boissonsPopulaires, setBoissonsPopulaires] = useState<Boisson[]>([]);

  useEffect(() => {
    // Simuler un appel API
    const populaires = [
      {
        id: 1,
        nom: 'Espresso Classique',
        image: '/caffee.jpg',
        description: 'Un espresso intense et corsé',
        prix: 3.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 2,
        nom: 'Latte Macchiato',
        image: '/creme.jpg',
        description: 'Lait vapeur, espresso et mousse de lait crémeuse',
        prix: 4.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 3,
        image: '/capuccino.jpg',
        nom: 'Smoothie Tropical',
        description: 'Mangue, ananas et fruits de la passion',
        prix: 5.50,
        categorie: 'sans-alcool',
        populaire: true
      },
       {
        id: 4,
        nom: 'Espresso Classique',
        image: '/caffee.jpg',
        description: 'Un espresso intense et corsé',
        prix: 3.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 5,
        nom: 'Latte Macchiato',
        image: '/creme.jpg',
        description: 'Lait vapeur, espresso et mousse de lait crémeuse',
        prix: 4.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 6,
        image: '/capuccino.jpg',
        nom: 'Smoothie Tropical',
        description: 'Mangue, ananas et fruits de la passion',
        prix: 5.50,
        categorie: 'sans-alcool',
        populaire: true
      }
    ];
    setBoissonsPopulaires(populaires);
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
       <section className="relative py-32 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
           <Image
            src="/caffe.jpg"
            alt="Café ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className=" text-center">
            <span className="text-white text-lg font-light tracking-widest">DEPUIS 1985</span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mt-4 mb-6 leading-tight">
              L&apos;`art du café<br />à la française
            </h1>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Découvrez une expérience unique où chaque tasse raconte une histoire de passion et de savoir-faire.
            </p>
            <div className="flex space-x-4 justify-center">
              <button className="bg-[#D4A574] text-white px-8 py-4 rounded-full hover:bg-amber-500 transition text-lg font-semibold shadow-xl">
                Déguster maintenant
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition text-lg font-semibold">
                Notre histoire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
              Notre Philosophie
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              L&apos;excellence dans chaque détail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-[#D4A574]" />
              </div>
              <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">100% Bio</h3>
              <p className="text-gray-600">
                Des grains de café sélectionnés avec soin, cultivés de manière durable et responsable.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-[#D4A574]" />
              </div>
              <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">Expertise</h3>
              <p className="text-gray-600">
                Nos baristas certifiés maîtrisent parfaitement l&apos;art de la préparation du café.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-3xl text-[#D4A574]" />
              </div>
              <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">Torréfaction Maison</h3>
              <p className="text-gray-600">
                Nous torréfions nos grains sur place pour garantir une fraîcheur et un arôme optimaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Boissons Populaires */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
              Nos Incontournables
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les préférés de nos clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boissonsPopulaires.map((boisson) => (
              <div 
                key={boisson.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="">
                  <div>
                    <Image
                    src={boisson.image}
                    alt={boisson.nom}
                    width={300}
                    height={200}
                    className='object-cover w-full h-72 rounded-t-lg transition-transform duration-500 hover:scale-105'
                    />
                  </div>
                  <div className='p-6'>
                    <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-[#3C2A21]">{boisson.nom}</h3>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-[#D4A574]" />
                      <span className="text-lg font-bold text-[#D4A574]">{boisson.prix}€</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{boisson.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      Populaire
                    </span>
                    <Link 
                      href="/commande" 
                      className="bg-[#D4A574] hover:bg-[#B8865B] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
                  </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/carte" 
              className="inline-block bg-[#3C2A21] hover:bg-[#2C1B14] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Voir toute la carte
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-white text-[#3C2A21]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Prêt à Découvrir ?
          </h2>
          <p className="text-xl text-[#3C2A21] mb-8 mx-auto">
            Commandez en ligne et profitez de votre boisson préférée en quelques minutes
          </p><br />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/commande" 
              className="bg-[#D4A574] hover:bg-[#B8865B] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Commander Maintenant
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent  text-[#3C2A21] font-semibold py-4 px-8 rounded-full transition-all duration-300 border-2 border-[#3C2A21] hover:bg-[#3C2A21] hover:text-white transform hover:scale-105"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default Accueil;



// app/page.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { Coffee, Clock, MapPin, Phone, Star, Users, Award, Heart } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-amber-50/30">
//       {/* Navigation Premium */}
//       <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Coffee className="h-8 w-8 text-amber-800" />
//               <span className="text-2xl font-serif font-bold text-amber-900">Café Prestige</span>
//             </div>
            
//             <div className="hidden md:flex items-center space-x-8">
//               <Link href="#accueil" className="text-amber-900 hover:text-amber-700 transition">Accueil</Link>
//               <Link href="#carte" className="text-amber-900 hover:text-amber-700 transition">Carte</Link>
//               <Link href="#about" className="text-amber-900 hover:text-amber-700 transition">Notre Histoire</Link>
//               <Link href="#contact" className="text-amber-900 hover:text-amber-700 transition">Contact</Link>
//             </div>
            
//             <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition shadow-lg">
//               Réserver
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section avec vidéo/overlay */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/caffe.jpg"
//             alt="Café ambiance"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-transparent"></div>
//         </div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-2xl">
//             <span className="text-amber-300 text-lg font-light tracking-widest">DEPUIS 1985</span>
//             <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mt-4 mb-6 leading-tight">
//               L&apos;`art du café<br />à la française
//             </h1>
//             <p className="text-xl text-amber-100 mb-8 leading-relaxed">
//               Découvrez une expérience unique où chaque tasse raconte une histoire de passion et de savoir-faire.
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-500 transition text-lg font-semibold shadow-xl">
//                 Déguster maintenant
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition text-lg font-semibold">
//                 Notre histoire
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Statistiques */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { icon: Coffee, number: '25+', label: 'Cafés d\'exception' },
//               { icon: Users, number: '50K+', label: 'Clients satisfaits' },
//               { icon: Award, number: '15', label: 'Prix d\'excellence' },
//               { icon: Heart, number: '100%', label: 'Passion française' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition">
//                   <stat.icon className="h-10 w-10 text-amber-800" />
//                 </div>
//                 <div className="text-3xl font-bold text-amber-900 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Spécialités */}
//       <section id="carte" className="py-24 bg-amber-50/50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <span className="text-amber-700 uppercase tracking-widest text-sm">Nos spécialités</span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mt-4">L&apos;excellence dans chaque tasse</h2>
//             <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Espresso Prestige',
//                 desc: 'Un mélange unique de grains d\'Éthiopie et du Brésil',
//                 price: '4.50€',
//                 image: '/caffee.jpg'
//               },
//               {
//                 title: 'Café Crémeux',
//                 desc: 'Notre signature avec une mousse onctueuse',
//                 price: '5.90€',
//                 image: '/creme.jpg'
//               },
//               {
//                 title: 'Cappuccino Royal',
//                 desc: 'Lait monté à la perfection, cacao noble',
//                 price: '6.50€',
//                 image: '/capuccino.jpg'
//               }
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition group">
//                 <div className="relative h-64">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition duration-500"
//                   />
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 mb-4">{item.desc}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-2xl font-bold text-amber-800">{item.price}</span>
//                     <button className="text-amber-800 hover:text-amber-600 font-semibold flex items-center">
//                       Commander <span className="ml-2">→</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Histoire avec parallax */}
//       <section id="about" className="relative py-32 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/gris.jpg"
//             alt="Atmosphère café"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-amber-950/70"></div>
//         </div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <span className="text-amber-300 uppercase tracking-widest text-sm">Notre héritage</span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8">Une histoire de passion depuis 4 générations</h2>
//             <p className="text-lg text-amber-100 leading-relaxed mb-10">
//               Fondé en 1985 par Pierre Dubois, notre café est devenu une institution parisienne. 
//               Chaque grain est sélectionné avec soin, torréfié artisanalement pour révéler des arômes uniques.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <div className="flex items-center">
//                 <Star className="h-5 w-5 text-amber-400 fill-current" />
//                 <Star className="h-5 w-5 text-amber-400 fill-current" />
//                 <Star className="h-5 w-5 text-amber-400 fill-current" />
//                 <Star className="h-5 w-5 text-amber-400 fill-current" />
//                 <Star className="h-5 w-5 text-amber-400 fill-current" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Témoignages */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-serif font-bold text-amber-900">Ce que disent nos clients</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Marie L.',
//                 text: 'Le meilleur café de Paris ! L\'ambiance est chaleureuse et le service impeccable.',
//                 rating: 5,
//                 image: '/man.jpg'
//               },
//               {
//                 name: 'Thomas R.',
//                 text: 'Une expérience unique. Les pâtisseries maison sont divines et le café est tout simplement parfait.',
//                 rating: 5,
//                 image: '/man.jpg'
//               },
//               {
//                 name: 'Sophie M.',
//                 text: 'Mon refuge quotidien. L\'équipe est adorable et la qualité est toujours au rendez-vous.',
//                 rating: 5,
//                 image: '/ladie.jpg'
//               }
//             ].map((testimonial, index) => (
//               <div key={index} className="bg-amber-50 p-8 rounded-3xl">
//                 <div className="flex items-center mb-6">
//                   <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
//                     <div className="flex text-amber-500">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-current" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Contact/Info */}
//       <section id="contact" className="py-24 bg-amber-900 text-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-4xl font-serif font-bold mb-8">Nous rendre visite</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-lg">Adresse</h3>
//                     <p className="text-amber-200">12 Rue du Café, 75001 Paris</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Clock className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-lg">Horaires</h3>
//                     <p className="text-amber-200">Lun-Ven: 7h30 - 20h00</p>
//                     <p className="text-amber-200">Sam-Dim: 8h30 - 22h00</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Phone className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-lg">Contact</h3>
//                     <p className="text-amber-200">01 23 45 67 89</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-amber-800/50 p-8 rounded-3xl">
//               <h3 className="text-2xl font-serif font-bold mb-6">Réservation</h3>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Nom"
//                   className="w-full px-4 py-3 rounded-lg bg-amber-700/50 border border-amber-600 text-white placeholder-amber-300 focus:outline-none focus:border-amber-400"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-3 rounded-lg bg-amber-700/50 border border-amber-600 text-white placeholder-amber-300 focus:outline-none focus:border-amber-400"
//                 />
//                 <input
//                   type="date"
//                   className="w-full px-4 py-3 rounded-lg bg-amber-700/50 border border-amber-600 text-white focus:outline-none focus:border-amber-400"
//                 />
//                 <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition font-semibold">
//                   Réserver une table
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Premium */}
//       <footer className="bg-amber-950 text-amber-200 py-12">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-2 mb-4 md:mb-0">
//               <Coffee className="h-6 w-6" />
//               <span className="text-xl font-serif font-bold">Café Prestige</span>
//             </div>
            
//             <div className="flex space-x-6">
//               <a href="#" className="hover:text-white transition"><i className="fab fa-instagram text-xl"></i></a>
//               <a href="#" className="hover:text-white transition"><i className="fab fa-facebook text-xl"></i></a>
//               <a href="#" className="hover:text-white transition"><i className="fab fa-twitter text-xl"></i></a>
//             </div>
            
//             <div className="text-sm mt-4 md:mt-0">
//               © 2024 Café Prestige. Tous droits réservés.
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }