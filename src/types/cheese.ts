interface Fromage {
  nom: string;
  description: string;
  image: number;
  image_alt_text: string;
  category: string;
  type_of_milk: string;
  origin: string;
  raw_milk: boolean;
  imageMeta?: {
    meta: {
      download_url: string;
    };
  };
}

export interface FromageItem {
  type: 'fromage';
  value: Fromage;
  id: string;
}

export interface CheesePage {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string | null;
    slug: string;
  };
  title: string;
  introduction: string;
  fromages: FromageItem[];
}

export interface CheesePageData {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: null;
    slug: string;
    show_in_menus: boolean;
    seo_title: string;
    search_description: string;
    first_published_at: string;
    alias_of: null;
    parent: {
      id: number;
      meta: {
        type: string;
        detail_url: string;
        html_url: null;
      };
      title: string;
    };
  };
  title: string;
  introduction: string;
  hero_cta: Array<{
    type: string;
    value: {
      page: number;
      title: string;
    };
    id: string;
  }>;
  fromages: FromageItem[];
}