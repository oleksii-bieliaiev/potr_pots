"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ViewsContextType = {
  ordersCount: number;
  addOrder: (count: number) => void;
  clearOrders: () => void;
  isBuyOpen: boolean;
  openBuy: () => void;
  closeBuy: () => void;
};

const ViewsContext = createContext<ViewsContextType | null>(null);

export const ViewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  // 👉 загрузка из localStorage
  useEffect(() => {
    const stored = localStorage.getItem("ordersCount");
    if (stored) {
      setOrdersCount(Number(stored));
    }
  }, []);

  // 👉 сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("ordersCount", ordersCount.toString());
  }, [ordersCount]);

  const addOrder = (count: number) => {
    setOrdersCount((prev) => prev + count);
  };

  const clearOrders = () => {
    setOrdersCount(0);
  };

  const openBuy = () => setIsBuyOpen(true);
  const closeBuy = () => setIsBuyOpen(false);

  return (
    <ViewsContext.Provider
      value={{ ordersCount, addOrder, clearOrders, isBuyOpen, openBuy, closeBuy }}
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
