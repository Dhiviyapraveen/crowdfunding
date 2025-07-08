import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { useAuth } from "./AuthContext"; 
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("https://filmfund.onrender.com/api/auth/login", formData);

      const token = res.data.token; 
      login({ token, email: formData.email });

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className="create-account-link" onClick={() => navigate("/register")}>
          Don’t have an account? <span style={{ color: 'blue', cursor: 'pointer' }}>Create one</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
