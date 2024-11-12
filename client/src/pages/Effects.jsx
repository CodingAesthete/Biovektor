import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Effect from "../assets/images/effect1.png";
import Effect2 from "../assets/images/effect2.png";
import Effect3 from "../assets/images/effect3.png";
import Effect4 from "../assets/images/effect6.png";
import { useTranslation } from 'react-i18next';

export default function Effects() {
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
        {t('compositionTitle')}
      </h1>

      <div className="flex items-center mb-4">
        <p className="w-3/5 mr-6">
          • {t('combr1')}
          <br />
          • {t('combr2')}
          <br />
          • {t('combr3')}
          <br />
          • {t('combr4')}
          <br />
          • {t('combr5')}
        </p>
        <img
          src={Effect}
          alt="Effect illustration"
          className="w-2/5 rounded-lg shadow-md"
        />
      </div>

      <p>
         {t('comP')}
      </p>

      <div className="flex items-center mb-4">
        <ul className="w-3/5 list-disc pl-6 space-y-2">
          <li>{t('comli1')}</li>
          <li>{t('comli2')}</li>
          <li>{t('comli3')}</li>
          <li>{t('comli4')}</li>
          <li>{t('comli5')}</li>
          <li>{t('comli6')}</li>
          <li>{t('comli7')}</li>
        </ul>
        <img
          src={Effect2}
          alt="Effect illustration 2"
          className="w-2/5 rounded-lg shadow-md"
        />
      </div>

      <p className="mt-4">
        <span className="font-bold">(*)</span> {t('comsp1')}
        <br />
        <span className="font-bold">(**)</span> {t('comsp2')}
        </p>

      {/* Centered Image Below All Content */}
      <div className="flex justify-center mt-8">
        <img
          src={Effect4}
          alt="Effect illustration 3"
          className="w-10/12 shadow-md"
        />
      </div>
    </motion.div>
  );
}
