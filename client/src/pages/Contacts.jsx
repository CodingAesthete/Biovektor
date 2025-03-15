import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Handshake from "../assets/images/handshake.jpg";
import { FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO metadata

export default function Contacts() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  // Language toggle function
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 0);
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
      {/* SEO Metadata */}
      <Helmet>
        <title>{t('contactsTitle')}</title>
        <meta name="description" content={t('contactsDescription')} />
        <meta name="keywords" content={i18n.language === 'bg' ? "контакти, телефон, адрес, имейл, земеделие, бизнес контакт" : "contact, phone, address, email, farming, agriculture, business contact"} />
        <meta property="og:title" content={t('contactsTitle')} />
        <meta property="og:description" content={t('contactsDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/contacts-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/contacts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('contactsTitle')} />
        <meta name="twitter:description" content={t('contactsDescription')} />
        <meta name="twitter:image" content="https://yourwebsite.com/contacts-image.jpg" />
        
        {/* Structured Data (JSON-LD) for Contact Information */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Your Company Name",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/logo.jpg",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+1234567890",
                "contactType": "Customer Service",
                "areaServed": "BG",
                "availableLanguage": "Bulgarian"
              },{
                "@type": "ContactPoint",
                "telephone": "+0987654321",
                "contactType": "Customer Service",
                "areaServed": "EN",
                "availableLanguage": "English"
              }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Your Street",
                "addressLocality": "Sofia",
                "postalCode": "1000",
                "addressCountry": "BG"
              }
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-[1.7rem] text-center font-bold mb-6 text-red-800 drop-shadow-xl">
        {t('contactsTitle')}
      </h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        {/* Handshake Image */}
        <img
          src={Handshake}
          alt="Handshake"
          className="w-full sm:w-1/3 mb-6 sm:mb-0 rounded-lg object-cover sm:self-center"
          loading="lazy" // Added lazy loading
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
