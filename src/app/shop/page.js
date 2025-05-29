"use client";

import { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import MainContent from "../_components/MainContent";
import SideBar from "../_components/SideBar";
import { RiMenuSearchLine } from "react-icons/ri";

export default function Shop() {
  const { category, setCategory,loading, setPage, page, totalProducts } = useProducts(); 
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="overflow-hidden -mx-12 relative">
      
      {/* Desktop layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[15vw_1fr] gap-6 px-12 mt-8 min-h-screen">

        {/* Sidebar for desktop */}
        <div className="h-[70vh] hidden lg:flex overflow-y-auto">
          <SideBar setCategory={setCategory} />
        </div>

        <div >
          {/* Mobile menu icon */}
         <div className=" lg:hidden cursor-pointer flex gap-2 items-center mb-4">
         <RiMenuSearchLine 
            className="text-xl text-primary  block "
            onClick={() => setShowSidebar(true)}
          />
          <p>Browse categories</p>
         </div>
          {/* Main content */}
          <MainContent 
            totalProducts={totalProducts} 
            page={page} 
            setPage={setPage} 
            category={category} 
            setCategory={setCategory} 
            loading={loading}
          />
        </div>
      </div>

      {/* Sidebar for mobile */}
      {showSidebar && (
        <SideBar 
          isMobile={true} 
          isOpen={showSidebar} 
          onClose={() => setShowSidebar(false)} 
          setCategory={setCategory} 
        />
      )}
    </div>
  );
}
