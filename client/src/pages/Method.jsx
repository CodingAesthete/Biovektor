import React from 'react';
import { motion } from 'framer-motion';
import Farmer from "../assets/images/farmer.jpg";
import Farmer2 from "../assets/images/farmer2.jpg";

export default function Method() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-6 bg-emerald-50"
    >
      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 bg-gradient-to-r from-emerald-600 to-emerald-400 
              text-transparent bg-clip-text drop-shadow-xl">
        Метод на прилагане
      </h1>

      {/* Flexbox container to align images and text */}
      <div className="flex justify-between items-center space-x-6">
        {/* Left image */}
        <div className="w-1/4">
          <img
            src={Farmer}
            alt="Farmer working"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-lg text-justify">
          <p className="mb-4">
            При зърнено-бобови и зеленчукови култури се прилагат 3-4 третирания по 5-7 литра на 1 ха. За кафе, чай, маслини и др.: 4-5 третирания, 8-12 литра на 1 ха. За оранжерии: накисване на семена при прилагане на Fertility Elixir: Разредете 20-30 ml Fertility Elixir на 1 литър вода. Накиснете семената за 12-18 часа. Разход: на 1 кг семена до пълното им покриване с разтвор.
          </p>
          <p className="mb-4">
            Поливане: Еликсирът се разрежда 20-30 мл на 10 литра вода, поливанията се извършват през 5-7 дни. Пръскане на разсад: след второто поливане, за 5-7 дни и пръскане от третия на всеки 10-15 дни. Брой поливания: 6 до 8 пъти.
          </p>
          <p className="mb-4">
            В резултат на прилагането на Fertility Elixir, разсадът расте два пъти по-бързо от обикновения разсад, когато не е поливан. Производителността се увеличава с 20% - 60%, нитратите и нитритите намаляват с 3 - 6 пъти, подобрява се качеството на продукцията, увеличава се дългосрочното съхранение на плодовете и зеленчуците.
          </p>
        </div>

        {/* Right image */}
        <div className="w-1/4">
          <img
            src={Farmer2}
            alt="Farmer working in the field"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}
