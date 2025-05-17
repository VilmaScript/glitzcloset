"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Success = () => {
  const [cart, setCart] = useState([]);
  
  // Retrieve cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Set cart items in state
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center h-[80vh]">
      <p className="text-primary text-lg font-bold">Success</p>
      <h1 className="sm:text-4xl text-3xl font-medium">Your Order Has Been Placed 🎉</h1>
      <p className="text-secondary">Thank you for your purchase!</p>

      {/* Display cart items if available */}
      {cart.length > 0 && (
        <div className="w-full max-w-lg">
          <h2 className="text-xl font-bold">Your Order Summary</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-1">
                <span>{item.name} x{item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link to continue shopping */}
      <Link href="/shop" className="bg-primary text-white px-1.5 py-2 rounded hover:bg-secondary">
        Continue shopping!
      </Link>
    </div>
  );
};

export default Success;
