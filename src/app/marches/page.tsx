import { API_CONFIG } from '@/source/api';

interface MarketLink {
  id: string;
  value: {
    title: string;
    link: string;
  };
}

interface MarketSection {
  id: string;
  value: {
    heading: string;
    description: string;
    link?: MarketLink[];
  };
}

interface MarketPageData {
  title: string;
  introduction: string;
  body: MarketSection[];
}

async function getData(): Promise<MarketPageData> {
  const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MARKETS_PAGE}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function MarketsPage() {
  const data = await getData();

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-cheese-pattern bg-opacity-10 dark:bg-opacity-5 py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-cheese-900 dark:text-white mb-8 text-center animate-slide-up">
            {data.title}
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            {data.introduction}
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.body.map((market, index) => (
            <div
              key={market.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-cheese-800 dark:text-cheese-500 mb-4">
                  {market.value.heading}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  {market.value.description}
                </p>
                <div className="flex">
                  {market.value.link?.map((link) => (
                    <a
                      key={link.id}
                      href={link.value.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cheese-600 hover:bg-cheese-700 dark:bg-cheese-500 dark:hover:bg-cheese-600 text-white px-6 py-3 rounded-lg transition-all duration-300 group hover:scale-105"
                    >
                      <span>{link.value.title}</span>
                      <svg
                        className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
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
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 