// // import { Phone, Mail, MapPin, Clock } from "lucide-react"

// // export default function Contact() {
// //     return (
// //         <div>
// //             <section className="bg-[#3C2A21] text-white py-16 text-center">
// //                 <h1 className="text-4xl md:text-5xl font-bold mb-4">
// //                     Notre Carte
// //                 </h1>
// //                 <p className="text-gray-300">
// //                     Découvrez nos spécialités soigneusement préparées
// //                 </p>
// //             </section>

// //             {/* Informations de contact */}
// //             <section>
// //                 <div className="grid grid-cols-4 space-x-8 px-6 py-10">
// //                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
// //                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
// //                         <MapPin className="mx-auto mb-3 text-white" />
// //                     </div>
// //                     <h2 className="text-xl font-semibold mt-4 mb-2">Adresse</h2>
// //                     <p>123 Rue de l&apos;Exemple</p>
// //                     <p>Douala, Cameroun</p>
// //                 </div>
// //                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
// //                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
// //                         <Clock className="mx-auto mb-3 text-white" />
// //                     </div>
// //                     <h2 className="text-xl font-semibold mb-2 mt-4">Heures d&apos;ouverture</h2>
// //                     <p>7jours/7, 24h/24</p>
// //                 </div>
// //                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
// //                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
// //                         <Phone className="mx-auto mb-3 text-white" />
// //                     </div>
// //                     <h2 className="text-xl font-semibold mt-4 mb-2">Téléphone</h2>
// //                     <p>+237 699 12 34 56</p>
// //                     <p>Lundi - Vendredi : 8h - 18h</p>
// //                 </div>
// //                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
// //                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
// //                         <Mail className="mx-auto mb-3 text-white" />
// //                     </div>
// //                     <h2 className="text-xl font-semibold mt-4 mb-2">Email</h2>
// //                     <p>contact@lecafeparisien.com</p>
// //                     <p>Reponse sous 24h</p>
// //                 </div>
// //             </div>
// //             </section>

// //             <section>
// //                 <div>

// //                 </div>
// //             </section>
// //         </div>
// //     )
// // }


// // app/contact/page.tsx
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   MapPin, Phone, Mail, Clock, Instagram, Facebook, 
//   Twitter, Send, Coffee, Users, Star, Award, 
//   ChevronRight, Calendar, Navigation, MessageCircle,
//   CreditCard, Wifi, Music, ParkingCircle
// } from 'lucide-react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     newsletter: false
//   });

//   const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus('sending');
    
//     // Simuler l'envoi du formulaire
//     setTimeout(() => {
//       setFormStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//         newsletter: false
//       });
      
//       // Réinitialiser le statut après 5 secondes
//       setTimeout(() => setFormStatus('idle'), 5000);
//     }, 1500);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
//       {/* Hero Section */}
//       <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/gris.jpg"
//             alt="Notre café"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#3C2A21]/90 to-[#3C2A21]/70"></div>
//         </div>
        
//         <div className="container mx-auto px-6 relative z-10 text-center">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
//             Contactez-nous
//           </h1>
//           <p className="text-xl text-amber-200 max-w-2xl mx-auto">
//             Une question, une réservation ou simplement envie de discuter café ? 
//             Notre équipe est là pour vous répondre.
//           </p>
//           <div className="flex justify-center gap-4 mt-8">
//             <div className="flex items-center gap-2 text-amber-300">
//               <Clock className="h-5 w-5" />
//               <span>Réponse sous 24h</span>
//             </div>
//             <div className="flex items-center gap-2 text-amber-300">
//               <Users className="h-5 w-5" />
//               <span>Service client 7j/7</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto px-6 py-16">
//         {/* Cartes d'information rapide */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-20 mb-16">
//           {[
//             {
//               icon: MapPin,
//               title: 'Adresse',
//               content: '12 Rue du Café, 75001 Paris',
//               subContent: 'Métro : Louvre-Rivoli',
//               action: 'Obtenir l\'itinéraire',
//               link: '#'
//             },
//             {
//               icon: Phone,
//               title: 'Téléphone',
//               content: '01 23 45 67 89',
//               subContent: 'Ouvert 7j/7 de 7h30 à 20h',
//               action: 'Appeler maintenant',
//               link: 'tel:0123456789'
//             },
//             {
//               icon: Mail,
//               title: 'Email',
//               content: 'contact@cafeprestige.fr',
//               subContent: 'Réponse sous 24h ouvrées',
//               action: 'Envoyer un message',
//               link: 'mailto:contact@cafeprestige.fr'
//             }
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="bg-[#3C2A21] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
//                 <item.icon className="h-7 w-7 text-amber-500" />
//               </div>
//               <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-2">{item.title}</h3>
//               <p className="text-gray-800 font-semibold">{item.content}</p>
//               <p className="text-gray-500 text-sm mb-4">{item.subContent}</p>
//               <a
//                 href={item.link}
//                 className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium group"
//               >
//                 {item.action}
//                 <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition" />
//               </a>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Formulaire de contact */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-3xl shadow-xl p-8">
//               <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-2">
//                 Envoyez-nous un message
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
//               </p>

