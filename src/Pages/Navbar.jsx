import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import "../Css/Navbar.css";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useContext(ProductContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span style={{ color: "red" }}>Red</span>Stone
        </Link>
      </div>

      {/* Hamburger menu */}
      <div
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={mobileMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Nav icons come right after logo in DOM */}
      <div className="nav-icons">
        <Link to="/login">
          <FaUser className="icon" />
        </Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
