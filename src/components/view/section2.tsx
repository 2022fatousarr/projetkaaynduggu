import BgSection2 from "../../assets/bg-section2.jpg";
import Button from "../parties/boutton";
import citron from "../../assets/citron.png";
import { useState, useEffect } from "react";

export default function Section2() {
  const [bounce, setBounce] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative items-center justify-center h-[50vh]  bg-center container mx-auto px-9" style={{backgroundImage: `url(${BgSection2})`}}>
      

      <div className="absolute grid grid-cols-2 gap-4 h-full w-full items-center">

          <div className=" flex flex-col   justify-center items-start">
           <p className="  text-5xl font-bold text-black pl-20  ">Deal Of The Week</p>
           <p className="text-xl font-semibold text-black pl-20 pt-10">Découvrez nos offres spéciales cette semaine !</p>
      
              <a href="/shop">
              <Button className="bg-[#ecffeb] text-[#88c74a] w-50 border border-[#88c74a] ml-20 mt-10 hover:bg-[#88c74a] hover:text-white rounded-xl" text="Acheter maintenant" /> 
            </a>

          </div>

          <div>
            <img src={citron} alt="Citron" className={`  ${bounce ? 'animate-bounce' : ''}`}/>
          </div>

        </div>
    </section>
  )
}

