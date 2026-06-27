import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";

const DashboardHome = () => {

  const [stats, setStats] = useState({
    totalCommandes: 0,
    revenus: 0,
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/commandes/stats`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>

        <button className="bg-[#88c74a] text-white px-4 py-2 rounded-xl shadow">
          + Ajouter produit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow">
          <p>Commandes</p>
          <h2 className="text-3xl font-bold">
            {stats.totalCommandes}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p>Revenus</p>
          <h2 className="text-3xl font-bold">
            {stats.revenus.toLocaleString()} FCFA
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p>Stock</p>
          <h2 className="text-3xl font-bold">120</h2>
        </div>

      </div>

    </div>
  );
};

export default DashboardHome;



