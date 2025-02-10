import { API_CONFIG } from '@/source/api';

interface RecipeLink {
  id: string;
  value: {
    title: string;
    link: string;
  };
}

interface RecipeSection {
  id: string;
  value: {
    heading: string;
    description: string;
    link?: RecipeLink[];
  };
}

interface RecipePageData {
  title: string;
  introduction: string;
  body: RecipeSection[];
}

async function getData(): Promise<RecipePageData> {
  const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.RECIPES_PAGE}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function RecipesPage() {
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

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.body.map((recipe, index) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-cheese-800 dark:text-cheese-500 mb-4">
                  {recipe.value.heading}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 line-clamp-3">
                  {recipe.value.description}
                </p>
                <div className="flex">
                  {recipe.value.link?.map((link) => (
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
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