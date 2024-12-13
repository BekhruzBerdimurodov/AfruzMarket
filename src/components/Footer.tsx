import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Afruz Market</h3>
            <p className="text-gray-400">{t('seller')}</p>
            <p className="text-gray-400 mt-2">{t('developers')}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('delivery')}</h3>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin size={20} className="mr-2" />
              <span>O'zbekiston</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contactUs')}</h3>
            <a
              href="https://t.me/BekhruzFrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white mb-2"
            >
              <Phone size={20} className="mr-2" />
              <span>Telegram: @BekhruzFrontend</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;