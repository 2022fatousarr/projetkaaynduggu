
import BgVideo from "../assets/bg-video.jpg";
import About1 from "../assets/about1.png";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import team1 from "../assets/team1.jpg";
import team4 from "../assets/team4.jpg";
import team3 from "../assets/team3.jpg";


import type { imageProps1 } from "../components/parties/type";


const images: imageProps1[] = [
  { id:'1', src: team1 , alt: 'Team Member 1', name: 'John Doe', description: 'Qualité des produits' },
  { id:'2', src: team3 , alt: 'Team Member 3', name: 'Jane Smith', description: 'Logistique'},
  { id:'3', src: team4 , alt: 'Team Member 2', name: 'Jane Smith', description: 'Livraison' },
  { id:'4', src: team3 , alt: 'Team Member 3', name: 'Mike Johnson', description: 'Service client' },
]




function AboutPage() {
  return (
    <div>
        <section>
     

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 md:px-10 py-10 md:py-16 items-center">

  {/* TEXTE */}
  <div className="space-y-4 text-center md:text-left">
    
    <h1 className="text-2xl md:text-4xl font-bold">
      À propos de Kaay Nduggu
    </h1>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Kaay Nduggu est une plateforme dédiée à la vente de fruits et légumes frais de qualité. Notre mission est de faciliter l'accès à des produits soigneusement sélectionnés, tout en garantissant fraîcheur, fiabilité et satisfaction à nos clients.
    </p> 
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
     Nous collaborons avec des fournisseurs de confiance afin d'offrir des produits sains à des prix accessibles. Grâce à un service simple, rapide et professionnel, nous accompagnons les particuliers et les entreprises dans leurs besoins quotidiens en produits frais.
    </p>

  </div>

  {/* IMAGE */}
  <div className="flex justify-center">
    
    <img
      src={BgVideo}
      alt="About Us"
      className="w-full max-w-md md:max-w-full rounded-xl object-cover"
    />

  </div>

</div>


        {/* <div className="bg-[#f5f6fa] ">
        <h1 className="text-3xl font-bold flex justify-center items-center py-8 ">Pourquoi nous choisir ?</h1>
        <div className="container mx-auto py-6 px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="container mx-auto py-16 px-4 lg:py-16 lg:px-16">
          <img className="hidden  lg:block h-70" src={About1} alt="About Us" />
         </div>
          
          <div className="container mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg ">
            <div className=" flex items-start gap-4">
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
        </div> */}

        <div className="bg-[#f5f6fa] py-10 md:py-16">

  {/* TITRE */}
  <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
    Pourquoi nous choisir ?
  </h1>

  {/* CONTENU */}
  <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* IMAGE */}
    <div className="flex justify-center">
      <img
        className="hidden lg:block w-full max-w-md lg:max-w-lg object-cover rounded-xl"
        src={About1}
        alt="About Us"
      />
    </div>

    {/* CARTES */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* ITEM 1 */}
      <div className="flex items-start gap-4 p-4 rounded-xl shadow-sm">
        <img
          src={Icon1}
          alt="Fraîcheur Garantie"
          className="w-12 h-12"
        />

        <div>
          <h2 className="font-bold mb-2">
            Fraîcheur Garantie
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            La fraîcheur est notre priorité lors de l'approvisionnement de nos produits.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex items-start gap-4  p-4 rounded-xl shadow-sm">
        <img
          src={Icon2}
          alt="Engagement Durable"
          className="w-12 h-12"
        />

        <div>
          <h2 className="font-bold mb-2">
            Engagement Durable
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Nous nous engageons en faveur d'une agriculture durable.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex items-start gap-4 e p-4 rounded-xl shadow-sm">
        <img
          src={Icon3}
          alt="Soutien Local"
          className="w-12 h-12"
        />

        <div>
          <h2 className="font-bold mb-2">
            Soutien Local
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            En faisant vos courses chez nous, vous soutenez l'économie locale.
          </p>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="flex items-start gap-4  p-4 rounded-xl shadow-sm">
        <img
          src={Icon4}
          alt="Confort de Commande"
          className="w-12 h-12"
        />

        <div>
          <h2 className="font-bold mb-2">
            Confort de Commande
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Faites vos courses en ligne en toute simplicité.
          </p>
        </div>
      </div>

    </div>

  </div>
</div>

   

        <div className="py-10 md:py-16">

  {/* TITRE */}
  <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
    Notre équipe
  </h1>

  {/* GRID */}
  <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {images.map((image, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      >

        {/* IMAGE */}
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-72 object-cover"
        />

        {/* CONTENU */}
        <div className="p-5 text-center">

          <h3 className="text-xl font-bold mb-2">
            {image.name}
          </h3>

          <p className="text-gray-600 text-sm">
            {image.description}
          </p>

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