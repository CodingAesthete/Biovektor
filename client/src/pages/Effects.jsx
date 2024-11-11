import React from 'react';
import { motion } from 'framer-motion';

export default function Effects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-6 bg-emerald-50"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Ползи от Еликсирът за плодородие</h1>

      {/* Flex container for dividing the text into two halves */}
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        
        {/* Left section */}
        <div className="flex-1 pr-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Неутрализират киселинни и алкални почви; регулира pH на почвата.</li>
            <li>Подобряват и оптимизират преминаването на хранителни вещества и вода към растенията.</li>
            <li>Повишават буферните свойства на почвата.</li>
            <li>Богат на органични и минерални вещества, значително ускорява растежа на растенията.</li>
            <li>Задържа водата и неорганичните торове в кореновите зони и намалява излугването им.</li>
            <li>Притежават изключително висок катионен обменен капацитет.</li>
            <li>Насърчаване на превръщането на хранителните елементи (N, P, K + Fe, Zn и други микроелементи) във форми, достъпни за растенията.</li>
          </ul>
        </div>

        {/* Divider line (middle) */}
        <div className="hidden md:block w-[2px] bg-green-800"></div>

        {/* Right section */}
        <div className="flex-1 pl-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Увеличете снабдяването на растенията с азот.</li>
            <li>Намалете реакцията на фосфора с Fe, Mg и Al и го освободете във форма, който е достъпен и полезен за растенията.</li>
            <li>Увеличава значително достъпа до минерални торове.</li>
            <li>Освобождаване на въглероден диоксид от почвения калциев карбонат и позволява използването му в фотосинтеза.</li>
            <li>Ефективна борба срещу ерозията на почвата.</li>
            <li>Свързва токсичните вещества в почвите.</li>
            <li>Стимулират растителните ензими и увеличават производството им.</li>
            <li>Органичен катализатор в много биологични процеси.</li>
            <li>Стимулиране на растежа и разпространението на желани микроорганизми в почвата.</li>
            <li>Повишават естествената устойчивост на растенията срещу болести и неприятели.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
