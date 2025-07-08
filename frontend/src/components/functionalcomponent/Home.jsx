import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <header className="hero-section">
        <h1>Support Creative Short Films</h1>
        <p>Empower filmmakers by funding their unique storytelling projects.</p>
        <button className="cta-button" onClick={() => navigate('/projects')}>Explore Projects</button>
      </header>

      <section className="features">
        <div className="feature" onClick={() => navigate('/fund')}>
          <h2>Funding Guidelines</h2>
          <p>Choose the films you believe in and contribute to bring them to life.</p>
        </div>
        <div className="feature" onClick={() => navigate('/ambassador')}>
          <h2>Ambassador Program</h2>
          <p>Become a storyteller hero. Unlock rewards and make an impact.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
