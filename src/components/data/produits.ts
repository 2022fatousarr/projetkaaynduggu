// src/data.js
import type { Produit } from '../parties/type';
import manioc from '../../assets/manioc.jpg';
import lettue from '../../assets/lettue.jpg';
import nadio from '../../assets/nadio.jpg';
import tomate from '../../assets/tomate.jpg';
import comcombre from '../../assets/comcombre.jpg';
import aubergine from '../../assets/aubergine.jpg';
import chou from '../../assets/chou.jpg';
import pommedeterre from '../../assets/pommedeterre.jpg';
import navet from '../../assets/navet.jpg';
import gombo from '../../assets/gombo.jpg';
import oigno from '../../assets/oigno.jpg';
import betterave from '../../assets/betterave.jpg';

import orange from '../../assets/orange.jpg';
import mangue from '../../assets/mangue.jpg';
import fraise from '../../assets/fraise.jpg';
import avocat from '../../assets/avocat.jpg';
import kiwi from '../../assets/kiwi.jpg';
import pasteque from '../../assets/pasteque.jpg';
import pomme from '../../assets/pomme.avif';
import banane from '../../assets/banane.jpg';
import poire from '../../assets/poire.jpg';
import orange1 from '../../assets/orange1.jpg';
import goyave from '../../assets/goyave.jpg';
import ananas from '../../assets/ananas.jpg';

import vjr from '../../assets/vjr.png';
import chili from '../../assets/chili.jpg';
import gingembre from '../../assets/gingembre.jpg';
import piment from '../../assets/piment.jpg';
import ail from '../../assets/ail.jpg';
import oignonvert from '../../assets/oignovert.jpg';
import laurier from '../../assets/laurier.jpg';
import persil from '../../assets/persil.jpg';
import poivrenoir from '../../assets/poivrenoir.jpg';
import pimentséché from '../../assets/pimentséché.jpg';


