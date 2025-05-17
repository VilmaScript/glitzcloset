"use client"
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContxt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { FaCreditCard, FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { FaSadCry } from "react-icons/fa";
import Link from "next/link";
import { calculateCartTotal } from "@/utils/cartTotal";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../_components/Loader";


export default function Cart() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.error('item removed from cart!')
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const updateCartQty = (product, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { _id: product._id, quantity: newQuantity },
    });
  };

  const { total, deliveryFee } = calculateCartTotal(cart);


    // Apply 10% discount if the coupon code is "vilma"
    const discount = couponCode === "vilma" ? total * 0.1 : 0;
   
  const handleCheckout = async () => {
    if (!cart || cart.length === 0) return;
  
    try {
      setLoading(true);
  
      localStorage.setItem("cart", JSON.stringify(cart)); // Store cart
      const amount = Math.round((total + deliveryFee - discount) * 100); // cents
  
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
  
      const { clientSecret } = await res.json();
  
      if (clientSecret) {
        router.push(`/checkout?clientSecret=${clientSecret}`);
      } else {
        console.error("Failed to get clientSecret");
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="my-8 ">
      {cart.length === 0 ? "" : (
        <div className="flex justify-between  mb-4 items-center">
          <h3 className="sm:text-3xl text-lg text-tertiary font-medium ">Check Out Your Orders</h3>
          <Link href="/shop" className=" hover:text-secondary hover:scale-105 active:scale-95 transition-transform duration-300 flex gap-1 items-center  text-tertiary font-medium underline outline-none">Shop More <FaShopify className="text-tertiary animate-pop-color-change text-xl " /></Link>
        </div>
      )}
      {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center h-[40vh]">
          <h2 className="text-primary text-2xl md:text-4xl flex gap-2 items-center font-medium mb-4 custom-heading">
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

      {cart.length !== 0 ? (<div className="container md:px-10 md:flex items-start md:gap-24 ">
        <div className="md:w-3/4">
          <table className=" ">
            <thead>
              <tr className="bg-primary mb-7 text-white text-left sm:text-base text-sm">
                <th className=" p-2">Product</th>
                <th className="p-2">Category</th>
                <th className="p-2 ">Quantity</th>
                <th className=" p-2">Unit Price</th>
                <th className=" p-2">Total Price</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem, i) => (
                <tr key={i} className="border-b-2 border-secondary">
                  <td className="p-2 flex  items-center gap-4">
                    <Image
                      src={urlFor(cartItem.images[0]).url()}
                      className="object-cover"
                      width={80}
                      height={80}
                      alt={cartItem.title || "Product Image"}
                    />
                    <span className={`font-eb-garamond hidden md:block text-primary text-xl font-semibold `}>{cartItem.slug}</span>
                  </td>
                  <td className="p-2 text-sm font-medium md:text-base text-left">{cartItem.category}</td>
                  <td className="p-2 text-left">
                    <div className="border-secondary border-2 rounded-full inline-block">
                      <button
                        onClick={() => updateCartQty(cartItem, cartItem.quantity - 1)}
                        className="text-xs md:text-sm py-0.5 px-0.5 hover:scale-95 outline-none"
                      >
                        -
                      </button>

                      <span className="border-secondary border-x-2 px-2 text-xs md:text-sm font-bold">{cartItem.quantity}</span>

                      <button
                        onClick={() => updateCartQty(cartItem, cartItem.quantity + 1)}
                        className="py-0.5 px-0.5 text-xs md:text-sm hover:scale-95 outline-none"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-2 text-sm sm:text-base text-left ">${cartItem.price}</td>
                  <td className="p-2 text-left text-sm sm:text-base font-medium">${cartItem.price * cartItem.quantity}</td>
                  <td className="p-2 text-left">
                    <button onClick={() => removeFromCart(cartItem._id)} className="text-red-600 text-xl flex items-center gap-2">
                      <MdCancel />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" flex justify-between items-center mt-10">
            <div className="block md:flex items-center gap-4 mb-4">
              <div className="md:mb-0 mb-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon & Get 10% Off!"
                className="rounded-full placeholder:text-sm py-1 px-4 border-secondary bg-inherit border placeholder-secondary text-secondary shadow-sm focus:outline-none focus:ring-3 focus:ring-secondary focus:border-primary "
              />
              { appliedCoupon && appliedCoupon !== "vilma" && ( <p className="text-sm text-red-500 ">Invalid coupon code!</p>)}
              </div>
              <button
                onClick={() => setAppliedCoupon(couponCode)}
                className="bg-primary py-1.5 px-2.5 rounded-full text-white  hover:scale-105 active:scale-95 transition-transform duration-300">Apply Coupon</button>
            </div>
            <button onClick={clearCart} className="outline-none underline text-tertiary font-medium hover:text-secondary hover:scale-105 active:scale-95 transition-transform duration-300">Clear Cart</button>
          </div>
        </div>
        <div className="md:w-1/4 p-4 border border-gray-200  shadow-md">
          <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Subtotal</p>
            <p>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Shipping</p>
            <p>${deliveryFee > 0 ? deliveryFee.toFixed(2) : "Free"}</p>
          </div>
         {
          appliedCoupon !== "" && appliedCoupon === "vilma" && (
            <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Coupon Applied</p>
            <p>10% OFF!</p>
          </div>
          )
         }
          <div className="flex justify-between py-2 font-semibold text-lg">
            <p>Total</p>
           <div className="flex items-center gap-2">
            {appliedCoupon && appliedCoupon === "vilma" && (<p className="line-through font-medium text-red-700 text-sm">${total + deliveryFee } </p>)}
            <p className="text-green-600">${(total + deliveryFee - discount).toFixed(2)}</p>
           </div>
          </div>
          <button onClick={handleCheckout} className="w-full hover:bg-secondary hover:scale-105 trans ition-transform duration-300 bg-primary text-white py-2 mt-4 rounded-lg active:scale-95"> {loading ? (
  <div className="flex gap-x-4 justify-center">
    <p>Processing</p> <Loader />
  </div>
) : (
  "Checkout"
)}</button>
        </div>
      </div>) : ''}



      <div className="block md:flex justify-around gap-10 mt-10 ">
        <div className="flex gap-4 mb-4">
          <FaShippingFast size={50} className="text-secondary " />
          <div  >
            <p className="font-medium">Free & Fast Delivery</p>
            <p className="text-gray-900">Free shipping for orders above $300</p>

          </div>
        </div>
        <div className="flex gap-4 mb-4" >
          <FaCreditCard size={50} className="text-secondary" />
          <div>
            <p className="font-medium">Flexible Payment</p>
            <p className="text-gray-900">Multiple secure payment Options</p>
          </div>

        </div>
        <div className="flex gap-4 mb-4">
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
