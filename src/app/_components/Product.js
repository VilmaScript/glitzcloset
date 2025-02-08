"use client"
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { eb_garamond_init } from "../layout";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useProducts } from "@/context/ProductsContext";

function Product() {
   // Fetch products without caching
   const { products, loading } = useProducts();
   
   if (loading) {
     return <p>Loading...</p>;
   }
 
   console.log(products);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {products.slice(3,6).map((product, i) => (
        <div
          key={product._id}
          className="bg-white inline-block p-5 relative group"
        >
          {/* Display the first image or a placeholder if images are missing */}
          <div className=" w-[250px] h-[300px]">
          <Image
            className="object-cover w-full h-full"
            src={
              product.images?.length
                ? urlFor(product.images[0]).url()
                : "/placeholder.jpg" // Add a default placeholder image
            }
            width={250}
            height={350}
            alt={product.slug}
            layout="fixed"
          />
           <button  className="bg-primary px-2.5 py-0.5 text-white track-wider w-full ">Shop {product.name} </button>
          </div>
          <div className="relative">
          
            <div className="absolute left-0 right-0 -top-10 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10 flex justify-center gap-x-4">
              <Link
                href={`/product/${product.slug}`}
                className="bg-white text-secondary py-1 px-1.5 rounded-2xl text-xs flex gap-x-2 items-center"
              >
                Quick View <BsArrowsFullscreen />
              </Link>
              <button className="bg-white text-secondary py-1 px-1.5 rounded-2xl text-xs flex gap-x-2 items-center">
                Add to Cart <IoBagHandleOutline />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
