"use client"
import { eb_garamond_init } from "../layout"; 
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { useProducts } from "@/context/ProductsContext";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 px-28">
      {products.slice(3,11).map((product, i) => (
        <div
          key={product._id}
          className="bg-white inline-block p-5 relative group"
        >
          {/* Display the first image or a placeholder if images are missing */}
          <div className=" ">
          <Image
            className="object-cover w-[250px] h-[250px]"
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
          <div className="p-1.5">
          <p className="text-primary font-medium">{product.name}</p>
          <p className="text-secondary text-sm font-medium">${product.price}.00 USD</p>
          </div>

          </div>
          <div className="relative">
          
            <div className="absolute left-0 right-0 -top-24 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10 flex justify-center gap-x-4">
              <Link
                href={`/product/${product.slug}`}
                className="bg-white text-secondary  py-1 px-1.5 rounded-2xl text-xs flex gap-x-2 items-center"
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
        </div>
    </div>
  )
}

export default Arrivals