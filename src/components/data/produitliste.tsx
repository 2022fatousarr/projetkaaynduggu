import { produits } from "../data/produits";
import { Link } from "react-router-dom";

const Produitlist: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {produits.map((produit) => (
        <Link to={`/produit/${produit.id}`} key={produit.id}>
          <div className="border rounded-xl p-3 shadow-md hover:shadow-lg ">
            <img
              src={produit.image}
              alt={produit.nom}
              className="w-full h-40 object-cover"
            />
            <h2 className="font-bold mt-2">{produit.nom}</h2>
            <p className="text-gray-600">{produit.prix} FCFA</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Produitlist;