import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="The Neural Group - AI Solutions" 
              className="hero-img"
            />
            <div className="hero-overlay">
              <h1 className="hero-title">THE NEURAL GROUP</h1>
              <p className="hero-subtitle">Innovative AI Solutions for Businesses</p>
              <p className="hero-description">
                Transform your operations with cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2 className="section-heading">Why Businesses Choose Us</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="featured-services-section">
          <h2 className="section-heading">Featured Solutions</h2>
          <p className="section-intro">
            Comprehensive technology services designed to drive your business forward
          </p>
          <div className="featured-services-grid">
            <div className="featured-service-card">
              <div className="service-icon">🤖</div>
              <h3 className="service-title">AI Training</h3>
              <p className="service-description">
                Transform your team with cutting-edge AI training. Master Claude AI and prompt engineering for maximum productivity.
              </p>
              <Link to="/ai-training" className="service-link" onClick={() => window.scrollTo(0, 0)}>Learn More →</Link>
            </div>

            <div className="featured-service-card">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">System Integration</h3>
              <p className="service-description">
                Connect your existing tools and platforms. API development, database integration, and workflow automation.
              </p>
              <Link to="/services" className="service-link" onClick={() => window.scrollTo(0, 0)}>Learn More →</Link>
            </div>

            <div className="featured-service-card">
              <div className="service-icon">💼</div>
              <h3 className="service-title">Custom Business Solutions</h3>
              <p className="service-description">
                Tailored software applications built with Python, React, and MySQL. E-commerce platforms, calendars, and more.
              </p>
              <Link to="/services" className="service-link" onClick={() => window.scrollTo(0, 0)}>Learn More →</Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                The Neural Group transformed our outdated legacy systems into a modern, efficient platform. The team's expertise in Python and React was exactly what we needed.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Sarah Johnson</div>
                <div className="author-title">CEO, TechStart Inc.</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                The AI training program was exceptional. Our team's productivity increased by 40% after learning to effectively use Claude AI. Best investment we've made this year.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Mike Chen</div>
                <div className="author-title">CTO, Innovation Labs</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                Professional, responsive, and delivered exactly what was promised. The custom e-commerce solution has streamlined our entire sales process.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Jennifer Martinez</div>
                <div className="author-title">Operations Director, Retail Plus</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-heading">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Let's discuss how The Neural Group can help you achieve your technology goals.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button cta-secondary" onClick={() => window.scrollTo(0, 0)}>
              Schedule an Assessment
            </Link>
            <Link to="/services" className="cta-button cta-secondary" onClick={() => window.scrollTo(0, 0)}>
              View Our Services
            </Link>
          </div>
          <div className="cta-buttons-row-2">
            <Link to="/ai-training" className="cta-button cta-secondary" onClick={() => window.scrollTo(0, 0)}>
              AI Training Program
            </Link>
            <Link to="/about" className="cta-button cta-secondary" onClick={() => window.scrollTo(0, 0)}>
              About Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;