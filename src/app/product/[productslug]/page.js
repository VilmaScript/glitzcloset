
"use client";

import { eb_garamond_init } from "@/app/layout";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContxt";
import { useProducts } from "@/context/ProductsContext";
import Link from "next/link";


function EachProduct() {
    const { cart, dispatch } = useCart()
    const { productslug } = useParams(); // Get the slug from URL params
    const [product, setProduct] = useState(null); // State to hold the product data
    const [mainImage, setMainImage] = useState(null); // State for main image
    const [count, setCount] = useState(1)

    const { products, loading } = useProducts();

    if (loading) {
        return <p>Loading...</p>;
    }

    useEffect(() => {
        function fetchProduct() {

            const foundProduct = products.find((product) => product.slug === productslug);
            setProduct(foundProduct);
            // Set initial main image if product is found and has images
            if (foundProduct?.images?.length) {
                setMainImage(urlFor(foundProduct.images[0]).url());
            }
        }

        fetchProduct();
    }, [productslug]);

    useEffect(() => {
        console.log('Cart state changed:', cart);
    }, [cart]);

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    if (!product) return <p>Loading...</p>; // Display loading state if product is not yet loaded

    return (
        <div>
            <div className="bg-gray-50 w-3/4 flex gap-x-32 mx-auto mt-7 mb-2 p-10">
                <div>
                    {/* Main Image */}
                    <Image
                        src={mainImage || '/femalewatch.jpg'}
                        className="object-cover"
                        width={350}
                        height={200}
                        alt={product.title || "Product Image"}
                    />

                    {/* Thumbnail Images */}
                    <div className="flex gap-4 mt-4">
                        {product.images?.map((image, index) => (
                            <Image
                                key={index}
                                src={urlFor(image).url()}
                                width={70}
                                height={50}
                                className="cursor-pointer border border-gray-300 hover:border-gray-500"
                                alt={`${product.title} thumbnail ${index + 1}`}
                                onClick={() => setMainImage(urlFor(image).url())} // Update main image on click
                            />
                        ))}
                    </div>
                </div>

                <div className="w-2/4">
                    <h2 className={`text-4xl text-primary font-bold ${eb_garamond_init.variable} custom-heading`}>{product.name || "Product Title"} <span className="text-lg font-medium text-[#D2B48C]">({product.category})</span></h2>
                    <p className="mb-10 text-gray-600">
                        <span className="line-through font-light me-3 ">$135.00</span>
                        <span className={`text-2xl text-gray-800 font-bold ${eb_garamond_init.variable} custom-heading me-3`}>
                            ${product.price}.00
                        </span>
                        you saved
                        <span className="bg-amber-300 text-white px-2 py-0.5 mx-1.5 "> $20 </span> from this item
                    </p>
                    <p className="text-gray-700 text-sm font-medium">{product.description || "Product description goes here"}</p>
                    <div className="border-2 mb-3 border-secondary flex justify-around mt-10 p-2 text-2xl font-medium">
                        <button onClick={() => setCount(count - 1)}>-</button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)}>+</ button>
                    </div>

                    <div className="w-full flex">
                        <button
                            onClick={() => addToCart(product)}
                            className="w-1/2 bg-secondary text-white py-2.5 text-lg me-2 outline-none hover:scale-105 active:scale-95 transition-transform duration-300"
                        >
                            Add To Cart
                        </button>
                        <button className="w-1/2 border-2 border-primary text-primary  py-2.5 text-lg outline-none hover:scale-105 active:scale-95 transition-transform duration-300"> <Link
                            href="/shop"
                        >
                            Back To Shop
                        </Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EachProduct;
