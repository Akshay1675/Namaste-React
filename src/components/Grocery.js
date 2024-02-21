import useGrocery from "../utils/useGrocery"
import GroceryCard from "./GroceryCard"
import FakeCard from './FakeCard'
// import useDryFrootData from "../utils/useDryFrootData"
import { useState } from "react"
// import useBiscuit from "../utils/useBiscuit"
const Grocery = () => {

// const [pageData, setPageData] = useState("groceryData")
// const groceryData = useGrocery()
// const dryfrootData = useDryFrootData()
// const biscuitData = useBiscuit()
    return
    (
     <div>  
     
    <div className="grocery-component">
        <div className="flex flex-wrap m-4 ">
        {/* {
            groceryData.map((grocery) => <GroceryCard key={grocery.productId} data={grocery} />)} */}
          {/* {pageData === "dryfrootData" &&
            dryfrootData.map((dryfroot) => <GroceryCard key={dryfroot.productId} data={dryfroot} />)}
          {pageData === "biscuitData" &&
            biscuitData.map((biscuit) => <GroceryCard key={biscuit.productId} data={biscuit} />)} */}
        </div>
    </div>
    </div>  

    
)
}

export default Grocery