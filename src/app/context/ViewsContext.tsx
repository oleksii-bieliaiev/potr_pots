"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Cart = {
  small: number;
  large: number;
};

type ViewsContextType = {
  cart: Cart;
  ordersCount: number;

  updateCart: (items: Cart) => void;
  clearCart: () => void;

  isBuyOpen: boolean;
  openBuy: () => void;
  closeBuy: () => void;
};

const ViewsContext = createContext<ViewsContextType | null>(null);

export const ViewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("cart");
        if (stored) return JSON.parse(stored);
      } catch (err) {
        console.error("Failed to parse cart from localStorage", err);
      }
    }
    return { small: 0, large: 0 };
  });
  
  const [isBuyOpen, setIsBuyOpen] = useState(false);


  const ordersCount = cart.small + cart.large;


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const updateCart = (items: Cart) => {
    setCart(items);
  };

  const clearCart = () => {
    setCart({ small: 0, large: 0 });
  };

  const openBuy = () => setIsBuyOpen(true);
  const closeBuy = () => setIsBuyOpen(false);

  return (
    <ViewsContext.Provider
      value={{
        cart,
        ordersCount,
        updateCart,
        clearCart,
        isBuyOpen,
        openBuy,
        closeBuy,
      }}
    >
      {children}
    </ViewsContext.Provider>
  );
};

// хук для удобства
export const useViews = () => {
  const ctx = useContext(ViewsContext);
  if (!ctx) {
    throw new Error("useViews must be used within ViewsProvider");
  }
  return ctx;
};
