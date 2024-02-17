import { LOGO_URL } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";


const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  const [login, setLogin] = useState("Login")  
  const onlineStatus = useOnlineStatus()

  const cartItems = useSelector((store) => store.cart.items)

  const user = useSelector((store) => store.user)

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
       if (user) {
         
         const {uid, email, displayName, photoURL} = user;
         
         dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
         navigate("/")
 
       } else {
         
         dispatch(removeUser())

       }
     })
       return () => unsubscribe()
   }, []);

   const handleLogout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
   }

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
                    <Link to="/contact">Contact</Link>
                </li>
                
                <li className="px-4">
                    <Link to={"/glocery"}>Glocery</Link>
                </li>
                <button Link={"/login"}   className="px-4">Signup</button>
                {user &&(<button onClick={handleLogout}  className="px-4">Logout</button>)}
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