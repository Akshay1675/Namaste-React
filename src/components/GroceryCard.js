import { GRO_LOGO_URL } from "../utils/constants"
const GroceryCard = (props) => {
    const {data} = props
    
    
    return(
        <div className="border border-solid border-gray-200 m-2 p-4 w-[250px] shadow-md mx-auto">
        <div className=""> 
            <img className="mx-auto h-36" alt={data.name} src={`${GRO_LOGO_URL}${data.sKUs[0].productImageKey}_5_P.jpg`} />
        </div>
        <h3 className="mt-2 font-bold">{data.name} : {data.sKUs[0].variantTextValue}</h3>
        <div className="text-xs mt-4">
            <div className="flex  justify-between">
                <div className=" w-28 h-5 flex flex-wrap justify-between">
                  <p>MRP</p>
                  <p>OUR PRICE</p>
                </div>
                  
            </div>
            <div className="flex w-20  flex-wrap justify-between">
            <p>₹ {parseInt(data.sKUs[0].priceMRP)}</p>
            <p className="font-bold">₹ {parseInt(data.sKUs[0].priceSALE)}</p> 
            </div>
            <div className="font-bold text-green-900 text-sm  w-12 h-14 flex justify-center items-center flex-col bg-gray-100">
                  <p>₹ {parseInt(data.sKUs[0].savePrice)} </p>
                  <p>OFF</p>
                </div>
        </div>
        {/* <h4>{resData.city}</h4>
        <h4>{resData.description}</h4> */}
        
    </div>
    )
}

export default GroceryCard