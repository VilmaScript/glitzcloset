"use client";
import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { LuSofa } from "react-icons/lu";
import { GiFigurehead, GiCandleLight, GiThreeLeaves, GiPorcelainVase } from "react-icons/gi";
import { GoMirror } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";
import { IoMdClose } from "react-icons/io"; // Close icon

const categories = [
  { name: "All", icon: <CiBoxList /> },
  { name: "Chairs", icon: <LuSofa /> },
  { name: "Figurines", icon: <GiFigurehead /> },
  { name: "Mirrors", icon: <GoMirror /> },
  { name: "Lights", icon: <GiCandleLight /> },
  { name: "Vases", icon: <GiPorcelainVase /> },
  { name: "Faux Plants", icon: <GiThreeLeaves /> },
  { name: "Faux books", icon: <IoBookSharp /> },
  { name: "Tables", icon: <MdTableRestaurant /> },
];

const SideBar = ({ setCategory, isMobile = false, isOpen = false, onClose }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (currentCategory) => {
    setActiveCategory(currentCategory);
    setCategory(currentCategory);
    if (onClose) onClose(); // Close mobile sidebar on selection
  };

  return (
    <div
      className={`
        ${isMobile
          ? `fixed top-0 animate-fadeIn left-0 z-50 h-full w-[75%] max-w-xs bg-white transform transition-transform duration-300 shadow-lg
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`
          : "w-[15vw] fixed top-[7rem] h-auto"}
        custom-scrollbar overflow-y-auto 
      `}
    >
      {/* Mobile close button */}
      {isMobile && (
        <div className="flex justify-end p-4">
          <IoMdClose
            className="text-2xl text-primary cursor-pointer"
            onClick={onClose}
          />
        </div>
      )}

      <ul className="mt-4 ps-3 cursor-pointer text-gray-900 leading-loose">
        {categories.map(({ name, icon }) => (
          <li
            key={name}
            className={`flex items-center cursor gap-x-2 me-4 px-2 py-1 mb-2 transition-all duration-200 text-primary
              ${activeCategory === name ? "bg-primary text-white" : "hover:text-secondary hover:scale-95"}`}
            onClick={() => handleCategoryClick(name)}
          >
            {icon} {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
