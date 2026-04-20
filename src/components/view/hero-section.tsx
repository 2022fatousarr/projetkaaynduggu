import BgHero from "../../assets/bg-hero.jpg";
import Button from "../parties/boutton";
import Orange from "../../assets/orange.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[30vh] sm:min-h-[40vh] md:min-h-[60vh]  lg:min-h-[70vh] bg-center  bg-no-repeat bg-cover container mx-auto px-4"
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <div className="grid md:grid-cols-2  grid-cols-1 gap-6 w-full items-center">

        {/* TEXTE */}
        <div className=" flex  flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-10">
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#88c74a]">
             Kaay Nduggu
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-lg font-semibold text-black mt-6">
            Des produits agricoles de qualité, directement du producteur à votre table.
            Fraîcheur, confiance et durabilité.
          </motion.p>

          <a href="/shop" className="w-full md:w-auto">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
             className="
              w-full sm:w-auto md:mx-0 text-[10px] sm:text-xs md:text-base px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2  bg-[#fff2d1] text-[#88c74a]
              border border-[#88c74a]  mt-2 md:mt-6 hover:bg-[#88c74a] hover:text-white  rounded-x text-center rounded-2xl " text="Acheter maintenant "/>
              </motion.div>
          </a>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img 
            src={Orange} 
            alt="Orange" 
            className="w-40 md:w-64 lg:w-80 object-contain"
          />
        </div>

      </div>
    </section>
  );
}