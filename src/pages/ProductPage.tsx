import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import products from '../data/products.json';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const product = products.products.find((p) => p.id === id);

  if (!product) {
    return <div>Mahsulot topilmadi</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title[language]}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title[language]}</h1>
          <p className="text-gray-600 mb-6">{product.description[language]}</p>
          <div className="text-2xl font-bold mb-6">
            {new Intl.NumberFormat('uz-UZ').format(product.price)} so'm
          </div>
          <a
            href="https://t.me/BekhruzFrontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {t('buyNow')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;