import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { GiCarrot } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const sidebar = [
  {
    icon: <IoHome />,
    name: "Tableau de bord",
    link: "/dashboard",
  },
  {
    icon: <FaStore />,
    name: "Boutique",
    link: "/",
  },
  {
    icon: <GiCarrot />,
    name: "Produits",
    children: [
      { name: "Fruits", link: "/shop/fruits" },
      { name: "Légumes", link: "/shop/legumes" },
      { name: "Condiments", link: "/shop/condiments" },
    ],
  },
  {
    icon: <LuPackage />,
    name: "Commandes",
    link: "/dashboard/commande",
  },
  {
    icon: <MdPerson />,
    name: "Profil",
    link: "/dashboard/profile",
  },
];

type Props = {
  open?: boolean;
  setOpen?: (v: boolean) => void;
};

export default function Sidebar({ open: openProp, setOpen: setOpenProp }: Props) {
  const isControlled = typeof openProp === "boolean" && typeof setOpenProp === "function";
  const open = isControlled ? openProp! : false;
  const [openMenu, setOpenMenu] = useState<string | null>(null);
 

  return (
    <div>
    
    <nav
      className={`fixed md:static z-40 top-0 left-0 h-full p-2 bg-[#88c74a] flex flex-col duration-300 ${
        open ? "w-60" : "w-16 md:w-16"
      }`}
    >
      <div className="border rounded-3xl px-3 py-2 h-20 flex justify-between items-center">
        <h1 className={`${open ? "text-2xl" : "hidden"}`}>Fatima</h1>
        <RiMenuUnfold4Line
          className="text-black size-10 cursor-pointer"
          onClick={() => {
            if (isControlled) setOpenProp!(!open);
          }}
        />
      </div>

      <div className="flex-1">
        <ul className="">
          {sidebar.map((element, index) => (
  <div key={index}>
    
    {/* MENU PRINCIPAL */}
    <div
      onClick={() =>
        element.children &&
        setOpenMenu(openMenu === element.name ? null : element.name)
      }
      className="px-3 py-2 my-2 hover:bg-[#7ab63f] rounded-xl cursor-pointer flex items-center justify-between group transition-all duration-300"
    >
      {element.link ? (
      <NavLink
        to={element.link}
        className={({ isActive }) =>
  `flex items-center gap-4 px-3 py-2 rounded-xl transition ${
    isActive ? " text-black" : "hover:bg-[#7ab63f]"
  }`
}
      >
        <div className="text-lg">{element.icon}</div>

        <span
          className={`whitespace-nowrap transition-all duration-300 ${
            open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {element.name}
        </span>
      </NavLink>
      ) : (
        <div className="flex items-center gap-4 px-3 py-2">
    <div className="text-lg">{element.icon}</div>
    <span
      className={`whitespace-nowrap transition-all duration-300 ${
        open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      {element.name}
    </span>
  </div>
)}
      {/* FLECHE */}
      {element.children && open && (
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${
            openMenu === element.name ? "rotate-180" : ""
          }`}
        />
      )}
    </div>

    {/* SOUS MENU ANIMÉ */}
    <div
      className={`overflow-hidden transition-all duration-500 ${
        openMenu === element.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {element.children?.map((child, i) => (
        <NavLink
          key={i}
          to={child.link}
          className="block pl-12 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7ab63f] rounded-lg transition"
        >
          {child.name}
        </NavLink>
      ))}
    </div>
  </div>
))}
        </ul>
      </div>

      {/* footer */}
      <div className="flex gap-5 items-center px-3 py-2">
        <div>
          <FaUserAlt />
        </div>
        <Link to="/">
        <button className="text-black flex items-center gap-2">
   Déconnexion
</button>
</Link>
      </div>
    </nav>
    </div>
  );
}