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



const images: imageProps[] = [
  { id: "25", src: vjr, alt: 'Vjr', name: 'Vjr', price: '500 CFA', className :" h-45 w-70  bg-white"},
  { id: "26", src: chili, alt: 'Chili', name: 'Chili', price: '300 CFA', className :" h-45 w-70  bg-white" },
  { id: "27", src: gingembre, alt: 'Gingembre', name: 'Gingembre', price: '400 CFA', className :" h-45 w-70  bg-white" },
  { id: "28", src: piment, alt: 'Piment', name: 'Piment', price: '600 CFA', className :" h-45 w-70  bg-white" },
  { id: "29", src: ail, alt: 'Ail', name: 'Ail', price: '200 CFA', className :" h-45 w-70  bg-white" },
  { id: "30", src: oignovert, alt: 'Oigno-vert', name: 'Oigno-vert', price: '1000 CFA', className :" h-45 w-70  bg-white" },
  { id: "31", src: laurier, alt: 'Laurier', name: 'Laurier', price: '700 CFA', className :" h-45 w-70  bg-white" },
  { id: "32", src: persil, alt: 'Persil', name: 'Persil', price: '150 CFA', className :" h-45 w-70  bg-white" },
  { id: "33", src: poivrenoir, alt: 'Poivre noir', name: 'Poivre noir', price: '250 CFA', className :" h-45 w-70  bg-white" },
  { id: "34", src: pimentséché, alt: 'Piment séché', name: 'Piment séché', price: '350 CFA', className :" h-45 w-70  bg-white" },

]

export default function Condiments() {
  return (
    <div>
<h1 className="text-3xl font-bold text-center mb-8"> Condiments</h1>
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 ">
      {images.map((image, index) => (
       <Link key={index} to={`/produit/${image.id}`}>
        <div >
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


