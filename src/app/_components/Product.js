"use client"

import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useProducts } from "@/context/ProductsContext";
import { useCart } from "@/context/CartContxt";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

function Product({
  imageWidth,
  imageHeight,
  sliceRange,
  showCategoryButton,
  topValue
}) {
  const { dispatch } = useCart();
  const { products, favorite, addFavorite } = useProducts();
  const [imageLoaded, setImageLoaded] = useState(false);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success('Added to cart!')
  };


  const handleFavorite = (product) => {
    const exists = favorite.some((f) => f._id === product._id);

    if (exists) {
      toast.error("Already added to favorites!");
      return;
    }

    addFavorite(product);   // <‑‑ calls the context helper
    toast.success("Added to favorites!");
  };
  return (
    <>
      {products.slice(...sliceRange).map((product, i) => (
        <div
          key={product._id}
          className="bg-white inline-block p-5 relative group"
        >

          <div
            className="relative"
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          >
            <FaRegHeart
              onClick={() => handleFavorite(product)}
              className="-mb-8 cursor-pointer hover:text-primary absolute z-10 mt-4 mx-2 text-white"
            />

            {/* Skeleton placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse z-10 rounded-md" />
            )}

            <Image
              src={
                product.images?.length
                  ? urlFor(product.images[0]).url()
                  : "/placeholder.jpg"
              }
              width={imageWidth}
              height={imageHeight}
              alt={product.slug}
              onLoad={() => setImageLoaded(true)} // once loaded, hide skeleton
              className={`object-cover w-full h-full transition-all duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"
                }`}
            />

            {showCategoryButton ? (
              <Link href="/shop">
                <button className="bg-primary px-2.5 py-0.5 text-white track-wider w-full">
                  Shop {product.category}
                </button>
              </Link>
            ) : (
              <div className="p-1.5">
                <p className="text-primary font-medium">{product.name}</p>
                <p className="text-secondary text-sm font-medium">
                  ${product.price}.00 USD
                </p>
              </div>
            )}
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

