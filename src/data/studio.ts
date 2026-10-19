export type StudioProduct = {
  name: string;
  url?: string;
  status: string;
  description: { en: string; es: string };
};

// Copied from the Product Studio pages: src/pages/product-studio.astro
// and src/pages/product-studio/es/index.astro. Taglines are the one-line
// descriptions; status and url are the values those pages already publish.
export const studioProducts: StudioProduct[] = [
  {
    name: "MenuDrapp",
    url: "https://menudrapp.com",
    status: "Live SaaS",
    description: {
      en: "Smart digital menu and order management for restaurants",
      es: "Menús digitales inteligentes y gestión de pedidos para restaurantes",
    },
  },
  {
    name: "Thiscita",
    url: "https://thiscita.com",
    status: "Live SaaS",
    description: {
      en: "Automated booking & appointment scheduling system",
      es: "Agendamiento automatizado y reservas profesionales",
    },
  },
  {
    name: "La Liguita",
    url: "https://laliguita.vercel.app",
    status: "Live Platform",
    description: {
      en: "Real-time sports league data & tournament management",
      es: "Gestión deportiva y estadísticas de ligas en tiempo real",
    },
  },
];
