
import { eb_garamond_init } from '../layout';
import { FaLongArrowAltRight  } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className='w-full bg-[#A37B5C]  mt-20 flex flex-col items-center justify-center h-[40vh]'>
        <h2 className={`text-5xl text-white text-center  ${eb_garamond_init.variable} custom-heading `}>Join our Email List Today</h2>
        <p className='text-gray-100 mb-3'>Be the first to know about our new collections and exclusive offers.</p>
        <div className="relative w-full max-w-sm">
        <input
        type="email"
        placeholder="Enter your email"
        className="w-full py-2 px-4 pr-10 border-[#D2B48C] bg-inherit border placeholder-white text-white shadow-sm focus:outline-none focus:ring-3 focus:ring-[#D2B48C] focus:border-[#A37B5C]"
      />
      <FaLongArrowAltRight  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#A37B5C]" />
    </div>
    
        </div> 
    
  )
}

export default SectionTwo