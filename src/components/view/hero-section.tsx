import { useEffect, useState } from "react";
import BgHero from "../../assets/bg-hero.jpg";
import bgslide2 from "../../assets/bgslide2.jpg";
import Orange from "../../assets/orange.png";
import Slide2 from "../../assets/slide2.png";
// import Slide3 from "../../assets/slide3.png";
import Button from "../parties/boutton";
import { motion, AnimatePresence } from "framer-motion";
// import { button } from "framer-motion/client";

export default function HeroSection() {
 const slides = [
  {
    title: "Kaay Nduggu",
    text: "Des produits agricoles de qualité pour une alimentation saine",
    image: Orange,
    bg: BgHero,
    button: "Découvrir",
    buttonStyle:
      "bg-[#fff2d1] text-[#88c74a] border-2 border-[#88c74a] hover:bg-[#88c74a] hover:text-white rounded-2xl h-10 flex texte-3xl font-semibold items-center justify-center",
  },
  {
    title: " Légumes Frais",
    text: "Savourez nos légumes frais et croquants",
    image: Slide2,
    bg: bgslide2,
    button: "Découvrir",
    buttonStyle:
      "bg-[#f7efd8] text-[#88c74a] border-2 border-[#88c74a] hover:bg-[#88c74a] hover:text-white rounded-2xl  h-10 flex texte-xl font-semibold items-center justify-center",
  },

];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center  min-h-[30vh] sm:min-h-[40vh] md:min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center container mx-auto px-4"
      style={{ backgroundImage: `url(${slides[index].bg})` }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 w-full items-center"
        >
          {/* TEXTE */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:pl-20  ">

            <h1 className="text-4xl md:text-6xl font-bold text-[#88c74a]">
              {slides[index].title}
            </h1>

            <p className="text-lg mt-5 max-w-lg">
              {slides[index].text}
            </p>
           
            <a href="/shop" className="mt-6">
              <Button
               className={`px-6 py-3 rounded-xl transition-all duration-300 ${slides[index].buttonStyle}`}
               text={slides[index].button}
              />
           </a>

           
          </div>

          {/* IMAGE */}
          <div className="hidden md:flex justify-center">
            <img
              src={slides[index].image}
              alt={slides[index].title}
              className="w-64 md:w-96 object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* INDICATEURS */}
      <div className="absolute bottom-6 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#88c74a]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}