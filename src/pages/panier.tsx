import { useCart } from "../components/parties/useCart";
import { useState } from "react";

const PanierPage = () => {
  const { cart, getTotal } = useCart();

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
      `https://wa.me/221771234567?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">

      <h1 className="text-2xl font-bold">Ma commande</h1>

      {/* Produits */}
      <div className="bg-white p-4 rounded shadow space-y-3">
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>{item.nom} x{item.quantity ?? 1}</span>
              <span>{item.prix * (item.quantity ?? 1)} FCFA</span>
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