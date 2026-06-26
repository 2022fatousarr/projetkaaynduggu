import vjr from '../../assets/vjr.png';
import chili from '../../assets/chili.jpg';
import gingembre from '../../assets/gingembre.jpg';
import piment from '../../assets/piment.jpg';

import ail from '../../assets/ail.jpg';
import oignovert from '../../assets/oignovert.jpg'
import laurier from '../../assets/laurier.jpg'

import persil from '../../assets/persil.jpg'
import poivrenoir from '../../assets/poivrenoir.jpg'
import pimentséché from '../../assets/pimentséché.jpg'

import type { imageProps } from '../parties/type'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useCart } from '../parties/useCart';
import { ShoppingCart, Eye } from "lucide-react";
import { toast } from 'sonner';



const images: imageProps[] = [
  { id: "25", src: vjr, alt: 'Vjr', name: 'Vjr', price: 500, className :" h-45 w-70  bg-white"},
  { id: "26", src: chili, alt: 'Chili', name: 'Chili', price: 300, className :" h-45 w-70  bg-white" },
  { id: "27", src: gingembre, alt: 'Gingembre', name: 'Gingembre', price: 400, className :" h-45 w-70  bg-white" },
  { id: "28", src: piment, alt: 'Piment', name: 'Piment', price: 600, className :" h-45 w-70  bg-white" },
  { id: "29", src: ail, alt: 'Ail', name: 'Ail', price: 200, className :" h-45 w-70  bg-white" },
  { id: "30", src: oignovert, alt: 'Oigno-vert', name: 'Oigno-vert', price: 1000, className :" h-45 w-70  bg-white" },
  { id: "31", src: laurier, alt: 'Laurier', name: 'Laurier', price: 700, className :" h-45 w-70  bg-white" },
  { id: "32", src: persil, alt: 'Persil', name: 'Persil', price: 150, className :" h-45 w-70  bg-white" },
  { id: "33", src: poivrenoir, alt: 'Poivre noir', name: 'Poivre noir', price: 250, className :" h-45 w-70  bg-white" },
  { id: "34", src: pimentséché, alt: 'Piment séché', name: 'Piment séché', price: 350, className :" h-45 w-70  bg-white" },

]

export default function Condiments() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { addToCart } = useCart();

  return (
    <div className='container mx-auto py-10 bg-gray-50'>
      <h1 className="text-3xl font-bold text-center mb-8">Condiments</h1>
      <div className="container mx-auto py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <p className='text-[#88c74a] font-semibold text-lg'>{image.name}</p>
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
                    unite: 'kg',
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
  )
}


