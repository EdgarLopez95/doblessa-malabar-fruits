export type FruitGroup = 'hueso' | 'pepita' | 'otras';

export interface Fruit {
  name: string;
  group: FruitGroup;
  color: string;
  accent: string;
}

/** Agrupación editorial para navegar la cuadrícula. No es una clasificación de la marca. */
export const FRUIT_GROUPS: Record<FruitGroup, string> = {
  hueso: 'De hueso',
  pepita: 'De pepita',
  otras: 'Otras frutas',
};

// Las 13 frutas nombradas en la web original. Solo nombre y agrupación:
// ni temporada, ni origen, ni disponibilidad, ni propiedades.
export const FRUITS: Fruit[] = [
  { name: 'Melocotón', group: 'hueso', color: '#F29B62', accent: '#E0604F' },
  { name: 'Nectarina', group: 'hueso', color: '#C8423F', accent: '#F8D85B' },
  { name: 'Paraguayo', group: 'hueso', color: '#F2B880', accent: '#C95B4A' },
  { name: 'Platerina', group: 'hueso', color: '#D9544D', accent: '#F29B62' },
  { name: 'Albaricoque', group: 'hueso', color: '#F5A146', accent: '#E0604F' },
  { name: 'Cereza', group: 'hueso', color: '#7B2330', accent: '#38735B' },
  { name: 'Pera', group: 'pepita', color: '#B9C35C', accent: '#F8D85B' },
  { name: 'Manzana', group: 'pepita', color: '#C23B3B', accent: '#38735B' },
  { name: 'Níspero', group: 'otras', color: '#F0A541', accent: '#A33646' },
  { name: 'Granada', group: 'otras', color: '#A33646', accent: '#F29B62' },
  { name: 'Higo', group: 'otras', color: '#6E4A6B', accent: '#B9C35C' },
  { name: 'Caqui', group: 'otras', color: '#E8742E', accent: '#38735B' },
  { name: 'Kiwi', group: 'otras', color: '#7A9A3A', accent: '#6B5753' },
];
