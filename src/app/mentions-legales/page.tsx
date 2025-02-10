import { API_CONFIG } from '@/source/api';
import { CheesePageData } from '@/types/cheese';

async function getData(): Promise<CheesePageData> {
  const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LEGAL_PAGE}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function LegalPage() {
  const data = await getData();

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-cheese-pattern bg-opacity-10 dark:bg-opacity-5 py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-cheese-900 dark:text-white mb-8 text-center animate-slide-up">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Legal Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {data.body.map((section, index) => (
            <div
              key={section.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="text-2xl font-serif font-bold text-cheese-800 dark:text-cheese-500 mb-6">
                {section.value.heading}
              </h2>

              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-cheese-900 dark:prose-headings:text-cheese-500">
                {section.value.content?.map((content) => (
                  <div
                    key={content.id}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed [&>h3]:text-lg [&>h3]:font-medium [&>h3]:text-cheese-800 dark:[&>h3]:text-cheese-500 [&>h3]:mt-8 [&>h3]:mb-4 [&>p>a]:text-cheese-600 [&>p>a]:dark:text-cheese-500 [&>p>a]:hover:text-cheese-700 [&>p>a]:dark:hover:text-cheese-400 [&>p>a]:transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: content.value.replace(
                        /<a[^>]*>([^<]+)<\/a>/g,
                        '<a class="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors">$1</a>'
                      )
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 