import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title[language]}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title[language]}</h3>
        <p className="text-gray-600 mb-4">{product.description[language]}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {new Intl.NumberFormat('uz-UZ').format(product.price)} so'm
          </span>
          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {t('buyNow')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;