export const produits: Produit[] = [
  {
    id: "1",
    nom: "Manioc",
    prix: 100,
    unite: "kg",
    image: manioc,
    description: "Croquant, juteux.",
    stock: 15
  },

    {
    id: "2",
    nom: "Lettue",
    prix: 150,
    unite: "kg",
    image: lettue,
    description: "Croquant, juteux.",
    stock: 10
  },

  {
    id: "3",
    nom: "Nadio",
    prix: 200,
    unite: "L",
    image: nadio,
    description: "Fraîche et nutritive.",
    stock: 5

  },

  {

    id: "4",
    nom: "Tomate",
    prix: 80,
    unite: "kg",
    image: tomate,
    description: "Douce .",
    stock: 20
  },
  
  {
    id: "5",
    nom: "Comcombre",
    prix: 80,   
    unite: "kg",
    image: comcombre,
    description: "Croquant et rafraîchissant.",
    stock: 15
  },

  {
    id: "6",
    nom: "Aubergine",
    prix: 50,
    unite: "kg",
    image: aubergine,
    description: "Croustillant et rafraîchissant.",
    stock: 25

  },

  {
    id: "7",
    nom: "Chou",
    prix: 120,
    unite: "kg",
    image: chou,
    description: "Croquant et nutritif.",
    stock: 30
},

{
    id: "8",
    nom: "Pomme de terre",
    prix: 60, 
    unite: "kg",
    image: pommedeterre,
    description: "Riche en amidon et polyvalente.",
    stock: 40
},

{
    id: "9",
    nom: "Navet",
    prix: 90,
    unite: "kg",
    image: navet,
    description: "Légume-racine croquant et légèrement sucré.",
    stock: 20
},

{
    id: "10", 
    nom: "Gombo",
    prix: 70,
    unite: "kg",
    image: gombo,
    description: "Légume gélatineux utilisé dans les plats mijotés.",
    stock: 15
},

{
    id: "11",
    nom: "Oignon",
    prix: 40,
    unite: "kg",
    image: oigno,
    description: "Légume aromatique utilisé dans de nombreux plats.",
    stock: 20
},

{
    id: "12",
    nom: "Betterave",
    prix: 110,
    unite: "kg",
    image: betterave,
    description: "Légume racine riche en nutriments.",
    stock: 15
},

{
    id: "13",
    nom: "orange",
    prix: 200,
    unite: "kg",
    image: orange,
    description: "Fruit riche en vitamine C.",
    stock: 25
},

{
    id: "14",
    nom: "mangue",
    prix: 300,
    unite: "kg",
    image: mangue,
    description: "Fruit exotique sucré.",
    stock: 20
},

{
    id: "15",
    nom: "fraise",
    prix: 250,
    unite: "kg",
    image: fraise,
    description: "Fruit riche en vitamine C.",
    stock: 25
},

{
    id: "16",
    nom: "avocat",
    prix: 400,
    unite: "kg",
    image: avocat,
    description: "Fruit riche en lipides sains.",
    stock: 20
},

{
    id: "17",
    nom: "Kiwi",
    prix: 350,
    unite: "kg",
    image: kiwi,
    description: "Fruit riche en vitamine C.",
    stock: 25
},

{
    id: "18",
    nom: "Pomme",
    prix: 150,
    unite: "kg",
    image: pomme,
    description: "Fruit riche en eau et en vitamine C.",
    stock: 20
},

{
    id: "19",
    nom: "Banane",
    prix: 500,
    unite: "kg",
    image: banane,
    description: "Fruit riche en vitamine C.",
    stock: 25
},

{
    id: "20",
     nom: "Pasteque",
     prix: 600,
     unite: "kg",
     image: pasteque,
     description: "Fruit riche en potassium.",
     stock: 25
},



{
    id: "21",
     nom: "poire",
     prix: 800,
      unite: "kg",
      image: poire,
      description: "Fruit riche en fibres.",
      stock: 25
},

{
    id: "22",
     nom: "orange",
     prix: 900,
      unite: "kg",
      image: orange1,
      description: "Fruit riche en vitamine C.",
      stock: 25
},

{
      id: "23",
     nom: "goyave",
     prix: 1000,
      unite: "kg",
      image: goyave,
      description: "Fruit riche en vitamine C.",
      stock: 25
},

{
      id: "24",
     nom: "ananas",
     prix: 1100,
      unite: "kg",
      image: ananas,
      description: "Fruit tropical sucré.",
      stock: 20
},

{
    id: "25",
    nom: "POIVRON",
    prix: 90,
    unite: "kg",
    image: vjr,
    description: "Le poivron, frais et coloré, apporte du goût et de la vitalité à vos repas . Riche en vitamines et naturellement savoureux, il est parfait pour des plats sains, gourmands et pleins de fraîcheur. Ajoutez une touche de couleur à votre cuisine dès aujourd’hui !",
    stock: 30
},

{
    id: "26",
    nom: "Chili",
    prix: 120,
    unite: "kg",
    image: chili,
    description: "Légume épicé et coloré.",
    stock: 25
},

{
    id: "27",
    nom: "Gingembre",
    prix: 150,
    unite: "kg",
    image: gingembre,
    description: "Racine aromatique et épicée.",
    stock: 20
},

{
    id: "28",
    nom: "Piment",
    prix: 200,
    unite: "kg",
    image: piment,
    description: "Légume épicé et coloré.",
    stock: 25
},

{
    id: "29",
    nom: "Ail",
    prix: 80,
    unite: "kg",
    image: ail,
    description: "Légume aromatique utilisé dans de nombreux plats.",
    stock: 20
},

{
    id: "30",
    nom: "Oignon vert",
    prix: 100,
    unite: "kg",
    image: oignonvert,
    description: "Légume aromatique utilisé dans de nombreux plats.",
    stock: 20
},

{
    id: "31",
    nom: "Laurier",
    prix: 150,
    unite: "kg",
    image: laurier,
    description: "Plante aromatique utilisée dans de nombreux plats.",
    stock: 20
},

{
    id: "32",
    nom: "Persil",
    prix: 70,
    unite: "kg",
    image: persil,
    description: "Plante aromatique utilisée dans de nombreux plats.",
    stock: 20
},

{
    id: "33",
    nom: "Poivre noir",
    prix: 180,
    unite: "kg",
    image: poivrenoir,
    description: "Épice aromatique utilisée dans de nombreux plats.",
    stock: 20
},

{
    id: "34",
    nom: "Piment séché",
    prix: 220,
    unite: "kg",
    image: pimentséché,
    description: "Épice aromatique utilisée dans de nombreux plats.",
    stock: 20
},




];