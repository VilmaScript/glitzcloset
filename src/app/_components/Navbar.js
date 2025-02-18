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
import CartIcon from "./CartIcon";
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
    path: "/about"
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
    <div className="sticky top-0 -mx-12 py-2 bg-white z-50 shadow-md  ">
      <div className="flex justify-around items-center">
        <CiSearch className="text-primary text-2xl" />
        <div>
          <h1 className={`text-5xl  ${eb_garamond_init.variable} custom-heading font-medium text-primary mb-4`}>GLITZINTERIORS</h1>
          <div className="flex justify-center gap-x-8 ">
            {navLinks.map((item) => <Link className={`font-normal ${pathname === item.path ? "text-[#705126]" : "text-secondary"} text-lg`} key={item.title} href={item.path}>{item.title}</Link>)}
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <FaTwitter className="text-primary hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer" />
          <IoLogoFacebook className="text-primary hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer" />
          <FaInstagram className="text-primary hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer" />
         <CartIcon/>

        </div>
      </div>

    </div>

  )
}

export default Navbar