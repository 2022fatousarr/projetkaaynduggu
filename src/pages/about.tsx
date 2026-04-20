
import BgVideo from "../assets/bg-video.jpg";
import About1 from "../assets/about1.png";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import team1 from "../assets/team1.jpg";
import team4 from "../assets/team4.jpg";
import team3 from "../assets/team3.jpg";


import type { imageProps } from "../components/parties/type";


const images: imageProps[] = [
  { id:'1', src: team1 , alt: 'Team Member 1', name: 'John Doe', price: 'CEO'},
  { id:'2', src: team3 , alt: 'Team Member 3', name: 'Jane Smith', price: 'CTO'},
  { id:'3', src: team4 , alt: 'Team Member 2', name: 'Jane Smith', price: 'CTO'},
  { id:'4', src: team3 , alt: 'Team Member 3', name: 'Mike Johnson', price: 'CFO'},

]




function AboutPage() {
  return (
    <div>
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10  container mx-auto py-16  gap-6">
        <div className="container mx-auto py-16 grid grid-rows-2 px-16">
        <h1 className="text-3xl font-bold mb-1">About Us</h1>
        <p className="text-gray-600 mb-2">Tyna Giang’s integrated agro-forestry farming model is the first project in Vietnam to achieve the highest ranking in the “100 projects to combat climate change” by the Ministry of Environment, Energy and Sea. France organized in 2016 …</p>
        <p className="text-gray-600">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
        </div>
          <div className="container mx-auto px-16 py-16">
               <img src={BgVideo} alt="About Us" />
          </div>
        </div>


        <div className="bg-[#f5f6fa] ">
        <h1 className="text-3xl font-bold flex justify-center items-center py-8 ">Pourquoi nous choisir ?</h1>
        <div className="container mx-auto pyt-6 px-26 grid grid-cols-2 gap-2">
         <div className="container mx-auto py-16 px-26">
          <img className="h-70" src={About1} alt="About Us" />
         </div>
          
          <div className="container mx-auto py-16 px-6 grid grid-cols-2 gap-2">
            <div className="flex items-start gap-4">
            <img src={Icon1} alt="Why Choose Us"/>
            <div>
            <h2 className=" font-bold mb-1">Fraîcheur Garantie</h2>
            <p className="text-gray-600 mb-2 ">La fraîcheur est notre priorité lors de l'approvisionnement de nos produits.</p>
            </div>
            </div>

             <div className="flex items-start gap-4">
            <img src={Icon2} alt="Why Choose Us"/>
            <div>
            <h2 className=" font-bold mb-1">Engagement Durable</h2>
            <p className="text-gray-600 mb-2">Nous nous engageons en faveur d'une agriculture durable.</p>
            </div>
            </div>

            <div className="flex items-start gap-4">
            <img src={Icon3} alt="Why Choose Us"/>
            <div>
            <h2 className=" font-bold mb-1">Soutien Local</h2>
            <p className="text-gray-600 mb-2">En faisant vos courses chez nous, vous soutenez l'économie locale.</p>
            </div>
            </div>

            <div className="flex items-start gap-4">
            <img src={Icon4} alt="Why Choose Us"/>
            <div>
          <h2 className=" font-bold mb-1">Confort de Commande</h2>
            <p className="text-gray-600 mb-2">Faites vos courses en ligne en toute simplicité.</p>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div>
        <h1 className="text-3xl font-bold flex justify-center items-center py-8 ">Meet Our Team</h1>
        <div className="container mx-auto py-16 px-26 grid grid-cols-1 md:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg ">
              <img src={image.src} alt={image.alt} className="w-full  object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{image.name}</h3>
                <p className="text-gray-600">{image.price}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        </section>
    </div>
  )
}

export default AboutPage;