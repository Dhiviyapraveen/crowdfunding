import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from "./AuthContext"; 

function FundPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { user } = useAuth(); 
  const [film, setFilm] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const res = await axios.get(`https://filmfund-adminbackend.onrender.com/api/admin/films/${id}`);
        setFilm(res.data);
      } catch (error) {
        console.error("Error fetching film:", error.message);
      }
    };

    fetchFilm();
  }, [id]);

  const handleFundNow = async () => {
    if (!amount) {
      toast.error("Please select a contribution amount!");
      return;
    }

    try {
      await axios.post(
        `https://filmfund-adminbackend.onrender.com/api/admin/films/${id}/contribute`,
        { amount: Number(amount) },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`, 
          },
        }
      );

      toast.success("Thank you for your support!!");
      navigate("/projects"); 
    } catch (error) {
      console.error("Funding error:", error.response?.data || error.message);
      toast.error(error.response?.data?.msg || "Funding failed");
    }
  };

  if (!film) {
    return <div>Loading film details...</div>;
  }

  return (
    <div className="fund-container">
      <button className="back-button" onClick={() => navigate("/projects")}>
        ← 
      </button>

      <div className="fund-content">
        <h1>Support "{film.title}"</h1>
        <p>{film.description}</p>
        <img src={film.image} alt={film.title} style={{ width: "40%", borderRadius: "10px", marginBottom: "20px" }} />

        <div className="fund-options">
          <label>Select Your Contribution Amount:</label>
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">-- Select Amount --</option>
            <option value="5000">Rs.5000 - Supporter</option>
            <option value="25000">Rs.25000 - Special Thanks</option>
            <option value="50000">Rs.50000 - Early Access</option>
            <option value="100000">Rs.100000 - Executive Producer Credit</option>
          </select>
        </div>

        <button className="fund-button" onClick={handleFundNow}>
          Confirm & Fund Now
        </button>
      </div>
    </div>
  );
}

export default FundPage;
