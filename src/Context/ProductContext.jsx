import React, { createContext, useState, useMemo } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Add product to cart (with quantity)
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        // If product already exists, increase quantity
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      // Add new product with default qty = 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase or decrease quantity
  const updateQty = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  // Compute total count of items in cart
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.qty, 0);
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        cartCount, // expose total count here
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
