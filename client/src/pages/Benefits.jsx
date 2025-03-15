import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import PlantRoots from "../assets/images/plant-roots.jpg";
import LittlePlant from "../assets/images/little-plant.jpg";
import Potassium from "../assets/images/potassium.jpg";
import Growth from "../assets/images/growth.jpg";
import Saksija from "../assets/images/saksija.jpg";
import VisualPleasure from "../assets/images/visual-pleasure.jpg";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet

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
      {/* ✅ SEO Metadata (Invisible to Users) */}
      <Helmet>
        <title>{t('benefitsTitle')}</title>
        <meta name="description" content={t('benefitsDescription')} />
        <meta name="keywords" content={i18n.language === 'bg' ? "плодородие, почва, растеж на растения, хранителни вещества, фермерство" : "fertility, soil, plant growth, nutrients, farming"} />
        <meta property="og:title" content={t('benefitsTitle')} />
        <meta property="og:description" content={t('benefitsDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/preview.jpg" />
        <meta property="og:url" content={i18n.language === 'bg' ? "https://yourwebsite.com/bg/effects" : "https://yourwebsite.com/effects"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('benefitsTitle')} />
        <meta name="twitter:description" content={t('benefitsDescription')} />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-preview.jpg" />
      </Helmet>

      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 drop-shadow-xl">
        {t('benefitsTitle')}
      </h1>

      {/* Flex container for dividing the text into two halves */}
      <div className="flex flex-col xl:flex-row items-start md:space-x-2">

        {/* Left section */}
        <div className="flex-1 pr-4">
          <ul className="list-disc pl-6 space-y-2 leading-relaxed tracking-wide">
            <li>{t('benli1')}</li>
            <li>{t('benli2')}</li>

            {/* Image after the second li */}
            <div className="mt-4 flex justify-center">
              <img
                src={PlantRoots}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy" // Native lazy loading for images
              />
            </div>

            <li>{t('benli3')}</li>
            <li>{t('benli4')}</li>
            <li>{t('benli5')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={LittlePlant}
                alt="Small plant growth"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy" // Native lazy loading for images
              />
            </div>
            <li>{t('benli6')}</li>
            <li>{t('benli7')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Potassium}
                alt="Potassium for plant growth"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy" // Native lazy loading for images
              />
            </div>
            <li>{t('benli8')}</li>
            <li>{t('benli9')}</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="flex-1 pl-4">
          <ul className="list-disc pl-2 md:pl-0 space-y-2">
            <li>{t('benli10')}</li>
            <li>{t('benli11')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Growth}
                alt="Plant growth and roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy" // Native lazy loading for images
              />
            </div>
            <li>{t('benli12')}</li>  
            <li>{t('benli13')}.</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Saksija}
                alt="Pot for plants growth"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy" // Native lazy loading for images
              />
            </div>
            <li>{t('benli14')}</li>
            <li>{t('benli15')}</li>
            <div className="mt-4 flex justify-center">
              <img
                src={VisualPleasure}
                alt="Visual pleasure from healthy plants"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy" // Native lazy loading for images
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
