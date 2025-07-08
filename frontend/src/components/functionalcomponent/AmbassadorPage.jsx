import React, { useState } from 'react';
import './AmbassadorPage.css';

const AmbassadorPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="ambassador-container">
      <section className="hero">
        <h1>Not all heroes wear capes.<br />Some bring stories to life.</h1>
      </section>

      <section className="timeline">
        <h2>Your Storytelling Journey</h2>
        <div className="timeline-steps">
          <div className="step">
            <span role="img" aria-label="spot">🎬</span>
            <p>Spot a Film</p>
          </div>
          <div className="step">
            <span role="img" aria-label="share">🚀</span>
            <p>Share with Friends</p>
          </div>
          <div className="step">
            <span role="img" aria-label="unlock">🎁</span>
            <p>Unlock Rewards</p>
          </div>
          <div className="step">
            <span role="img" aria-label="hero">🌟</span>
            <p>Become a Story Hero</p>
          </div>
        </div>
      </section>

      <section className="levels">
        <h2>Rise Through the Ranks</h2>
        <div className="levels-grid">
          <div className="level">
            <h3>🎖️ Rookie Storyteller</h3>
            <p>Share 3 projects — Get early access.</p>
          </div>
          <div className="level">
            <h3>🛡️ Cinema Champion</h3>
            <p>Refer 5 friends — Earn exclusive merch.</p>
          </div>
          <div className="level">
            <h3>👑 Legendary Producer</h3>
            <p>Top promoter — Meet a filmmaker online!</p>
          </div>
        </div>
      </section>

      <section className="quotes">
        <p className="quote">"Everyone has a story. Some are waiting for you to believe in them."</p>
        <p className="quote">"Behind every great film is a small spark of belief. You are that spark."</p>
      </section>

      <section className="join-now">
        <h2>Ready to Spark a Story?</h2>
        <button className="cta-button1" onClick={handleJoinNowClick}>Start Your Storytelling Journey</button>
      </section>

      {showForm && (
        <>
          <div className="application-form-overlay" onClick={handleCloseForm}></div>
          <section className="application-form">
            <button className="close-button" onClick={handleCloseForm}>X</button>
            <h2>Ambassador Application Form</h2>
            <form>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="why-join">Why do you want to join the Ambassador Program?</label>
              <textarea id="why-join" name="why-join" required></textarea>

              <label htmlFor="skills">What skills can you bring to the program?</label>
              <textarea id="skills" name="skills" required></textarea>

              <button type="submit" className="cta-button1">Submit Application</button>
            </form>
          </section>
        </>
      )}
    </div>
  );
};

export default AmbassadorPage;
