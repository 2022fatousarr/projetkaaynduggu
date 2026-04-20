


const CommandePage = () => {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">📦 Commandes</h1>

      <div className="bg-white p-5 rounded-2xl shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-left">
              <th>Client</th>
              <th>Produit</th>
              <th>Prix</th>
              <th>Statut</th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="border-t ">
              <td>Fatou</td>
              <td>Mangue</td>
              <td>2000 FCFA</td>
              <td className="text-green-500">Livré</td>
            </tr>

            <tr className="border-t">
              <td>Ali</td>
              <td>Piment</td>
              <td>1500 FCFA</td>
              <td className="text-yellow-500">En cours</td>
            </tr>

            <tr className="border-t">
              <td>Awa</td>
              <td>Tomate</td>
              <td>1000 FCFA</td>
              <td className="text-red-500">Annulé</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CommandePage;