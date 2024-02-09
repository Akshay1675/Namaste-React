import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
 
const CartItem = (props) => {

    const { CartItem } = props
    console.log(CartItem);
    const dispatch = useDispatch()

    const removeItem = (id) => {
      dispatch(removeFromCart(id))
    }
    return (
        <div className=" mx-auto flex max-w-3xl flex-col space-y-4 pb-1  px-2 sm:p-10 sm:px-2 border-b border-gray-400" data-testid="cart-item">
      
      <ul className="flex flex-col divide-y divide-gray-200">
        
          <li className="flex flex-col  sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={CartItem.productImages}
                alt={CartItem.itemName}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{CartItem.itemName}</h3>
                    <p className="text-sm">{CartItem.brandName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{CartItem.sellingPrice}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0" onClick={() => removeItem(CartItem._id)}>
                    {/* <Trash size={16} /> */}
                    <span>Remove</span>
                  </button>
                  
                </div>
              </div>
            </div>
          </li>
        
      </ul>
      {/* <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹48,967</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div> */}
    </div>
    )

}

export default CartItem