import ResCard from "./ResCard"
import { useState, useEffect, useContext } from "react"
import FakeCard from "./FakeCard"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { RES_URL_MUMBAI } from "../utils/constants"
import { RES_URL_BENGALURU } from "../utils/constants"
import userContext from "../utils/userContext"

const Body = () => {
    const [restaurents, setRestaurents] = useState([])
    const [filteredRestaurents, setFilteredRestaurents] = useState([])
    const [ searchValue, setSearchValue] = useState('')

    const [city, setCity] = useState("Bengaluru")
    const onlineStatus = useOnlineStatus()

    const {setUserName, userInfo} = useContext(userContext)

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(RES_URL_BENGALURU)

        const json = await data.json()
          setRestaurents(json?.data?.items)
          setFilteredRestaurents(json?.data?.items)

    }

    if (onlineStatus === false) 
        return ( <h1>You are offline, check your internet connection</h1>)

        return restaurents.length === 0 ? <FakeCard /> : (<div className="body-container">
            <button
        type="button"
        className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 m-2"
        // onClick={setCity("Bengaluru")}
      >
        Bengaluru
      </button><button
        type="button"
        className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 m-2"
        // onClick={setCity("Mumbai")}
      >
        Mumbai
      </button><button
        type="button"
        className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 m-2"
        // onChange={setCity("Pune")}
      >
        Pune
      </button>
      <div className="flex mx-auto w-full items-center space-x-2 md:w-1/3 mb-10">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#00b14f]/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search Restaurants" 
                type="text" 
                value={searchValue} 
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    const filterdRes = restaurents.filter(
                        (res) => res.name.toLowerCase().includes(e.target.value.toLowerCase())
                        )
                        setFilteredRestaurents(filterdRes)}  
                }
      ></input>
      <button
        type="button"
        className="rounded-md bg-[#00b14f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00b14f]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b14f]"
        onClick={() => {
          const filterdRes = restaurents.filter(
          (res) => res.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          setFilteredRestaurents(filterdRes)
          } }
        
      >
        search
      </button>
    </div>
            
            {filteredRestaurents.length === 0 && (
                <p className="text-gray-600 font-bold text-center text-lg">
                    Sorry, we couldn't find any results for "{searchValue}"
                </p>
            )}

            <div className="flex flex-wrap justify-around">
                {filteredRestaurents?.map((restaurant) => (
                <Link key={restaurant._id} to={"/restaurents/" + restaurant._id }><ResCard  resData={restaurant}/> </Link>
                ))}
            </div>
           
        </div>
        )
      
    }

    export default Body