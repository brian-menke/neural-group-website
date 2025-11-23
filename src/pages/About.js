import React from 'react';
import '../assets/styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About  The Neural Group</h1>
        
        <div className="about-section">
          <p className="about-text">
            Welcome to  The Neural Group - your trusted partner in business technology solutions.
            We specialize in providing innovative services that help businesses achieve their goals
            and reach new levels of success.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="about-text">
            To empower businesses with cutting-edge technology solutions and exceptional service,
            serving as the gateway to their continued growth and success.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li className="value-item">
              <strong>Innovation:</strong> We stay ahead of technology trends to provide the best solutions.
            </li>
            <li className="value-item">
              <strong>Reliability:</strong> Our clients can count on us for consistent, quality service.
            </li>
            <li className="value-item">
              <strong>Excellence:</strong> We strive for excellence in everything we do.
            </li>
            <li className="value-item">
              <strong>Partnership:</strong> We work closely with our clients to understand and meet their needs.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="about-text">
            With years of experience in the technology sector,  The Neural Group has built a
            reputation for delivering exceptional results. Our team of experts is dedicated to
            understanding your unique business challenges and providing tailored solutions that
            drive real results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;