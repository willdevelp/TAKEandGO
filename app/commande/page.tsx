// "use client";
// import { useState } from 'react';
// import Head from 'next/head';
// import Layout from '@/app/components/Layout/layout';
// import { 
//   FaMugHot, 
//   FaWineGlass, 
//   FaPlus, 
//   FaMinus,
//   FaShoppingCart
// } from "react-icons/fa";

// const Commande = () => {
// const [categorieActive, setCategorieActive] = useState<'toutes' | 'chaude' | 'sans-alcool' | 'alcoolisee'>('toutes');

//   const [panier, setPanier] = useState([]);
//   const [notes, setNotes] = useState('');

//   const boissons = [
//     // Boissons chaudes
//     { id: 1, nom: 'Espresso Classique', description: 'Un espresso intense et corsé', prix: 3.50, categorie: 'chaude', populaire: true },
//     { id: 2, nom: 'Cappuccino Italien', description: 'Espresso, mousse de lait onctueuse et cacao', prix: 4.20, categorie: 'chaude' },
//     { id: 3, nom: 'Latte Macchiato', description: 'Lait vapeur, espresso et mousse de lait crémeuse', prix: 4.50, categorie: 'chaude', populaire: true },
//     { id: 4, nom: 'Thé Signature', description: 'Sélection de thés fins et aromatiques', prix: 3.80, categorie: 'chaude' },
//     { id: 5, nom: 'Chocolat Viennois', description: 'Chocolat chaud riche avec de la crème fouettée', prix: 4.80, categorie: 'chaude' },
    
//     // Boissons sans alcool
//     { id: 6, nom: 'Limonade Artisanale', description: 'Limonade fraîche avec des agrumes pressés', prix: 4.50, categorie: 'sans-alcool' },
//     { id: 7, nom: 'Jus de Fruits Frais', description: 'Pressé à la demande, choix de saison', prix: 4.00, categorie: 'sans-alcool' },
//     { id: 8, nom: 'Smoothie Tropical', description: 'Mangue, ananas et fruits de la passion', prix: 5.50, categorie: 'sans-alcool', populaire: true },
//     { id: 9, nom: 'Ice Tea Maison', description: 'Thé glacé infusé avec des herbes fraîches', prix: 4.20, categorie: 'sans-alcool' },
    
//     // Boissons alcoolisées
//     { id: 10, nom: 'Irish Coffee', description: 'Café, whisky irlandais et crème fouettée', prix: 8.50, categorie: 'alcoolisee', populaire: true },
//     { id: 11, nom: 'Spritz Aperol', description: 'Aperol, prosecco et soda club', prix: 9.00, categorie: 'alcoolisee' },
//     { id: 12, nom: 'Vin Rouge de Sélection', description: 'Verre de notre sélection de vins rouges', prix: 6.50, categorie: 'alcoolisee' },
//     { id: 13, nom: 'Vin Blanc Frais', description: 'Verre de notre sélection de vins blancs', prix: 6.50, categorie: 'alcoolisee' },
//     { id: 14, nom: 'Cocktail Signature', description: 'Notre création exclusive du moment', prix: 10.00, categorie: 'alcoolisee' },
//   ];

//   const boissonsFiltrees = categorieActive === 'toutes' 
//     ? boissons 
//     : boissons.filter(boisson => boisson.categorie === categorieActive);

//   const ajouterAuPanier = (boisson) => {
//     setPanier(prev => {
//       const existing = prev.find(item => item.boisson.id === boisson.id);
//       if (existing) {
//         return prev.map(item =>
//           item.boisson.id === boisson.id
//             ? { ...item, quantite: item.quantite + 1 }
//             : item
//         );
//       }
//       return [...prev, { boisson, quantite: 1 }];
//     });
//   };

//   const retirerDuPanier = (boissonId) => {
//     setPanier(prev => {
//       const existing = prev.find(item => item.boisson.id === boissonId);
//       if (existing && existing.quantite > 1) {
//         return prev.map(item =>
//           item.boisson.id === boissonId
//             ? { ...item, quantite: item.quantite - 1 }
//             : item
//         );
//       }
//       return prev.filter(item => item.boisson.id !== boissonId);
//     });
//   };

//   const totalPanier = panier.reduce((total, item) => total + (item.boisson.prix * item.quantite), 0);

//   return (
//     <Layout panierCount={panier.reduce((count, item) => count + item.quantite, 0)}>
//       <Head>
//         <title>Commander | Le Café Parisien</title>
//         <meta name="description" content="Commandez vos boissons préférées en ligne" />
//       </Head>

