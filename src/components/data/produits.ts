
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
import mangue from '../../assets/Mangue.jpg';
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

import jus1 from '../../assets/jus1.png';
import jus2 from '../../assets/jus2.png';
import jus3 from '../../assets/jus3.png';
import jus4 from '../../assets/jus4.jpg';

import pfruits from '../../assets/pfruits.jpg';
import plegumes from '../../assets/plegumes.jpg';
import premium1 from '../../assets/premium1.jpg';
import orange2 from '../../assets/orange2.jpg';
import poivreblanc from '../../assets/poivreblanc.jpg';
import poivrerouge from '../../assets/poivrerouge.jpg';

export const produits: Produit[] = [
  {
    id: "1",
    nom: "Manioc",
    prix: 100,
    unite: "kg",
    image: manioc,
    description: "Racine dense et nourrissante, parfaite pour des plats traditionnels ou une purée savoureuse, avec une texture tendre et un goût légèrement sucré.",
    stock: 15,
    quantity: 0,
    images: [manioc, manioc, manioc]
  },

  {
    id: "2",
    nom: "Lettue",
    prix: 150,
    unite: "kg",
    image: lettue,
    description: "Feuilles vertes fraîches et croquantes, idéales pour les salades, sandwiches ou accompagnements légers, avec une saveur délicate et rafraîchissante.",
    stock: 10,
    quantity: 0,
    images: [lettue, lettue, lettue]

  },

  {
    id: "3",
    nom: "Nadio",
    prix: 200,
    unite: "L",
    image: nadio,
    description: "Jus clair et revigorant, riche en minéraux essentiels, parfait pour accompagner les repas ou étancher la soif pendant les journées chaudes.",
    stock: 5,
    quantity: 0,
    images: [nadio, nadio, nadio]

  },

  {
    id: "4",
    nom: "Tomate",
    prix: 80,
    unite: "kg",
    image: tomate,
    description: "Tomates mûres, juteuses et éclatantes, parfaites en salades, sauces ou plats mijotés, avec un goût sucré et acidulé naturel.",
    stock: 20,
    quantity: 0,
    images: [tomate, tomate, tomate]
  },
  
  {
    id: "5",
    nom: "Comcombre",
    prix: 80,   
    unite: "kg",
    image: comcombre,
    description: "Concombre croquant et très rafraîchissant, excellent en salade ou en accompagnement froid, avec une texture hydratante et un goût léger.",
    stock: 15,
    quantity: 0,
    images: [comcombre, comcombre, comcombre]
  },

  {
    id: "6",
    nom: "Aubergine",
    prix: 50,
    unite: "kg",
    image: aubergine,
    description: "Aubergine ferme et lisse, idéale pour ratatouilles, grillades ou plats en sauce, apportant douceur et couleur à vos recettes.",
    stock: 25,
    quantity: 0,
    images: [aubergine, aubergine, aubergine]

  },

  {
    id: "7",
    nom: "Chou",
    prix: 120,
    unite: "kg",
    image: chou,
    description: "Chou vert frais, riche en fibres et vitamines, parfait pour sautés, soupes ou salades, avec une texture croquante et un goût authentique.",
    stock: 30,
    quantity: 0,
    images: [chou, chou, chou]
  },

  {
    id: "8",
    nom: "Pomme de terre",
    prix: 60, 
    unite: "kg",
    image: pommedeterre,
    description: "Pommes de terre polyvalentes, tendres à la cuisson, excellentes en purée, frites ou ragoûts, avec une saveur douce et réconfortante.",
    stock: 40,
    quantity: 0,
    images: [pommedeterre, pommedeterre, pommedeterre]
  },

  {
    id: "9",
    nom: "Navet",
    prix: 90,
    unite: "kg",
    image: navet,
    description: "Navet racine légèrement sucré et croquant, excellent dans les soupes, ragoûts ou plats vapeur, avec une texture fondante après cuisson.",
    stock: 20,
    quantity: 0,
    images: [navet, navet, navet]
  },

  {
    id: "10", 
    nom: "Gombo",
    prix: 70,
    unite: "kg",
    image: gombo,
    description: "Gombo frais et gélatineux, parfait pour sauces traditionnelles, soupes et plats mijotés, donnant une texture riche et onctueuse.",
    stock: 15,
    quantity: 0,
    images: [gombo, gombo, gombo]
  },

  {
    id: "11",
    nom: "Oignon",
    prix: 40,
    unite: "kg",
    image: oigno,
    description: "Oignons aromatiques, indispensables en cuisine pour relever sauces, soupes et plats mijotés, avec une saveur riche et légèrement piquante.",
    stock: 20,
    quantity: 0,
    // images: [oignon, oignon, oignon]
  },

  {
    id: "12",
    nom: "Betterave",
    prix: 110,
    unite: "kg",
    image: betterave,
    description: "Betteraves sucrées et colorées, riches en antioxydants, parfaites pour salades, jus ou plats rôtis, avec une douceur naturelle très agréable.",
    stock: 15,
    quantity: 0,
    images: [betterave, betterave, betterave]
  },

  {
    id: "13",
    nom: "Orange",
    prix: 200,
    unite: "kg",
    image: orange,
    description: "Oranges juteuses et parfumées, riches en vitamine C, idéales pour les jus frais, snacks sains ou desserts fruités pleins de vitalité.",
    stock: 25,
    quantity: 0,
    images: [orange, orange1, orange2]
  },

  {
    id: "14",
    nom: "Mangue",
    prix: 300,
    unite: "kg",
    image: mangue,
    description: "Mangues sucrées et fondantes, aux arômes tropicaux intenses, parfaites en smoothies, salades ou desserts exotiques et généreux.",
    stock: 20,
    quantity: 0,
    images: [mangue, mangue, mangue]
  },

  {
    id: "15",
    nom: "Fraise",
    prix: 250,
    unite: "kg",
    image: fraise,
    description: "Fraises rouges et parfumées, très sucrées et fraîches, idéales pour garnir desserts, coupes de fruits ou à déguster nature.",
    stock: 25,
    quantity: 0,
    images: [fraise, fraise, fraise]
  },

  {
    id: "16",
    nom: "Avocat",
    prix: 400,
    unite: "kg",
    image: avocat,
    description: "Avocats crémeux et riches, parfaits pour tartines, salades ou guacamole, avec des graisses saines et une texture douce et onctueuse.",
    stock: 20,
    quantity: 0,
    images: [avocat, avocat, avocat]
  },

  {
    id: "17",
    nom: "Kiwi",
    prix: 350,
    unite: "kg",
    image: kiwi,
    description: "Kiwis acidulés et juteux, riches en vitamine C, à déguster en tranches, en salade ou en smoothie pour une touche fraîche et vitaminée.",
    stock: 25,
    quantity: 0,
    images: [kiwi, kiwi, kiwi]
  },

  {
    id: "18",
    nom: "Pomme",
    prix: 150,
    unite: "kg",
    image: pomme,
    description: "Pommes croquantes et sucrées, parfaites en snack, compote ou pâtisserie, avec une saveur fruitée agréable et rafraîchissante.",
    stock: 20,
    quantity: 0,
    images: [pomme, pomme, pomme]
  },

  {
    id: "19",
    nom: "Banane",
    prix: 500,
    unite: "kg",
    image: banane,
    description: "Bananes mûres et douces, riches en énergie et potassium, parfaites en encas rapide ou pour préparer smoothies et desserts gourmands.",
    stock: 25,
    quantity: 0,
    images: [banane, banane, banane]
  },

  {
    id: "20",
    nom: "Pasteque",
    prix: 600,
    unite: "kg",
    image: pasteque,
    description: "Pastèque très rafraîchissante, sucrée et hydratante, idéale pour les journées chaudes ou les collations fruitées en famille.",
    stock: 25,
    quantity: 0,
    images: [pasteque, pasteque, pasteque]
  },

  {
    id: "21",
    nom: "Poire",
    prix: 800,
    unite: "kg",
    image: poire,
    description: "Poires juteuses et fondantes, avec une douceur délicate, parfaites à croquer nature ou à ajouter dans des tartes et salades gourmandes.",
    stock: 25,
    quantity: 0,
    images: [poire, poire, poire]
  },

  {
    id: "22",
    nom: "Orange",
    prix: 900,
    unite: "kg",
    image: orange1,
    description: "Oranges extra fraîches et parfumées, elles apportent une explosion de saveur et de vitamine C dans tous vos jus et collations saines.",
    stock: 25,
    quantity: 0,
    images: [orange1, orange1, orange1]
  },

  {
    id: "23",
    nom: "Goyave",
    prix: 1000,
    unite: "kg",
    image: goyave,
    description: "Goyaves parfumées, juteuses et riches en fibres, excellentes en jus, confitures ou dégustation fraîche pour une touche tropicale.",
    stock: 25,
    quantity: 0,
    images: [goyave, goyave, goyave]
  },

  {
    id: "24",
    nom: "Ananas",
    prix: 1100,
    unite: "kg",
    image: ananas,
    description: "Ananas tropical bien mûr, sucré et acidulé, idéal pour les jus, salades de fruits ou recettes exotiques pleines de caractère.",
    stock: 20,
    quantity: 0,
    images: [ananas, ananas, ananas]
  },

  {
    id: "25",
    nom: "Poivron",
    prix: 90,
    unite: "kg",
    image: vjr,
    description: "Poivrons frais et colorés, riches en vitamines, ils apportent croquant et saveur aux salades, grillades et plats sautés grâce à leur fraîcheur.",
    stock: 30,
    quantity: 0,
    // images: [poivron, poivron, poivron]
  },

  {
    id: "26",
    nom: "Chili",
    prix: 120,
    unite: "kg",
    image: chili,
    description: "Chilis épicés et aromatiques, parfaits pour relever sauces, marinades et plats exotiques avec une pointe de chaleur piquante.",
    stock: 25,
    quantity: 0,
    images: [chili, chili, chili]
  },

  {
    id: "27",
    nom: "Gingembre",
    prix: 150,
    unite: "kg",
    image: gingembre,
    description: "Gingembre frais et piquant, idéal pour infuser thés, assaisonner plats et apporter une note chaude et parfumée à vos recettes.",
    stock: 20,
    quantity: 0,
    images: [gingembre, gingembre, gingembre]


  },

  {
    id: "28",
    nom: "Piment",
    prix: 200,
    unite: "kg",
    image: piment,
    description: "Piments forts et parfumés, parfaits pour donner du caractère aux sauces, ragoûts et marinades avec une saveur épicée concentrée.",
    stock: 25,
    quantity: 0,
    images: [piment, piment, piment]
  },

  {
    id: "29",
    nom: "Ail",
    prix: 80,
    unite: "kg",
    image: ail,
    description: "Ail frais et savoureux, indispensable pour relever viandes, sauces et plats mijotés avec une note aromatique intense et agréable.",
    stock: 20,
    quantity: 0,
    images: [ail, ail, ail]
  },

  {
    id: "30",
    nom: "Oignon vert",
    prix: 100,
    unite: "kg",
    image: oignonvert,
    description: "Oignons verts frais et croquants, parfaits pour garnitures, salades et plats sautés, apportant une saveur délicate et herbacée.",
    stock: 20,
    quantity: 0,
    images: [oignonvert, oignonvert, oignonvert]
  },

  {
    id: "31",
    nom: "Laurier",
    prix: 150,
    unite: "kg",
    image: laurier,
    description: "Feuilles de laurier aromatiques, idéales pour parfumer bouillons, soupes et plats mijotés sans masquer les autres ingrédients.",
    stock: 20,
    quantity: 0,
    images: [laurier, laurier, laurier]
  },

  {
    id: "32",
    nom: "Persil",
    prix: 70,
    unite: "kg",
    image: persil,
    description: "Persil frais et parfumé, excellent pour assaisonner plats, salades et sauces avec une touche herbacée, légère et très naturelle.",
    stock: 20,
    quantity: 0,
    images: [persil, persil, persil]
  },

  {
    id: "33",
    nom: "Poivre noir",
    prix: 180,
    unite: "kg",
    image: poivrenoir,
    description: "Poivre noir de qualité, parfait pour relever toutes vos préparations avec une saveur chaude, piquante et naturellement aromatique.",
    stock: 20,
    quantity: 0,
    images: [poivrenoir, poivreblanc, poivrerouge]
  },

  {
    id: "34",
    nom: "Piment séché",
    prix: 220,
    unite: "kg",
    image: pimentséché,
    description: "Piment séché puissant, idéal pour agrémenter sauces, bouillons et plats épicés avec une note concentrée et légèrement fumée.",
    stock: 20,
    quantity: 0,
    images: [pimentséché, pimentséché, pimentséché]
  },

  {
    id: "35",
    nom: "Pastèque et Gingembre Jus",
    prix: 1000,
    unite: "L",
    image: jus1,
    description: "Jus frais de pastèque et gingembre, alliant douceur fruitée et note épicée pour une boisson rafraîchissante et énergisante.",
    stock: 20,
    quantity: 0,
    images: [jus1, jus2, jus3]
  },

  {
    id: "36",
    nom: "Tropical",
    prix: 1000,
    unite: "L",
    image: jus2,
    description: "Jus tropical généreux, mélange de fruits exotiques soigneusement sélectionnés pour une saveur douce, vitaminée et très désaltérante.",
    stock: 20,
    quantity: 0,
    images: [jus2, jus3, jus1]

  },

  {
    id: "37",
    nom:"Jus d'orange",
    prix: 1000,
    unite: "L",
    image: jus3,
    description: "Jus d'orange pur et naturel, préparé avec des oranges bien mûres pour une boisson vitaminée, acidulée et délicieusement rafraîchissante.",
    stock: 20,
    quantity: 0,
    images: [jus3, jus2, jus1]
  },

  {
    id: "38",
    nom: "Jus de fruits mixte",
    prix: 1000,
    unite: "L",
    image: jus4,
    description: "Jus mixte aux fruits variés, riche en goût et en couleur, parfait pour se désaltérer avec plaisir et une quantité généreuse de vitamines.",
    stock: 20,
    quantity: 0,
    images: [jus4, jus3, jus2]
  },

  {
    id: "39",
    nom: "Panier fruit",
    prix: 10000,
    unite: "panier",
    image: pfruits,
    description: "Panier de fruits frais et savoureux, idéal pour partager, offrir ou profiter d’un encas sain et gourmand, avec une belle variété de textures et de saveurs.",
    stock: 20,
    quantity: 0,
    images: [pfruits, plegumes, premium1]

  },

  {
    id: "40",
    nom: "Panier Légume",
    prix: 10000,
    unite: "panier",
    image: plegumes,
    description: "Panier de légumes frais, colorés et naturels, parfait pour cuisiner des repas équilibrés et faire le plein de saveurs saines au quotidien.",
    stock: 20,
    quantity: 0,
    images: [plegumes, pfruits, premium1]
  },

  {
    id:"41",
    nom:"Panier Premium",
    prix: 12000,
    unite: "panier",
    image: premium1,
    description: "Panier premium réunissant fruits et légumes de qualité, idéal pour des repas sains et gourmands, avec en cadeau une bouteille de jus fraîchement préparée.",
    stock: 20,
    quantity: 0,
    images: [premium1, pfruits, plegumes]
  }

]
