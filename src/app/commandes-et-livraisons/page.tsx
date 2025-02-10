import { API_CONFIG } from '@/source/api';
import { CheesePageData } from '@/types/cheese';

async function getData(): Promise<CheesePageData> {
  const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DELIVERY_PAGE}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function DeliveryPage() {
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

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
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
                    className="text-gray-700 dark:text-gray-300 leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>a]:text-cheese-600 [&>a]:dark:text-cheese-500 [&>a]:hover:text-cheese-700 [&>a]:dark:hover:text-cheese-400 [&>a]:transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: content.value.replace(
                        /<a[^>]*>([^<]+)<\/a>/g,
                        '<a href="/contact" class="text-cheese-600 dark:text-cheese-500 hover:text-cheese-700 dark:hover:text-cheese-400 transition-colors">$1</a>'
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