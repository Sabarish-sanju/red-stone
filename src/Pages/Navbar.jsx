import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import "../Css/Navbar.css";
import { ProductContext } from "../Context/ProductContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { cartCount } = useContext(ProductContext);
  const { isLoggedIn } = useContext(ProductContext);

  const { handleLogout } = useContext(ProductContext);

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
        <div
          className="user-dropdown"
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          <FaUser className="icon" />

          {userMenuOpen && (
            <div className="dropdown-menu">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              ) : (
                <>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
