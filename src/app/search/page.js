"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Loader from "../_components/Loader";

export default function SearchPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // ✅ Track if user has searched

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setHasSearched(true); // ✅ Mark that a search was submitted

    try {
      const query = groq`
        *[_type == "product" && lower(category) match lower($category)] | order(_createdAt desc)
      `;
      const data = await client.fetch(query, { category: searchTerm.trim() });
      setProducts(data);
    } catch (error) {
      console.error("Search failed:", error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8 ">
      <form onSubmit={handleSearch} className="flex gap-2 mb-6 mt-10">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 placeholder:text-secondary border-b border-primary focus:outline-none focus:border-black py-1 bg-transparent"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <Loader />
        </div>
      ) : hasSearched && products.length === 0 ? (
        <p className="text-center text-secondary mt-10">No products found...Search only by category</p>
        
      ) : (
        <>
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white inline-block p-5 relative group"
            >
              <div className="relative" style={{ width: "200px", height: "200px" }}>
                <FaRegHeart
                  onClick={() => handleFavorite(product)}
                  className="-mb-8 cursor-pointer hover:text-primary absolute z-10 mt-4 mx-2 text-white"
                />

                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse z-10 rounded-md" />
                )}

                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={
                      product.images?.length
                        ? urlFor(product.images[0]).url()
                        : "/placeholder.jpg"
                    }
                    width={200}
                    height={200}
                    alt={product.slug}
                    onLoad={() => setImageLoaded(true)}
                    className={`object-cover w-full h-full transition-all duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>

                <div className="p-1.5">
                  <p className="text-primary font-medium">{product.name}</p>
                  <p className="text-secondary text-sm font-medium">
                    ${product.price}.00 USD
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
