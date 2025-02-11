"use client";
import { FromageItem } from '@/types/cheese';
import { useState } from 'react';

interface CheeseFiltersProps {
  fromages: FromageItem[];
  onFilter: (filtered: FromageItem[]) => void;
}

export default function CheeseFilters({ fromages, onFilter }: CheeseFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type_of_milk: '',
    category: '',
    origins: [] as string[],
    raw_milk: null as boolean | null // null = tous, true = lait cru, false = lait pasteurisé
  });

  const filterOptions = {
    type_of_milk: [...new Set(fromages.map(cheese => {
      // Nettoyer et corriger le type de lait
      const type = cheese.value.type_of_milk
        .replace('vache_brebis', 'vache')  // ou la valeur correcte
        .replace('_', ' ');
      return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    }))].sort(),
    category: [...new Set(fromages.map(cheese => cheese.value.category))],
    origin: [...new Set(fromages.map(cheese => cheese.value.origin))]
  };

  console.log('Options disponibles:', {
    origins: filterOptions.origin.sort(),
    categories: filterOptions.category.sort(),
    types_lait: filterOptions.type_of_milk.sort()
  });

  const handleOriginChange = (origin: string) => {
    const newOrigins = selectedFilters.origins.includes(origin)
      ? selectedFilters.origins.filter(o => o !== origin)
      : [...selectedFilters.origins, origin];
    
    setSelectedFilters(prev => ({ ...prev, origins: newOrigins }));
    handleFilter({ ...selectedFilters, origins: newOrigins });
  };

  const handleFilter = (filters = selectedFilters) => {
    const filtered = fromages.filter(cheese => {
      const cleanMilkType = cheese.value.type_of_milk
        .replace('vache_brebis', 'vache')  // ou la valeur correcte
        .replace('_', ' ');

      const matchesSearch = cheese.value.nom.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !filters.type_of_milk || 
        formatMilkType(cleanMilkType) === filters.type_of_milk;
      const matchesCategory = !filters.category || 
        cheese.value.category.trim().toLowerCase() === filters.category.trim().toLowerCase();
      const matchesOrigin = filters.origins.length === 0 || 
        filters.origins.some(origin => 
          cheese.value.origin.trim().toLowerCase().includes(origin.trim().toLowerCase())
        );
      const matchesRawMilk = filters.raw_milk === null || cheese.value.raw_milk === filters.raw_milk;

      return matchesSearch && matchesType && matchesCategory && matchesOrigin && matchesRawMilk;
    });

    onFilter(filtered);
  };

  // Fonction utilitaire pour formater le type de lait
  const formatMilkType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };

  return (
    <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="space-y-4">
        {/* Barre de recherche */}
        <div>
          <input
            type="text"
            placeholder="Rechercher un fromage..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilter();
            }}
            className="w-full p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
        </div>

        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={selectedFilters.type_of_milk}
            onChange={(e) => {
              setSelectedFilters(prev => ({ ...prev, type_of_milk: e.target.value }));
              handleFilter();
            }}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          >
            <option value="">Type de lait</option>
            {filterOptions.type_of_milk.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={selectedFilters.category}
            onChange={(e) => {
              setSelectedFilters(prev => ({ ...prev, category: e.target.value }));
              handleFilter();
            }}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          >
            <option value="">Catégorie</option>
            {filterOptions.category.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div className="space-y-2">
            <p className="font-medium text-gray-900 dark:text-white mb-2">Origine</p>
            {filterOptions.origin.map(origin => (
              <label key={origin} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.origins.includes(origin)}
                  onChange={() => handleOriginChange(origin)}
                  className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{origin}</span>
              </label>
            ))}
          </div>

          {/* Filtre lait cru */}
          <div className="space-y-2">
            <p className="font-medium text-gray-900 dark:text-white mb-2">Type de lait</p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={selectedFilters.raw_milk === null}
                  onChange={() => {
                    setSelectedFilters(prev => ({ ...prev, raw_milk: null }));
                    handleFilter({ ...selectedFilters, raw_milk: null });
                  }}
                  className="text-yellow-600 focus:ring-yellow-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Tous</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={selectedFilters.raw_milk === true}
                  onChange={() => {
                    setSelectedFilters(prev => ({ ...prev, raw_milk: true }));
                    handleFilter({ ...selectedFilters, raw_milk: true });
                  }}
                  className="text-yellow-600 focus:ring-yellow-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Lait cru</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={selectedFilters.raw_milk === false}
                  onChange={() => {
                    setSelectedFilters(prev => ({ ...prev, raw_milk: false }));
                    handleFilter({ ...selectedFilters, raw_milk: false });
                  }}
                  className="text-yellow-600 focus:ring-yellow-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Lait pasteurisé</span>
              </label>
            </div>
          </div>
        </div>

        {/* Bouton de réinitialisation */}
        <button
          onClick={() => {
            setSearchTerm('');
            setSelectedFilters({ 
              type_of_milk: '', 
              category: '', 
              origins: [],
              raw_milk: null 
            });
            onFilter(fromages);
          }}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
} 