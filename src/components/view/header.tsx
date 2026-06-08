import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../parties/useCart";
import type { MenuItem } from '../parties/type'
import { useState } from "react";

const menuItems: MenuItem[] =[
  {name: "Home", link: "/" },
  {name: "Shop", link: "/shop" },
  {name: "Blog" ,link: "/blog" },
  {name: "About" ,link: "/about" },
  {name: "Contact" ,link: "/contact" },
];






export default function Header() {
  const { cart, setOpen } = useCart();
  const [openMenu, setOpenMenu] = useState(false);


  return (
  <div>
    <section className="bg-white shadow-md container mx-auto px-4 py-4 flex items-center justify-between relative">

      {/* Logo centré mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
        <Link to="/">
          <h1 className="text-[#ffc105] font-bold text-xl">
            Kaay <span className="text-black">Nduggu</span>
          </h1>
        </Link>
      </div>

      {/* Bouton menu mobile */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setOpenMenu(true)}
      >
        ☰
      </button>

      {/* Menu desktop */}
      <ul className="hidden lg:flex gap-8 text-black font-bold">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Actions droite */}
      <div className="flex items-center gap-4 ml-auto lg:ml-0">

        <Link to="/se_connecter" className="hidden lg:block">
          <button className="bg-[#ffc105] w-40 h-10 rounded flex items-center justify-center gap-2 text-sm font-bold">
            <IoMdContact />
            Se connecter
          </button>
        </Link>

        <div className="border h-6 hidden lg:block"></div>

        <div className="relative">
          <TiShoppingCart
            onClick={() => setOpen(true)}
            className="cursor-pointer text-2xl"
          />

          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-[#ffc105] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Overlay */}
    {openMenu && (
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setOpenMenu(false)}
      />
    )}

    {/* Sidebar mobile */}
    <div
      className={`fixed top-0 right-0 h-full w-72 md:w-60 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          className="text-2xl"
          onClick={() => setOpenMenu(false)}
        >
          ✖
        </button>
      </div>

      <ul className="flex flex-col gap-6 p-6 font-bold">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              onClick={() => setOpenMenu(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <Link to="/se_connecter">
          <button className="bg-[#ffc105] w-full h-10 rounded flex items-center justify-center gap-2 text-sm font-bold">
            <IoMdContact />
            Se connecter
          </button>
        </Link>
      </ul>
    </div>
  </div>
);
}
