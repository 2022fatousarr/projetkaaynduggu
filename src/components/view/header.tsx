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
];






export default function Header() {
  const { cart, setOpen } = useCart();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="">
      <section className="flex bg-white container mx-auto px-4  py-4 items-center justify-between relative">
        {openMenu && (
      <div className="lg:hidden bg-white shadow-md px-4 py-0 absolute top-full left-0 w-20 z-10">
        <ul className="flex flex-col gap-4 text-black font-bold">
         {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} onClick={() => setOpenMenu(false)}>
              {item.name}
            </Link>
          </li>
         ))}
       </ul>
    </div>
   )}
        <div className=" flex  items-center justify-between w-full  lg:w-auto">
          <div>
          <h1 className="text-[#ffc105] font-bold">Kaay </h1>
          <h1 className="font-bold">Nduggu</h1>
          </div>
          <button
    className="lg:hidden text-2xl ml-4 focus:outline-none"
    onClick={() => setOpenMenu(!openMenu)}
  >
    ☰
  </button>

       </div>
          <div className="flex lg:flex gap-8 items-center  ">
            <ul className="hidden lg:flex gap-8 text-black font-bold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}> {item.name} </Link>
                </li>
              ))}
            </ul>
            </div>
            <div className="flex items-center gap-4"> 
              
             
        
            <div>
              <Link to="/se_connecter" className="hidden lg:block">
                <button className='bg-[#ffc105]  w-40 h-10 rounded flex items-center justify-center p-2'>
                  <IoMdContact className='text-white' />Se connecter
                </button>
              </Link>
            </div>
            <div className="border h-6 text-black"></div>
            <div className="relative">
            <TiShoppingCart onClick={() => setOpen(true)} className="  cursor-pointer text-2xl" />
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#ffc105] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </div>
            )}
              </div>
            
            

          </div>
          
      
      </section>
      
    </div>
   
  )
}
