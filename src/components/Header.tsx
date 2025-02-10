"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="text-xl font-serif font-bold text-cheese-600 dark:text-cheese-500">
            <Link href="/" className="hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors">
              Au Beurre Noisette
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              Accueil
            </Link>
            <Link href="/nos-fromages" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              Fromages
            </Link>
            <Link href="/recettes" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              Recettes
            </Link>
            <Link href="/marches" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              Marchés
            </Link>
            <Link href="/commandes-et-livraisons" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              Commandes
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Navigation Links - Mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/nos-fromages"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Fromages
            </Link>
            <Link
              href="/biographie"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Notre Histoire
            </Link>
            <Link
              href="/recettes"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Recettes
            </Link>
            <Link
              href="/marches"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Marchés
            </Link>
            <Link
              href="/commandes-et-livraisons"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Commandes
            </Link>
            <Link
              href="/mentions-legales"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 