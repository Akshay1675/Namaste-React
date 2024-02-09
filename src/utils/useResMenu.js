import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"


const useResMenu = (resid) => {

    const [resMenu, setResMenu] = useState(null)

    useEffect(() =>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resid)
        const json = await data.json()

        setResMenu(json?.data?.items)
    }
    return resMenu
}

export default useResMenu
