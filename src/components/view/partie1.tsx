import Bannerbleu from "../../assets/bannerbleu.jpg";
import epices from "../../assets/epices.png";
import Bannerrose from "../../assets/bannerrose.jpg";
import legumes from "../../assets/legumes.png";
import Bannervert from "../../assets/bannervert.jpg";
import fruits from "../../assets/fruits.png";
import { Link } from "react-router-dom";

function Partie1() {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <Link to="/shop">
        <div className="relative group overflow-hidden shadow-lg cursor-pointer">
          <img
            src={Bannervert}
            alt="Fruits"
            className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <img src={fruits} alt="fruits" className="w-36 md:w-56" />

            <p className="text-white font-bold text-lg md:text-xl text-right">
              Fruits frais <br /> 100% Naturel
            </p>
          </div>
        </div>
      </Link>

      {/* CARD 2 */}
      <Link to="/legumes">
        <div className="relative group overflow-hidden shadow-lg cursor-pointer">
          <img
            src={Bannerrose}
            alt="Légumes"
            className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <img src={legumes} alt="legumes" className="w-30 md:w-50" />

            <p className="text-white font-bold text-lg md:text-xl text-right">
              Légumes bio <br /> Frais du jour
            </p>
          </div>
        </div>
      </Link>

      {/* CARD 3 */}
      <Link to="/condiments">
        <div className="relative group overflow-hidden shadow-lg cursor-pointer">
          <img
            src={Bannerbleu}
            alt="Epices"
            className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <img src={epices} alt="epices" className="w-36 md:w-56" />

            <p className="text-white font-bold text-lg md:text-xl text-right">
              Épices naturelles <br /> Saveurs locales
            </p>
          </div>
        </div>
      </Link>

    </div>
  );
}

export default Partie1;