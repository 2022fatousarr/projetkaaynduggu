import manioc from '../../assets/manioc.jpg';
import lettue from '../../assets/lettue.jpg';
import nadio from '../../assets/nadio.jpg';
import tomate from '../../assets/tomate.jpg';

import comcombre from '../../assets/comcombre.jpg';
import aubergine from '../../assets/aubergine.jpg'
import chou from '../../assets/chou.jpg'

import pommedeterre from '../../assets/pommedeterre.jpg'
import navet from '../../assets/navet.jpg'
import gombo from '../../assets/gombo.jpg'

import oigno from '../../assets/oigno.jpg'
import betterave from '../../assets/betterave.jpg'
import {Link} from 'react-router-dom'
import type { imageProps } from '../parties/type'
import { useState } from 'react';
import { useCart } from '../parties/useCart';
import { ShoppingCart, Eye } from "lucide-react";
import { toast } from 'sonner';


const images: imageProps[] = [
  { id: "1", src: manioc, alt: 'Manioc',name: 'Manioc', price: 200  , className :" h-45 w-70 object-cover bg-white"},
  { id: "2", src: lettue, alt: 'Lettuce', name: 'Lettuce', price: 500 , className :" h-45 w-70  "},
  { id: "3", src: nadio, alt: 'Nadio', name: 'Nadio', price: 200, className :" h-45 w-70  bg-white" },
  { id: "4", src: tomate, alt: 'Tomate', name: 'Tomate', price: 300, className :" h-45 w-70  bg-white" },
  { id: "5", src: comcombre, alt: 'Comcombre', name: 'Comcombre', price: 400, className :" h-45 w-70  bg-white" },
  { id: "6", src: aubergine, alt: 'Aubergine', name: 'Aubergine', price: 200, className :" h-45 w-70  bg-white" },
  { id: "7", src: chou, alt: 'Chou', name: 'Chou', price: 300, className :" h-45 w-70  bg-white" },
  { id: "8", src: pommedeterre, alt: 'Pomme de terre', name: 'Pomme de terre', price: 300, className :" h-45 w-70  bg-white" },
  { id: "9", src: navet, alt: 'Navet', name: 'Navet', price: 200, className :" h-45 w-70  bg-white" },
  { id: "10", src: gombo, alt: 'Gombo', name: 'Gombo', price: 300, className :" h-45 w-70  bg-white" },
  { id: "11", src: oigno, alt: 'Oignon', name: 'Oignon', price: 300, className :" h-45 w-70  bg-white" },
  { id: "12", src: betterave, alt: 'Betterave', name: 'Betterave', price: 400, className :" h-45 w-70  bg-white" },

]

export default function Legumes() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { addToCart } = useCart();

  return (
    <div className='container mx-auto py-10 bg-gray-50'>
    <h1 className="text-3xl font-bold text-center mb-8"> Légumes</h1>
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
              <p className="text-gray-600 text-sm">{image.price} CFA</p>
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


