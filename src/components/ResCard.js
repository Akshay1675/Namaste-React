import { CDN_URL } from "../utils/constants"

const ResCard = (props) => {

    const {resData} = props
    return <div className=" mx-4 h-[300px] w-[300px]  rounded-md hover:border hover:border-gray-200 hover:shadow-lg m-4 mb-3 p-3 bg-white  ">
        <div className=""> 
            <img className="h-[188px] w-full rounded-md object-cover" alt="logo" src={resData.imageUrl}/>
        </div>
        <h3 className="font-bold text-lg mt-2">{resData.name}</h3>
        <h4>{resData.city}</h4>
        <h4 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{resData.description}</h4>
        
    </div>
}

export default ResCard