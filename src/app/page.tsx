import { API_CONFIG } from '@/source/api';
import { getRandomCheeses } from '@/utils/cheese';
import Image from 'next/image';
import Link from 'next/link';
import { CheesePageData } from '../types/cheese';

async function getData(): Promise<CheesePageData> {
  const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HOME_PAGE}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}



export default async function Home() {
  const data = await getData();
  const selectedCheeses = await getRandomCheeses(3);

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-cheese-50 dark:bg-gray-800 py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold text-cheese-900 dark:text-white mb-8 animate-slide-up">
            {data.title}
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-10 leading-relaxed">
            {data.introduction}
          </p>

          {/* Hero CTA */}
          <div className="flex gap-4">
            {data.hero_cta.map((cta) => (
              <Link
                key={cta.id}
                href="/nos-fromages"
                className="inline-block bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors text-xl font-medium"
              >
                {cta.value.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Body Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-16">
          {/* Nos Engagements Section */}
          <section>
            <h2 className="text-4xl font-bold text-center text-yellow-600 mb-16">
              Nos Engagements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Qualité</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nos produits sont sélectionnés avec soins
                </p>
              </div>
              <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Satisfaction</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Je suis là pour vous conseiller et vous guider !
                </p>
              </div>
              <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Livraison</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nous livrons dans votre ville, les jours de marché et alentours
                </p>
              </div>
            </div>
          </section>

          {/* Marchés Section */}
          <section className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <h2 className="text-3xl font-serif font-bold text-cheese-600 dark:text-cheese-500 mb-8 animate-slide-up">
              Sur les marchés des Hauts-de-France
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
              Je vous accueille avec plaisir pour vous conseiller et vous faire découvrir les saveurs authentiques de nos fromages. À votre écoute, je mets mon expertise à votre service pour composer des plateaux de fromages qui raviront vos convives.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/marches"
                className="inline-flex items-center gap-2 bg-cheese-600 hover:bg-cheese-700 dark:bg-cheese-500 dark:hover:bg-cheese-600 text-white px-8 py-4 rounded-lg transition-colors text-xl font-medium group"
              >
                <span>Nos marchés</span>
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Section Chiffres Clés */}
          <section className="bg-cheese-50 dark:bg-gray-800 py-16 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">70+</div>
                  <div className="text-gray-700 dark:text-gray-300">Variétés de fromages</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">1950</div>
                  <div className="text-gray-700 dark:text-gray-300">Année de création</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">7</div>
                  <div className="text-gray-700 dark:text-gray-300">Marchés par semaine</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Sélection du Moment */}
          <section className="py-16 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-serif font-bold text-center text-cheese-600 dark:text-cheese-500 mb-12 animate-slide-up">
                Notre Sélection de la semaine
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedCheeses.map((cheese) => (
                  <div key={cheese.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-48 md:h-64">
                      <Image
                        src={`${API_CONFIG.BASE_URL}${cheese.value.imageMeta?.meta.download_url}`}
                        alt={cheese.value.image_alt_text || cheese.value.nom}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain hover:scale-105 transition-transform duration-300"
                        quality={95}
                        priority
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-gray-800 dark:text-white mb-2">
                        {cheese.value.nom}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {cheese.value.description.substring(0, 100)}...
                      </p>
                      <Link
                        href={`/nos-fromages/${cheese.id}`}
                        className="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors group"
                      >
                        Découvrir
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section Contact et Horaires */}
          <section className="bg-cheese-50 dark:bg-gray-800 py-16 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-serif font-bold text-center text-cheese-600 dark:text-cheese-500 mb-12 animate-slide-up">
                Contactez-nous
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Horaires des marchés
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Du mardi au samedi, de 7h00 à 13h20
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Certains jeudis après-midi et dimanches matin selon les villes
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/marches"
                      className="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors"
                    >
                      Voir tous nos marchés →
                    </Link>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Pour nous joindre
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Par téléphone :
                    <a
                      href="tel:0683416541"
                      className="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors ml-2"
                    >
                      06 83 41 65 41
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pour vos commandes, contactez-nous la veille du marché
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/commandes-et-livraisons"
                      className="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors"
                    >
                      En savoir plus sur les commandes →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Revalider la page toutes les 12 heures
export const revalidate = 43200;