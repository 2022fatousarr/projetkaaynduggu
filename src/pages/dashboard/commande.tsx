import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";

type ProduitCommande = {
  nom: string;
  quantite: number;
};

type Commande = {
  _id: string;
  client: string;
  produits: ProduitCommande[];
  total: number;
  statut: string;
};

const CommandePage = () => {
  const [commandes, setCommandes] = useState<Commande[]>([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/commandes`);
        const data = await res.json();
        setCommandes(data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchCommandes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Commandes</h1>

      <div className="bg-white p-5 rounded-2xl shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-left">
              <th>Client</th>
              <th>Produit(s)</th>
              <th>Total</th>
              <th>Statut</th>
            </tr>
          </thead>

          <tbody>
            {commandes.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  Aucune commande.
                </td>
              </tr>
            ) : (
              commandes.map((commande) => (
                <tr key={commande._id} className="border-t">
                  <td>{commande.client}</td>

                  <td>
                    {commande.produits
                      .map(
                        (produit) =>
                          `${produit.nom} (x${produit.quantite})`
                      )
                      .join(", ")}
                  </td>

                  <td>{commande.total} FCFA</td>

                  <td>{commande.statut}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommandePage;


// const CommandePage = () => {
//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-4">📦 Commandes</h1>

//       <div className="bg-white p-5 rounded-2xl shadow">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-gray-500 text-left">
//               <th>Client</th>
//               <th>Produit</th>
//               <th>Prix</th>
//               <th>Statut</th>
//             </tr>
//           </thead>

//           <tbody className="">
//             <tr className="border-t ">
//               <td>Fatou</td>
//               <td>Mangue</td>
//               <td>2000 FCFA</td>
//               <td className="text-green-500">Livré</td>
//             </tr>

//             <tr className="border-t">
//               <td>Ali</td>
//               <td>Piment</td>
//               <td>1500 FCFA</td>
//               <td className="text-yellow-500">En cours</td>
//             </tr>

//             <tr className="border-t">
//               <td>Awa</td>
//               <td>Tomate</td>
//               <td>1000 FCFA</td>
//               <td className="text-orange-500 font-medium">Annulé</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };

// export default CommandePage;