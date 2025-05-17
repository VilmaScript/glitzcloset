"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaHeart } from "react-icons/fa";
import { useProducts } from "@/context/ProductsContext";
import { urlFor } from "@/sanity/lib/image";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";


const ProfileSideBar = ({
  isMobile = false,           // render in “mobile mode”?
  isOpen = false,             // should the panel be visible?
  onClose,                    // callback for closing (optional)
}) => {
  const { favorite, removeFavorite } = useProducts();
  const router = useRouter();



  const handleRemoveFavorite = (product) => {
    removeFavorite(product._id);  // <‑‑ calls the context helper
    toast.success("Removed from favorites!");
  };

  const handleViewFave = (product) => router.push(`/product/${product.slug}`);

  /* Root class: desktop vs. mobile / slide‑in */
  const rootClass = isMobile
    ? `
      fixed top-0 right-0 z-[99] h-full w-72 max-w-[80%] bg-white shadow-lg
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `
    : "hidden md:block w-72";          // desktop width ~15‑16 rem

  return (
    <div className={rootClass}>
      {/* Close button only needed on mobile */}
      {isMobile && (
        <IoIosClose
          onClick={onClose}
          className="text-3xl text-primary absolute top-4 right-4 cursor-pointer"
        />
      )}

      <p className="my-5 mx-4 text-xl text-primary flex items-center gap-2">
        My Favorites <FaHeart />
      </p>

      <ul className="flex flex-col gap-4 mt-4 px-4 pb-8 overflow-y-auto custom-scrollbar">
        {favorite.map((product) => (
          <li key={product._id} className="flex items-center gap-4">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src={
                  product.images?.length
                    ? urlFor(product.images[0]).url()
                    : "/placeholder.jpg"
                }
                fill
                alt={product.slug}
                className="object-cover cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleViewFave(product)}
              />
            </div>

            <div className="flex-1 flex flex-col group">
              <p className="text-sm text-primary">{product.name}</p>
              <div className="flex gap-10 items-center">
                <span className="text-xs text-secondary">${product.price}</span>
                <IoIosClose
                  onClick={() => handleRemoveFavorite(product)}
                  className="hidden group-hover:block text-primary cursor-pointer"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSideBar;
