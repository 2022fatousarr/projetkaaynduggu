import Button from '../parties/boutton';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white text-black pt-10">

      <div className="container mx-auto px-4 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* LOGO */}
        <div>
          <div>
            <p className="font-bold text-2xl text-[#ffc105]">
              Kaay
            </p>

            <p className="font-bold text-2xl">
              Nduggu
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Address: Guediawaye, Dakar
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Phone: +221 78 215 73 71
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Email: fatou@gmail.com
          </p>

          {/* SOCIAL */}
          <div className="flex mt-5 gap-3">

            <a href="#">
              <FaFacebookF className="w-9 h-9 p-2 bg-gray-200 rounded-full hover:bg-[#88c74a] hover:text-white transition" />
            </a>

            <a href="#">
              <FaInstagram className="w-9 h-9 p-2 bg-gray-200 rounded-full hover:bg-[#88c74a] hover:text-white transition" />
            </a>

            <a href="#">
              <FaTwitter className="w-9 h-9 p-2 bg-gray-200 rounded-full hover:bg-[#88c74a] hover:text-white transition" />
            </a>

            <a href="#">
              <FaPinterest className="w-9 h-9 p-2 bg-gray-200 rounded-full hover:bg-[#88c74a] hover:text-white transition" />
            </a>

          </div>
        </div>

        {/* INFORMATION */}
        <div>
          <p className="font-bold mb-4">
            INFORMATION
          </p>

          <div className="flex flex-col gap-3 text-gray-600 text-sm">

            <Link to="/about" className="hover:text-[#88c74a] transition">
              About Us
            </Link>

            <Link to="/checkout" className="hover:text-[#88c74a] transition">
              Checkout
            </Link>

            <Link to="/contact" className="hover:text-[#88c74a] transition">
              Contact
            </Link>

            <Link to="/services" className="hover:text-[#88c74a] transition">
              Services
            </Link>

          </div>
        </div>

        {/* ACCOUNT */}
        <div>
          <p className="font-bold mb-4">
            MY ACCOUNT
          </p>

          <div className="flex flex-col gap-3 text-gray-600 text-sm">

            <Link to="/" className="hover:text-[#88c74a] transition">
              My Account
            </Link>

            <Link to="/contact" className="hover:text-[#88c74a] transition">
              Contact
            </Link>

            <Link to="/cart" className="hover:text-[#88c74a] transition">
              Shop Cart
            </Link>

            <Link to="/" className="hover:text-[#88c74a] transition">
              Tracking Order
            </Link>

          </div>
        </div>

        {/* QUICK SHOP */}
        <div>
          <p className="font-bold mb-4">
            QUICK SHOP
          </p>

          <div className="flex flex-col gap-3 text-gray-600 text-sm">

            <Link to="/" className="hover:text-[#88c74a] transition">
              Shipping & Returns
            </Link>

            <Link to="/contact" className="hover:text-[#88c74a] transition">
              Contact
            </Link>

            <Link to="/" className="hover:text-[#88c74a] transition">
              Secure Shopping
            </Link>

            <Link to="/" className="hover:text-[#88c74a] transition">
              Affiliate
            </Link>

          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <p className="font-bold mb-4">
            JOIN OUR NEWSLETTER NOW
          </p>

          <p className="text-sm text-gray-600 leading-relaxed">
            Get E-mail updates about our latest shop and special offers
          </p>

          <div className="flex flex-col sm:flex-row w-full mt-5 gap-3 sm:gap-0">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl sm:rounded-l-xl sm:rounded-r-none px-4 py-3 border border-gray-300 outline-none"
            />

            <Link
              to="/Se_Connecter"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full bg-[#88c74a] hover:bg-[#76b03f] transition text-white rounded-xl sm:rounded-l-none sm:rounded-r-xl px-6 py-3"
                text="Subscribe"
              />
            </Link>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500 px-4">
        © 2026 Kaay Nduggu. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;