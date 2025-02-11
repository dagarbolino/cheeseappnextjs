import { CheesePage, FromageItem } from '../types/cheese';

export const API_BASE_URL = 'https://cheeseapi.alex-webdev.fr';

export const fetchImageMetadata = async (imageId: number) => {
  const response = await fetch(`${API_BASE_URL}/api/v2/images/${imageId}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch image metadata');
  }
  const data = await response.json();
  return data;
};

export const fetchCheesePage = async (): Promise<CheesePage> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/pages/20/`);
    if (!response.ok) {
      throw new Error('Failed to fetch cheese page');
    }
    const data = await response.json();

    // Récupérer les métadonnées des images pour chaque fromage
    const cheesesWithImages = await Promise.all(
      data.fromages.map(async (cheese: FromageItem) => {
        if (cheese.value.image) {
          const imageData = await fetchImageMetadata(cheese.value.image);
          return {
            ...cheese,
            value: {
              ...cheese.value,
              imageMeta: imageData
            }
          };
        }
        return cheese;
      })
    );

    return {
      id: data.id,
      meta: {
        type: data.meta.type,
        detail_url: data.meta.detail_url,
        html_url: data.meta.html_url,
        slug: data.meta.slug
      },
      title: data.title,
      introduction: data.introduction,
      fromages: cheesesWithImages
    };
  } catch (error) {
    console.error('Error fetching cheese data:', error);
    throw error;
  }
};

export const fetchCheeseDetail = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/pages/${id}/`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Récupérer les métadonnées de l'image si elle existe
    if (data.value.image) {
      const imageData = await fetchImageMetadata(data.value.image);
      return {
        ...data,
        value: {
          ...data.value,
          imageMeta: imageData
        }
      };
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching cheese detail:', error);
    throw error;
  }
}

export async function fetchCheeses() {
  const response = await fetch(`${API_BASE_URL}/api/v2/pages/20/`);
  if (!response.ok) {
    throw new Error('Failed to fetch cheeses');
  }
  return response.json();
} 