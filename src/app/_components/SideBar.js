"use client"
import { useState } from "react";

import PriceRange from "./PriceRange";
import { CiBoxList } from "react-icons/ci";
import { LuSofa } from "react-icons/lu";
import { GiFigurehead } from "react-icons/gi";
import { GoMirror } from "react-icons/go";
import { GiCandleLight } from "react-icons/gi";
import { GiThreeLeaves } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GiPorcelainVase } from "react-icons/gi";

const categories = [
    {
        name: "All Decor",
        icon: <CiBoxList />
    },
    {
        name: "Chairs",
        icon: <LuSofa />
    },
    {
        name: "Figurines",
        icon: <GiFigurehead />
    },
    {
        name: "Mirrors",
        icon: <GoMirror />
    },
    {
        name: "Candles",
        icon: <GiCandleLight />
    },
    { name: "Vases" ,
        icon: <GiPorcelainVase />
    },
    {
        name: "Faux Plants",
        icon: <GiThreeLeaves />
    },
    {
        name: "Faux books",
        icon: <IoBookSharp />
    },
    { name: "Tables",
        icon: <MdTableRestaurant /> 
     },
    { name: "Others" ,
        icon: <BsStars />
    },
   
];

const SideBar = ({ setSelectedCategory }) => {
    const [activeCategory, setActiveCategory] = useState("All Decor");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category);
  }
    return (
        <div className="w-[15vw]">
            <h3 className="font-medium text-2xl text-tertiary">Categories</h3>
            <ul className="mt-4 ps-3 cursor-pointer text-gray-900 leading-loose">
                {categories.map(({name, icon}) => (
                    <li
                        key={name}
                        className={`flex items-center gap-x-2 px-2 py-1 mb-2 transition-all duration-200 text-primary
                            ${activeCategory === name ? "bg-primary text-white" : "hover:text-secondary hover:scale-95"}`}
                        onClick={() => handleCategoryClick(name)}
                    >
                       {icon} {name}
                    </li>
                ))}
            </ul>
            <PriceRange />
        </div>
    );
};

export default SideBar;

