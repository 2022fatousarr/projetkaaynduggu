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

const images1: imageProps[] = [
  { id: "39", src: pfruits, alt: 'pfruits', name: 'Panier fruit', price: '10.000 CFA' },
  { id: "40", src: plegumes, alt: 'Plegume', name: 'Panier legume ', price: '10.000 CFA' },
  { id: "41", src: premium1, alt: 'Premium1', name: 'Panier Premium', price: '10.000 CFA'},
]

const images: imageProps[] = [
  { id: "35", src: jus1, alt: 'Jus1', name: 'Pastèque et Gingembre Jus', price: '1000 CFA' },
  { id: "36", src: jus2, alt: 'Jus2', name: 'Tropical ', price: '1000 CFA' },
  { id: "37", src: jus3, alt: 'Jus3', name: 'Jus d\'orange', price: '1000 CFA'},
  { id: "38", src: jus4, alt: 'Jus4', name: 'Jus de fruits mixte', price: '1000 CFA', },

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
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {images.map((image, index) => (
          <Link key={index} to={`/produit/${image.id}`}>
            <div
              onMouseEnter={() => setActiveId(image.id)}
              onMouseLeave={() => setActiveId(null)}
              onTouchStart={() => setActiveId(image.id)}
              onTouchEnd={() => setActiveId(null)}
              className={`bg-white rounded-2xl hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer ${
                activeId === image.id ? 'shadow-lg' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <div className="p-3 text-center space-y-1">
                <p className="text-[#88c74a] font-semibold text-lg">
                  {image.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {image.price}
                </p>

                {activeId === image.id && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: image.id,
                        nom: image.name ?? 'Produit',
                        prix: parseInt(image.price ?? '0', 10),
                        image: image.src,
                        unite: '1',
                        description: image.name ?? 'Produit',
                        stock: 1,
                        quantity: 1,
                      });
                    }}
                    className="bg-[#88c74a] text-white text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-[#6da63c] transition w-full"
                  >
                    Ajouter au panier
                  </button>
                )}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

