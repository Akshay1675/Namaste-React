import { useDispatch } from "react-redux"
import { addToCart } from "../utils/cartSlice"
import toast, { Toaster } from 'react-hot-toast';
import { Plus } from "lucide-react"


const RestaurentMenuCard = (props) => {

    const {menuData} = props

    const dispatch = useDispatch()
    const handleAdd = (menuData) => {
        dispatch(addToCart(menuData))
        notify()
    }
    
    const notify = () => {
      toast.success('Added to cart', {
          icon: '✅', 
          style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#00b14f',
          },
          duration: 2000, 
      });
  };

    return(

        <div className="w-[300px] rounded-md border border-white m-4 p-3 bg-white  hover:border-[#00b14f]">
       <Toaster position="bottom-right" />
      <img
        src={menuData.productImages}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">{menuData.itemName}</h1>
        <p className="mt-2 text-sm text-gray-600">{menuData.brandName}</p>
        <p className="mt-2 text-sm text-gray-600">{menuData.brandCity}</p>
        
        <p className="mt-2 text-sm font-bold text-gray-600">₹{menuData.sellingPrice}</p>
        <button
      type="button"
      className="rounded-full bg-[#00b14f] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00b14f]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b14f] ml-52" onClick={() => handleAdd(menuData)}
    >
      <Plus className="h-4 w-4" />
    </button>
      </div>
    </div>

    )
}

export default RestaurentMenuCard