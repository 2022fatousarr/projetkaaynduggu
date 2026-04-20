
import Blog1 from '../assets/blog1.jpg'
import Blog2 from '../assets/blog2.jpg'
import Blog3 from '../assets/blog3.jpg'
import Blog4 from '../assets/blog4.jpg'
import Blog5 from '../assets/blog5.jpg'
import Blog6 from '../assets/blog6.jpg'




function BlogPage() {
  return (
    

    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

      <div>
        <img src={Blog1} alt="Blog 1" className="w-full  rounded-lg mb-4" />
        <button className="text-xl font-bold mb-2 bg-[#88c74a] text-white py-2 px-4 rounded">Healthy</button>
        <p className="text-gray-600">Découvrez les nombreux avantages pour la santé de consommer des fruits frais régulièrement.</p>
      </div>
      
      <div>
        <img src={Blog2} alt="Blog 2" className="w-full  rounded-lg mb-4" />
        <button className="text-xl font-bold mb-2 bg-[#88c74a] text-white py-2 px-4 rounded">Recettes</button>
        <p className="text-gray-600">Découvrez des recettes délicieuses et faciles à préparer à base de fruits frais pour égayer vos repas.</p>
      </div>

      <div>
        <img src={Blog3} alt="Blog 3" className="w-full  rounded-lg mb-4" />
        <button className="text-xl font-bold mb-2 bg-[#88c74a] text-white py-2 px-4 rounded">Saison</button>
        <p className="text-gray-600">Découvrez les fruits de saison et leurs bienfaits pour une alimentation saine et équilibrée.</p>
      </div>

      <div>
        <img src={Blog4} alt="Blog 4" className="w-full  rounded-lg mb-4" />
        <button className="text-xl font-bold mb-2 bg-[#88c74a] text-white py-2 px-4 rounded">Nutrition</button>
        <p className="text-gray-600">Découvrez les valeurs nutritionnelles des fruits et comment les intégrer dans votre alimentation quotidienne.</p>
      </div>

      <div>
        <img src={Blog5} alt="Blog 5" className="w-full  rounded-lg mb-4" />
        <button className="text-xl font-bold mb-2 bg-[#88c74a] text-white py-2 px-4 rounded">Bien-être</button>
        <p className="text-gray-600">Découvrez comment les fruits peuvent contribuer à votre bien-être mental et émotionnel.</p>
      </div>

      <div>
        <img src={Blog6} alt="Blog 6" className="w-full  rounded-lg mb-4" />
        <button className="text-xl font-bold mb-2 bg-[#88c74a] text-white py-2 px-4 rounded">Environnement</button>
        <p className="text-gray-600">Découvrez l'impact environnemental de la production de fruits et comment faire des choix durables.</p>
      </div>

    </div>
  )
}

export default BlogPage;