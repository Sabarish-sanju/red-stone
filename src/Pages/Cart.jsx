import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "./Navbar";
import "../Css/Cart.css";
import image1 from "../assets/image1.jpg";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../assets/delete.png";
export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQty } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h2 className="cart-title">SHOPPING CART.</h2>

        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        ) : (
          <div className="cart-layout">
            <div className="cart-left">
              <div className="cart-header">
                <span>Product</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Delete</span>
              </div>

              {cart.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div className="prod-info">
                    <img src={image1} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p className="price">${item.price}</p>
                    </div>
                  </div>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>
                  <div className="row-total">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <img src={deleteIcon} alt="Remove" />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-right">
              <h4 className="totals-title">Cart totals</h4>

              <div className="totals">
                <div>
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="grand-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="checkout-btn"
                onClick={() => navigate("/Checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
