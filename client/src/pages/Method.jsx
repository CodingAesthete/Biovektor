import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Farmer from "../assets/images/farmer.jpg";
import Farmer2 from "../assets/images/farmer2.jpg";
import { useTranslation } from 'react-i18next';

export default function Method() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 0); // Duration of the animation in milliseconds
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  return (
    <motion.div
    key={isAnimating} 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-6 bg-emerald-50"
    >
      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 bg-gradient-to-r from-emerald-600 to-emerald-400 
              text-transparent bg-clip-text drop-shadow-xl">
        {t('ApplicationTitle')}
      </h1>

      {/* Flexbox container to align images and text */}
      <div className="flex justify-between items-center space-x-6">
        {/* Left image */}
        <div className="w-1/4">
          <img
            src={Farmer}
            alt="Farmer working"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-lg text-justify">
          <p className="mb-4">
          {t('AppP1')}</p>
          <p className="mb-4">
          {t('AppP2')}
          </p>
          <p className="mb-4">
          {t('AppP3')}
          </p>
        </div>

        {/* Right image */}
        <div className="w-1/4">
          <img
            src={Farmer2}
            alt="Farmer working in the field"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}
