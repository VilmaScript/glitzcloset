"use client"

import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useProducts } from "@/context/ProductsContext";
import { useCart } from "@/context/CartContxt";

function Product({
  imageWidth ,
  imageHeight ,
  sliceRange,
  showCategoryButton,
  topValue
}) {
  const { dispatch } = useCart();
  const { products, loading, selectedCategory } = useProducts();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (loading) {
    return <p>Loading...</p>;

    
  }

  // Apply category filtering
  const filteredProducts =
    selectedCategory === "All Decor"
      ? products // Show all products
      : products.filter((product) => product.category === selectedCategory);

  
  return (
    <>
      {filteredProducts.slice(...sliceRange).map((product, i) => (
        <div
          key={product._id}
          className="bg-white inline-block p-5 relative group"
        >
          {/* Display the first image or a placeholder if images are missing */}
          <div className="relative" style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }} >
            <Image
              src={
                product.images?.length
                  ? urlFor(product.images[0]).url()
                  : "/placeholder.jpg" // Add a default placeholder image
              }
              width={imageWidth}
              height={imageHeight}
              alt={product.slug}
              layout="fixed"
              className="object-cover w-full h-full"
            />
            {showCategoryButton && (
              <button className="bg-primary px-2.5 py-0.5 text-white track-wider w-full">
                Shop {product.category}
              </button>

            )}
            {!showCategoryButton && (
              <div className="p-1.5">
                <p className="text-primary font-medium">{product.name}</p>
                <p className="text-secondary text-sm font-medium">${product.price}.00 USD</p>
              </div>)}
          </div>

          <div className="relative">
            <div className={`absolute left-0 right-0 ${topValue} opacity-0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10 flex justify-center gap-x-4`} >
              <Link
                href={`/product/${product.slug}`}
                className="bg-white text-secondary py-1 px-1.5 rounded-2xl text-xs flex gap-x-2 items-center hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                Quick View <BsArrowsFullscreen />
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="bg-white text-secondary py-1 px-1.5 rounded-2xl text-xs flex gap-x-2 items-center hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                Add to Cart <IoBagHandleOutline />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;

