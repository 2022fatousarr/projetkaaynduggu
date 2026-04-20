import Banner1s2 from "../../assets/banner1s2.jpg";
import Banner2s2 from "../../assets/banner2s2.jpg";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";

function Section2p2() {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="relative mb-8">
        <img
          src={Banner1s2}
          alt="Banner "
          className="w-full h-64 object-cover rounded-lg  "
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center">
          <img src={Banner1} alt="Banner " className="absolute top-2 left-2" />
        <p className="absolute text-black font-bold right-40">
            Grapes <br />
            100% Natural <br />
            Fruit Juice{" "}
          </p>
          
        </div>
      </div>

      <div className="relative mb-8 ">
        <img
          src={Banner2s2}
          alt="Banner "
          className="w-full h-64 object-cover rounded-lg "
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ">
        <img src={Banner2} alt="Banner " className="absolute top-4 left-4" />
          <p className="absolute text-black font-bold right-40">
            Apple
            <br />
            100% Natural <br />
            Fruit Juice{" "}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Section2p2;
