import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Afruz Market</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/category/electronics" className="text-gray-700 hover:text-blue-600">
              {t('electronics')}
            </Link>
            <Link to="/category/clothing" className="text-gray-700 hover:text-blue-600">
              {t('clothing')}
            </Link>
            <Link to="/category/footwear" className="text-gray-700 hover:text-blue-600">
              {t('footwear')}
            </Link>
            <Link to="/category/accessories" className="text-gray-700 hover:text-blue-600">
              {t('accessories')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
            >
              {language.toUpperCase()}
            </button>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/category/electronics"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {t('electronics')}
            </Link>
            <Link
              to="/category/clothing"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {t('clothing')}
            </Link>
            <Link
              to="/category/footwear"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {t('footwear')}
            </Link>
            <Link
              to="/category/accessories"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {t('accessories')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;