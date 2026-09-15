export const SITE = {
  name: 'Malabar Fruits',
  origin: 'https://edgarlopez95.github.io',
  locale: 'es_ES',
  ogImage: 'og/malabar-fruits-og.jpg',
} as const;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}

export const PAGES = {
  home: {
    path: '/',
    title: 'Malabar Fruits | Fruta y verdura fresca de temporada',
    description:
      'Malabar Fruits es una marca de fruta y verdura fresca que invita a descubrir, compartir y disfrutar el color de cada día. Conoce la gama.',
  },
  fruta: {
    path: '/fruta-fresca/',
    title: 'Fruta fresca de temporada | Malabar Fruits',
    description:
      'Recorre la gama de fruta fresca de Malabar Fruits: melocotón, nectarina, paraguayo, pera, manzana, cereza, kiwi y más, contada con color y sin prisas.',
  },
  verduras: {
    path: '/verduras-frescas/',
    title: 'Verduras frescas | Malabar Fruits',
    description:
      'Verduras frescas con el tono de Malabar Fruits: la huerta por colores e ideas sencillas para la mesa de cada día. Descubre la gama y habla con el equipo.',
  },
  calidad: {
    path: '/calidad-y-trazabilidad/',
    title: 'Calidad y selección de fruta fresca | Malabar Fruits',
    description:
      'Cómo entiende Malabar Fruits la calidad: selección, frescura, cuidado de la presentación y una relación profesional clara y directa.',
  },
  profesionales: {
    path: '/para-profesionales/',
    title: 'Fruta y verdura fresca para profesionales | Malabar Fruits',
    description:
      '¿Trabajas en retail, restauración o distribución? Conoce Malabar Fruits, marca de fruta y verdura fresca, y habla con el equipo comercial.',
  },
  limosin: {
    path: '/limosin-fruits/',
    title: 'Malabar Fruits y Limosin Fruits',
    description:
      'Malabar Fruits es una marca de fruta y verdura fresca vinculada a Limosin Fruits. Descubre cómo se relacionan ambos nombres.',
  },
  contacto: {
    path: '/contacto/',
    title: 'Contacto | Malabar Fruits',
    description:
      'Contacta con Malabar Fruits para una consulta general o para iniciar una conversación profesional sobre fruta y verdura fresca.',
  },
  avisoLegal: {
    path: '/aviso-legal/',
    title: 'Aviso legal | Malabar Fruits',
    description: 'Estructura propuesta del aviso legal de Malabar Fruits, pendiente de validación con datos corporativos verificados.',
    noindex: true,
  },
  privacidad: {
    path: '/politica-de-privacidad/',
    title: 'Política de privacidad | Malabar Fruits',
    description: 'Estructura propuesta de la política de privacidad de Malabar Fruits, pendiente de validación legal.',
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

export interface NavLink {
  label: string;
  href: string;
  note?: string;
  color?: string;
}

export interface NavGroup {
  label: string;
  id: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const NAV: NavItem[] = [
  {
    label: 'Gama',
    id: 'gama',
    children: [
      { label: 'Fruta fresca', href: PAGES.fruta.path, note: 'De hueso, de pepita y para descubrir', color: '#F29B62' },
      { label: 'Verduras frescas', href: PAGES.verduras.path, note: 'La huerta, contada por colores', color: '#38735B' },
    ],
  },
  { label: 'Temporada', href: '/fruta-fresca/#temporada' },
  { label: 'Calidad', href: PAGES.calidad.path },
  { label: 'Para profesionales', href: PAGES.profesionales.path },
  { label: 'Contacto', href: PAGES.contacto.path },
];

export const PRO_CONTACT = '/contacto/?tipo=profesional';
export const GENERAL_CONTACT = '/contacto/?tipo=general';
