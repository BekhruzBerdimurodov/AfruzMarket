import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const HomePage: React.FC = () => {
  return (
    <div>
      <CategoryList />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Eng so'nggi mahsulotlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;