import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <nav
      style={{
        margin: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "97.5%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 style={{ color: "white", margin: 0 }}>FilmFund</h2>
      </Link>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        {user ? (
          <span onClick={handleLogout} style={{ ...linkStyle, cursor: "pointer" }}>Logout</span>
        ) : (
          <Link to="/login" style={linkStyle}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 15px",
  fontSize: "18px",
};

export default Navbar;
