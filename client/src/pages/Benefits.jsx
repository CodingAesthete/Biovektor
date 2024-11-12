import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import PlantRoots from "../assets/images/plant-roots.jpg";
import LittlePlant from "../assets/images/little-plant.jpg";
import Potassium from "../assets/images/potassium.jpg";
import Growth from "../assets/images/growth.jpg";
import Saksija from "../assets/images/saksija.jpg";
import VisualPleasure from "../assets/images/visual-pleasure.jpg";
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
     <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 drop-shadow-xl">
      {t('benefitsTitle')}
</h1>

      {/* Flex container for dividing the text into two halves */}
      <div className="flex flex-col xl:flex-row items-start md:space-x-6">

        {/* Left section */}
        <div className="flex-1 pr-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('benli1')}</li>
            <li>{t('benli2')}</li>

            {/* Image after the second li */}
            <div className="mt-4 flex justify-center">
              <img
                src={PlantRoots}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            <li>{t('benli3')}</li>
            <li>{t('benli4')}</li>
            <li>{t('benli5')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={LittlePlant}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>{t('benli6')}</li>
            <li>{t('benli7')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Potassium}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>{t('benli8')}</li>
            <li>{t('benli9')}</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="flex-1 pl-4">
          <ul className="list-disc pl-6 space-y-2">
          <li>{t('benli10')}</li>
          <li>{t('benli11')}</li>
          <div className="mt-4 flex justify-center">
              <img
                src={Growth}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>{t('benli12')}</li>  
            <li>{t('benli13')}.</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Saksija}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>{t('benli14')}</li>
            <li>{t('benli15')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={VisualPleasure}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>{t('benli16')}</li>
            <li>{t('benli17')}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