//               {formStatus === 'success' && (
//                 <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
//                   <p className="text-green-700 font-medium">
//                     ✅ Message envoyé avec succès ! Nous vous répondrons rapidement.
//                   </p>
//                 </div>
//               )}

//               {formStatus === 'error' && (
//                 <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
//                   <p className="text-red-700 font-medium">
//                     ❌ Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
//                   </p>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Nom complet *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
//                       placeholder="Jean Dupont"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
//                       placeholder="jean@exemple.fr"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Téléphone
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
//                       placeholder="01 23 45 67 89"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Sujet *
//                     </label>
//                     <select
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
//                     >
//                       <option value="">Sélectionnez un sujet</option>
//                       <option value="reservation">Réservation</option>
//                       <option value="commande">Commande</option>
//                       <option value="info">Demande d&apos;information</option>
//                       <option value="evenement">Événement privé</option>
//                       <option value="reclamation">Réclamation</option>
//                       <option value="autre">Autre</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition resize-none"
//                     placeholder="Bonjour, je souhaiterais..."
//                   ></textarea>
//                 </div>

//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="newsletter"
//                     id="newsletter"
//                     checked={formData.newsletter}
//                     onChange={handleChange}
//                     className="h-4 w-4 text-[#3C2A21] focus:ring-[#3C2A21] border-gray-300 rounded"
//                   />
//                   <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
//                     Je souhaite recevoir la newsletter et les offres exclusives
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={formStatus === 'sending'}
//                   className="w-full bg-[#3C2A21] hover:bg-[#5C3B2A] text-white font-semibold py-4 px-6 rounded-xl transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {formStatus === 'sending' ? (
//                     <>Envoi en cours...</>
//                   ) : (
//                     <>
//                       Envoyer le message
//                       <Send className="h-5 w-5" />
//                     </>
//                   )}
//                 </button>

//                 <p className="text-xs text-gray-500 text-center">
//                   * Champs obligatoires. Les informations recueillies sont traitées conformément à notre 
//                   <Link href="/politique-confidentialite" className="text-[#3C2A21] underline ml-1">
//                     politique de confidentialité
//                   </Link>.
//                 </p>
//               </form>
//             </div>
//           </div>

//           {/* Informations complémentaires */}
//           <div className="space-y-6">
//             {/* Horaires détaillés */}
//             <div className="bg-white rounded-3xl shadow-xl p-6">
//               <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4 flex items-center gap-2">
//                 <Clock className="h-5 w-5" />
//                 Horaires d&apos;ouverture
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center border-b border-gray-100 pb-2">
//                   <span className="font-medium">Lundi - Jeudi</span>
//                   <span className="text-[#3C2A21] font-semibold">7h30 - 20h00</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-gray-100 pb-2">
//                   <span className="font-medium">Vendredi</span>
//                   <span className="text-[#3C2A21] font-semibold">7h30 - 22h00</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-gray-100 pb-2">
//                   <span className="font-medium">Samedi</span>
//                   <span className="text-[#3C2A21] font-semibold">8h30 - 22h00</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">Dimanche</span>
//                   <span className="text-[#3C2A21] font-semibold">9h00 - 19h00</span>
//                 </div>
//               </div>

//               <div className="mt-4 p-3 bg-amber-50 rounded-xl">
//                 <p className="text-sm text-amber-800">
//                   <span className="font-bold">Happy Hour :</span> Tous les jours de 16h à 19h
//                   <br />
//                   <span className="text-xs">-20% sur toutes les boissons</span>
//                 </p>
//               </div>
//             </div>

