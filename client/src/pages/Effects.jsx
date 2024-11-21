import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Effect from "../assets/images/effect1.png";
import Vegetables from "../assets/images/vegetables.jpg";
import Flowers from "../assets/images/flowerss.jpg";
import Effect2 from "../assets/images/effect2.png";
import Effect3 from "../assets/images/effect3.png";
import Effect4 from "../assets/images/effect6.png";
import containsBio from '../assets/images/containsBio.png'
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
      className="text-lg font-changer:text-xl w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10 bg-emerald-50 shadow-lg"
    >
      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 drop-shadow-xl">
        {t('compositionTitle')}
      </h1>

      <div className="flex flex-col medium2:flex-row items-center mb-4">
        <p  style={{ lineHeight: '2.33' }} className="medium2:w-3/5 mr-6 mb-2">
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
          src={Flowers}
          alt="Effect illustration"
          className="medium2:w-2/5 mb-3 rounded-lg shadow-md"
        />
      </div>

      <p className="mb-3">
         {t('comP')}
      </p>

      <div className="flex flex-col medium2:flex-row medium2:items-center mb-4">
        <ul className="medium2:w-3/5 list-disc pl-6 space-y-2 mb-2">
          <li>{t('comli1')}</li>
          <li>{t('comli2')}</li>
          <li>{t('comli3')}</li>
          <li>{t('comli4')}</li>
          <li>{t('comli5')}</li>
          <li>{t('comli6')}</li>
          <li>{t('comli7')}</li>
        </ul>
        <img
          src={Vegetables}
          alt="Effect illustration 2"
          className="medium2:w-2/5 rounded-lg shadow-md"
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
          className="w-full medium2:w-10/12 shadow-md"
        />
      </div>
    </motion.div>
  );
}
