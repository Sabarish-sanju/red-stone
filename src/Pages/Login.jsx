import React, { useState, useContext } from "react";
import "../Css/Login.css";
import Stack from "../components/Stack";
import Navbar from "./Navbar";
import api from "../../Backend/api.js";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

export default function Login() {
  const { handleLogin } = useContext(ProductContext);
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const Navigate = useNavigate();
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1631965004544-1762fc696476?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  function handleData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await api.post("/login", data);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      handleLogin();
      Navigate("/");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-image">
          <div className="image-section">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 300, height: 300 }}
              cardsData={images}
            />
            ;
          </div>
        </div>

        <div className="login-form">
          <h2 className="brand-title">RedStone Jewelers</h2>

          <p className="subtitle">Login to continue your jewelry experience</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={data.name}
                onChange={handleData}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleData}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-text">
              Don’t have an account?
              <Link to="/Signup">
                <span>Create one</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