//       <div className="min-h-screen bg-[#F5F5F5] py-8">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-4">
//               Commander en Ligne
//             </h1>
//             <p className="text-xl text-gray-600">
//               Choisissez vos boissons préférées
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Carte des boissons */}
//             <div className="lg:col-span-2">
//               {/* Filtres */}
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <button 
//                   className={`px-6 py-3 rounded-full transition-all duration-300 ${
//                     categorieActive === 'toutes' 
//                       ? 'bg-[#3C2A21] text-white shadow-lg' 
//                       : 'bg-white text-[#3C2A21] hover:bg-[#3C2A21] hover:text-white'
//                   }`}
//                   onClick={() => setCategorieActive('toutes')}
//                 >
//                   Toutes nos boissons
//                 </button>
//                 <button 
//                   className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
//                     categorieActive === 'chaude' 
//                       ? 'bg-[#3C2A21] text-white shadow-lg' 
//                       : 'bg-white text-[#3C2A21] hover:bg-[#3C2A21] hover:text-white'
//                   }`}
//                   onClick={() => setCategorieActive('chaude')}
//                 >
//                   <FaMugHot />
//                   <span>Boissons Chaudes</span>
//                 </button>
//                 <button 
//                   className={`px-6 py-3 rounded-full transition-all duration-300 ${
//                     categorieActive === 'sans-alcool' 
//                       ? 'bg-[#3C2A21] text-white shadow-lg' 
//                       : 'bg-white text-[#3C2A21] hover:bg-[#3C2A21] hover:text-white'
//                   }`}
//                   onClick={() => setCategorieActive('sans-alcool')}
//                 >
//                   <span>Sans Alcool</span>
//                 </button>
//                 <button 
//                   className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
//                     categorieActive === 'alcoolisee' 
//                       ? 'bg-[#3C2A21] text-white shadow-lg' 
//                       : 'bg-white text-[#3C2A21] hover:bg-[#3C2A21] hover:text-white'
//                   }`}
//                   onClick={() => setCategorieActive('alcoolisee')}
//                 >
//                   <FaWineGlass />
//                   <span>Alcoolisées</span>
//                 </button>
//               </div>

//               {/* Grille des boissons */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {boissonsFiltrees.map((boisson) => (
//                   <div 
//                     key={boisson.id} 
//                     className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//                   >
//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-3">
//                         <h3 className="text-xl font-semibold text-[#3C2A21]">{boisson.nom}</h3>
//                         <span className="text-lg font-bold text-[#D4A574]">{boisson.prix}€</span>
//                       </div>
//                       <p className="text-gray-600 mb-4 text-sm">{boisson.description}</p>
//                       <div className="flex justify-between items-center">
//                         <span className={`inline-block px-3 py-1 rounded-full text-xs ${
//                           boisson.categorie === 'chaude' 
//                             ? 'bg-red-100 text-red-800' 
//                             : boisson.categorie === 'sans-alcool'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-purple-100 text-purple-800'
//                         }`}>
//                           {boisson.categorie === 'chaude' ? 'Chaud' : 
//                            boisson.categorie === 'sans-alcool' ? 'Sans alcool' : 'Alcoolisé'}
//                         </span>
//                         <button 
//                           onClick={() => ajouterAuPanier(boisson)}
//                           className="bg-[#D4A574] hover:bg-[#B8865B] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center space-x-2"
//                         >
//                           <FaPlus className="text-xs" />
//                           <span>Ajouter</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Panier */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-lg sticky top-8">
//                 <div className="p-6 border-b border-gray-200">
//                   <h2 className="text-2xl font-semibold text-[#3C2A21] flex items-center space-x-2">
//                     <FaShoppingCart />
//                     <span>Votre Panier</span>
//                   </h2>
//                 </div>

//                 <div className="p-6">
//                   {panier.length === 0 ? (
//                     <p className="text-gray-500 text-center py-8">Votre panier est vide</p>
//                   ) : (
//                     <>
//                       <div className="space-y-4 max-h-96 overflow-y-auto">
//                         {panier.map((item) => (
//                           <div key={item.boisson.id} className="flex justify-between items-center border-b border-gray-100 pb-4">
//                             <div className="flex-1">
//                               <h4 className="font-semibold text-[#3C2A21]">{item.boisson.nom}</h4>
//                               <p className="text-sm text-gray-600">{item.boisson.prix}€</p>
//                             </div>
//                             <div className="flex items-center space-x-3">
//                               <button 
//                                 onClick={() => retirerDuPanier(item.boisson.id)}
//                                 className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
//                               >
//                                 <FaMinus className="text-xs" />
//                               </button>
//                               <span className="font-semibold w-8 text-center">{item.quantite}</span>
//                               <button 
//                                 onClick={() => ajouterAuPanier(item.boisson)}
//                                 className="w-8 h-8 rounded-full bg-[#D4A574] hover:bg-[#B8865B] text-white flex items-center justify-center transition-colors duration-300"
//                               >
//                                 <FaPlus className="text-xs" />
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="mt-6 space-y-4">
//                         <div className="flex justify-between items-center text-lg font-semibold">
//                           <span>Total:</span>
//                           <span className="text-[#D4A574]">{totalPanier.toFixed(2)}€</span>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Notes pour la commande
//                           </label>
//                           <textarea
//                             value={notes}
//                             onChange={(e) => setNotes(e.target.value)}
//                             rows={3}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A574] focus:border-transparent"
//                             placeholder="Allergies, préférences particulières..."
//                           />
//                         </div>

//                         <button className="w-full bg-[#3C2A21] hover:bg-[#2C1B14] text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
//                           Passer la commande
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Commande;

export default function Commande() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <h1 className="text-3xl font-bold text-[#3C2A21]">Page de Commande en Construction</h1>
    </div>
  );
}