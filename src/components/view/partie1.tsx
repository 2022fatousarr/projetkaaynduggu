import Bannerbleu from "../../assets/bannerbleu.jpg"
import bannerbleu3 from "../../assets/bannerbleu3.png"
import Bannerrose from "../../assets/bannerrose.jpg"
import bannerrose2 from "../../assets/bannerrose2.png"
import Bannervert from "../../assets/bannervert.jpg"
import coco from "../../assets/coco.png"




function Partie1() {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      <div className="relative mb-8">
        <img src={Bannervert} alt="Banner vert" className="w-full h-64 object-cover rounded-lg  "/>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center">
           <img src={coco} alt="Coco" className="absolute top-0 left-2 w-80 h-65 " />
           <p className="absolute text-black font-bold right-12">Coco <br />100% Natural <br />Fruit Juice </p>
          </div>
      </div>

      <div className="relative mb-8">
        <img src={Bannerrose} alt="Banner rose" className="w-full h-64 object-cover rounded-lg " />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center">
        <img src={bannerrose2} alt="Banner rose 2" className="absolute top-2 left-2" />
        <p className="absolute text-black font-bold right-12">Apple<br />100% Natural <br />Fruit Juice </p>
        </div>
      </div>

      <div className="relative">
      <img src={Bannerbleu} alt="Banner bleu" className="w-full h-64 object-cover rounded-lg " />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center">
      <img src={bannerbleu3} alt="Banner bleu 3" className="absolute top-2 left-2" />
      <p className="absolute text-black font-bold right-12">Milk<br />100% Natural <br />Fruit Juice </p>
        </div>
    </div>  
      
    </div>
  )
}

export default Partie1
