import Head from 'next/head';
import { 
  FaCoffee, 
 FaHeart, 
 FaAward, 
 FaUsers, 
  FaLeaf
} from 'react-icons/fa';

const valeurs = [
  {
    icon: <FaLeaf className="text-2xl" />,
    title: "Durabilité",
    description: "Nous nous engageons à utiliser des produits locaux et durables dans toutes nos préparations."
  },
  {
    icon: <FaAward className="text-2xl" />,
    title: "Excellence",
    description: "La recherche de la perfection dans chaque détail, de la sélection des grains à la présentation."
  },
  {
    icon: <FaHeart className="text-2xl" />,
    title: "Passion",
    description: "Notre amour pour le café se ressent dans chaque boisson que nous créons avec soin."
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Communauté",
    description: "Créer un espace chaleureux où chacun se sent comme à la maison."
  }
];
export default function APropos() {

  const equipe = [
    {
      nom: "Sophie Martin",
      role: "Fondatrice & Barista Chef",
      image: "/team/sophie.jpg",
      description: "15 ans d'expérience dans l'art du café"
    },
    {
      nom: "Thomas Lefebvre",
      role: "Maître Torréfacteur",
      image: "/team/thomas.jpg",
      description: "Spécialiste des blends maison"
    },
    {
      nom: "Camille Dubois",
      role: "Mixologue",
      image: "/team/camille.jpg",
      description: "Créatrice de nos cocktails signature"
    },
    {
      nom: "Lucas Moreau",
      role: "Responsable Service",
      image: "/team/lucas.jpg",
      description: "Garant de votre expérience unique"
    }
  ];

  // const certifications = [
  //   { nom: "Café Bio Équitable", icon: "🌱" },
  //   { nom: "Artisan Torréfacteur de France", icon: "🏆" },
  //   { nom: "Établissement Responsable", icon: "♻️" },
  //   { nom: "Meilleur Café Paris 2023", icon: "⭐" }
  // ];

  return (
    <>
      <Head>
        <title>À Propos - Le Café Parisien | Notre Histoire</title>
        <meta name="description" content="Découvrez l'histoire et les valeurs du Café Parisien, un établissement d'exception au cœur de Paris." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url("/about-hero.jpg")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Notre Histoire
            </h1>
            <p className="text-xl text-white opacity-90">
              Depuis 2010, l&apos;art du café réinventé
            </p>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-6">
                L&apos;Art du Café Réinventé
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Fondé en 2010 par Sophie Martin, Le Café Parisien est né d&apos;une passion 
                  profonde pour l&apos;artisanat du café et du désir de créer un lieu unique 
                  où tradition et innovation se rencontrent.
                </p>
                <p>
                  Notre établissement s&apos;est rapidement imposé comme une référence 
                  parisienne grâce à notre engagement envers la qualité, la durabilité 
                  et lexpérience client exceptionnelle.
                </p>
                <p>
                  Aujourd&apos;hui, nous sommes fiers de compter parmi les cafés les plus 
                  réputés de la capitale, reconnus pour notre expertise et notre 
                  approche innovante des boissons caféinées.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#3C2A21] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-6 text-[#D4A574]">
                  Notre Philosophie
                </h3>
                <p className="text-lg mb-6">
                  &quot;Chez Le Café Parisien, nous croyons que chaque tasse de café 
                  raconte une histoire. De la plantation à votre tasse, nous 
                  veillons à ce que chaque étape respecte les plus hauts standards 
                  de qualité et d&apos;éthique.&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center">
                    <FaCoffee className="text-2xl text-[#3C2A21]" />
                  </div>
                  <div>
                    <div className="font-semibold">Sophie Martin</div>
                    <div className="text-[#D4A574] text-sm">Fondatrice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
                      <div className="py-16 grid grid-cols-4 px-6 gap-6">
                <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
                  <div className="text-3xl font-bold text-[#D4A574] mb-2">50+</div>
                  <div className="text-gray-600">Boissons Uniques</div>
                </div>
                <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
                  <div className="text-3xl font-bold text-[#D4A574] mb-2">12</div>
                  <div className="text-gray-600">Ans d&apos;Expérience</div>
                </div>
                <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
                  <div className="text-3xl font-bold text-[#D4A574] mb-2">1000+</div>
                  <div className="text-gray-600">Clients Satisfaits</div>
                </div>
                <div className="text-center p-4 bg-[#F8F4F0] rounded-lg">
                  <div className="text-3xl font-bold text-[#D4A574] mb-2">15</div>
                  <div className="text-gray-600">Pays Fournisseurs</div>
                </div>
              </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-[#F8F4F0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {valeur.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#3C2A21] mb-3">
                  {valeur.title}
                </h3>
                <p className="text-gray-600">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des passionnés à votre service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membre, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-[#3C2A21] to-[#D4A574] rounded-2xl flex items-center justify-center text-white text-lg">
                    Image de {membre.nom}
                  </div>
                  <div className="absolute inset-0 bg-[#D4A574] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-[#3C2A21] mb-2">
                  {membre.nom}
                </h3>
                <div className="text-[#D4A574] font-medium mb-2">
                  {membre.role}
                </div>
                <p className="text-gray-600 text-sm">
                  {membre.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="py-20 bg-[#3C2A21] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Certifications & Reconnaissances
            </h2>
            <p className="text-xl text-[#D4A574]">
              L&apos;excellence récompensée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((certification, index) => (
              <div key={index} className="text-center p-6 bg-[#4A3728] rounded-2xl hover:bg-[#5A4738] transition-colors duration-300">
                <div className="text-3xl mb-3">{certification.icon}</div>
                <h3 className="font-semibold">{certification.nom}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#D4A574] hover:bg-[#B8865B] text-[#3C2A21] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Voir notre carte
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};