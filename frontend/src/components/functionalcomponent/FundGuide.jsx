import React from 'react';
import './FundGuide.css';
import { FaFilm, FaGift, FaHandsHelping } from 'react-icons/fa';

const FundGuide = () => {
  const steps = [
    {
      icon: <FaFilm />,
      title: 'Choose a Film',
      description: 'Browse short films and pick the ones that resonate with you.'
    },
    {
      icon: <FaGift />,
      title: 'Select a Contribution',
      description: 'Each film offers tiered perks — from credits to early screenings.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Make a Difference',
      description: 'Your contribution directly fuels indie creators and their passion.'
    }
  ];

  return (
    <div className="fund-guide-horizontal">
      <h1>How Funding Works</h1>
      <p className="intro-text">Your support helps turn dreams into reality. Here's how you make an impact:</p>

      <div className="timeline-horizontal">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step">
            <div className="icon-wrapper">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundGuide;
