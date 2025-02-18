"use client"

import { useCart } from "@/context/CartContxt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { eb_garamond_init } from "../layout";
import { MdCancel } from "react-icons/md";
import { FaCreditCard, FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { FaSadCry } from "react-icons/fa";
import Link from "next/link";

export default function Cart() {

  const { cart, dispatch } = useCart();


  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };


  return (
    <div className="my-16">
      {cart.length === 0 ? "" : (
        <div className="">
          <Link href="/shop" className=" hover:text-secondary hover:scale-105 active:scale-95 transition-transform duration-300 flex gap-1 justify-self-end items-center mb-5 text-tertiary font-medium underline outline-none">Shop More <FaShopify className="text-tertiary animate-pop-color-change text-xl " /></Link>

        </div>
      )}
     {cart.length === 0 && (
  <div className="flex flex-col justify-center items-center h-[40vh]">
    <h2 className="text-primary text-4xl flex gap-2 items-center font-medium mb-4 custom-heading">
      Your Cart feels lonely <FaSadCry />
    </h2>

    <Link
      href="/shop"
      className="hover:text-secondary hover:scale-105 active:scale-95 transition-transform duration-300 flex gap-1 justify-center items-center text-tertiary font-medium underline outline-none"
    >
      Shop Here <FaShopify className="text-tertiary animate-pop-color-change text-xl" />
    </Link>
  </div>
)}

      {cart.length !== 0 ? (<div className="container px-10 flex gap-24 ">
        <div className="w-3/4">
          <table className="w-full ">
            <thead>
              <tr className="bg-primary mb-7 text-white text-left ">
                <th className=" p-2">Product</th>
                <th className="p-2">Category</th>
                <th className="p-2">Quantity</th>
                <th className=" p-2">Unit Price</th>
                <th className=" p-2">Total Price</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem, i) => (
                <tr key={i} className="border-b-2 border-gray-200">
                  <td className="p-2 flex  items-center gap-4">
                    <Image
                      src={urlFor(cartItem.images[0]).url()}
                      className="object-cover"
                      width={100}
                      height={100}
                      alt={cartItem.title || "Product Image"}
                    />
                    <span className={` ${eb_garamond_init.variable} text-primary text-xl font-semibold custom-heading`}>{cartItem.slug}</span>
                  </td>
                  <td className="p-2 text-left">{cartItem.category}</td>
                  <td className="p-2 text-left">{cartItem.quantity}</td>
                  <td className="p-2 text-left">${cartItem.price}</td>
                  <td className="p-2 text-left">${cartItem.price * cartItem.quantity}</td>
                  <td className="p-2 text-left">
                    <button onClick={() => removeFromCart(cartItem._id)} className="text-red-600 text-xl flex items-center gap-2">
                      <MdCancel />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-10">
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter Coupon Code"
                className="rounded-full py-1 px-4 border-secondary bg-inherit border placeholder-secondary text-secondary shadow-sm focus:outline-none focus:ring-3 focus:ring-secondary focus:border-primary "
              />
              <button className="bg-primary py-1.5 px-2.5 rounded-full text-white  hover:scale-105 active:scale-95 transition-transform duration-300">Apply Coupon</button>
            </div>
            <button onClick={clearCart} className="outline-none underline text-tertiary font-medium hover:text-secondary hover:scale-105 active:scale-95 transition-transform duration-300">Clear Cart</button>
          </div>
        </div>
        <div className="w-1/4 p-4 border border-gray-200  shadow-md ">
          <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Subtotal</p>
            <p>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between py-2 font-semibold text-lg">
            <p>Total</p>
            <p>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>
          <button className="w-full hover:bg-secondary hover:scale-105 transition-transform duration-300 bg-primary text-white py-2 mt-4 rounded-lg active:scale-95">Checkout</button>
        </div>
      </div>) : ''}



      <div className="flex justify-around gap-10 mt-10">
        <div className="flex gap-4">
          <FaShippingFast size={50} className="text-secondary " />
          <div  >
            <p className="font-medium">Free & Fast Delivery</p>
            <p className="text-gray-900">Free shipping for orders above $300</p>

          </div>
        </div>
        <div className="flex gap-4" >
          <FaCreditCard size={50} className="text-secondary" />
          <div>
            <p className="font-medium">Flexible Payment</p>
            <p className="text-gray-900">Multiple secure payment Options</p>
          </div>

        </div>
        <div className="flex gap-4">
          <BiSupport size={50} className="text-secondary" />
          <div>
            <p className="font-medium"> 24 x 7 Support</p>
            <p className="text-gray-900">We Support Online all days. </p>
          </div>

        </div>
      </div>
    </div>
  );
}
