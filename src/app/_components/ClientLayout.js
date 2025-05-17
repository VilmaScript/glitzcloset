"use client"
import { SessionProvider } from "next-auth/react";
import { ProductsProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContxt";


export default function ClientLayout ({children}) {
  return (
    <SessionProvider>
    <ProductsProvider>
    <CartProvider>
      {children}
    </CartProvider>
    </ProductsProvider>
    </SessionProvider>
  )
}