//             {/* Services */}
//             <div className="bg-white rounded-3xl shadow-xl p-6">
//               <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4">
//                 Nos services
//               </h3>
//               <div className="space-y-3">
//                 {[
//                   { icon: Wifi, label: 'WiFi haut débit gratuit' },
//                   { icon: Coffee, label: 'Café à emporter' },
//                   { icon: Users, label: 'Salle privée pour événements' },
//                   { icon: CreditCard, label: 'Paiement par carte accepté' },
//                   { icon: Music, label: 'Musique live le vendredi' },
//                   { icon: ParkingCircle, label: 'Parking à vélos sécurisé' },
//                 ].map((service, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <service.icon className="h-5 w-5 text-amber-600" />
//                     <span className="text-gray-700">{service.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Réseaux sociaux */}
//             <div className="bg-gradient-to-br from-[#3C2A21] to-[#5C3B2A] rounded-3xl shadow-xl p-6 text-white">
//               <h3 className="text-xl font-serif font-bold mb-4">
//                 Suivez-nous
//               </h3>
//               <p className="text-amber-200 mb-6 text-sm">
//                 Découvrez notre actualité, nos événements et nos coulisses sur les réseaux sociaux
//               </p>
//               <div className="flex justify-center gap-4">
//                 <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
//                   <Instagram className="h-6 w-6" />
//                 </a>
//                 <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
//                   <Facebook className="h-6 w-6" />
//                 </a>
//                 <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
//                   <Twitter className="h-6 w-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carte interactive */}
//         <div className="mt-16">
//           <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-8 text-center">
//             Comment nous trouver
//           </h2>
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//             <div className="relative h-[400px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991440608209!2d2.338028015674357!3d48.86000007928789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sMus%C3%A9e%20du%20Louvre!5e0!3m2!1sfr!2sfr!4v1645569876543!5m2!1sfr!2sfr"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 className="absolute inset-0"
//               ></iframe>
//             </div>
//             <div className="p-6 bg-white flex flex-wrap gap-6 justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <Navigation className="h-8 w-8 text-amber-600" />
//                 <div>
//                   <p className="font-semibold text-[#3C2A21]">12 Rue du Café, 75001 Paris</p>
//                   <p className="text-sm text-gray-500">Métro : Louvre-Rivoli (ligne 1)</p>
//                 </div>
//               </div>
//               <a
//                 href="https://maps.google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-[#3C2A21] hover:bg-[#5C3B2A] text-white px-6 py-3 rounded-xl transition"
//               >
//                 <MapPin className="h-5 w-5" />
//                 Obtenir l&apos;itinéraire
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* FAQ rapide */}
//         <div className="mt-16">
//           <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-8 text-center">
//             Questions fréquentes
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 q: "Proposez-vous des options sans gluten ?",
//                 a: "Oui, nous proposons plusieurs pâtisseries sans gluten et des laits végétaux (amande, avoine, soja)."
//               },
//               {
//                 q: "Faut-il réserver pour le brunch du weekend ?",
//                 a: "Nous recommandons de réserver au moins 48h à l'avance pour le brunch du samedi et dimanche."
//               },
//               {
//                 q: "Acceptez-vous les animaux ?",
//                 a: "Les animaux bien élevés sont les bienvenus sur notre terrasse et dans notre espace dédié."
//               },
//               {
//                 q: "Proposez-vous du wifi ?",
//                 a: "Oui, notre wifi est gratuit et accessible à tous nos clients."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 shadow-md">
//                 <h3 className="font-serif font-bold text-[#3C2A21] mb-2">{faq.q}</h3>
//                 <p className="text-gray-600 text-sm">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/contact/page.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Instagram,
//   Facebook,
//   Twitter,
//   Send,
//   Coffee,
//   Users,
//   CreditCard,
//   Wifi,
//   Music,
//   ParkingCircle,
//   ChevronRight,
//   ChevronDown,
//   Navigation,
//   CheckCircle2,
//   AlertCircle,
// } from "lucide-react";

// /* ---------- Coordonnées : à adapter ---------- */
// const INFO = {
//   adresse: "123 Rue de l'Exemple",
//   ville: "Douala, Cameroun",
//   telephone: "+237 699 12 34 56",
//   telephoneBrut: "+237699123456",
//   telephoneNote: "Lundi – Vendredi : 8h – 18h",
//   email: "contact@lecafeparisien.com",
// };

// const mapQuery = encodeURIComponent(`${INFO.adresse}, ${INFO.ville}`);

// const horaires = [
//   { jour: "Lundi – Jeudi", heures: "7h30 – 20h00" },
//   { jour: "Vendredi", heures: "7h30 – 22h00" },
//   { jour: "Samedi", heures: "8h30 – 22h00" },
//   { jour: "Dimanche", heures: "9h00 – 19h00" },
// ];

// const services = [
//   { icon: Wifi, label: "WiFi haut débit gratuit" },
//   { icon: Coffee, label: "Café à emporter" },
//   { icon: Users, label: "Salle privée pour événements" },
//   { icon: CreditCard, label: "Paiement par carte accepté" },
//   { icon: Music, label: "Musique live le vendredi" },
//   { icon: ParkingCircle, label: "Parking sécurisé" },
// ];

