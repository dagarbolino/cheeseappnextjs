import { API_BASE_URL, fetchCheeses } from '@/services/api';
import { Cheese } from '@/types/cheese';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

async function getCheeseData(params: { id: string }) {
  const response = await fetch(`${API_BASE_URL}/api/v2/pages/20/`);
  if (!response.ok) {
    throw new Error('Failed to fetch cheeses');
  }
  const data = await response.json();
  const cheese = data.fromages.find((cheese: Cheese) => cheese.id === params.id);

  if (cheese && cheese.value.image) {
    const imageResponse = await fetch(`${API_BASE_URL}/api/v2/images/${cheese.value.image}/`);
    const imageData = await imageResponse.json();
    return {
      ...cheese,
      value: {
        ...cheese.value,
        imageMeta: imageData
      }
    };
  }

  return cheese;
}

export async function generateMetadata({ params }: PageProps) {
  const cheese = await getCheeseData(params);
  return {
    title: cheese ? `Fromage - ${cheese.value.nom}` : 'Fromage non trouvé'
  };
}

export async function generateStaticParams() {
  const cheeses = await fetchCheeses();
  return cheeses.fromages.map((cheese: Cheese) => ({
    id: cheese.id
  }));
}

export default async function CheeseDetailPage({ params }: PageProps) {
  const cheese = await getCheeseData(params);

  if (!cheese) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/nos-fromages"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Retour aux fromages
          </Link>
        </div>

        {/* Cheese Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="relative h-[300px] mx-auto max-w-[768px] bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-4">
            <Image
              src={`${API_BASE_URL}${cheese.value.imageMeta.meta.download_url}`}
              alt={cheese.value.nom || 'Image du fromage'}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain hover:scale-105 transition-transform duration-300"
              quality={100}
              priority
              loading="eager"
              style={{ objectFit: 'contain', padding: '1rem' }}
            />
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {cheese.value.nom}
            </h1>

            {/* Caractéristiques principales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  Caractéristiques
                </h2>
                <dl className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Origine</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.origin}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Département</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.department}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Type de lait</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.type_of_milk}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Traitement</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.milk_treatment}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Catégorie</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.category}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  Propriétés
                </h2>
                <dl className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Texture</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.texture}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Intensité</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.taste_intensity}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Matière grasse</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.fat_material}%</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Allergènes</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.allergens.join(', ')}</dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                    <dt className="text-gray-600 dark:text-gray-300">Meilleures saisons</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{cheese.value.best_season.join(', ')}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Description
              </h2>
              <div
                className="prose prose-yellow dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: cheese.value.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 