import { useParams } from "react-router-dom";
import { produits } from "../data/produits";
import type { Produit } from "../parties/type";
import { useCart } from "../parties/useCart";
import { Link } from "react-router-dom";

const Produitdetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product: Produit | undefined = produits.find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <p className="flex items-center justify-center p-10  text-gray-500">
        Produit non trouvé
      </p>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="container mx-auto px-4 py-60 mt-20 grid lg:grid-cols-2 gap-10 items-center">

        
        {/* IMAGE */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <img
            src={product.image}
            alt={product.nom}
            className=" h-100 object-cover rounded-xl mx-auto w-xl"
          />
        </div>

        {/* DETAILS */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
          
          <h1 className="text-3xl font-bold text-gray-800">
            {product.nom}
          </h1>

          <div className="w-16 h-1 bg-[#88c74a] rounded"></div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-[#88c74a]">
            {product.prix} FCFA / kg
          </p>

          <p className="text-sm text-gray-500">
            Stock disponible : {product.stock} {product.unite}
          </p>

          {/* BOUTON */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#88c74a] hover:bg-[#ffc105] transition text-white py-3 rounded-xl font-semibold shadow-md"
          >
            🛒 Ajouter au panier
          </button>

        </div>
      </div>

    </div>
  );
};

export default Produitdetail;