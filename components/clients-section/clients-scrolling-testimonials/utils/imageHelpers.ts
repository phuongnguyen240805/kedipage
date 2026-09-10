import { ImageItem } from './imageData';

export const duplicateImages = (
  images: ImageItem[],
  times: number = 2
): ImageItem[] => {
  const result: ImageItem[] = [];
  for (let i = 0; i < times; i++) {
    result.push(
      ...images.map((img) => ({
        ...img,
        id: `${img.id}-duplicate-${i}`,
      }))
    );
  }
  return result;
};

export const shuffleImages = (images: ImageItem[]): ImageItem[] => {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Tạo animation config cho từng cột
export interface ColumnAnimation {
  direction: 'up' | 'down';
  speed: number;
  delay: number;
}

export const getColumnAnimations = (): ColumnAnimation[] => [
  { direction: 'down', speed: 30, delay: 0 }, // Cột 1: đi xuống, tốc độ bình thường
  { direction: 'up', speed: 25, delay: 100 }, // Cột 2: đi lên, chậm hơn
  { direction: 'down', speed: 35, delay: 200 }, // Cột 3: đi xuống, nhanh hơn
  { direction: 'up', speed: 40, delay: 300 }, // Cột 4: đi lên, nhanh nhất
  { direction: 'down', speed: 28, delay: 400 }, // Cột 5: đi xuống, chậm
];
