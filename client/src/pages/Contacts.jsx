import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Handshake from "../assets/images/handshake.jpg";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contacts() {
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
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-md px-4 sm:px-10 py-6 mt-6 header-sm:mt-14 sm:mt-6 mb-6 bg-emerald-50"
      key={isAnimating}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >

<h1 className="text-[1.7rem] text-center font-bold mb-6 text-red-800 drop-shadow-xl">
            {t('contactsTitle')}
          </h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        {/* Handshake Image */}
        <img
          src={Handshake}
          alt="Handshake"
          className="w-full sm:w-1/3 mb-6 sm:mb-0 rounded-lg object-cover sm:self-center"
        />

        {/* All Text Content */}
        <div className="flex-1 text-center sm:text-left">

          <p className="mb-8 text-justify">
            {t('contactsP')}
          </p>

          {/* Centered Contact Information */}
          <div className="space-y-4 text-center">
            {/* Address Section */}
            <div className="flex items-center justify-center space-x-3">
              <p className="text-xl font-medium">{t('contactsAdd')}</p>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <p className="text-xl font-medium">{t('contactsAdd2')}</p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center justify-center space-x-3">
              <FaPhoneAlt className="text-emerald-700" />
              <p className="text-xl font-medium">{t('contactsTel')}</p>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <FaPhoneAlt className="text-emerald-700" />
              <p className="text-xl font-medium">{t('contactsTel2')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