// const faqs = [
//   {
//     q: "Proposez-vous des options sans gluten ?",
//     a: "Oui, nous proposons plusieurs pâtisseries sans gluten et des laits végétaux (amande, avoine, soja).",
//   },
//   {
//     q: "Faut-il réserver pour le brunch du weekend ?",
//     a: "Nous recommandons de réserver au moins 48h à l'avance pour le brunch du samedi et du dimanche.",
//   },
//   {
//     q: "Acceptez-vous les animaux ?",
//     a: "Les animaux bien élevés sont les bienvenus sur notre terrasse et dans notre espace dédié.",
//   },
//   {
//     q: "Proposez-vous du WiFi ?",
//     a: "Oui, notre WiFi est gratuit et accessible à tous nos clients.",
//   },
// ];

// const contactCards = [
//   {
//     icon: MapPin,
//     title: "Adresse",
//     lines: [INFO.adresse, INFO.ville],
//     action: "Obtenir l'itinéraire",
//     href: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
//     external: true,
//   },
//   {
//     icon: Phone,
//     title: "Téléphone",
//     lines: [INFO.telephone, INFO.telephoneNote],
//     action: "Appeler maintenant",
//     href: `tel:${INFO.telephoneBrut}`,
//     external: false,
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     lines: [INFO.email, "Réponse sous 24h ouvrées"],
//     action: "Envoyer un email",
//     href: `mailto:${INFO.email}`,
//     external: false,
//   },
// ];

// const inputClass =
//   "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#3C2A21] placeholder:text-gray-400 transition focus:border-[#D4A574] focus:outline-none focus:ring-4 focus:ring-[#D4A574]/20";
// const labelClass = "mb-2 block text-sm font-medium text-[#3C2A21]";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     newsletter: false,
//   });
//   const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus("sending");

//     // TODO : remplacer cette simulation par un vrai envoi (route API ou server action)
//     setTimeout(() => {
//       setFormStatus("success");
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "", newsletter: false });
//       setTimeout(() => setFormStatus("idle"), 5000);
//     }, 1500);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked;
//     setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#3C2A21]">
//       {/* EN-TÊTE */}
//       <section className="border-b border-gray-100">
//         <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
//           <p className="mb-4 text-sm font-semibold text-[#B8865B]">Contact</p>
//           <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight md:text-6xl">
//             Une question ? Parlons café.
//           </h1>
//           <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
//             Réservation, commande, événement privé ou simple demande d&apos;information : notre équipe
//             vous répond sous 24h.
//           </p>
//           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//             <a
//               href="#formulaire"
//               className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3C2A21] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
//             >
//               Écrire un message
//               <Send className="h-4 w-4" />
//             </a>
//             <a
//               href={`tel:${INFO.telephoneBrut}`}
//               className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3C2A21]/30 px-7 py-3.5 font-semibold transition-colors hover:bg-[#3C2A21] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
//             >
//               <Phone className="h-4 w-4" />
//               {INFO.telephone}
//             </a>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
//         {/* CARTES D'INFORMATION */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {contactCards.map(({ icon: Icon, title, lines, action, href, external }) => (
//             <div
//               key={title}
//               className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-lg"
//             >
//               <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0E6D2]">
//                 <Icon className="h-6 w-6 text-[#3C2A21]" />
//               </div>
//               <h2 className="font-serif text-xl font-bold">{title}</h2>
//               <p className="mt-2 font-semibold">{lines[0]}</p>
//               <p className="text-sm text-gray-500">{lines[1]}</p>
//               <a
//                 href={href}
//                 {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//                 className="group mt-5 inline-flex items-center pt-1 text-sm font-semibold text-[#B8865B] hover:text-[#3C2A21] md:mt-auto"
//               >
//                 {action}
//                 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* FORMULAIRE + INFOS */}
//         <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-5">
//           {/* Formulaire */}
//           <section id="formulaire" className="scroll-mt-24 lg:col-span-3">
//             <h2 className="font-serif text-3xl font-bold">Envoyez-nous un message</h2>
//             <p className="mt-2 mb-8 text-gray-600">
//               Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
//             </p>

//             <div role="status" aria-live="polite">
//               {formStatus === "success" && (
//                 <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
//                   <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
//                   <p className="font-medium">Message envoyé ! Nous vous répondrons rapidement.</p>
//                 </div>
//               )}
//               {formStatus === "error" && (
//                 <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
//                   <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
//                   <p className="font-medium">
//                     Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
//                   </p>
//                 </div>
//               )}
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <div>
//                   <label htmlFor="name" className={labelClass}>
//                     Nom complet *
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     autoComplete="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                     placeholder="Jean Dupont"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className={labelClass}>
//                     Email *
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     autoComplete="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                     placeholder="jean@exemple.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <div>
//                   <label htmlFor="phone" className={labelClass}>
//                     Téléphone
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     name="phone"
//                     autoComplete="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={inputClass}
//                     placeholder="+237 6 99 12 34 56"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className={labelClass}>
//                     Sujet *
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                   >
//                     <option value="">Sélectionnez un sujet</option>
//                     <option value="reservation">Réservation</option>
//                     <option value="commande">Commande</option>
//                     <option value="info">Demande d&apos;information</option>
//                     <option value="evenement">Événement privé</option>
//                     <option value="reclamation">Réclamation</option>
//                     <option value="autre">Autre</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className={labelClass}>
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className={`${inputClass} resize-none`}
//                   placeholder="Bonjour, je souhaiterais…"
//                 />
//               </div>

