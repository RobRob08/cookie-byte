import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Cookie } from '../types/Cookie';

// Define the Cart context type, including quantity
interface CartContextType {
  cart: { cookie: Cookie, quantity: number }[];  // Store both cookie and quantity
  addToCart: (cookie: Cookie) => void;
  removeFromCart: (cookieId: string) => void;
  incrementQuantity: (cookieId: string) => void;
  decrementQuantity: (cookieId: string) => void;
}

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the CartProvider props, including children
interface CartProviderProps {
  children: ReactNode;
}

// Provider to wrap the app and provide the cart context
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<{ cookie: Cookie, quantity: number }[]>([]);

  // Function to add cookie to the cart
  const addToCart = (cookie: Cookie) => {
    setCart((prevCart) => {
      const existingCookieIndex = prevCart.findIndex(item => item.cookie.id === cookie.id);
      if (existingCookieIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingCookieIndex].quantity += 1;  // Increment quantity if cookie exists
        return updatedCart;
      }
      return [...prevCart, { cookie, quantity: 1 }];
    });
  };

  // Function to remove cookie from the cart
  const removeFromCart = (cookieId: string) => {
    setCart((prevCart) => prevCart.filter(item => item.cookie.id !== cookieId));
  };

  // Function to increment quantity of a cookie in the cart
  const incrementQuantity = (cookieId: string) => {
    setCart((prevCart) => {
      return prevCart.map(item => 
        item.cookie.id === cookieId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  // Function to decrement quantity of a cookie in the cart
  const decrementQuantity = (cookieId: string) => {
    setCart((prevCart) => {
      return prevCart.map(item => 
        item.cookie.id === cookieId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
