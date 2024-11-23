import LanguagesIcon from "../assets/images/languages-icon.png";
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Logo from "../assets/images/logo14.png";

const fadeInStyle = {
  animation: 'fadeIn 1s ease-in-out',
};

// Inline CSS keyframes
const styles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default function Header() {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage);
  };
  const { t } = useTranslation();

  return (
    <>
      <style>{styles}</style>
      <header className="bg-green-800 text-white font-semibold shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 header-special:mx-24 xl:mx-36">
          <Link to="/">
            <div className="flex items-center gap-0 sm:gap-1 my-1">
              <div className="my-1 w-14 sm:w-14 md:w-16 xl:w-16">
                <img src={Logo} alt="Logo" className="shadow-lg rounded-full w-10 md:w-12" />
              </div>
              <div className="text-3xl sm:text-3xl text-center font-bold text-white whitespace-nowrap" style={{ letterSpacing: '3px' }}>
                Biovektor
              </div>
            </div>
          </Link>
          <ul className="flex flex-col sm:flex-row sm:text-xl header-special:mb-0 items-center gap-1 sm:gap-8 md:gap-8 text-xl xs:text-lg md:text-xl xl:text-xl header-special:mt-0 font-bold">
            <div className="flex flex-row lg:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-lg xs:text-md md:text-xl xl:text-xl mt-3 sm:mt-0">
              <Link to="/">
                <li className="hover:underline cursor-pointer">{t("elixir")}</li>
              </Link>
              <Link to="/benefits">
                <li className="hover:underline">{t('benefits')}</li>
              </Link>
              <Link to="/effects">
                <li className="hover:underline">{t('composition')}</li>
              </Link>
            </div>
            <div className="flex flex-row lg:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-lg xs:text-md md:text-xl xl:text-xl mt-3 sm:mt-0">
              <Link to="/method">
                <li className="hover:underline">{t('application')}</li>
              </Link>
              <Link to="/contacts">
                <li className="hover:underline">{t('contacts')}</li>
              </Link>
              <li className="hover:underline cursor-pointer flex items-center" onClick={toggleLanguage}>
                <img src={LanguagesIcon} alt="Languages Icon" className="w-12 h-12" />
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}
