import CheeseListClient from '@/components/CheeseListClient';
import { fetchCheesePage } from '@/services/api';

export default async function CheeseListPage() {
  const data = await fetchCheesePage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
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

        <CheeseListClient initialFromages={data.fromages} />
      </div>
    </main>
  );
} 