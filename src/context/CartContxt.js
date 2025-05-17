"use client";
import { createContext, useContext, useReducer, useEffect, useState } from "react";

const LS_KEY = "glitzcloset_cart";

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [hasMounted, setHasMounted] = useState(false);

  // Load cart from localStorage on first client-side render
  useEffect(() => {
    const storedCart = localStorage.getItem(LS_KEY);
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        parsedCart.forEach((item) => {
          dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: item.quantity } });
        });
      } catch (error) {
        console.error("Failed to parse stored cart:", error);
      }
    }
    setHasMounted(true);
  }, []);

  // Save cart to localStorage whenever it changes (after initial mount)
  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem(LS_KEY, JSON.stringify(cart));
    }
  }, [cart, hasMounted]);

  // Prevent hydration mismatch
  if (!hasMounted) return null;



  return (
    <CartContext.Provider value={{ cart, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

