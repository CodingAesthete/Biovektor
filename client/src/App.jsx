import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // ✅ Import HelmetProvider and Helmet
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Effects from './pages/Effects';
import Method from './pages/Method';
import Contacts from './pages/Contacts';
import Header from './components/Header';

function App() {
  const { i18n } = useTranslation(); // Get the i18n object to check the current language

  // Define meta tags dynamically based on the current language
  const setMetaTags = () => {
    if (i18n.language === 'bg') {
      return (
        <>
          <title>Еликсирът за плодородие</title>
          <meta name="description" content="Еликсирът за плодородие е високо концентриран биоорганичен хуминов концентрат, произведен по уникална технология от торф. Той съдържа целия комплекс от БАВ (биологично активни вещества), включително фулвати, хумусни съединения, хранителни вещества, стимулатори на растежа на растенията и техния добив." />
          <meta name="keywords" content="Еликсир за плодородие, хуминов концентрат, биоорганичен, торф, растения, земеделие, растеж, добив, поливане" />
          <meta property="og:title" content="Еликсирът за плодородие" />
          <meta property="og:description" content="Еликсирът за плодородие е високо концентриран биоорганичен хуминов концентрат, произведен по уникална технология от торф, който стимулира растежа на растенията и повишава добивите." />
          <meta property="og:type" content="website" />
        </>
      );
    } else {
      return (
        <>
          <title>Fertility Elixir</title>
          <meta name="description" content="Fertility Elixir is a highly concentrated bio-organic humic concentrate produced using a unique technology from peat. It contains a full complex of biologically active substances, including fulvates, humus compounds, nutrients, and plant growth stimulators." />
          <meta name="keywords" content="Fertility Elixir, humic concentrate, bio-organic, peat, plants, agriculture, growth, yield, irrigation" />
          <meta property="og:title" content="Fertility Elixir" />
          <meta property="og:description" content="Fertility Elixir is a highly concentrated bio-organic humic concentrate made from peat that stimulates plant growth and increases yields." />
          <meta property="og:type" content="website" />
        </>
      );
    }
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <div className="pt-36 extrasmall:pt-52 header-sm:pt-36 sm:pt-40 md:pt-40 header-special:pt-24 lg:pt-40 xl:pt-20" style={{ minHeight: '100vh' }}>
          {/* Set Meta Tags Dynamically */}
          <Helmet>
            {setMetaTags()}
          </Helmet>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/effects" element={<Effects />} />
            <Route path="/method" element={<Method />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
