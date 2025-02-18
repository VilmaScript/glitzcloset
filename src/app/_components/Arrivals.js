"use client"
import { eb_garamond_init } from "../layout"; 
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { useProducts } from "@/context/ProductsContext";
import Product from "./Product";

 function Arrivals()  {
    // Fetch products without caching
     const { products, loading } = useProducts();
   
     if (loading) {
       return <p>Loading...</p>;
     }
   
     console.log(products);
   
    
  return (
    <div className="my-14">
        <h2 className={`${eb_garamond_init.variable} text-primary text-3xl custom-heading border-primary border-b-2`}>Shop New Arrivals</h2>
        <div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mt-10 px-28">
        <Product
             imageWidth={250} 
             imageHeight={250} 
             sliceRange={[3, 11]} 
             showCategoryButton={false}
             topValue="-top-12"
            />
    </div>
        </div>
    </div>
  )
}

export default Arrivals