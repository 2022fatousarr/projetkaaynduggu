import {Link} from "react-router-dom";
import Button from "../components/parties/boutton"
import Fruits from "../components/view/fruits"


function ShopPage() {
  return (
    <div>
      

    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 ">Shop </h1>
      <div className=" border-2 w-8 text-[#88c74a]"></div>
      
      
      <Fruits />
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

export default ShopPage
