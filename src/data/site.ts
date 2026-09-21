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
  excludeFromSitemap?: boolean;
}

export const PAGES = {
  home: {
    path: '/',
    title: 'Malabar Fruits | Fruta y verdura fresca',
    description:
      'Malabar Fruits es una marca de fruta y verdura fresca. Color, juego y producto de todos los días, contados con el tono de la marca.',
  },
  fruta: {
    path: '/fruta-fresca/',
    title: 'Fruta fresca | Malabar Fruits',
    description:
      'Las frutas presentes en la marca Malabar Fruits: melocotón, nectarina, paraguayo, platerina, pera, manzana, albaricoque, cereza, granada, níspero, higo, caqui y kiwi.',
  },
  verduras: {
    path: '/verduras-frescas/',
    title: 'Verduras frescas | Malabar Fruits',
    description: 'Malabar Fruits es una marca de fruta y verdura fresca. Presentación visual de la verdura, sin listados que aún no están confirmados.',
  },
  calidad: {
    path: '/calidad/',
    title: 'Calidad | Malabar Fruits',
    description: 'Selección, sabor, aspecto, frescura, higiene y controles: los valores de calidad presentes en la comunicación de Malabar Fruits.',
  },
  contacto: {
    path: '/contacto/',
    title: 'Contacto | Malabar Fruits',
    description: 'Escríbenos para saber más de Malabar Fruits, marca de fruta y verdura fresca: la gama, la marca y todo lo que hay detrás.',
  },
  avisoLegal: {
    path: '/aviso-legal/',
    title: 'Aviso legal | Malabar Fruits',
    description: 'Aviso legal de Malabar Fruits: titularidad del sitio, condiciones de uso y propiedad intelectual.',
    excludeFromSitemap: true,
  },
  privacidad: {
    path: '/politica-de-privacidad/',
    title: 'Política de privacidad | Malabar Fruits',
    description: 'Política de privacidad de Malabar Fruits: qué datos se tratan, con qué finalidad y cómo ejercer tus derechos.',
    excludeFromSitemap: true,
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
  { label: 'Inicio', href: PAGES.home.path },
  {
    label: 'Gama',
    id: 'gama',
    children: [
      { label: 'Fruta fresca', href: PAGES.fruta.path, note: 'Las frutas presentes en la marca', color: '#F29B62' },
      { label: 'Verduras frescas', href: PAGES.verduras.path, note: 'La otra mitad de la gama', color: '#38735B' },
    ],
  },
  { label: 'Calidad', href: PAGES.calidad.path },
  { label: 'Contacto', href: PAGES.contacto.path },
];

/** Nota de relación con Limosin Fruits. Nivel de evidencia B: fuente secundaria. */
export const LIMOSIN_NOTE = 'Malabar Fruits está vinculada a Limosin Fruits según la información pública disponible.';
