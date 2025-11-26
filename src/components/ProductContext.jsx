import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return (
    <ProductContext.Provider
      value={{ selectedProduct, setSelectedProduct, cart, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
