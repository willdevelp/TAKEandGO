// import { Phone, Mail, MapPin, Clock } from "lucide-react"

// export default function Contact() {
//     return (
//         <div>
//             <section className="bg-[#3C2A21] text-white py-16 text-center">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                     Notre Carte
//                 </h1>
//                 <p className="text-gray-300">
//                     Découvrez nos spécialités soigneusement préparées
//                 </p>
//             </section>

//             {/* Informations de contact */}
//             <section>
//                 <div className="grid grid-cols-4 space-x-8 px-6 py-10">
//                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
//                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
//                         <MapPin className="mx-auto mb-3 text-white" />
//                     </div>
//                     <h2 className="text-xl font-semibold mt-4 mb-2">Adresse</h2>
//                     <p>123 Rue de l&apos;Exemple</p>
//                     <p>Douala, Cameroun</p>
//                 </div>
//                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
//                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
//                         <Clock className="mx-auto mb-3 text-white" />
//                     </div>
//                     <h2 className="text-xl font-semibold mb-2 mt-4">Heures d&apos;ouverture</h2>
//                     <p>7jours/7, 24h/24</p>
//                 </div>
//                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
//                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
//                         <Phone className="mx-auto mb-3 text-white" />
//                     </div>
//                     <h2 className="text-xl font-semibold mt-4 mb-2">Téléphone</h2>
//                     <p>+237 699 12 34 56</p>
//                     <p>Lundi - Vendredi : 8h - 18h</p>
//                 </div>
//                 <div className="mb-4 border p-4 py-4 rounded-lg border-[#D4A574]">
//                     <div className="border p-2 w-12 h-12 bg-[#3C2A21] rounded-lg">
//                         <Mail className="mx-auto mb-3 text-white" />
//                     </div>
//                     <h2 className="text-xl font-semibold mt-4 mb-2">Email</h2>
//                     <p>contact@lecafeparisien.com</p>
//                     <p>Reponse sous 24h</p>
//                 </div>
//             </div>
//             </section>

//             <section>
//                 <div>

//                 </div>
//             </section>
//         </div>
//     )
// }


// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, Clock, Instagram, Facebook, 
  Twitter, Send, Coffee, Users, Star, Award, 
  ChevronRight, Calendar, Navigation, MessageCircle,
  CreditCard, Wifi, Music, ParkingCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      });
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gris.jpg"
            alt="Notre café"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3C2A21]/90 to-[#3C2A21]/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Une question, une réservation ou simplement envie de discuter café ? 
            Notre équipe est là pour vous répondre.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-amber-300">
              <Clock className="h-5 w-5" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <Users className="h-5 w-5" />
              <span>Service client 7j/7</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Cartes d'information rapide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-20 mb-16">
          {[
            {
              icon: MapPin,
              title: 'Adresse',
              content: '12 Rue du Café, 75001 Paris',
              subContent: 'Métro : Louvre-Rivoli',
              action: 'Obtenir l\'itinéraire',
              link: '#'
            },
            {
              icon: Phone,
              title: 'Téléphone',
              content: '01 23 45 67 89',
              subContent: 'Ouvert 7j/7 de 7h30 à 20h',
              action: 'Appeler maintenant',
              link: 'tel:0123456789'
            },
            {
              icon: Mail,
              title: 'Email',
              content: 'contact@cafeprestige.fr',
              subContent: 'Réponse sous 24h ouvrées',
              action: 'Envoyer un message',
              link: 'mailto:contact@cafeprestige.fr'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-[#3C2A21] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-2">{item.title}</h3>
              <p className="text-gray-800 font-semibold">{item.content}</p>
              <p className="text-gray-500 text-sm mb-4">{item.subContent}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium group"
              >
                {item.action}
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-700 font-medium">
                    ✅ Message envoyé avec succès ! Nous vous répondrons rapidement.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-700 font-medium">
                    ❌ Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition resize-none"
                    placeholder="Bonjour, je souhaiterais..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#3C2A21] focus:ring-[#3C2A21] border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Je souhaite recevoir la newsletter et les offres exclusives
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-[#3C2A21] hover:bg-[#5C3B2A] text-white font-semibold py-4 px-6 rounded-xl transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Champs obligatoires. Les informations recueillies sont traitées conformément à notre 
                  <Link href="/politique-confidentialite" className="text-[#3C2A21] underline ml-1">
                    politique de confidentialité
                  </Link>.
                </p>
              </form>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-6">
            {/* Horaires détaillés */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Horaires d&apos;ouverture
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Lundi - Jeudi</span>
                  <span className="text-[#3C2A21] font-semibold">7h30 - 20h00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Vendredi</span>
                  <span className="text-[#3C2A21] font-semibold">7h30 - 22h00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Samedi</span>
                  <span className="text-[#3C2A21] font-semibold">8h30 - 22h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-[#3C2A21] font-semibold">9h00 - 19h00</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-xl">
                <p className="text-sm text-amber-800">
                  <span className="font-bold">Happy Hour :</span> Tous les jours de 16h à 19h
                  <br />
                  <span className="text-xs">-20% sur toutes les boissons</span>
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4">
                Nos services
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Wifi, label: 'WiFi haut débit gratuit' },
                  { icon: Coffee, label: 'Café à emporter' },
                  { icon: Users, label: 'Salle privée pour événements' },
                  { icon: CreditCard, label: 'Paiement par carte accepté' },
                  { icon: Music, label: 'Musique live le vendredi' },
                  { icon: ParkingCircle, label: 'Parking à vélos sécurisé' },
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-gradient-to-br from-[#3C2A21] to-[#5C3B2A] rounded-3xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-4">
                Suivez-nous
              </h3>
              <p className="text-amber-200 mb-6 text-sm">
                Découvrez notre actualité, nos événements et nos coulisses sur les réseaux sociaux
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carte interactive */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-8 text-center">
            Comment nous trouver
          </h2>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991440608209!2d2.338028015674357!3d48.86000007928789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sMus%C3%A9e%20du%20Louvre!5e0!3m2!1sfr!2sfr!4v1645569876543!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-6 bg-white flex flex-wrap gap-6 justify-between items-center">
              <div className="flex items-center gap-4">
                <Navigation className="h-8 w-8 text-amber-600" />
                <div>
                  <p className="font-semibold text-[#3C2A21]">12 Rue du Café, 75001 Paris</p>
                  <p className="text-sm text-gray-500">Métro : Louvre-Rivoli (ligne 1)</p>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3C2A21] hover:bg-[#5C3B2A] text-white px-6 py-3 rounded-xl transition"
              >
                <MapPin className="h-5 w-5" />
                Obtenir l&apos;itinéraire
              </a>
            </div>
          </div>
        </div>

        {/* FAQ rapide */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Proposez-vous des options sans gluten ?",
                a: "Oui, nous proposons plusieurs pâtisseries sans gluten et des laits végétaux (amande, avoine, soja)."
              },
              {
                q: "Faut-il réserver pour le brunch du weekend ?",
                a: "Nous recommandons de réserver au moins 48h à l'avance pour le brunch du samedi et dimanche."
              },
              {
                q: "Acceptez-vous les animaux ?",
                a: "Les animaux bien élevés sont les bienvenus sur notre terrasse et dans notre espace dédié."
              },
              {
                q: "Proposez-vous du wifi ?",
                a: "Oui, notre wifi est gratuit et accessible à tous nos clients."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-serif font-bold text-[#3C2A21] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}