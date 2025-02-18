import { FaInstagram, FaLongArrowAltRight, FaTwitter } from "react-icons/fa"
import { eb_garamond_init } from "../layout"
import { IoLogoFacebook } from "react-icons/io"


const Footer = () => {
  return (
   <div className="bg-primary">
     <div className="bg-primary -mx-12 px-8 pt-8 text-white">
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-x-10 ">
        <ul className="tracking-wide space-y-2 ">
          <li className="font-medium">Quicklinks</li>
          <li>Shop</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Profile</li>
        </ul>
        <ul className="tracking-wide space-y-2">
          <li className="font-medium">Contact us</li>
          <li>Address: Tampa FL, USA</li>
          <li>Phone: +1 (455) 339-234</li>
          <li>Email: glitzinteriors@gmail.com </li>
        </ul>
       <div className="">
       <h2 className={`text-4xl  ${eb_garamond_init.variable} custom-heading font-medium text-white mt-5 sm:mt-0 mb-2`}>GLITZINTERIORS</h2>
       <p className="text-sm text-gray-100">Glitz Interior brings elegance and style to every space, transforming homes with timeless designs and modern aesthetics. We specialize in curated decor that blends luxury with comfort, creating interiors that reflect your personality. Let us turn your vision into reality!</p>
       <div className="flex gap-x-6 mt-5">
          <FaTwitter />
          <IoLogoFacebook />
          <FaInstagram />
        </div>
       </div>

      </div>
      <div className="flex justify-between">
        <div className="relative w-full max-w-sm">
          <p className="mb-2 font-medium mt-5">Subscribe to Our Newsletter</p>
          <div className="relative w-full max-w-sm ">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-4 pr-10 border-[#D2B48C] bg-inherit border placeholder-white text-white shadow-sm focus:outline-none focus:ring-3 focus:ring-[#D2B48C] focus:border-[#A37B5C]"
          />
            <FaLongArrowAltRight className="absolute top-1/2 right-3 transform-translate-y-1/2 text-secondary" />
          </div>
        
        </div>
       <div>
       
      
       </div>
      </div>
      
    </div>
    <p className="bg-tertiary px-0 text-white text-center -mx-12">CopyRight &copy; 2025 GlitzInteriors, All Rights Reserved.</p>
   </div>
  )
}

export default Footer