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


const images: imageProps[] = [
  { id: "1", src: manioc, alt: 'Manioc',name: 'Manioc', price: '500 CFA' , className :" h-45 w-70 object-cover bg-white"},
  { id: "2", src: lettue, alt: 'Lettuce', name: 'Lettuce', price: '300 CFA' , className :" h-45 w-70  "},
  { id: "3", src: nadio, alt: 'Nadio', name: 'Nadio', price: '400 CFA', className :" h-45 w-70  bg-white" },
  { id: "4", src: tomate, alt: 'Tomate', name: 'Tomate', price: '600 CFA', className :" h-45 w-70  bg-white" },
  { id: "5", src: comcombre, alt: 'Comcombre', name: 'Comcombre', price: '200 CFA', className :" h-45 w-70  bg-white" },
  { id: "6", src: aubergine, alt: 'Aubergine', name: 'Aubergine', price: '1000 CFA', className :" h-45 w-70  bg-white" },
  { id: "7", src: chou, alt: 'Chou', name: 'Chou', price: '700 CFA', className :" h-45 w-70  bg-white" },
  { id: "8", src: pommedeterre, alt: 'Pomme de terre', name: 'Pomme de terre', price: '150 CFA', className :" h-45 w-70  bg-white" },
  { id: "9", src: navet, alt: 'Navet', name: 'Navet', price: '250 CFA', className :" h-45 w-70  bg-white" },
  { id: "10", src: gombo, alt: 'Gombo', name: 'Gombo', price: '350 CFA', className :" h-45 w-70  bg-white" },
  { id: "11", src: oigno, alt: 'Oignon', name: 'Oignon', price: '800 CFA', className :" h-45 w-70  bg-white" },
  { id: "12", src: betterave, alt: 'Betterave', name: 'Betterave', price: '450 CFA', className :" h-45 w-70  bg-white" },

]

export default function Legumes() {
  return (
    <div>
<h1 className="text-3xl font-bold text-center mb-8"> Légumes</h1>
    <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <Link key={index} to={`/produit/${image.id}`}>
        <div>
          <img src={image.src} alt={image.alt}  className={image.className || ' transition-transform duration-300 hover:scale-105 cursor-pointer'} />
          <div className="mt-2 flex flex-col items-center justify-center font-semibold">
          <p className='text-[#88c74a]'>{image.name}</p>
          <p>{image.price}</p>
         </div>
        </div>
        </Link>
        
      ))}
    </div>
    </div>
  )
}


