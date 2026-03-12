import React, { useState } from "react";
import "../Css/Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">
        {/* Left Side Form */}
        <div className="contact-form">
          <h1>Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Side Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6094138948242!2d76.93771727317433!3d11.067882353753932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f6181c427ecf%3A0xb5a5ba0895b7603b!2sHarmony%20Nest%2C%20VKL%20Nagar%2C%20Coimbatore%2C%20Thudiyalur%2C%20Tamil%20Nadu%20641034!5e0!3m2!1sen!2sin!4v1773296334598!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
