import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Au Beurre Noisette - Fromages des Hauts-de-France',
  description: 'Découvrez notre sélection de fromages artisanaux',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="light">
      <body className={`${inter.className} font-sans flex flex-col min-h-screen bg-cream-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
} 