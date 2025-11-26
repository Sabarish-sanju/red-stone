import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span style={{ color: "red" }}>Red</span>Stone
        </Link>
      </div>

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

      <div className="nav-icons">
        <Link to="/account">
          <FaUser className="icon" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="icon" />
        </Link>
      </div>
    </nav>
  );
}
