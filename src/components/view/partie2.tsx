import vjr from '../../assets/vjr.png';
import lettue from '../../assets/lettue.jpg';
import fraise from '../../assets/fraise.jpg';
import avocat from '../../assets/avocat.jpg';

import comcombre from '../../assets/comcombre.jpg';
import orange from '../../assets/orange.jpg'
import chili from '../../assets/chili.jpg'

import persil from '../../assets/persil.jpg'
import mangue from '../../assets/mangue.jpg'
import pasteque from '../../assets/pasteque.jpg'

import goyave from '../../assets/goyave.jpg'
import kiwi from '../../assets/kiwi.jpg'
import {Link} from 'react-router-dom'
import type { imageProps } from '../parties/type'
import { useState } from "react";
import { useCart } from "../parties/useCart";


const images: imageProps[] = [
  { id: "25", src: vjr, alt: 'Chocolat',name: 'vjr', price: '500 CFA',  className :" h-45 w-70 object-cover bg-white"},
  { id: "2", src: lettue, alt: 'Lettue', name: 'Lettue', price: '300 CFA' , className :" h-45 w-70  "},
  { id: "15", src: fraise, alt: 'Fraise', name: 'Fraise', price: '400 CFA' , className :" h-45 w-70  "},
  { id: "16", src: avocat, alt: 'Avocat', name: 'Avocat', price: '600 CFA' , className :" h-45 w-70  "},
  { id: "5", src: comcombre, alt: 'Comcombre', name: 'Comcombre', price: '200 CFA' , className :" h-45 w-70  "},
  { id: "13", src: orange, alt: 'Orange', name: 'Orange', price: '1000 CFA', className :" h-45 w-70  " },
  { id: "26", src: chili, alt: 'Chili', name: 'Chili', price: '700 CFA' , className :" h-45 w-70  bg-white"},
  { id: "32", src: persil, alt: 'Persil', name: 'Persil', price: '150 CFA', className :" h-45 w-70  bg-white" },
  { id: "14", src: mangue, alt: 'Mangue', name: 'Mangue', price: '250 CFA' , className :" h-45 w-70  bg-white"},
  { id: "20", src: pasteque, alt: 'Pasteque', name: 'Pasteque', price: '1000 CFA', className :" h-45 w-70  bg-white"},
  { id: "23", src: goyave, alt: 'Goyave', name: 'Goyave', price: '800 CFA', className :" h-45 w-70  bg-white" },
  { id: "17", src: kiwi, alt: 'Kiwi', name: 'Kiwi', price: '450 CFA', className :" h-45 w-70  bg-white" },

]


export default function Partie2() {
   const [activeId, setActiveId] = useState<string | null>(null);
    const { addToCart } = useCart();

  return (
    <div className="bg-gray-50 py-10 ">
    <h1 className="text-3xl font-bold text-center mb-10 text-gray-800"> Produit vedette</h1>
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "> 
      {images.map((image: imageProps) => (
        <Link key={image.id} to={`/produit/${image.id}`}>
        <div
          onMouseEnter={() => setActiveId(image.id)}
          onMouseLeave={() => setActiveId(null)}
          onTouchStart={() => setActiveId(image.id)}
          onTouchEnd={() => setActiveId(null)}
          className={`rounded-2xl  hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer ${
            activeId === image.id ? "bg-white shadow-lg" : ""
          }`}>
          <img src={image.src} alt={image.alt}  className='h-45  w-70 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer' />
          <div className="p-3 text-center space-y-2">
          <p className='text-[#88c74a] font-semibold text-lg'>{image.name}</p>
          <p className="text-gray-600 text-sm">{image.price}</p>
          {activeId === image.id && (

           <button
    onClick={(e) => {
      e.preventDefault(); //  empêche le Link de naviguer
      addToCart({
        id: image.id,
        nom: image.name ?? "Produit",
        prix: parseInt(image.price ?? "0", 10),
        image: image.src,
      });
    }}
    className="
      bg-[#88c74a] text-white
      text-xs md:text-sm
      px-3 py-1 md:px-4 md:py-2
      rounded-lg
      hover:bg-[#6da63c]
      transition
      w-full
    "
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


