import { useEffect, useState } from "react"
import { GRO_URL } from "./constants"
const useGrocery = () => {

    const [grocery, setGrocery] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(GRO_URL)
        const json = await data.json()

        setGrocery(json?.pageProps?.plpData?.products)
        
    }

    return grocery
    
}

export default useGrocery