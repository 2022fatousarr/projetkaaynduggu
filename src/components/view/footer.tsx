import Button from '../parties/boutton';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-white text-black py-10 container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  ">
      <div className="flex flex-col items-start justify-start">
        <div>
          <p className="font-bold text-[#ffc105] ">Kaay</p>
          <p className="font-bold">Nduggu</p>
        </div>
        <p className="text-sm text-gray-600 my-3">Address:Guediawaye ,Dakar </p>
        <p className="text-sm m">Phone:+221 78 215 73 71</p>
        <p className="text-sm mt-3">Email:fatou@gmail.com</p>
         <div className="flex mt-4 gap-4">
          <a href="">
            <FaFacebookF className='bg-gray-300 rounded-full w-5 h-4'/>
          </a>
          <a href="">
            <FaInstagram className='bg-gray-300 rounded-full w-5 h-4'/>
           </a>
           <a href="">
            <FaTwitter className='bg-gray-300 rounded-full w-5 h-4'/>
          </a>
            <a href="">
              <FaPinterest className='bg-gray-300 rounded-full w-5 h-4'/>
            </a>
         </div>
      </div>

      <div className="flex flex-col items-start justify-start">
        <p className="font-bold mb-4">INFORMATION</p>
        <a href="" className="flex flex-col gap-2 w-full">
        <p className="bg-white text-gray-600 " >About Us</p>
          <p className="bg-white text-gray-600 " >Checkout</p>
          <p className="bg-white text-gray-600 " >Contact</p>
          <p className="bg-white text-gray-600 " >Services</p>
        </a>
      </div>

      <div className="flex flex-col items-start justify-start">
        <p className="font-bold mb-4">MY ACCOUNT</p>
        <a href="" className="flex flex-col gap-2 w-full ">
          <p className=" text-gray-600 ">My Account" </p>
          <p className="bg-white text-gray-600 ">Contact</p>
          <p className="bg-white text-gray-600 ">Shop Cart</p>
          <p className="bg-white text-gray-600 " >Tracking Order</p>
        </a>
      </div>

      <div className="flex flex-col  align-items-start justify-start">
        <p className="font-bold mb-4">QUICK SHOP</p>
        <a href="" className="flex flex-col gap-2 w-full">
          <p className=" text-gray-600 w-full">Shipping & Returns</p>
          <p className=" text-gray-600 w-full"> Contact</p>
          <p className=" text-gray-600  w-full" >Secure Shopping</p>
          <p className="bg-white text-gray-600 ">Affiliate</p>
        </a>
      </div>

      <div className="flex flex-col items-start justify-start">
        <p className="font-bold mb-4">JOIN OUR NEWSLETTER NOW</p>
        <p>Get E-mail updates about our latest shop and special offers</p>
        <div className="flex w-full mt-4 ">
          <input type="email" placeholder="Enter your email" className="rounded-l-2xl px-1 py-2 border border-gray-300 border-r-0 bg-gray-300" />
          <Link to="/Se_Connecter">
            <Button className="bg-[#88c74a] text-white  rounded-r-2xl border border-[#88c74a] px-6 py-2" text="Subscribe" />
          </Link>
        </div>
      </div>
  </div>

  )
}

export default Footer
