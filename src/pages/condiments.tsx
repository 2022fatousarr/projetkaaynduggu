import {Link} from "react-router-dom";
import Button from "../components/parties/boutton"
import Condiments from "../components/view/Condiments";



function CondimentsPage() {
  return (
    <div>

    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Shop Page</h1>
      <p className="text-gray-600 mb-8">Découvrez notre sélection de condiments frais !</p>
      
      <Condiments />
    </div>
    <div className="container mx-auto ">
      <Link to="/shop">
       <Button className="mx-2 px-4 bg-gray-200 text-black border border-gray-200 hover:bg-[#88c74a] hover:text-white " text="1" />
      </Link>
      <Link to="/legumes">
      <Button className="mx-2 px-4 bg-gray-200 text-black border border-gray-200 hover:bg-[#88c74a] hover:text-white" text="2" />
      </Link>
      <Link to="/condiments">
      <Button className="mx-2 px-4 bg-gray-200 text-black border border-gray-200 hover:bg-[#88c74a] hover:text-white " text="3" />
      </Link>
    </div>
      
    </div>
  )
}

export default CondimentsPage
