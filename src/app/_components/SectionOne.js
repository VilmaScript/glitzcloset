"use client";

import { FaLongArrowAltRight } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className=' -mx-12 md:-mx-0 bg-primary mt-20 flex flex-col items-center justify-center h-[40vh] p-4 text-center'>
      <h2 className={`md:text-5xl text-4xl text-white text-center font-eb-garamond `}>Join our Email List Today</h2>
      <p className='text-gray-100 mb-4'>Be the first to know about our new collections and exclusive offers.</p>
      <div className="relative w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full py-2 px-4 pr-10 border-secondary bg-inherit border placeholder-white text-white shadow-sm focus:outline-none focus:ring-3 focus:ring-secondary focus:border-primary"
        />
        <FaLongArrowAltRight className="absolute top-1/2 right-3 transform -translate-y-1/2 text-secondary" />
      </div>

    </div>

  )
}

export default SectionTwo