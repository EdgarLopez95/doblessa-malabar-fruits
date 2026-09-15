export type FruitGroup = 'hueso' | 'pepita' | 'descubrir';

export interface Fruit {
  name: string;
  group: FruitGroup;
  line: string;
  color: string;
  accent: string;
}

export const FRUIT_GROUPS: Record<FruitGroup, string> = {
  hueso: 'De hueso',
  pepita: 'De pepita',
  descubrir: 'Para descubrir',
};

// Textos editoriales genéricos: sin temporadas, orígenes, precios ni beneficios.
export const FRUITS: Fruit[] = [
  { name: 'Melocotón', group: 'hueso', line: 'Piel aterciopelada y un bocado para compartir.', color: '#F29B62', accent: '#E0604F' },
  { name: 'Nectarina', group: 'hueso', line: 'Piel lisa, color intenso y mordisco decidido.', color: '#C8423F', accent: '#F8D85B' },
  { name: 'Paraguayo', group: 'hueso', line: 'Forma plana, fácil de reconocer en cualquier frutero.', color: '#F2B880', accent: '#C95B4A' },
  { name: 'Platerina', group: 'hueso', line: 'La versión plana y de piel lisa de la nectarina.', color: '#D9544D', accent: '#F29B62' },
  { name: 'Albaricoque', group: 'hueso', line: 'Pequeño, dorado y hecho para ir de mano en mano.', color: '#F5A146', accent: '#E0604F' },
  { name: 'Cereza', group: 'hueso', line: 'De dos en dos, como mejor se disfrutan.', color: '#7B2330', accent: '#38735B' },
  { name: 'Pera', group: 'pepita', line: 'Para morder tal cual o cortar en láminas finas.', color: '#B9C35C', accent: '#F8D85B' },
  { name: 'Manzana', group: 'pepita', line: 'Un clásico que siempre encuentra hueco en la bolsa.', color: '#C23B3B', accent: '#38735B' },
  { name: 'Níspero', group: 'descubrir', line: 'Para pelar con calma y repartir en la sobremesa.', color: '#F0A541', accent: '#A33646' },
  { name: 'Granada', group: 'descubrir', line: 'Un pequeño cofre lleno de granos color rubí.', color: '#A33646', accent: '#F29B62' },
  { name: 'Higo', group: 'descubrir', line: 'Textura propia y un color que no pasa desapercibido.', color: '#6E4A6B', accent: '#B9C35C' },
  { name: 'Caqui', group: 'descubrir', line: 'Naranja intenso y cuchara en mano.', color: '#E8742E', accent: '#38735B' },
  { name: 'Kiwi', group: 'descubrir', line: 'Piel parda por fuera, verde brillante por dentro.', color: '#7A9A3A', accent: '#6B5753' },
];
