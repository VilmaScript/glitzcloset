"use client"

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const CartIcon = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link href="/cart">
        <IoCartOutline className="hover:scale-105 active:scale-95 transition-transform duration-300 text-primary text-2xl cursor-pointer" />
      </Link>

      {showTooltip && (
        <p className="absolute left-1/2 -translate-x-1/2 top-full mt-2 inline-block bg-white shadow-sm text-primary px-1.5 py-2 text-sm  rounded-md transition-opacity duration-300">
         your cart
        </p>
      )}
    </div>
  );
};

export default CartIcon;
