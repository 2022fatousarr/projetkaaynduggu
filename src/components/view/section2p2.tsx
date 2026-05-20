import Banner1s2 from "../../assets/banner1s2.jpg";
import Banner2s2 from "../../assets/banner2s2.jpg";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";

function Section2p2() {
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* CARD 1 */}
      <div className="relative group overflow-hidden  shadow-lg cursor-pointer">
        <img
          src={Banner1s2}
          alt="Grapes"
          className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

        {/* contenu */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <img src={Banner1} alt="grapes" className="w-28 md:w-36" />

          <p className="text-white font-bold text-lg md:text-xl text-right">
            Raisins <br /> 100% Naturel
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative group overflow-hidden  shadow-lg cursor-pointer">
        <img
          src={Banner2s2}
          alt="Apple"
          className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

        {/* contenu */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <img src={Banner2} alt="apple" className="w-28 md:w-36" />

          <p className="text-white font-bold text-lg md:text-xl text-right">
            Pommes fraîches <br /> Jus naturel
          </p>
        </div>
      </div>

    </div>
  );
}

export default Section2p2;