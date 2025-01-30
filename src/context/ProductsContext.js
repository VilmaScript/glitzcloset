"use client"
import { createContext, useContext, useEffect, useState, } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    // Fetch product data
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(groq`*[_type == "product"]`);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
   


    return <ProductsContext.Provider value={{products,loading }}>
        {children}
    </ProductsContext.Provider>
}


// Custom hook for accessing the cart context
export const useProducts = () => useContext(ProductsContext);