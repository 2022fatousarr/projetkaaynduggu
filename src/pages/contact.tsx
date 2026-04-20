import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    
    <h1 className="text-3xl font-bold mb-6">Pour nous joindre</h1>
    <p>Vous pouvez nous contacter via les coordonnées suivantes :</p>
    <p>Email: contact@tkaaynduggu.com</p>
    <p>Téléphone: +221 33 845 67 89</p>
    <p>Nos differents réseaux sociaux :</p>
    <p> <FaFacebookSquare className="text-blue-600 mr-2" /> Facebook: https://www.facebook.com/kaaynduggu</p>
    <p> <FaSquareXTwitter className="text-blue-600 mr-2" /> Twitter: https://twitter.com/kaaynduggu</p>
    <p> <FaInstagramSquare className="text-pink-600 mr-2" /> Instagram: https://www.instagram.com/kaaynduggu</p>
    <p> <AiFillTikTok className="text-black mr-2" /> TikTok: https://www.tiktok.com/@kaaynduggu</p>
    </div>
  )
}

export default ContactPage