import RestaurentMenuCard from "./RestaurentMenuCard"
import { useParams } from "react-router-dom"
import useResMenu from "../utils/useResMenu"
import FakeCard from "./FakeCard"
import ScrollToTop from "./ScrollToTop"

const RestaurentsInfo = () => {

    const {resid} = useParams()

    const resMenuInfo = useResMenu(resid)
    
     return (resMenuInfo === null) ? 
     <>
     <FakeCard />
     <ScrollToTop />
     </> : 
       (<div className="">
            <h1 className=" text-center font-bold text-2xl ml-8 mt-4">{resMenuInfo[0]?.brandName}</h1>
            <h2 className=" font-bold text-xl  text-center m-4">DISHES</h2>
            <div className="bg-[#f7f7f7]">
            <h1 className="font-extrabold text-2xl">Today's Offer</h1>
            <div className="flex flex-wrap ml-40  ">
                
            {resMenuInfo?.map((menu) => (<RestaurentMenuCard key={menu._id} menuData={menu}/>))}
            </div>
            </div>
        </div>
    )
}

export default RestaurentsInfo