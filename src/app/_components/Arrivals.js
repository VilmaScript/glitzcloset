"use client"
import { useProducts } from "@/context/ProductsContext";
import Product from "./Product";

 function Arrivals()  {
    // Fetch products without caching
     const { products, loading } = useProducts();
   
     if (loading) {
       return <div className="flex items-center justify-center "><Loader /></div>;
     }
   
    
  return (
    <div className="my-14 ">
        <h2 className={`font-eb-garamond text-primary text-3xl border-primary border-b-2`}>Shop New Arrivals</h2>
        <div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mt-10 md:px-28 ">
        <Product
             imageWidth={250} 
             imageHeight={250} 
             sliceRange={[2,6]} 
             showCategoryButton={false}
             topValue="-top-12"
            />
    </div>
        </div>
    </div>
  )
}

export default Arrivals