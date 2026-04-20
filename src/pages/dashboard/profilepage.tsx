import { MdPerson } from "react-icons/md";

const ProfilePage = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold flex items-center gap-2"> <MdPerson /> Mon profil</h1>

      <div className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row gap-6 items-center">

        {/* IMAGE */}
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
          <MdPerson />
        </div>

        {/* INFOS */}
        <div className="space-y-2">
          <p><span className="font-semibold">Nom :</span> Fatou Sarr</p>
          <p><span className="font-semibold">Email :</span> fatou@gmail.com</p>
          <p><span className="font-semibold">Rôle :</span> Admin</p>
        </div>

      </div>

      {/* ACTIONS */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4 space-x-4">
        <h2 className="font-semibold">Paramètres du compte</h2>

        <button className="bg-[#88c74a] text-white px-4 py-2 rounded-xl hover:bg-[#7ab63f] transition">
          Modifier profil
        </button>

        <button className="bg-[#ffc105] text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
          Changer mot de passe
        </button>
      </div>

    </div>
  );
};

export default ProfilePage;