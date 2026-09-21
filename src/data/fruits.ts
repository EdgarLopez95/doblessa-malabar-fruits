export type FruitGroup = 'hueso' | 'pepita' | 'otras';

export interface Fruit {
  name: string;
  group: FruitGroup;
  line: string;
  color: string;
  accent: string;
}

/** Agrupación editorial para navegar la cuadrícula. No es una clasificación de la marca. */
export const FRUIT_GROUPS: Record<FruitGroup, string> = {
  hueso: 'De hueso',
  pepita: 'De pepita',
  otras: 'Otras frutas',
};

// Las 13 frutas nombradas en la web original. Las descripciones son rasgos
// visibles de cada fruta: ni temporada, ni origen, ni disponibilidad, ni
// propiedades nutricionales.
export const FRUITS: Fruit[] = [
  { name: 'Melocotón', group: 'hueso', line: 'Piel aterciopelada.', color: '#F29B62', accent: '#E0604F' },
  { name: 'Nectarina', group: 'hueso', line: 'Piel lisa y brillante.', color: '#C8423F', accent: '#F8D85B' },
  { name: 'Paraguayo', group: 'hueso', line: 'Melocotón de forma plana.', color: '#F2B880', accent: '#C95B4A' },
  { name: 'Platerina', group: 'hueso', line: 'Nectarina de forma plana.', color: '#D9544D', accent: '#F29B62' },
  { name: 'Albaricoque', group: 'hueso', line: 'Pequeño y de tono dorado.', color: '#F5A146', accent: '#E0604F' },
  { name: 'Cereza', group: 'hueso', line: 'Pequeña, roja y con rabito.', color: '#7B2330', accent: '#38735B' },
  { name: 'Pera', group: 'pepita', line: 'Piel fina y forma alargada.', color: '#B9C35C', accent: '#F8D85B' },
  { name: 'Manzana', group: 'pepita', line: 'Piel firme y forma redondeada.', color: '#C23B3B', accent: '#38735B' },
  { name: 'Níspero', group: 'otras', line: 'Piel anaranjada, semillas grandes.', color: '#F0A541', accent: '#A33646' },
  { name: 'Granada', group: 'otras', line: 'Granos rojos bajo una piel dura.', color: '#A33646', accent: '#F29B62' },
  { name: 'Higo', group: 'otras', line: 'Piel morada o verde, pulpa tierna.', color: '#6E4A6B', accent: '#B9C35C' },
  { name: 'Caqui', group: 'otras', line: 'Naranja intenso, forma redondeada.', color: '#E8742E', accent: '#38735B' },
  { name: 'Kiwi', group: 'otras', line: 'Piel parda, pulpa verde.', color: '#7A9A3A', accent: '#6B5753' },
];
