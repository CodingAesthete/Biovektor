import React from 'react';
import { motion } from 'framer-motion';
import PlantRoots from "../assets/images/plant-roots.jpg";
import LittlePlant from "../assets/images/little-plant.jpg";
import Potassium from "../assets/images/potassium.jpg";
import Growth from "../assets/images/growth.jpg";
import Saksija from "../assets/images/saksija.jpg";
import VisualPleasure from "../assets/images/visual-pleasure.jpg";

export default function Effects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-6 bg-emerald-50"
    >
     <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 bg-gradient-to-r from-emerald-600 to-emerald-400 
              text-transparent bg-clip-text drop-shadow-xl">
  Ползи от еликсирa за плодородие
</h1>

      {/* Flex container for dividing the text into two halves */}
      <div className="flex flex-col xl:flex-row items-start md:space-x-6">

        {/* Left section */}
        <div className="flex-1 pr-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Неутрализират киселинни и алкални почви; регулира pH на почвата.</li>
            <li>Подобряват и оптимизират преминаването на хранителни вещества и вода към растенията.</li>

            {/* Image after the second li */}
            <div className="mt-4 flex justify-center">
              <img
                src={PlantRoots}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            <li>Повишават буферните свойства на почвата.</li>
            <li>Богат на органични и минерални вещества, значително ускорява растежа на растенията.</li>
            <li>Задържа водата и неорганичните торове в кореновите зони и намалява излугването им.</li>
            <div className="mt-4 flex justify-center">
              <img
                src={LittlePlant}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>Притежават изключително висок катионен обменен капацитет.</li>
            <li>Насърчаване на превръщането на хранителните елементи (N, P, K + Fe, Zn и други микроелементи) във форми, достъпни за растенията.</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Potassium}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>Увеличава снабдяването на растенията с азот.</li>
            <li>Свързва токсичните вещества в почвите.</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="flex-1 pl-4">
          <ul className="list-disc pl-6 space-y-2">
          <li>Стимулират растителните ензими и увеличават производството им.</li>
          <li>Увеличава значително достъпа до минерални торове.</li>
          <div className="mt-4 flex justify-center">
              <img
                src={Growth}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>Намалете реакцията на фосфора с Fe, Mg и Al и го освободете във форма, който е достъпен и полезен за растенията.</li>  
            <li>Органичен катализатор в много биологични процеси.</li>
            <div className="mt-4 flex justify-center">
              <img
                src={Saksija}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>Освобождаване на въглероден диоксид от почвения калциев карбонат и позволява използването му в фотосинтеза.</li>
            <li>Стимулиране на растежа и разпространението на желани микроорганизми в почвата.</li>
            <div className="mt-4 flex justify-center">
              <img
                src={VisualPleasure}
                alt="Plant roots absorbing nutrients"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <li>Ефективна борба срещу ерозията на почвата.</li>
            <li>Повишават естествената устойчивост на растенията срещу болести и неприятели.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
