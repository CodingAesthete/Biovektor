import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'bg',
    resources: {
      bg: {
        translation: {
          elixir: "Еликсир",
          benefits: "Ползи",
          composition: "Състав",
          application: "Прилагане",
          contacts: "Контакти",

          homeTitle: "Еликсирът за плодородие",
          homeP1: "Еликсирът за плодородие е високо концентриран биоорганичен хуминов концентрат, произведен по уникална технология от торф. Еликсирът съдържа целия комплекс от БАВ (биологично активни вещества), включително фулвати, хумусни съединения, хранителни вещества (магнезий, сяра, желязо, натрий, мед, калий, фосфор, молибден, калций, цинк, кобалт, азот, бор) в лесноусвоима форма, както и макро- и микроелементи (вкл. хелати), стимулатори на растежа на растенията, техния цъфтеж и добив.",
          homeP2: "Еликсирът се използва за третиране на семена преди засаждане и за подхранване на растения през вегетативния период. Той повишава интензивността на покълването на семената и добивите, намалява ефекта от хербицидния стрес и укрепва имунитета на растенията. Може да се прилага при всички видове култури и е съвместим с минерални торове, инсектициди и хербициди. Когато се използва заедно с торове, еликсирът засилва ефекта от тяхната употреба, засилва минералното хранене и стимулира имунитета към болести.",
          homeP3: "Еликсирът за плодородие е подходящ за всички видове поливане и може да се използва както на открито, така и в оранжерии. В комбинация с минерални торове, инсектициди и хербициди, еликсирът намалява необходимата доза с 30-50%. При редовна употреба, той подобрява структурата на почвата, задържайки влагата и засилва устойчивостта на растенията към неблагоприятни условия като засушаване и промени в температурата. Така растенията могат да развиват по-здрави коренови системи, което води до по-устойчив и висок добив.",
        
          benefitsTitle: "Ползи от еликсирa за плодородие",
          benli1: "Неутрализират киселинни и алкални почви; регулира pH на почвата.",
          benli2: "Подобряват и оптимизират преминаването на хранителни вещества и вода към растенията.",
          benli3: "Повишават буферните свойства на почвата.",
          benli4: "Богат на органични и минерални вещества, значително ускорява растежа на растенията.",
          benli5: "Задържа водата и неорганичните торове в кореновите зони и намалява излугването им.",
          benli6: "Притежават изключително висок катионен обменен капацитет.",
          benli7: "Насърчаване на превръщането на хранителните елементи (N, P, K + Fe, Zn и други микроелементи) във форми, достъпни за растенията.",
          benli8: "Увеличава снабдяването на растенията с азот.",
          benli9: "Свързва токсичните вещества в почвите.",
          benli10: "Стимулират растителните ензими и увеличават производството им.",
          benli11: "Увеличава значително достъпа до минерални торове.",
          benli12: "Намалете реакцията на фосфора с Fe, Mg и Al и го освободете във форма, който е достъпен и полезен за растенията.",
          benli13: "Органичен катализатор в много биологични процеси.",
          benli14: "Освобождаване на въглероден диоксид от почвения калциев карбонат и позволява използването му в фотосинтеза.",
          benli15: "Стимулиране на растежа и разпространението на желани микроорганизми в почвата.",
          benli16: "Ефективна борба срещу ерозията на почвата.",
          benli17: "Повишават естествената устойчивост на растенията срещу болести и неприятели.",

          compositionTitle: "Състав на еликсира за плодородие",
          combr1: "16 - естествени, аминокиселини: хистидин, глицин, метионин и други",
          combr2: "Естествени витамини: A, B1 - B12, E, C, D, P",
          combr3: "Хуминови и фулвинови киселини",
          combr4: "Азот (N), фосфор (P), калий (K)",
          combr5: "Микроелементи: Mn, Cu, B, Zn, I, Mg и други",
          comP: "Забележка: Всички елементи са в хелатна форма. Еликсирът за плодородие е направен от торф, съдържанието на вещества (в които, наред с други характеристики, може да се разграничи висока концентрация на фулвинова киселина) е както следва:",
          comli1: "Органично вещество (в % на сухо вещество) - 95%",
          comli2: "Хуминови киселини (в % на сухо вещество) - 5-25% (**)",
          comli3: "Фулвиеви киселини (в % на сухо вещество) - 5 - 15% (**)",
          comli4: "Лигнин (в % на сухо вещество) - 5%",
          comli5: "Общ азот (в % на сухо вещество) - 2%",
          comli6: "Влажност (H2O в % от масата) - 80 - 95(**)",
          comli7: "Киселинност (pH) - 8 -10",
          comsp1: "(*) Параметрите на течността могат да се променят според състава на почвата.s",
          comsp2: "(**) Параметрите могат да варират във всяка партида, в зависимост от много фактори, включително температура на околната среда, суровини, използвани в производството и др.",
       
          ApplicationTitle: "Метод на прилагане",
          AppP1: "При зърнено-бобови и зеленчукови култури се прилагат 3-4 третирания по 5-7 литра на 1 ха. За кафе, чай, маслини и др.: 4-5 третирания, 8-12 литра на 1 ха. За оранжерии: накисване на семена при прилагане на Fertility Elixir: Разредете 20-30 ml Fertility Elixir на 1 литър вода. Накиснете семената за 12-18 часа. Разход: на 1 кг семена до пълното им покриване с разтвор.",
          AppP2: "Поливане: Еликсирът се разрежда 20-30 мл на 10 литра вода, поливанията се извършват през 5-7 дни. Пръскане на разсад: след второто поливане, за 5-7 дни и пръскане от третия на всеки 10-15 дни. Брой поливания: 6 до 8 пъти.",
          AppP3: "В резултат на прилагането на Fertility Elixir, разсадът расте два пъти по-бързо от обикновения разсад, когато не е поливан. Производителността се увеличава с 20% - 60%, нитратите и нитритите намаляват с 3 - 6 пъти, подобрява се качеството на продукцията, увеличава се дългосрочното съхранение на плодовете и зеленчуците.",

          contactsTitle: "Контакти",
          contactsP: "С удоволствие ще отговорим на всички ваши въпроси и запитвания относно нашите услуги и продукти. Независимо дали искате да направите поръчка, да получите допълнителна информация или просто да споделите своите идеи и предложения, ние сме тук, за да ви помогнем.",
          contactsTel: "+359-88-661-2166 - мениджър",
          contactsAdd: "Биовектор ЕООД, Варна, Западна промишлена зона, район Весела",
        }
      },
      en: {
        translation: {
          elixir: "Elixir",
          benefits: "Benefits",
          composition: "Composition",
          application: "Application",
          contacts: "Contacts",

          homeTitle: "The Fertility Elixir",
          homeP1: "The Fertility Elixir is a highly concentrated bio-organic humic concentrate, produced using a unique peat-based technology. The Elixir contains a full complex of biologically active substances (BAS), including fulvates, humic compounds, nutrients (magnesium, sulfur, iron, sodium, copper, potassium, phosphorus, molybdenum, calcium, zinc, cobalt, nitrogen, boron) in an easily absorbable form, as well as macro- and microelements (including chelates), growth stimulants for plants, and enhancers for flowering and yield.",
          homeP2: "The Elixir is used for seed treatment before planting and for plant feeding during the vegetative period. It enhances seed germination intensity and yields, reduces herbicide stress, and strengthens plant immunity. It can be applied to all crop types and is compatible with mineral fertilizers, insecticides, and herbicides. When used with fertilizers, the Elixir enhances their effects, increases mineral nutrition, and boosts immunity against diseases.",
          homeP3: "The Fertility Elixir is suitable for all types of irrigation and can be used both outdoors and in greenhouses. In combination with mineral fertilizers, insecticides, and herbicides, the Elixir reduces the required dose by 30-50%. With regular use, it improves soil structure, retains moisture, and enhances plant resistance to adverse conditions such as drought and temperature fluctuations. This enables plants to develop stronger root systems, leading to more resilient and higher yields.",
       
          benefitsTitle: "Benefits of the Fertility Elixir",
          benli1: "Neutralize acidic and alkaline soils; regulates soil pH.",
          benli2: "Improve and optimize the passage of nutrients and water to the plants.",
          benli3: "Increase the buffering capacity of the soil.",
          benli4: "Rich in organic and mineral substances, significantly accelerates plant growth.",
          benli5: "Retains water and inorganic fertilizers in the root zones and reduces leaching.",
          benli6: "Has an exceptionally high cation-exchange capacity.",
          benli7: "Promotes the conversion of nutrients (N, P, K + Fe, Zn, and other micronutrients) into forms accessible to plants.",
          benli8: "Increases nitrogen supply to plants.",
          benli9: "Binds toxic substances in the soil.",
          benli10: "Stimulates plant enzymes and increases their production.",
          benli11: "Significantly increases access to mineral fertilizers.",
          benli12: "Reduces the reaction of phosphorus with Fe, Mg, and Al and releases it in a form that is available and beneficial to plants.",
          benli13: "Organic catalyst in many biological processes.",
          benli14: "Releases carbon dioxide from soil calcium carbonate, enabling its use in photosynthesis.",
          benli15: "Stimulates the growth and spread of beneficial microorganisms in the soil.",
          benli16: "Effective fight against soil erosion.",
          benli17: "Increases plants' natural resistance to diseases and pests.",

          compositionTitle: "Composition of the Fertility Elixir",
          combr1: "16 - natural amino acids: histidine, glycine, methionine, and others",
          combr2: "Natural vitamins: A, B1 - B12, E, C, D, P",
          combr3: "Humic and fulvic acids",
          combr4: "Nitrogen (N), phosphorus (P), potassium (K)",
          combr5: "Microelements: Mn, Cu, B, Zn, I, Mg, and others",
          comP: "Note: All elements are in chelated form. The Fertility Elixir is made from peat, and the content of substances (which, among other characteristics, includes a high concentration of fulvic acid) is as follows:",
          comli1: "Organic matter (in % of dry matter) - 95%",
          comli2: "Humic acids (in % of dry matter) - 5-25% (**)",
          comli3: "Fulvic acids (in % of dry matter) - 5 - 15% (**)",
          comli4: "Lignin (in % of dry matter) - 5%",
          comli5: "Total nitrogen (in % of dry matter) - 2%",
          comli6: "Moisture (H2O as % of mass) - 80 - 95(**)",
          comli7: "Acidity (pH) - 8 - 10",
          comsp1: "(*) Parameters of the liquid may change according to soil composition.",
          comsp2: "(**) Parameters may vary in each batch, depending on many factors including ambient temperature, raw materials used in production, etc.",

          ApplicationTitle: "Application Method",
          AppP1: "For grain-legume and vegetable crops, 3-4 treatments of 5-7 liters per hectare are applied. For coffee, tea, olives, etc.: 4-5 treatments, 8-12 liters per hectare. For greenhouses: seed soaking when applying Fertility Elixir: Dilute 20-30 ml of Fertility Elixir in 1 liter of water. Soak the seeds for 12-18 hours. Usage: for 1 kg of seeds, until they are fully covered with the solution.",
          AppP2: "Irrigation: The Elixir is diluted 20-30 ml in 10 liters of water, irrigation is done every 5-7 days. Seedling spraying: after the second watering, for 5-7 days, and spraying from the third every 10-15 days. Number of irrigations: 6 to 8 times.",
          AppP3: "As a result of applying Fertility Elixir, seedlings grow twice as fast as ordinary seedlings when not watered. Productivity increases by 20% - 60%, nitrates and nitrites decrease by 3 - 6 times, the quality of production improves, and long-term storage of fruits and vegetables increases.",

          contactsTitle: "Contacts",
          contactsP: "We are happy to answer all your questions and inquiries about our services and products. Whether you want to place an order, receive more information, or simply share your ideas and suggestions, we are here to help.",
          contactsTel: "+359-88-661-2166 - Manager",
          contactsAdd: "Biovector Ltd., Varna, Western Industrial Zone, Vesela District",

        }
      }
    }
  });

export default i18n;
