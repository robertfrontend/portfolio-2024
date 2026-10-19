export type Project = {
  name: string;
  description: { en: string; es: string };
  date: string;
  img: string;
  link: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "Thiscita",
    description: {
      en: "Booking platform for online appointments, calendar syncing, and automated reminders.",
      es: "Plataforma de reservas con citas en línea, calendario sincronizado y recordatorios.",
    },
    date: "2026",
    img: "/work/thiscita-logo.webp",
    link: "https://thiscita.com/",
    tags: ["React", "TypeScript", "Tailwind CSS", "SaaS"],
    featured: true,
  },
  {
    name: "La Liguita",
    description: {
      en: "Sports league manager with live baseball scoreboards, rosters, and team statistics.",
      es: "Gestión de ligas deportivas, con marcadores de béisbol en vivo, plantillas y estadísticas.",
    },
    date: "2026",
    img: "/work/laliguita-logo.webp",
    link: "https://laliguita.vercel.app/",
    tags: ["Astro", "TypeScript", "Tailwind", "Sports Tech"],
    featured: true,
  },
  {
    name: "HolaGenio",
    description: {
      en: "AI productivity tools for entrepreneurs and operators who are not engineers.",
      es: "Herramientas de productividad con IA para emprendedores y operadores que no son ingenieros.",
    },
    date: "2025",
    img: "/work/holagenio.webp",
    link: "https://holagenio.com/",
    tags: ["Next.js", "AI APIs", "Fullstack", "SaaS"],
    featured: true,
  },
  {
    name: "Menu DR",
    description: {
      en: "Digital menus for restaurants, with a live catalog and contactless ordering.",
      es: "Menús digitales para restaurantes, con catálogo en vivo y pedidos sin contacto.",
    },
    date: "2021",
    img: "/work/menudr.webp",
    link: "https://menudr.vercel.app/",
    tags: ["Fullstack", "QR Menus", "Hospitality"],
    featured: true,
  },
  {
    name: "Boston Data Hub",
    description: {
      en: "Public data and civic charts for the city of Boston.",
      es: "Datos públicos y gráficas cívicas de la ciudad de Boston.",
    },
    date: "2025",
    img: "/work/boston-data.webp",
    link: "https://boston-data.vercel.app/",
    tags: ["React", "Open Data", "Data Visualization"],
    featured: false,
  },
  {
    name: "DiforVi",
    description: {
      en: "Marketing site and tools for a local business.",
      es: "Sitio y herramientas de marketing para un negocio local.",
    },
    date: "2024",
    img: "/work/diforvi.webp",
    link: "https://www.diforvi.com/",
    tags: ["Web Apps", "E-commerce", "Branding"],
    featured: false,
  },
];
