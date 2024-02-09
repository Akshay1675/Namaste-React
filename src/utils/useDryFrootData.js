import { useEffect, useState } from "react"
import { DRYFROOT_URL } from "./constants"


const useDryFrootData = () => {

    const [dryfroot, setDryfoot] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(DRYFROOT_URL)
        const json = await data.json()
        setDryfoot(json?.pageProps?.plpData?.products)
    }

    return dryfroot
}

export default useDryFrootData