import { Link } from "react-router-dom";
import { useCart } from "../components/parties/useCart";
import { useState } from "react";

const PanierPage = () => {
  const { cart, getTotal , increaseQuantity,
  decreaseQuantity} = useCart();

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");


  const handleOrder = () => {
    const produits = cart
      .map(item => `${item.nom} x${item.quantity ?? 1}`)
      .join("%0A");

    const message =
      `Commande:%0A${produits}%0A%0A` +
      `Nom: ${nom}%0A` +
      `Téléphone: ${telephone}%0A` +
      `Adresse: ${adresse}%0A%0A` +
      `Total: ${getTotal()} FCFA`;

    window.open(
      `https://wa.me/221782157371?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
    <Link to="/shop">
     <h1 className="text-2xl font-bold">Ma commande</h1>
    </Link>
     

      {/* Produits */}
      <div className="bg-white p-4 rounded shadow space-y-3">
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          cart.map(item => (
           <div
  key={item.id}
  className="flex justify-between items-center border-b pb-3"
>

  <div>

    <p className="font-semibold">
      {item.nom}
    </p>

    {/* QUANTITE */}
    <div className="flex items-center gap-3 mt-2">

      {/* MOINS */}
      <button
        onClick={() =>
          decreaseQuantity(item.id)
        }
        className="w-8 h-8 rounded-full bg-gray-200 font-bold"
      >
        -
      </button>

      {/* NOMBRE */}
      <span className="font-bold">
        {item.quantity}
      </span>

      {/* PLUS */}
      <button
        onClick={() =>
          increaseQuantity(item.id)
        }
        className="w-8 h-8 rounded-full bg-[#75ab3f] text-white font-bold"
      >
        +
      </button>

    </div>

  </div>

  {/* PRIX */}
  <p className="font-bold text-[#75ab3f]">

    {item.prix * item.quantity} FCFA

  </p>

</div>
          ))
        )}
      </div>

      {/* Total */}
      <div className="text-right font-bold text-lg">
        Total: {getTotal()} FCFA
      </div>

      {/* Formulaire */}
      <div className="bg-white p-4 rounded shadow space-y-3">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full border p-2 rounded"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Téléphone"
          className="w-full border p-2 rounded"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <textarea
          placeholder="Adresse de livraison"
          className="w-full border p-2 rounded"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
      </div>

      {/* Bouton commander */}
      <button
        onClick={handleOrder}
        className="w-full bg-[#75ab3f] text-white py-3 rounded font-bold"
      >
        Confirmer la commande sur WhatsApp
      </button>

    </div>
  );
};

export default PanierPage;