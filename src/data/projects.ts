export type Project = {
  name: string;
  description: { en: string; es: string };
  date?: string;
  status?: { en: string; es: string };
  img: string;
  alt: { en: string; es: string };
  link?: string;
  tags?: string[];
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
    img: "/work/thiscita-home.webp",
    alt: {
      en: "Homepage of Thiscita, a booking site for local service businesses",
      es: "Página de inicio de Thiscita, un sitio de reservas para negocios de servicios",
    },
    link: "https://thiscita.com/",
    tags: ["React", "TypeScript", "Tailwind CSS", "SaaS"],
    featured: true,
  },
  {
    name: "La Liguita",
    description: {
      en: "Sports league manager with live scoreboards, rosters, and team statistics.",
      es: "Gestión de ligas deportivas, con marcadores en vivo, plantillas y estadísticas.",
    },
    date: "2026",
    img: "/work/laliguita-home.webp",
    alt: {
      en: "La Liguita amateur sports league platform",
      es: "Plataforma de La Liguita para ligas deportivas amateur",
    },
    link: "https://laliguita.vercel.app/",
    tags: ["Astro", "TypeScript", "Tailwind", "Sports Tech"],
    featured: true,
  },
  {
    name: "ATC Easy Radar",
    description: {
      en: "Air traffic control game with live radar, six airports, and heading, altitude, and speed commands.",
      es: "Juego de control aéreo con radar en tiempo real, seis aeropuertos y comandos de rumbo, altitud y velocidad.",
    },
    date: "2026",
    img: "/work/atc-easy-radar-home.webp",
    alt: {
      en: "ATC Easy Radar gameplay at London Heathrow with aircraft tracks and flight controls",
      es: "Partida de ATC Easy Radar en Londres Heathrow con tráfico aéreo y controles de vuelo",
    },
    link: "https://atc-easy-radar.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS", "Game Development"],
    featured: true,
  },
  {
    name: "Menu DR",
    description: {
      en: "Digital menus for restaurants, with a live catalog and contactless ordering.",
      es: "Menús digitales para restaurantes, con catálogo en vivo y pedidos sin contacto.",
    },
    date: "2021",
    img: "/work/menudrapp-home.webp",
    alt: {
      en: "Homepage of MenuDrapp, a digital catalog and menu product",
      es: "Página de inicio de MenuDrapp, un producto de menús y catálogos digitales",
    },
    link: "https://menudrapp.com",
    tags: ["Fullstack", "QR Menus", "Hospitality"],
    featured: true,
  },
  {
    name: "Your Lucky Lottery",
    description: {
      en: "Custom lottery platform built for a client",
      es: "Plataforma de lotería a medida desarrollada para un cliente",
    },
    status: { en: "Coming soon", es: "Próximamente" },
    img: "/work/your-lucky-lottery.webp",
    alt: {
      en: "Placeholder for Your Lucky Lottery, a client project that is coming soon",
      es: "Marcador de posición de Your Lucky Lottery, un proyecto para un cliente que estará disponible próximamente",
    },
    featured: true,
  },
  {
    name: "Boston Data Hub",
    description: {
      en: "Public data and civic charts for the city of Boston.",
      es: "Datos públicos y gráficas cívicas de la ciudad de Boston.",
    },
    date: "2025",
    img: "/work/boston-data-home.webp",
    alt: {
      en: "Homepage of Boston Data Hub, a guide to Boston city services",
      es: "Página de inicio de Boston Data Hub, una guía de servicios de la ciudad de Boston",
    },
    link: "https://boston-data.vercel.app/",
    tags: ["React", "Open Data", "Data Visualization"],
    featured: false,
  },
];
