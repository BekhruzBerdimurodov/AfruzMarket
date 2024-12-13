import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import categories from '../data/categories.json';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const category = categories.categories.find((c) => c.id === id);
  const categoryProducts = products.products.filter((p) => p.category === id);

  if (!category) {
    return <div>Kategoriya topilmadi</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{category.name[language]}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;