//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   name="newsletter"
//                   id="newsletter"
//                   checked={formData.newsletter}
//                   onChange={handleChange}
//                   className="h-4 w-4 rounded border-gray-300 accent-[#3C2A21]"
//                 />
//                 <label htmlFor="newsletter" className="text-sm text-gray-600">
//                   Je souhaite recevoir la newsletter et les offres exclusives
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={formStatus === "sending"}
//                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3C2A21] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {formStatus === "sending" ? (
//                   "Envoi en cours…"
//                 ) : (
//                   <>
//                     Envoyer le message
//                     <Send className="h-5 w-5" />
//                   </>
//                 )}
//               </button>

//               <p className="text-center text-xs text-gray-500">
//                 * Champs obligatoires. Vos informations sont traitées conformément à notre{" "}
//                 <Link href="/politique-confidentialite" className="underline hover:text-[#3C2A21]">
//                   politique de confidentialité
//                 </Link>
//                 .
//               </p>
//             </form>
//           </section>

//           {/* Colonne d'informations */}
//           <aside className="space-y-6 lg:col-span-2">
//             {/* Horaires */}
//             <div id="horaires" className="rounded-2xl border border-gray-200 p-7">
//               <h3 className="mb-5 flex items-center gap-2 font-serif text-xl font-bold">
//                 <Clock className="h-5 w-5 text-[#B8865B]" />
//                 Horaires d&apos;ouverture
//               </h3>
//               <dl className="divide-y divide-gray-100">
//                 {horaires.map((h) => (
//                   <div key={h.jour} className="flex justify-between gap-4 py-3 first:pt-0">
//                     <dt className="text-gray-600">{h.jour}</dt>
//                     <dd className="font-semibold">{h.heures}</dd>
//                   </div>
//                 ))}
//               </dl>
//               <div className="mt-4 rounded-xl bg-[#F0E6D2]/60 p-4 text-sm">
//                 <p className="font-semibold">Happy Hour : tous les jours de 16h à 19h</p>
//                 <p className="text-gray-600">-20% sur toutes les boissons</p>
//               </div>
//             </div>

//             {/* Services */}
//             <div className="rounded-2xl border border-gray-200 p-7">
//               <h3 className="mb-5 font-serif text-xl font-bold">Nos services</h3>
//               <ul className="space-y-3">
//                 {services.map(({ icon: Icon, label }) => (
//                   <li key={label} className="flex items-center gap-3 text-gray-700">
//                     <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0E6D2]">
//                       <Icon className="h-4 w-4 text-[#3C2A21]" />
//                     </span>
//                     {label}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Réseaux sociaux */}
//             <div className="rounded-2xl bg-[#3C2A21] p-7 text-white">
//               <h3 className="font-serif text-xl font-bold">Suivez-nous</h3>
//               <p className="mt-2 text-sm text-gray-300">
//                 Notre actualité, nos événements et les coulisses du café.
//               </p>
//               <div className="mt-5 flex gap-3">
//                 {[
//                   { icon: Instagram, label: "Instagram" },
//                   { icon: Facebook, label: "Facebook" },
//                   { icon: Twitter, label: "Twitter" },
//                 ].map(({ icon: Icon, label }) => (
//                   <a
//                     key={label}
//                     href="#"
//                     aria-label={label}
//                     className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-[#D4A574] hover:text-[#3C2A21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                   >
//                     <Icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         </div>

