
import { Toaster } from "react-hot-toast";
import ClientLayout from "./_components/ClientLayout";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";
import { Satisfy,EB_Garamond, Montserrat } from 'next/font/google';

 const metadata = {
  title: "GlitzInteriors",
  description: "Interior Decor Store",
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
    <html lang="en" className="font-monserrat px-12">
      <body >
      <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#D2B48C',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
            },
          }}
        />
        
      <Navbar/>
     <ClientLayout>
        {children}
        </ClientLayout>
        <Footer/>
        
      </body>
     
    </html>
  );
}
