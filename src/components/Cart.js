import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store => store.cart.items))
    const user = useSelector((store) => store.user)

    const [orderPlaced, setOrderPlaced] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(clearCart())
    }

    const handleSubmit = () => {
        setOrderPlaced(true)
        notify()
        dispatch(clearCart())
        
    }
    const notify = () => {
        toast.success('Order Placed successfully!', {
            icon: '🎉', // You can customize the icon here
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            duration: 5000, // Duration of the notification
        });
    };


    const total = cartItems.reduce((acc, item) => acc + item.sellingPrice, 0);

    const deliveryCharge = 15;
    const taxRate = 0.05; 
    const tax = total * taxRate;
    const final = total + deliveryCharge + tax; 

    return <div className="text-center m-2 p-2">
        <Toaster position="top-center" />

    <h1 className="font-bold text-2xl">Cart </h1>
    {cartItems.length === 0 ? <h1>Nothing is here! Add items</h1> : <><button
        type="button"
        onClick={handleClick}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-4" 
        data-testid="remove-btn"
      >
        Remove
      </button>
      <div className="w-6/12 ml-[325px]">
        {cartItems.map((item) => ( 
            <CartItem key={item._id} CartItem={item} data-testid="cart-item"/>
        ))}
    </div>
      <div className="">
      <label className="font-semibold">Total Price - ₹ {total}</label>
                  <p>Delivery Charges - ₹ {deliveryCharge}</p>
                  <p>Tax - ₹ {tax.toFixed(2)}</p>
                  <label>Final Pricess - ₹ {final.toFixed(2)}</label>
  
      </div>
                       { !user ? <h1 className="font-bold text-xl">Login to to Place order</h1> : <button
                            type="button"
                            onClick={handleSubmit}
                            className="rounded-md bg-[#00b14f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00b14f]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b14f] mt-4"
                            data-testid="place-order-btn"
                        >
                            Place Order
                        </button>}
    
      </>}
    
    

    
    
</div>
}

export default Cart