//         {/* CARTE */}
//         <section className="mt-24">
//           <h2 className="mb-8 font-serif text-3xl font-bold">Comment nous trouver</h2>
//           <div className="overflow-hidden rounded-2xl border border-gray-200">
//             <div className="relative h-[380px]">
//               <iframe
//                 title="Localisation du café"
//                 src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
//                 loading="lazy"
//                 allowFullScreen
//                 className="absolute inset-0 h-full w-full border-0"
//               />
//             </div>
//             <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 bg-white p-6">
//               <div className="flex items-center gap-4">
//                 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E6D2]">
//                   <Navigation className="h-5 w-5 text-[#3C2A21]" />
//                 </span>
//                 <div>
//                   <p className="font-semibold">{INFO.adresse}</p>
//                   <p className="text-sm text-gray-500">{INFO.ville}</p>
//                 </div>
//               </div>
//               <a
//                 href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full bg-[#3C2A21] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
//               >
//                 <MapPin className="h-5 w-5" />
//                 Obtenir l&apos;itinéraire
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="mx-auto mt-24 max-w-3xl">
//           <h2 className="mb-8 text-center font-serif text-3xl font-bold">Questions fréquentes</h2>
//           <div className="border-t border-gray-200">
//             {faqs.map(({ q, a }) => (
//               <details key={q} className="group border-b border-gray-200">
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
//                   {q}
//                   <ChevronDown className="h-5 w-5 shrink-0 text-[#B8865B] transition-transform group-open:rotate-180" />
//                 </summary>
//                 <p className="pb-5 leading-relaxed text-gray-600">{a}</p>
//               </details>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  Coffee,
  Users,
  CreditCard,
  Wifi,
  Music,
  ParkingCircle,
  ChevronRight,
  ChevronDown,
  Navigation,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* ---------- Coordonnées : à adapter ---------- */
const INFO = {
  adresse: "123 Rue de l'Exemple",
  ville: "Douala, Cameroun",
  telephone: "+237 699 12 34 56",
  telephoneBrut: "+237699123456",
  telephoneNote: "Lundi – Vendredi : 8h – 18h",
  email: "contact@lecafeparisien.com",
};

const mapQuery = encodeURIComponent(`${INFO.adresse}, ${INFO.ville}`);

const horaires = [
  { jour: "Lundi – Jeudi", heures: "7h30 – 20h00" },
  { jour: "Vendredi", heures: "7h30 – 22h00" },
  { jour: "Samedi", heures: "8h30 – 22h00" },
  { jour: "Dimanche", heures: "9h00 – 19h00" },
];

const services = [
  { icon: Wifi, label: "WiFi haut débit gratuit" },
  { icon: Coffee, label: "Café à emporter" },
  { icon: Users, label: "Salle privée pour événements" },
  { icon: CreditCard, label: "Paiement par carte accepté" },
  { icon: Music, label: "Musique live le vendredi" },
  { icon: ParkingCircle, label: "Parking sécurisé" },
];

const faqs = [
  {
    q: "Proposez-vous des options sans gluten ?",
    a: "Oui, nous proposons plusieurs pâtisseries sans gluten et des laits végétaux (amande, avoine, soja).",
  },
  {
    q: "Faut-il réserver pour le brunch du weekend ?",
    a: "Nous recommandons de réserver au moins 48h à l'avance pour le brunch du samedi et du dimanche.",
  },
  {
    q: "Acceptez-vous les animaux ?",
    a: "Les animaux bien élevés sont les bienvenus sur notre terrasse et dans notre espace dédié.",
  },
  {
    q: "Proposez-vous du WiFi ?",
    a: "Oui, notre WiFi est gratuit et accessible à tous nos clients.",
  },
];

const contactCards = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: [INFO.adresse, INFO.ville],
    action: "Obtenir l'itinéraire",
    href: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
    external: true,
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: [INFO.telephone, INFO.telephoneNote],
    action: "Appeler maintenant",
    href: `tel:${INFO.telephoneBrut}`,
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [INFO.email, "Réponse sous 24h ouvrées"],
    action: "Envoyer un email",
    href: `mailto:${INFO.email}`,
    external: false,
  },
];

const inputClass =
  "w-full rounded-2xl border border-[#3C2A21]/15 bg-[#FBF9F6] px-4 py-3.5 text-[#3C2A21] placeholder:text-[#3C2A21]/35 outline-none transition-all duration-200 focus:border-[#B8865B] focus:bg-white focus:ring-4 focus:ring-[#B8865B]/15";
