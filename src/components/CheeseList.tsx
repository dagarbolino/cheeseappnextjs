"use client";
import { API_BASE_URL, fetchCheesePage } from '@/services/api';
import { CheesePage, FromageItem } from '@/types/cheese';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CheeseFilters from './CheeseFilters';

export default function CheeseList() {
  const [data, setData] = useState<CheesePage | null>(null);
  const [filteredCheeses, setFilteredCheeses] = useState<FromageItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchCheesePage();
      setData(result);
      setFilteredCheeses(result.fromages);
    };
    loadData();
  }, []);

  if (!data) return <div>Chargement...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {data.title}
          </h1>
          <div
            className="prose prose-lg prose-yellow dark:prose-invert mx-auto"
            dangerouslySetInnerHTML={{ __html: data.introduction }}
          />
        </div>

        <CheeseFilters
          fromages={data.fromages}
          onFilter={setFilteredCheeses}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCheeses.map((cheese) => (
            <Link
              key={cheese.id}
              href={`/nos-fromages/${cheese.id}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 md:h-64">
                {cheese.value.imageMeta ? (
                  <Image
                    src={`${API_BASE_URL}${cheese.value.imageMeta.meta.download_url}`}
                    alt={cheese.value.image_alt_text || cheese.value.nom}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    quality={95}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-yellow-50 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-yellow-600 dark:text-yellow-400">Image non disponible</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cheese.value.nom}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100">
                    {cheese.value.category}
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                    {cheese.value.type_of_milk}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {cheese.value.origin}
                  </span>
                  <span className="text-yellow-600 dark:text-yellow-400 group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRightIcon className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 