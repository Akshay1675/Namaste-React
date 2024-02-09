import { useEffect, useState } from "react"
import { Biscuit_URL } from "./constants"
const useBiscuit = () => {

    const [biscuit, setBiscuit] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(Biscuit_URL)
        const json = await data.json()

        setBiscuit(json?.pageProps?.plpData?.products)
        
    }

    return biscuit
    
}

export default useBiscuit