import React from "react";
import "../Css/About.css";
import Navbar from "./Navbar";
import Stack from "../components/Stack";

export default function About() {
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

  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div className="text-section">
            <h1>About RedStone</h1>
            <p>
              Welcome to <strong>RedStone</strong> — where elegance meets
              craftsmanship. Our jewelry is crafted with passion, blending
              timeless designs with modern trends. Every piece tells a story,
              making your moments shine brighter.
            </p>
            <p>
              From delicate necklaces to statement rings, RedStone is committed
              to quality, beauty, and sustainability. Join us in celebrating the
              art of fine jewelry.
            </p>
          </div>
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
      </div>
    </>
  );
}
