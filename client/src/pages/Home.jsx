import React from 'react';
import { motion } from 'framer-motion';
import Elexir from "../assets/images/elexir.jpg";
import Zemedelie from "../assets/images/zemedelie.jpg";
import Tractor from "../assets/images/tractor.jpg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-6 bg-emerald-50"
    >
      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-red-800 bg-gradient-to-r from-emerald-600 to-emerald-400 
              text-transparent bg-clip-text drop-shadow-xl">
 Елексирът за плодородие
</h1>

      
      {/* Flex container for the first paragraph and first image */}
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        
        {/* First paragraph text */}
        <p className="flex-1">
          Еликсирът за плодородие е високо концентриран биоорганичен хуминов концентрат, произведен по уникална технология от торф. 
          Еликсирът съдържа целия комплекс от БАВ (биологично активни вещества), включително фулвати, хумусни съединения, хранителни вещества 
          (магнезий, сяра, желязо, натрий, мед, калий, фосфор, молибден, калций, цинк, кобалт, азот, бор) в лесноусвоима форма, както и макро- и 
          микроелементи (вкл. хелати), стимулатори на растежа на растенията, техния цъфтеж и добив.
        </p>

        {/* First image next to the first paragraph */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <img src={Elexir} alt="Elixir of fertility" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>

      {/* Flex container for the second image and second paragraph */}
      <div className="flex flex-col md:flex-row items-start md:space-x-6 mt-4">
        
        {/* Second image next to the second paragraph */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img src={Zemedelie} alt="Agriculture use" className="w-full h-auto object-cover rounded-md" />
        </div>

        {/* Second paragraph text */}
        <p className="flex-1">
          Еликсирът се използва за третиране на семена преди засаждане и за подхранване на растения през вегетативния период. Той повишава 
          интензивността на покълването на семената и добивите, намалява ефекта от хербицидния стрес и укрепва имунитета на растенията. Може да 
          се прилага при всички видове култури и е съвместим с минерални торове, инсектициди и хербициди. Когато се използва заедно с торове, 
          еликсирът засилва ефекта от тяхната употреба, засилва минералното хранене и стимулира имунитета към болести.
        </p>
      </div>

      {/* Third paragraph text */}
      <p className="mt-4">
        Еликсирът за плодородие е подходящ за всички видове поливане и може да се използва както на открито, така и в оранжерии. 
        В комбинация с минерални торове, инсектициди и хербициди, еликсирът намалява необходимата доза с 30-50%. При редовна употреба, 
        той подобрява структурата на почвата, задържайки влагата и засилва устойчивостта на растенията към неблагоприятни условия 
        като засушаване и промени в температурата. Така растенията могат да развиват по-здрави коренови системи, което води до по-устойчив и висок добив.
      </p>

      {/* Third image below the last paragraph and centered */}
      <div className="flex justify-center mt-4">
        <img src={Tractor} alt="Tractor in agriculture" className="w-3/4 h-auto object-cover rounded-md" />
      </div>
    </motion.div>
  );
}
