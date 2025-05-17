"use client"
import { createContext, useContext, useEffect, useState, } from "react";

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [category, setCategory] = useState("All"); // Track selected category
  const [page, setPage] = useState(1);
  const limit = 8; // 8 products per page
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([])

    
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `/api/product?page=${page}&limit=${limit}&category=${category}`
          
        );
        const data = await res.json();
        setProducts(data.products);
        setTotalProducts(data.total);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [page, category]); // Re-fetch when page or category changes

  
    useEffect(() => {
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorite(stored);
    }, []);
  
    const addFavorite = (item) => {
      const exists = favorite.find((fav) => fav._id === item._id);
      if (!exists) {
        const updated = [...favorite, item];
        setFavorite(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
      }
      
    };
  
    const removeFavorite = (id) => {
      const updated = favorite.filter((item) => item._id !== id);
      setFavorite(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    };

    return <ProductsContext.Provider value={{products,loading,favorite, setFavorite, category, setCategory, totalProducts, page, addFavorite,removeFavorite, setPage}}>
        {children}
    </ProductsContext.Provider>
}


// Custom hook for accessing the cart context
export const useProducts = () => useContext(ProductsContext);



