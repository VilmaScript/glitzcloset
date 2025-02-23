"use client"
import { createContext, useContext, useReducer} from "react";

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
          ? { ...item, quantity: Math.max(1, action.payload.quantity) } // Prevents quantity from going below 1
          : item
      );
      case "CLEAR_CART":
        return [];
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };
  
const CartContext = createContext()

export const CartProvider = ({children}) => {
    // Use useReducer instead of useState
  const [cart, dispatch] = useReducer(cartReducer, initialState);

    

    console.log(cart)


    return <CartContext.Provider value={{ cart, dispatch}}>
        {children}
    </CartContext.Provider>
}


// Custom hook for accessing the cart context
export const useCart = () => useContext(CartContext);