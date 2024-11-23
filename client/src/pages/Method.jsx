import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Farmer from "../assets/images/farmer.jpg";
import Farmer2 from "../assets/images/farmer2.jpg";
import GrowthBio from "../assets/images/growthbio.jpg";
import BioVideo from "../assets/images/video-bio.mp4";
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
      className="text-lg font-changer:text-xl w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10 bg-emerald-50 shadow-lg"
    >
      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 drop-shadow-xl">
        {t('ApplicationTitle')}
      </h1>

      {/* Flexbox container to align images and text */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-3 lg:space-x-6">
        {/* Left image */}
        <div className="hidden lg:block w-1/4">
          <img
            src={Farmer}
            alt="Farmer working"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text content with responsive line-height */}
        <div className="flex-1 text-lg text-justify font-changer:text-xl font-changer:leading-extra-loose  leading-[1.4] lg:leading-[1.6] xl:leading-[1.7] 2xl:leading-extra-loose">
          <p className="mb-4">{t('AppP1')}</p>
          <p className="mb-4">{t('AppP2')}</p>
          <p className="mb-4">{t('AppP3')}</p>
        </div>

        {/* Right image */}
        <div className="w-4/5 md:w-1/3 lg:w-1/4">
          <img
            src={Farmer2}
            alt="Farmer working in the field"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* New Section */}
      <div className="mt-10">
  <h2 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 drop-shadow-xl">
    {t('Results')} {/* Резултати от употребата */}
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    {/* GrowthBio Image */}
    <div className="w-full md:w-1/2 flex items-center">
      <img
        src={GrowthBio}
        alt="Growth results"
        className="w-full h-auto md:h-[300px] object-cover rounded-md shadow-lg"
      />
    </div>

    {/* BioVideo */}
    <div className="w-full md:w-1/2 flex items-center">
      <video
        src={BioVideo}
        controls
        className="w-full md:h-[300px] object-cover rounded-md shadow-lg"
      />
    </div>
  </div>
</div>

    </motion.div>
  );
}
