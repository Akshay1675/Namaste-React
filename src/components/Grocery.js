import useGrocery from "../utils/useGrocery"
import GroceryCard from "./GroceryCard"
import FakeCard from './FakeCard'
import useDryFrootData from "../utils/useDryFrootData"
import { useState } from "react"
import useBiscuit from "../utils/useBiscuit"
const Grocery = () => {

const [pageData, setPageData] = useState("groceryData")
const groceryData = useGrocery()
const dryfrootData = useDryFrootData()
const biscuitData = useBiscuit()
    return (groceryData === null) ? <FakeCard /> : 
    (
    <div>  
    <button className="p-2 m-2 border-gray-400 cursor-pointer border rounded-lg hover:shadow-lg ml-6" onClick={()=> setPageData("groceryData")}>Rice & Rice Products</button>
    <button className="p-2 m-2 border-gray-400 cursor-pointer border rounded-lg hover:shadow-lg" onClick={()=> setPageData("dryfrootData")}>Dry Fruits</button>
    <button className="p-2 m-2 border-gray-400 cursor-pointer border rounded-lg hover:shadow-lg " onClick={()=> setPageData("biscuitData")}>Biscuits</button>
    <div className="grocery-component">
        <div className="flex flex-wrap m-4 ">
        {pageData === "groceryData" &&
            groceryData.map((grocery) => <GroceryCard key={grocery.productId} data={grocery} />)}
          {pageData === "dryfrootData" &&
            dryfrootData.map((dryfroot) => <GroceryCard key={dryfroot.productId} data={dryfroot} />)}
          {pageData === "biscuitData" &&
            biscuitData.map((biscuit) => <GroceryCard key={biscuit.productId} data={biscuit} />)}
        </div>
    </div>
    </div>  
    
)
}

export default Grocery