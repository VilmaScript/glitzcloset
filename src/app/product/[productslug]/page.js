"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContxt";
import { useProducts } from "@/context/ProductsContext";
import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "@/app/_components/Loader";

function EachProduct() {
    const { cart, dispatch } = useCart();
    const { productslug } = useParams(); // Get the slug from URL params
    const { products, loading } = useProducts();

    const [product, setProduct] = useState(null); // State to hold the product data
    const [mainImage, setMainImage] = useState(null); // State for main image
    const [count, setCount] = useState(1);

    useEffect(() => {
        function fetchProduct() {
            const foundProduct = products.find((product) => product.slug === productslug) || null;
            setProduct(foundProduct);

            // Ensure main image is always set
            setMainImage(foundProduct?.images?.length ? urlFor(foundProduct.images[0]).url() : null);
        }

        if (products.length) fetchProduct();
    }, [productslug, products]);

    useEffect(() => {
        console.log("Cart state changed:", cart);
    }, [cart]);

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        toast.success('Added to cart!')
    };

    const updateCartQty = (product, newQuantity) => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: { _id: product._id, quantity: newQuantity },
        });
    };

    if (loading) return <div className="flex items-center justify-center h-screen"><Loader /></div>

    return (
        <div className="-mx-12">
            {product ? (
                <div className="bg-white shadow-lg w-full md:w-3/4 block md:flex gap-x-32 mx-auto mt-7 mb-7 p-7 ">
                    <div>
                        {/* Main Image */}
                        <div className="w-full flex justify-center">
                            <div className="w-[350px] h-[350px] overflow-hidden flex items-center justify-center">
                                <Image
                                    src={mainImage || "/femalewatch.jpg"}
                                    width={350}
                                    height={200}
                                    className="w-full h-full object-cover"
                                    alt={product.title || "Product Image"}
                                />
                            </div>
                        </div>



                        {/* Thumbnail Images */}
                        <div className="flex gap-4 mt-4">
                            {product.images?.map((image, index) => (
                                <div key={index} className="w-[70px] h-[60px] overflow-hidden border border-gray-300 hover:border-gray-500 ">
                                    <Image
                                        src={urlFor(image).url()}
                                        width={70}
                                        height={50}
                                        alt={`${product.title} thumbnail ${index + 1}`}
                                        className="cursor-pointer w-full h-full object-cover"
                                        onClick={() => setMainImage(urlFor(image).url())}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="md:w-2/4 w-full mt-5 md:mt-0">
                        <h2 className={`md:text-4xl text-2xl text-primary font-bold font-eb-garamond`}>
                            {product.name || "Product Title"}{" "}
                            <span className="text-lg font-medium text-[#D2B48C]">({product.category})</span>
                        </h2>
                        <p className="mb-5 text-gray-600">
                            {/* <span className="line-through font-light me-3 ">$135.00</span> */}
                            <span className={`text-2xl text-gray-800 font-bold font-eb-garamond me-3`}>
                                ${product.price}.00
                            </span>
                            Get
                            <span className="bg-amber-300 text-white px-2 py-0.5 mx-1.5 "> 10% Off </span> from this item with code <span className="text-primary font-medium">Vilma</span>
                        </p>
                        <p className="text-gray-700 text-sm font-medium ">{product.description || "Product description goes here"}</p>
                        <div className={`border-2 mb-3 font-eb-garamond text-tertiary border-secondary flex justify-around mt-10 p-2 text-2xl font-medium`}>
                            <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>-</button>
                            <p>{count}</p>
                            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                        </div>

                        <div className="w-full flex">
                            <button
                                onClick={() => {
                                    addToCart({ ...product, quantity: count });
                                    updateCartQty(product, count);
                                }

                                }
                                className="w-1/2 bg-secondary text-white py-2.5 text-lg me-2 outline-none hover:scale-105 active:scale-95 transition-transform duration-300"
                            >
                                Add To Cart
                            </button>
                            <button className="w-1/2 border-2 border-primary text-primary py-2.5 text-lg outline-none hover:scale-105 active:scale-95 transition-transform duration-300">
                                <Link href="/shop">Back To Shop</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-[80vh]">
                    <Loader />
                </div>
            )}
        </div>
    );
}

export default EachProduct;

