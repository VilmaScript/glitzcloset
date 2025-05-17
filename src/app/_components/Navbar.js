"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "About", path: "/about" },
  { title: "Profile", path: "/profile" }
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  return (
    <div className="sticky top-0 -mx-12 py-2 bg-white z-50 shadow-md">
      <div className="flex justify-around items-center">
        <Link href="/search">
          <CiSearch className="text-primary text-2xl" />
        </Link>

        <div className="">
          <h1 className="md:text-5xl text-3xl font-eb-garamond font-medium text-primary mb-4">GLITZINTERIORS</h1>
          <div className="justify-center items-center gap-x-8 hidden md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`font-normal ${pathname === item.path ? "text-[#705126]" : "text-secondary"} text-lg`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-x-6 items-center">
          <FaTwitter className="text-primary hidden md:block hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer" />
          <IoLogoFacebook className="text-primary hidden md:block hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer" />
          <FaInstagram className="text-primary hidden md:block hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer" />
          
          <Link href="/cart">
            <IoCartOutline className="hover:scale-105 active:scale-95 transition-transform duration-300 text-primary text-2xl cursor-pointer" />
          </Link>

          {/* Mobile menu icon */}
          <LuMenu
            onClick={() => setMenuOpen(true)}
            className="text-primary block md:hidden text-2xl cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary backdrop-blur-sm animate-fadeIn bg-opacity-80 z-50 flex flex-col items-center space-y-8 ps-8  text-white text-xl md:hidden transition-all">
          {/* Close button */}
          <IoIosClose
            onClick={() => setMenuOpen(false)}
            className="absolute left-6 top-4 text-white text-3xl cursor-pointer hover:scale-110 transition-transform duration-300"
          />

          {/* Mobile nav links */}
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition-colors duration-200 me-12"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