const labelClass =
  "mb-2 block text-[13px] font-semibold uppercase tracking-wide text-[#3C2A21]/70";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // TODO : remplacer cette simulation par un vrai envoi (route API ou server action)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", newsletter: false });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#3C2A21] antialiased selection:bg-[#D4A574]/40">
      {/* Animations & motifs */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeUp .8s cubic-bezier(.22,1,.36,1) both; }
        .d-1 { animation-delay: .08s } .d-2 { animation-delay: .16s }
        .d-3 { animation-delay: .24s } .d-4 { animation-delay: .32s }
        .dotgrid {
          background-image: radial-gradient(rgba(60,42,33,.13) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { animation: none; }
        }
      `}</style>

      {/* ================= EN-TÊTE ================= */}
      <section className="relative overflow-hidden border-b border-[#3C2A21]/8 bg-[#F7F2EA]">
        {/* halos décoratifs */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#D4A574]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-[#B8865B]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Texte */}
            <div className="lg:col-span-7">
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Contact
                </span>
              </div>

              <h1 className="reveal d-1 mt-6 font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Une question ?
                <br />
                <span className="italic text-[#B8865B]">Parlons café.</span>
              </h1>

              <p className="reveal d-2 mt-6 max-w-xl text-lg leading-relaxed text-[#3C2A21]/65">
                Réservation, commande, événement privé ou simple demande d&apos;information :
                notre équipe vous répond sous 24h.
              </p>

              <div className="reveal d-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#formulaire"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3C2A21] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(60,42,33,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] hover:shadow-[0_20px_40px_-14px_rgba(60,42,33,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  Écrire un message
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${INFO.telephoneBrut}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3C2A21]/25 bg-white/60 px-7 py-4 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3C2A21] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  <Phone className="h-4 w-4" />
                  {INFO.telephone}
                </a>
              </div>

              {/* mini-infos */}
              <dl className="reveal d-4 mt-12 grid max-w-lg grid-cols-1 gap-x-8 gap-y-5 border-t border-[#3C2A21]/10 pt-8 sm:grid-cols-3">
                {[
                  { label: "Réponse", value: "Sous 24h" },
                  { label: "Du lundi au samedi", value: "7h30 – 22h" },
                  { label: "Note clients", value: "4,9 / 5" },
                ].map((s) => (
                  <div key={s.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#3C2A21]/45">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-serif text-lg font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Carte flottante */}
            <div className="reveal d-3 relative lg:col-span-5">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_30px_70px_-35px_rgba(60,42,33,0.5)] backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8865B]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Aujourd&apos;hui
                </div>

                <p className="mt-4 font-serif text-3xl font-bold">7h30 — 20h00</p>
                <p className="mt-1 text-sm text-[#3C2A21]/55">Service continu · cuisine ouverte</p>

                <div className="my-6 h-px bg-[#3C2A21]/10" />

                <ul className="space-y-3.5">
                  {[
                    { icon: MapPin, text: `${INFO.adresse}, ${INFO.ville}` },
                    { icon: Phone, text: INFO.telephone },
                    { icon: Mail, text: INFO.email },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0E6D2]">
                        <Icon className="h-4 w-4 text-[#3C2A21]" />
                      </span>
                      <span className="pt-1.5 text-[#3C2A21]/75">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#F0E6D2]/70 px-4 py-3 text-xs font-semibold text-[#3C2A21]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
                  </span>
                  Happy Hour de 16h à 19h — −20% sur les boissons
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        {/* ================= CARTES D'INFORMATION ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactCards.map(({ icon: Icon, title, lines, action, href, external }, i) => (
            <div
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
            >
              {/* lueur au survol */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4A574]/25" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5.5 w-5.5 text-[#3C2A21]" strokeWidth={1.8} />
                </div>
                <span className="font-serif text-sm font-bold text-[#3C2A21]/20">
                  0{i + 1}
                </span>
              </div>

              <h2 className="relative mt-6 font-serif text-xl font-bold">{title}</h2>
              <p className="relative mt-3 font-semibold leading-snug">{lines[0]}</p>
              <p className="relative mt-0.5 text-sm text-[#3C2A21]/50">{lines[1]}</p>

              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21] md:mt-auto"
              >
                {action}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* ================= FORMULAIRE + INFOS ================= */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Formulaire */}
          <section id="formulaire" className="scroll-mt-24 lg:col-span-7">
            <div className="rounded-3xl border border-[#3C2A21]/10 bg-white p-7 shadow-[0_30px_70px_-45px_rgba(60,42,33,0.5)] sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8865B]">
                  Formulaire
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold">Envoyez-nous un message</h2>
              <p className="mt-2 text-[#3C2A21]/60">
                Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
              </p>

              <div role="status" aria-live="polite" className="mt-8">
                {formStatus === "success" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Message envoyé ! Nous vous répondrons rapidement.
                    </p>
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Nom complet <span className="text-[#B8865B]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-[#B8865B]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+237 6 99 12 34 56"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Sujet <span className="text-[#B8865B]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 stroke=%22%233C2A21%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="commande">Commande</option>
                      <option value="info">Demande d&apos;information</option>
                      <option value="evenement">Événement privé</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message <span className="text-[#B8865B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Bonjour, je souhaiterais…"
                  />
                </div>

                <label
                  htmlFor="newsletter"
                  className="flex cursor-pointer items-start gap-3 rounded-2xl bg-[#FBF9F6] p-4 transition-colors hover:bg-[#F7F2EA]"
                >
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 cursor-pointer rounded border-[#3C2A21]/30 accent-[#3C2A21]"
                  />
                  <span className="text-sm leading-snug text-[#3C2A21]/70">
                    Je souhaite recevoir la newsletter et les offres exclusives
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3C2A21] px-6 py-4 font-semibold text-white shadow-[0_16px_34px_-16px_rgba(60,42,33,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {formStatus === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-relaxed text-[#3C2A21]/45">
                  * Champs obligatoires. Vos informations sont traitées conformément à notre{" "}
                  <Link
                    href="/politique-confidentialite"
                    className="underline underline-offset-2 transition-colors hover:text-[#3C2A21]"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </form>
            </div>
          </section>

          {/* Colonne d'informations */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="lg:sticky lg:top-10 lg:space-y-6">
              {/* Horaires */}
              <div
                id="horaires"
                className="scroll-mt-24 rounded-3xl border border-[#3C2A21]/10 bg-white p-7"
              >
                <h3 className="flex items-center gap-2.5 font-serif text-xl font-bold">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0E6D2]">
                    <Clock className="h-4.5 w-4.5 text-[#3C2A21]" strokeWidth={1.8} />
                  </span>
                  Horaires d&apos;ouverture
                </h3>

                <dl className="mt-6 divide-y divide-[#3C2A21]/8">
                  {horaires.map((h) => (
                    <div key={h.jour} className="flex justify-between gap-4 py-3 first:pt-0">
                      <dt className="text-sm text-[#3C2A21]/60">{h.jour}</dt>
                      <dd className="text-sm font-semibold tabular-nums">{h.heures}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 rounded-2xl bg-[#F0E6D2]/60 p-4">
                  <p className="text-sm font-bold">Happy Hour · 16h – 19h</p>
                  <p className="mt-0.5 text-sm text-[#3C2A21]/60">
                    −20% sur toutes les boissons
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="rounded-3xl border border-[#3C2A21]/10 bg-white p-7">
                <h3 className="font-serif text-xl font-bold">Nos services</h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {services.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 text-sm text-[#3C2A21]/75">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0E6D2]">
                        <Icon className="h-4 w-4 text-[#3C2A21]" strokeWidth={1.8} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Réseaux sociaux */}
              <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] p-7 text-white">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4A574]/25 blur-3xl" />
                <h3 className="relative font-serif text-xl font-bold">Suivez-nous</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">
                  Notre actualité, nos événements et les coulisses du café.
                </p>
                <div className="relative mt-6 flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A574] hover:bg-[#D4A574] hover:text-[#3C2A21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ================= CARTE ================= */}
        <section className="mt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8865B]">
                  Localisation
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
                Comment nous trouver
              </h2>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#3C2A21]/25 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#3C2A21] hover:bg-[#3C2A21] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
            >
              <Navigation className="h-4 w-4" />
              Itinéraire
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#3C2A21]/10 shadow-[0_30px_70px_-45px_rgba(60,42,33,0.55)]">
            <div className="relative h-[420px]">
              <iframe
                title="Localisation du café"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%] transition-all duration-700 hover:grayscale-0"
              />

              {/* Carte flottante */}
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm">
                <div className="pointer-events-auto flex items-start gap-4 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_20px_45px_-20px_rgba(60,42,33,0.55)] backdrop-blur-xl">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0E6D2]">
                    <MapPin className="h-5 w-5 text-[#3C2A21]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-semibold leading-snug">{INFO.adresse}</p>
                    <p className="mt-0.5 text-sm text-[#3C2A21]/55">{INFO.ville}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21]"
                    >
                      Obtenir l&apos;itinéraire
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8865B]">
                  FAQ
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-4xl">
                Questions
                <br />
                fréquentes
              </h2>
              <p className="mt-4 text-[#3C2A21]/60">
                Vous ne trouvez pas votre réponse ? Écrivez-nous, nous nous ferons un plaisir de
                vous aider.
              </p>
              <a
                href="#formulaire"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21]"
              >
                Poser une question
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[#3C2A21]/10 border-y border-[#3C2A21]/10">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg font-bold transition-colors hover:text-[#B8865B] [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3C2A21]/15 transition-all duration-300 group-open:rotate-180 group-open:border-[#B8865B] group-open:bg-[#B8865B] group-open:text-white">
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-[#3C2A21]/65">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= BANDEAU FINAL ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] px-8 py-14 text-center text-white md:px-16 md:py-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#D4A574]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#B8865B]/20 blur-3xl" />

          <h2 className="relative mx-auto max-w-2xl font-serif text-3xl font-bold leading-tight md:text-4xl">
            On vous garde une place au comptoir ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/65">
            Réservez en quelques secondes ou passez simplement nous dire bonjour.
          </p>

          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${INFO.telephoneBrut}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-7 py-4 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-4 w-4" />
              Réserver par téléphone
            </a>
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Mail className="h-4 w-4" />
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}