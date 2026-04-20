import Mangue from '../../assets/Mangue.jpg';
import lettue from '../../assets/lettue.jpg';
import fraise from '../../assets/fraise.jpg';
import avocat from '../../assets/avocat.jpg';

import comcombre from '../../assets/comcombre.jpg';
import vjr from '../../assets/vjr.png'
import manioc from '../../assets/manioc.jpg'

import persil from '../../assets/persil.jpg'
import ail from '../../assets/ail.jpg'
import orange from '../../assets/orange.jpg'

import nadio from '../../assets/nadio.jpg'
import kiwi from '../../assets/kiwi.jpg'
import type { imageProps } from '../parties/type'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../parties/useCart';


const images: imageProps[] = [
  { id: "14", src: Mangue, alt: 'Mangue', name: 'Mangue', price: '250 CFA' , className :" h-45 w-70  bg-white"},
  { id: "2", src: lettue, alt: 'Lettue', name: 'Lettue', price: '300 CFA' , className :" h-45 w-70  "},
  { id: "15", src: fraise, alt: 'Fraise', name: 'Fraise', price: '400 CFA', className :" h-45 w-70  "},
  { id: "16", src: avocat, alt: 'Avocat', name: 'Avocat', price: '600 CFA', className :" h-45 w-70  " },
  { id: "5", src: comcombre, alt: 'Comcombre', name: 'Comcombre', price: '200 CFA' , className :" h-45 w-70  "},
  { id: "25", src: vjr, alt: 'Vjr', name: 'Vjr', price: '1000 CFA' , className :" h-45 w-70  bg-white"},
]

const images2: imageProps[] = [
    { id: "1", src: manioc, alt: 'Manioc', name: 'Manioc', price: '700 CFA', className :" h-45 w-70  bg-white" },
    { id: "32", src: persil, alt: 'Persil', name: 'Persil', price: '150 CFA', className :" h-45 w-70  bg-white" },
    { id: "29", src: ail, alt: 'Ail', name: 'Ail', price: '250 CFA' , className :" h-45 w-70  bg-white"},
    { id: "13", src: orange, alt: 'Orange', name: 'Orange', price: '350 CFA' , className :" h-45 w-70  bg-white"},
    { id: "3", src: nadio, alt: 'Nadio', name: 'Nadio', price: '800 CFA', className :" h-45 w-70  " },
    { id: "17", src: kiwi, alt: 'Kiwi', name: 'Kiwi', price: '450 CFA', className :" h-45 w-70  bg-white" },
]

export default function Partie2() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto py-10 bg-gray-50">
    <h1 className="text-3xl font-semibold  text-gray-800"> Produit vedette</h1>
    <div className='relative'>
    <div className="border-b border-green-200 w-full"></div>
    <div className='border-b-2 border-[#88c74a] w-15'></div>
    </div>
    <div className="container mx-auto py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {images.map((image, index) => (
        <Link key={index} to={`/produit/${image.id}`}>
        <div
          onMouseEnter={() => setActiveId(image.id)}
          onMouseLeave={() => setActiveId(null)}
          onTouchStart={() => setActiveId(image.id)}
          onTouchEnd={() => setActiveId(null)}
          className={`bg-white rounded-2xl  hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer ${
            activeId === image.id ? 'bg-white shadow-lg' : ''
          }`}>
          <img src={image.src} alt={image.alt}  className={image.className || 'object-contain transition-transform duration-300 hover:scale-110 cursor-pointer'} />
          <div className="p-3 text-center space-y-1 ">
          <p className='text-[#88c74a] font-semibold text-lg'>{image.name}</p>
          <p className="text-gray-600 text-sm">{image.price}</p>
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
    <div className="container mx-auto py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "> 
     <div className="col-span-full">
         <h1 className='text-4xl font-semibold'>Autres produits</h1>
         <div>
            <div className="border-b border-green-200 w-full"></div>
              <div className='border-b-2 border-[#88c74a] w-15'></div>
              </div>
            </div>
            {images2.map((image, index) => (
                <Link key={index} to={`/produit/${image.id}`}>
                <div
                  onMouseEnter={() => setActiveId(image.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onTouchStart={() => setActiveId(image.id)}
                  onTouchEnd={() => setActiveId(null)}
                  className={`bg-white rounded-2xl  hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer ${
                    activeId === image.id ? 'bg-white shadow-lg' : ''
                  }`}>
                <img src={image.src} alt={image.alt}  className={image.className || ' transition-transform duration-300 hover:scale-110 cursor-pointer'} />
                <div className="p-3 text-center space-y-1">
                <p className='text-[#88c74a] font-semibold text-lg'>{image.name}</p>
                <p className="text-gray-600 text-sm">{image.price}</p>
                {activeId === image.id && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: image.id,
                        nom: image.name ?? 'Produit',
                        prix: parseInt(image.price ?? '0', 10),
                        image: image.src,
                        unite: 'kg',
                        description: image.name ?? 'Produit',
                        stock: 1,
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
  )
}


