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
  body: Array<{
    type: "cta" | "section";
    value: {
      heading: string;
      link?: Array<{
        type: "internal";
        value: {
          page: number;
          title: string;
        };
        id: string;
      }>;
      description?: string;
      content?: Array<{
        type: "paragraph";
        value: string;
        id: string;
      }>;
    };
    id: string;
  }>;
  featured_section_title: string;
  page_related_pages: any[];
} 