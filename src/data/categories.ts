import { Category } from '../types';
import { Smartphone, Laptop, Shirt, ShoppingBag } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: {
      uz: 'Elektro texnika',
      ru: 'Электроника'
    },
    icon: 'Smartphone'
  },
  {
    id: 'clothing',
    name: {
      uz: 'Kiyimlar',
      ru: 'Одежда'
    },
    icon: 'Shirt'
  },
  {
    id: 'footwear',
    name: {
      uz: 'Oyoq kiyimlar',
      ru: 'Обувь'
    },
    icon: 'ShoppingBag'
  },
  {
    id: 'accessories',
    name: {
      uz: 'Aksesuarlar',
      ru: 'Аксессуары'
    },
    icon: 'ShoppingBag'
  }
];