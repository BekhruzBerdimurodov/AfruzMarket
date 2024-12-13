import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: {
      uz: "Samsung Galaxy S24 Ultra",
      ru: "Samsung Galaxy S24 Ultra"
    },
    description: {
      uz: "8GB/256GB, Titanium Black rangda",
      ru: "8GB/256GB, цвет Titanium Black"
    },
    price: 15000000,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format"
  },
  {
    id: '2',
    title: {
      uz: "MacBook Pro 16",
      ru: "MacBook Pro 16"
    },
    description: {
      uz: "M3 Pro, 32GB RAM, 1TB SSD",
      ru: "M3 Pro, 32GB RAM, 1TB SSD"
    },
    price: 25000000,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format"
  },
  {
    id: '3',
    title: {
      uz: "Klassik Kostyum",
      ru: "Классический Костюм"
    },
    description: {
      uz: "Yuqori sifatli material, zamonaviy dizayn",
      ru: "Высококачественный материал, современный дизайн"
    },
    price: 1200000,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format"
  }
];