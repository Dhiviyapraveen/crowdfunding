import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://filmfund-adminbackend.onrender.com/api/admin/films"); 
        setProjects(res.data); 
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <button className="back-button" onClick={() => navigate("/")}>←</button>

      <h1 className="projects-title">Explore Short Film Projects</h1>

      <div className="project-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className="fund-button" onClick={() => navigate(`/fund/${project._id}`)}>Fund Now</button>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
