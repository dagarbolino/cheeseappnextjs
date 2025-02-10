"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-50 dark:bg-gray-800 border-t border-cheese-100 dark:border-gray-700 py-12">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-cheese-900 dark:text-white mb-4">
              Au Beurre Noisette
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/nos-fromages" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Nos Fromages
                </Link>
              </li>
              <li>
                <Link 
                  href="/biographie" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link 
                  href="/marches" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Nos Marchés
                </Link>
              </li>
              <li>
                <Link 
                  href="/recettes" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Nos Recettes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-cheese-900 dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/commandes-et-livraisons" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Commandes et Livraisons
                </Link>
              </li>
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-cheese-900 dark:text-white mb-4">
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/mentions-legales" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <a 
                  href="tel:0683416541" 
                  className="text-gray-600 dark:text-gray-300 hover:text-cheese-600 dark:hover:text-cheese-500 transition-colors"
                >
                  06 83 41 65 41
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-cheese-100 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-600 dark:text-gray-400">
            <div className="animate-fade-in">
              © {currentYear} Au Beurre Noisette. Tous droits réservés.
            </div>
            <div className="text-sm animate-fade-in">
              Création du site par{' '}
              <a 
                href="https://github.com/dincq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors"
              >
                DINCQ Alexandre
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 