import { GiWorld } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";

const More = () => {
  return (
    <div className="text-center my-20 p-10 text-white bg-primary">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:px-20  justify-center ">
        <div className="flex flex-col items-center px-4" >
        <GiWorld size={70} className="mb-2"/>
        <h5 className="font-bold">Ethically Sourced</h5>
        <p>All of our Interior decor items are carefully curated from ethical manufacturers around the globe!</p>
        </div>
        <div className="flex flex-col items-center px-4"> 
        <BsCurrencyExchange size={70} className="mb-2"/>
        <h5 className="font-bold">Pay With Your Currency</h5>
        <p>We give you the opportunity to pay with either Euros or dollars, making your shopping experience more seamless.</p>
        </div>
        <div className="flex flex-col items-center px-4">
        <PiPlantLight size={70} className="mb-2"/>
        <h5 className="font-bold">One Tree For Every $10</h5>
        <p>To help our planet. we are planting one tree for every $10 you spend. So lets help our planet together.</p>
        </div>
    </div>
    </div>
  )
}

export default More