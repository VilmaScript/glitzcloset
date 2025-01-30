"use client"
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { eb_garamond_init } from "../layout";
import { IoCartOutline } from "react-icons/io5";
const navLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Shop",
    path: "/shop"
  },
  {
    title: "About",
    path: "/cart"
  },
  {
    title: "Profile",
    path: "/profile"
  }
]

const Navbar = () => {
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };


  return (
    <div className=" py-4">
      <div className="flex justify-around items-center">
        <CiSearch className="text-[#D2B48C] text-2xl" />
        <div>
          <h1 className={`text-5xl  ${eb_garamond_init.variable} custom-heading font-medium text-[#D2B48C] mb-4`}>GLITZINTERIORS</h1>
          <div className="flex justify-center gap-x-8 ">
            {navLinks.map((item) => <Link className={`font-normal ${pathname === item.path ? "text-[#705126]" : "text-[#4B4B4B]"} text-lg`} key={item.title} href={item.path}>{item.title}</Link>)}
          </div>
        </div>
        <div className="flex gap-x-6">
          <FaTwitter className="text-[#D2B48C]" />
          <IoLogoFacebook className="text-[#D2B48C]" />
          <FaInstagram className="text-[#D2B48C]" />
          <IoCartOutline className="text-[#D2B48C]" />

        </div>
      </div>

    </div>

  )
}

export default Navbar