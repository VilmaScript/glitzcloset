"use client"
import { useCart } from "@/context/CartContxt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { eb_garamond_init } from "../layout";
import { MdCancel } from "react-icons/md";

export default function Cart() {
  const { cart, dispatch} = useCart()

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <div className="container px-10">
      <h2 className={` ${eb_garamond_init.variable} text-4xl font-medium mb-5 text-center custom-heading`}>{cart.length === 0 ? "Your Cart feels lonely" : "Check out your orders" }</h2>

      <div className="flex flex-col">
        {cart.map((cartItem, i) => (
          <div className="flex gap-10 border-gray-100 border-b-2 p-4">
            <Image
              src={urlFor(cartItem.images[0]).url()}
              className="object-cover"
              width={150}
              height={100}
              alt={cartItem.title || "Product Image"}
            />
            <div>
              <h1 className=" text-base">{cartItem.category}</h1>
              <h2 className={` ${eb_garamond_init.variable} text-xl font-semibold custom-heading uppercase`}>{cartItem.slug}</h2>
              <h3 className="text-gray-900">Available in <span className={`text-amber-500  ${eb_garamond_init.variable} custom-heading`}>Gold, silver, Black</span>
              </h3>
              <div className="flex gap-3">
                <h4>Quantity: {cartItem.quantity} Unit price : {cartItem.price} total price {cartItem.price * cartItem.quantity}</h4>
              <button onClick={() => removeFromCart(cartItem._id)} className="text-red-600 flex items-center gap-2">
                <MdCancel />
                Remove item
              </button>
              </div>
             
            </div>
          </div>))}
      </div>
    </div>
  );
}