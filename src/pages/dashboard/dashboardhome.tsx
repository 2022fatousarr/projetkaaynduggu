const DashboardHome = () => {
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>

        <button className="bg-[#88c74a] text-white px-4 py-2 rounded-xl shadow">
          + Ajouter produit
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow">
          <p>Commandes</p>
          <h2 className="text-3xl font-bold">12</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p>Revenus</p>
          <h2 className="text-3xl font-bold">45 000 FCFA</h2>
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