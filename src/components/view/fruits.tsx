import orange from '../../assets/orange.jpg';
import mangue from '../../assets/Mangue.jpg';
import fraise from '../../assets/fraise.jpg';
import avocat from '../../assets/avocat.jpg';

import kiwi from '../../assets/kiwi.jpg';
import pomme from '../../assets/pomme.avif'
import banane from '../../assets/banane.jpg'

import pasteque from '../../assets/pasteque.jpg'
import poire from '../../assets/poire.jpg'
import orange1 from '../../assets/orange1.jpg'

import goyave from '../../assets/goyave.jpg'
import ananas from '../../assets/ananas.jpg'
import type { imageProps } from '../parties/type'
import { Link } from 'react-router-dom';
import { useCart } from '../parties/useCart';
import { useState } from 'react';



const images: imageProps[] = [
  { id:'13', src: orange, alt: 'Orange', name: 'Orange', price: '350 CFA', className: " h-45 w-70  bg-white", },
  { id:'14', src: mangue, alt: 'Mangue', name: 'Mangue', price: '250 CFA' , className :" h-45 w-70  bg-white"},
  { id:'15', src: fraise, alt: 'Fraise', name: 'Fraise', price: '400 CFA' },
  { id:'16', src: avocat, alt: 'Avocat', name: 'Avocat', price: '600 CFA' },
  { id:'17', src: kiwi, alt: 'Kiwi', name: 'Kiwi', price: '450 CFA', className :" h-45 w-70  bg-white" },
  { id:'18', src: pomme, alt: 'Pomme', name: 'Pomme', price: '1000 CFA', className :" h-45 w-70  bg-white" },
  { id:'19', src: banane, alt: 'Banane', name: 'Banane', price: '700 CFA', className :" h-45 w-70  bg-white" },
  { id:'20', src: pasteque, alt: 'Pasteque', name: 'Pasteque', price: '1000 CFA', className :" h-45 w-70  bg-white"},
  { id:'21', src: poire, alt: 'Poire', name: 'Poire', price: '250 CFA' , className :" h-45 w-70  bg-white"},
  { id:'22', src: orange1, alt: 'Orange1', name: 'Orange', price: '350 CFA' , className :" h-45 w-70  bg-white"},
  { id:'23', src: goyave, alt: 'Goyave', name: 'Goyave', price: '800 CFA', className :" h-45 w-70  bg-white" },
  { id:'24', src: ananas, alt: 'Ananas', name: 'Ananas', price: '450 CFA', className :" h-45 w-70  bg-white" },

]

export default function Fruits() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { addToCart } = useCart();

  return (
    <div className='container mx-auto py-10 bg-gray-50'>
    <h1 className="text-3xl font-bold text-center mb-8"> Fruits</h1>
    <div className="container mx-auto py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <Link key={index} to={`/produit/${image.id}`}>

        <div onMouseEnter={() => setActiveId(image.id)}
         onMouseLeave={() => setActiveId(null)}
          onTouchStart={() => setActiveId(image.id)}
          onTouchEnd={() => setActiveId(null)}
           className={`bg-white rounded-2xl hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer ${
            activeId === image.id ? 'bg-white shadow-lg' : ''
          }`}>  
          <img src={image.src} alt={image.alt}  className="w-full h-40 object-contain transition-transform duration-300 hover:scale-105"/>
          <div className="p-3 text-center space-y-1">
          <p className='text-[#88c74a]  font-semibold text-lg'>{image.name}</p>
          <p className="text-gray-600 text-sm">{image.price}</p>
        {activeId === image.id && (
          <button onClick={(e) => {
            e.preventDefault();
            addToCart({
              id:image.id,
              nom: image.name ?? 'Produit',
              prix: parseInt(image.price ?? '0', 10),
              image: image.src,
              description: '',
              stock: 100,
              unite: 'kg',
            });
          }}
          className='bg-[#88c74a] text-white text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-[#88c7a] w-full '> Ajouter au panier</button>
        )}
         </div>
        </div>
        </Link>

      ))}
    </div>
    </div>
  )
}


