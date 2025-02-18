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

  // State to keep track of selected category 
   
  const [selectedCategory, setSelectedCategory] = useState("All Decor");
  console.log(selectedCategory);

    return <ProductsContext.Provider value={{products,loading, selectedCategory, setSelectedCategory}}>
        {children}
    </ProductsContext.Provider>
}


// Custom hook for accessing the cart context
export const useProducts = () => useContext(ProductsContext);