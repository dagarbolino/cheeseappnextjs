export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    HOME_PAGE: '/api/home',
    CHEESE_PAGE: '/api/fromages',
    RECIPES_PAGE: '/api/recettes',
    MARKETS_PAGE: '/api/marches',
    DELIVERY_PAGE: '/api/livraisons',
    BIO_PAGE: '/api/biographie',
    LEGAL_PAGE: '/api/mentions-legales'
  },
  REVALIDATE_TIME: 3600,
} as const; 