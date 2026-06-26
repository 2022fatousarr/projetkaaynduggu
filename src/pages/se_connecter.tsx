import React, { useState } from "react";
import { toast } from 'sonner'

export default function Se_ConnecterPage() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    toast.success("Connexion réussie !");
    window.location.href = "/dashboard";
  };

  return (
    <div className="bg-[#88c74a] flex items-center justify-center h-screen  w-full">
      {/* <div className="bg-white p-8 rounded-xl"> */}
         <div className="bg-white rounded-xl overflow-hidden flex w-[900px] h-[500px] shadow-lg">
    
    {/* Partie Logo */}
    <div className="w-1/2 bg-[#88c74a] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Kaay Nduggu
        </h1>
    </div>
    {/* {Partie Formulaire} */}
    <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold text-[#88c74a] text-center">
          Page de connexion
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-medium text-[#88c74a]">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#88c74a]">
              Mot de passe
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#88c74a] text-white px-4 py-2 rounded-md hover:bg-[#88c74a]"
          >
            Se connecter
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}