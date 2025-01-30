
import "./globals.css";
import Navbar from "./_components/Navbar";

import { Satisfy,EB_Garamond,Roboto, Montserrat } from 'next/font/google';
import { CartProvider } from "@/context/CartContxt";
import { ProductsProvider } from "@/context/ProductsContext";

 const metadata = {
  title: "GlitzCloset",
  description: "Unisex Jewelry store",
};

export const satisfy_init = Satisfy({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-satisfy',
  weight: '400',
});

export const eb_garamond_init = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
  weight: '400',
});
export const montserrat_init = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductsProvider>
      <CartProvider>
      <body className={`${montserrat_init.variable} custom-body-font px-12`}>
      <Navbar/>
        {children}
      </body>
      </CartProvider>
      </ProductsProvider>
    </html>
  );
}
