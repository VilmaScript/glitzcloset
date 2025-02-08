import { FaInstagram, FaLongArrowAltRight, FaTwitter } from "react-icons/fa"
import { eb_garamond_init } from "../layout"
import { IoLogoFacebook } from "react-icons/io"


const Footer = () => {
  return (
    <div className="bg-primary -mx-12 p-8 text-white">
      <div className="flex justify-between mb-7 items-center">
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
        <h2 className={`text-4xl  ${eb_garamond_init.variable} custom-heading font-medium text-white mb-4`}>GLITZINTERIORS</h2>

      </div>
      <div className="flex justify-between">
        <div className="relative w-full max-w-sm">
          <p className="mb-2 font-medium">Subscribe to Our Newsletter</p>
          <div className="relative w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-4 pr-10 border-[#D2B48C] bg-inherit border placeholder-white text-white shadow-sm focus:outline-none focus:ring-3 focus:ring-[#D2B48C] focus:border-[#A37B5C]"
          />
            <FaLongArrowAltRight className="absolute top-1/2 right-3 transform-translate-y-1/2 text-secondary" />
          </div>
        
        </div>
       <div>
       <div className="flex gap-x-6">
          <FaTwitter />
          <IoLogoFacebook />
          <FaInstagram />
        </div>
        <p className={`mt-4 text-xl ${eb_garamond_init.variable} custom-heading`}>With 💛 by Vilma</p> 
       </div>
      </div>
    </div>
  )
}

export default Footer