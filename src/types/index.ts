export interface Product {
  id: string;
  title: {
    uz: string;
    ru: string;
  };
  description: {
    uz: string;
    ru: string;
  };
  price: number;
  category: string;
  image: string;
}

export type Language = 'uz' | 'ru';

export interface Category {
  id: string;
  name: {
    uz: string;
    ru: string;
  };
  icon: string;
}