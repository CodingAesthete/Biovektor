import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet
import { motion } from 'framer-motion';
import Elexir from "../assets/images/elexir.jpg";
import Zemedelie from "../assets/images/zemedelie.jpg";
import Tractor from "../assets/images/tractor.jpg";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 0);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  // Language toggle function
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage);
  };

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
        <title>{t('homeTitle')}</title>
        <meta name="description" content={t('homeDescription')} />
        <meta name="keywords" content={i18n.language === 'bg' ? "плодородие, почва, земеделие, фермерство, елексир" : "fertility, soil, agriculture, farming, elixir"} />
        <meta property="og:title" content={t('homeTitle')} />
        <meta property="og:description" content={t('homeDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/preview.jpg" />
        <meta property="og:url" content={i18n.language === 'bg' ? "https://yourwebsite.com/bg" : "https://yourwebsite.com/"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('homeTitle')} />
        <meta name="twitter:description" content={t('homeDescription')} />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-preview.jpg" />
      </Helmet>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 drop-shadow-xl">
          {t('homeTitle')}
        </h1>

        {/* First Paragraph and Image */}
        <div className="flex flex-col lg:flex-row lg:items-center md:space-x-6">
          <p className="flex-1 leading-relaxed tracking-wide mb-4">
            {t('homeP1')}
          </p>
          <div className="w-full lg:w-1/3 md:justify-center lg:w-1/3 mt-4 md:mt-2">
            {/* Lazy load the image */}
            <img 
              src={Elexir} 
              alt={i18n.language === 'bg' ? "Елексир за плодородие" : "Elixir of fertility"} 
              className="w-full h-auto object-cover rounded-md" 
              loading="lazy" // Native lazy loading for images
            />
          </div>
        </div>

        {/* Second Paragraph and Image */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-6">
          <div className="w-full lg:w-1/3 mt-4 md:mt-2 order-2 lg:order-1">
            {/* Lazy load the image */}
            <img 
              src={Zemedelie} 
              alt={i18n.language === 'bg' ? "Земеделие" : "Agriculture"} 
              className="w-full h-auto object-cover rounded-md" 
              loading="lazy" // Native lazy loading for images
            />
          </div>
          <p className="flex-1 leading-relaxed tracking-wide mb-4 order-1 lg:order-2">
            {t('homeP2')}
          </p>
        </div>

        {/* Third Paragraph */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-6">
          <p className="flex-1 leading-relaxed tracking-wide mb-4">
            {t('homeP3')}
          </p>
        </div>

        {/* Last Image (Tractor) always below text */}
        <div className="flex justify-center mt-4">
          {/* Lazy load the image */}
          <img 
            src={Tractor} 
            alt={i18n.language === 'bg' ? "Трактор в земеделието" : "Tractor in agriculture"} 
            className="w-full lg:w-3/4 h-auto object-cover rounded-md" 
            loading="lazy" // Native lazy loading for images
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
