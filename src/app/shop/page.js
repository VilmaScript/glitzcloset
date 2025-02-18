"use client"
import { useProducts } from "@/context/ProductsContext";
import MainContent from "../_components/MainContent";
import ShopHero from "../_components/ShopHero";
import SideBar from "../_components/SideBar";

export default function Shop() {
  const {  selectedCategory, setSelectedCategory } = useProducts(); 
  
  return (
    <div className="overflow-hidden -mx-12">
      <ShopHero />
      
      <div className="grid grid-cols-[15vw_1fr] gap-6 px-12 mt-8 min-h-screen">
  
        <div className="h-[70vh] ">
          <SideBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        </div>

        {/* Main content scrolls normally */}
      <MainContent selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
    </div>
  );
}
