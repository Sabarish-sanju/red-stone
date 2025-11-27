import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "./Navbar";
import "../Css/Cart.css";
import image1 from "../assets/image1.jpg";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-container">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={image1} alt={item.name} className="cart-img" />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="cart-price">${item.price.toFixed(2)}</p>

                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
