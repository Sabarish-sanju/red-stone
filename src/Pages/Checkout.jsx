import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "./Navbar";
import "../Css/Checkout.css";
import image1 from "../assets/image1.jpg";

export default function Checkout() {
  const { cart } = useContext(ProductContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <>
      <Navbar />

      <div className="checkout-page">
        <div className="checkout-container">
          {/* LEFT SIDE - Shipping & Payment */}
          <div>
            <section className="checkout-form">
              <h3>Shipping Information</h3>
              <div className="input-row">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Apartment, suite, etc." />
              <div className="input-row-3">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip code" />
              </div>
            </section>

            <section className="checkout-form payment-section">
              <h3>
                Payment Method{" "}
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginLeft: "8px",
                  }}
                >
                  🔒 Secure checkout
                </span>
              </h3>
              <input type="text" placeholder="Card number" />
              <div className="input-row-3">
                <input type="text" placeholder="Expiration Date" />
                <input type="text" placeholder="CVC/CVV" />
                <div></div> {/* empty div to fill grid */}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE - Order Summary */}
          <aside className="checkout-summary">
            <h3>Order Summary</h3>

            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={image1} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <span>
                    {item.qty} × ${item.price.toFixed(2)}
                  </span>
                </div>
                <strong>${(item.qty * item.price).toFixed(2)}</strong>
              </div>
            ))}

            <div className="discount-row">
              <input type="text" placeholder="Discount code or gift card" />
              <button>Apply</button>
            </div>

            <div className="summary-prices">
              <p>
                Subtotal <span>${subtotal.toFixed(2)}</span>
              </p>
              <p>
                Shipping <span>${shipping.toFixed(2)}</span>
              </p>
              <p>
                Tax <span>${tax.toFixed(2)}</span>
              </p>
              <h4>
                Total <span>${total.toFixed(2)}</span>
              </h4>
            </div>

            <button className="place-order-btn">Complete Purchase</button>
          </aside>
        </div>
      </div>
    </>
  );
}
