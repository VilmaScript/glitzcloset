import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="relative bg-[#D2B48C] text-[#4e2e15] px-2 py-2">
      <div className="border-2 border-white px-6 py-2">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden">
        <Image src="/review1.jpg" alt="Review Image" layout="fill" objectFit="cover" />
      </div>
      <div className="pt-6">
        <h3 className="font-medium mb-3 text-center">Laura C</h3>
        <p className="text-sm mb-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia dolorem omnis non cumque expedita fugiat 
        </p>
        <div className="flex justify-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;