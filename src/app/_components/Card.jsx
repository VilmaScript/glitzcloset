import Image from "next/image"
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Card = ({text1, text2, img}) => {
  return (
    <div className="relative w-52 h-60 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
    <div className="absolute flex justify-between bottom-0 bg-white bg-opacity-90 px-2 py-1  text-black w-3/4 items-center ">
      <div className="">
        <p className="text-sm font-gray-800 font-normal">{text1}</p>
        <p className="text-xs font-thin font-gray-700">{text2}</p>
      </div>
      <IoArrowForwardCircleOutline className="text-xl text-amber-300" />
    </div>
  </div>
  
  )
}

export default Card