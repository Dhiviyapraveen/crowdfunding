import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Contact.css';
import axios from 'axios'; 
import { toast } from 'react-toastify'; 

const Contact = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://filmfund.onrender.com/api/contact", formData); 
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
      toast.error(error.response?.data?.error || "Failed to send message.");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          ←
        </button>

        <h2>Contact Us</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
