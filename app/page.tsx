"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  description: string;
  prix: number;
  categorie: string;
  populaire: boolean;
};

const Accueil = () => {
  const [boissonsPopulaires, setBoissonsPopulaires] = useState<Boisson[]>([]);

  useEffect(() => {
    // Simuler un appel API
    const populaires = [
      {
        id: 1,
        nom: 'Espresso Classique',
        description: 'Un espresso intense et corsé',
        prix: 3.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 3,
        nom: 'Latte Macchiato',
        description: 'Lait vapeur, espresso et mousse de lait crémeuse',
        prix: 4.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 8,
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
    <Layout>
      <Head>
        <title>Le Café Parisien | Café d&apos;exception à Paris</title>
        <meta name="description" content="Découvrez Le Café Parisien, un établissement premium proposant des boissons chaudes, sans alcool et alcoolisées de qualité." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url("/cafe-hero.jpg")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              L&apos;Art du Café <span className="text-[#D4A574]">Réinventé</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Découvrez une expérience sensorielle unique au cœur de Paris
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/carte" 
                className="bg-[#D4A574] hover:bg-[#B8865B] text-[#3C2A21] font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Découvrir notre carte
              </Link>
              <Link 
                href="/commande" 
                className="bg-white hover:bg-gray-100 text-[#3C2A21] font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Commander en ligne
              </Link>
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
                <div className="p-6">
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
      <section className="py-20 bg-[#3C2A21] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Prêt à Découvrir ?
          </h2>
          <p className="text-xl text-[#D4A574] mb-8 max-w-2xl mx-auto">
            Commandez en ligne et profitez de votre boisson préférée en quelques minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/commande" 
              className="bg-[#D4A574] hover:bg-[#B8865B] text-[#3C2A21] font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Commander Maintenant
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 border-2 border-white"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accueil;