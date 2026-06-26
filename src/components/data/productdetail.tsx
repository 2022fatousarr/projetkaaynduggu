import { useParams } from "react-router-dom";
import { produits } from "../data/produits";
import type { Produit } from "../parties/type";
import { useCart } from "../parties/useCart";
import { useState } from "react";
import { toast } from 'sonner';

const Produitdetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product: Produit | undefined = produits.find(
    (p) => p.id === id
  );
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    product?.image
  );

  if (!product) {
    return (
      <p className="flex items-center justify-center p-10  text-gray-500">
        Produit non trouvé
      </p>
    );
  }

  return (
    <div className="bg-gray-50  py-2">

      <div className="container mx-auto px-4 py-6 mt-6 grid lg:grid-cols-2 gap-10 items-center">

        
       

        {/* IMAGE */}
<div className="bg-white rounded-2xl p-4 border border-gray-200">

  {/* Grande image */}
  <img
    src={selectedImage}
    alt={product.nom}
    className="w-full h-[500px] object-contain rounded-xl "
  />


</div>

        {/* DETAILS */}
        <div className="bg-white rounded-2xl  p-6 space-y-5 h-auto">
          
          <h1 className="text-3xl font-bold text-gray-800">
            {product.nom}
          </h1>

          <div className="w-16 h-1 bg-[#88c74a] rounded"></div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-[#88c74a]">
            {product.prix} FCFA / {product.unite}
          </p>

          <p className="text-sm text-gray-500">
            Stock disponible : {product.stock} {product.unite}
          </p>

          {/* QUANTITY */}

          
<div className="flex items-center gap-4">

          {/* MOIN */}
  <button
  type="button"
     onClick={() =>
      setQuantity((prev) =>
        prev > 1 ? prev - 1 : 1
      )
    }
    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold"
  >
    -
  </button>

  <span className="text-xl font-semibold w-8 text-center">
    {quantity}
  </span>
         {/* PLUS */} 
  <button
   type="button"
    onClick={() => setQuantity((prev) => prev + 1)}
    className="w-10 h-10 rounded-full bg-[#88c74a] hover:bg-[#76b03f] text-white text-xl font-bold"
  >
    +
  </button>

</div>

          {/* BOUTON */}
          <button
            onClick={() => {
              addToCart({...product, quantity:quantity});
              toast.success("Produit ajouté au panier !");
            }}
            className="w-full bg-[#88c74a] hover:bg-[#ffc105] transition text-white py-3 rounded-xl font-semibold shadow-md"
          >
            🛒 Ajouter au panier
          </button>

        </div>
      </div>
      
  {/* Petites images */}
  <div className="flex gap-3 mt-4 justify-center">

    {product.images?.map((img, index) => (
      <div
        key={index}
        onClick={() => setSelectedImage(img)}
        className={`w-40 h-40 rounded-2xl border cursor-pointer overflow-hidden 
          ${
            selectedImage === img
              ? "border-[#88c74a]"
              : "border-gray-200"
          }`}
      >
        <img
          src={img}
          alt={`mini-${index}`}
          className="w-full h-full  object-contain"
        />
      </div>
    ))}

  </div>

    </div>
  );
};

export default Produitdetail;