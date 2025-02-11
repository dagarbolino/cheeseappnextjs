import { fetchCheesePage } from '@/services/api';

export async function getRandomCheeses(count: number = 3) {
  const data = await fetchCheesePage();
  const shuffled = [...data.fromages].sort(() => {
    const today = new Date();
    const seed = Math.floor(today.getTime() / (1000 * 60 * 60 * 24 * 7));
    return Math.sin(seed) - 0.5;
  });
  return shuffled.slice(0, count);
} 