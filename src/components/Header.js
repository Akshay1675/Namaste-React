import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";


const Header = () => {

//   const { userInfo } = useContext(userContext)
  const [login, setLogin] = useState("Login")  
  const onlineStatus = useOnlineStatus()

  const cartItems = useSelector((store) => store.cart.items)
    return (
       <div className="flex justify-between items-center shadow-lg mb-4">
          <div className="">
              <img  className="w-40" alt="Logo" src={LOGO_URL}/>  
          </div>
          <div className="nav-items">
             <ul className="flex p-4 m-4 font-medium ">
                {/* <li className="px-4">{(onlineStatus) ? "🟢" : "🔴"}</li> */}
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact</Link>
                </li>
                
                <li className="px-4">
                    <Link to={"/glocery"}>Glocery</Link>
                </li>
                <button onClick={() => (login === "Login" ? setLogin("Logout") : setLogin("Login"))} className="px-4">{login}</button>
                {/* <li className="m-4">{userInfo}</li> */}
                <li className="px-6 font-bold flex">
                    <Link to={"/cart"}><ShoppingBag color="#00b14f" /></Link>
                    <h1 className="ml-1"> - {cartItems.length}</h1>
                </li>
             </ul>
          </div>
       </div> 
    )
}

export default Header;