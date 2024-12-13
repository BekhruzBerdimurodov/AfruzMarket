import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import categories from '../data/categories.json';
import * as Icons from 'lucide-react';

const CategoryList: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.categories.map((category) => {
        const IconComponent = Icons[category.icon as keyof typeof Icons];
        
        return (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {IconComponent && <IconComponent size={32} className="text-blue-600 mb-2" />}
            <span className="text-center font-medium">{category.name[language]}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;