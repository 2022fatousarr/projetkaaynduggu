import jus1 from '../../assets/jus1.png';
import jus2 from '../../assets/jus2.png';
import jus3 from '../../assets/jus3.png';
import jus4 from '../../assets/jus4.jpg';
import pfruits from '../../assets/pfruits.jpg';
import plegumes from '../../assets/plegumes.jpg';
import premium1 from '../../assets/premium1.jpg';


import type { imageProps } from '../parties/type'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../parties/useCart';
import { ShoppingCart, Eye } from 'lucide-react';
import { toast } from 'sonner';

const images1: imageProps[] = [
  { id: "39", src: pfruits, alt: 'pfruits', name: 'Panier fruit', price: 10000 },
  { id: "40", src: plegumes, alt: 'Plegume', name: 'Panier legume ', price: 10000 },
  { id: "41", src: premium1, alt: 'Premium1', name: 'Panier Premium', price: 10000},
]

const images: imageProps[] = [
  { id: "35", src: jus1, alt: 'Jus1', name: 'Pastèque et Gingembre Jus', price: 1000  },
  { id: "36", src: jus2, alt: 'Jus2', name: 'Tropical ', price: 1000  },
  { id: "37", src: jus3, alt: 'Jus3', name: 'Jus d\'orange', price: 1000 },
  { id: "38", src: jus4, alt: 'Jus4', name: 'Jus de fruits mixte', price: 1000 , },

]

export default function Partie2() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { addToCart } = useCart();
  

  return (
    <div className="bg-gray-50 py-10">

      {/* 🔥 SECTION 1 : catégories */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

        {images1.map((image, index) => (
          <Link key={index} to={`/produit/${image.id}`}>
            <div className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-50 object-contain"
              />
              <div className="p-3 text-center">
                <p className="text-[#88c74a] font-semibold text-lg">
                  {image.name}
                </p>
              </div>
            </div>
          </Link>
        ))}

      </div>

      {/* 🔥 SECTION 2 : titre */}
      <div className="container mx-auto mb-4 px-2">
        <h1 className="text-3xl font-semibold text-gray-800">
          Jus Naturels
        </h1>
        <div className="relative mt-2">
          <div className="border-b border-green-200 w-full"></div>
          <div className="border-b-2 border-[#88c74a] w-20"></div>
        </div>
      </div>

      {/* 🔥 SECTION 3 : produits */}
      <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveId(image.id)}
            onMouseLeave={() => setActiveId(null)}
            onTouchStart={() => setActiveId(image.id)}
            onTouchEnd={() => setActiveId(null)}
            className={`bg-white rounded-2xl hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer ${
              activeId === image.id ? 'bg-white shadow-lg' : ''
            }`}
          >
            <Link to={`/produit/${image.id}`} className="block">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 object-contain transition-transform duration-300 hover:scale-105"
              />
              <div className="p-3 text-center space-y-1">
                <p className="text-[#88c74a] font-semibold text-lg">
                  {image.name}
                </p>
                <p className="text-gray-600 text-sm">{image.price}</p>
              </div>
            </Link>

            {activeId === image.id && (
              <div className="p-3 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    addToCart({
                      id: image.id,
                    nom: image.name ,
                    prix: image.price ,
                    image: image.src,
                    description: '',
                    stock: 100,
                    unite: 'L',
                    quantity: 1,
                    });
                    toast.success(`${image.name} ajouté au panier!`);
                  }}
                  className="bg-[#88c74a] text-white p-3 rounded-full hover:bg-black transition"
                >
                  <ShoppingCart size={20} />
                </button>
                <Link
                  to={`/produit/${image.id}`}
                  className="bg-[#88c74a] text-white p-3 rounded-full hover:bg-black transition"
                >
                  <Eye size={20} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

