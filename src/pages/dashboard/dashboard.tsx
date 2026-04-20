import { useState } from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function Pagedashboard() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* CONTENU */}
      <div className="flex-1 p-6 space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center bg-[#88c74a] p-4 rounded-xl">
          <div>
            <h1 className="text-[#ffc105] font-bold">Kaay</h1>
            <h1 className="font-bold text-white">Nduggu</h1>
          </div>

          <p className="font-semibold text-white">Admin</p>
        </div>

        {/* 🔥 ICI LE CONTENU CHANGE */}
        <Outlet />

      </div>
    </div>
  );
}