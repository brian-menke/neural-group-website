import React, { useState } from 'react';
import API_BASE_URL from '../config';
import SEO from '../components/SEO';
import '../assets/styles/AITraining.css';

function AITraining() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    topics: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/training`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          loading: false,
          success: true,
          error: false,
          message: data.message || 'Thank you! Your inquiry has been submitted successfully.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          preferredDate: '',
          topics: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      } else {
        setSubmitStatus({
          loading: false,
          success: false,
          error: true,
          message: data.message || 'Failed to submit. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Network error. Please check if the backend server is running.'
      });
    }
  };

  return (
    <>
      {/* SEO Component - Optimizes this page for search engines */}
      <SEO 
        title="AI Training & Workshops - Master Claude AI | The Neural Group"
        description="Professional AI training programs teaching prompt engineering, Claude AI usage, and practical business applications. Workshops available in-person, virtual, group, and one-on-one formats. Learn to leverage AI for maximum productivity."
        keywords="AI training, Claude AI training, prompt engineering, AI workshops, business AI training, AI education, virtual AI training, AI learning, corporate training, AI certification"
        url="https://theneuralgroup.ai/ai-training"
        image="https://theneuralgroup.ai/og-image.jpg"
        type="website"
      />

      <div className="ai-training-container">
        <div className="ai-training-content">
          {/* Hero Section */}
          <section className="training-hero">
            <h1 className="training-title">AI TRAINING</h1>
            <p className="training-subtitle">Empower Your Team with Cutting-Edge AI Knowledge</p>
          </section>

          {/* What We Offer */}
          <section className="training-section">
            <h2 className="section-heading">What We Offer</h2>
            <div className="offering-grid">
              <div className="offering-card">
                <h3 className="offering-title">Claude AI Training</h3>
                <p className="offering-description">
                  Master the art of prompt engineering and learn to leverage Claude AI for maximum productivity.
                </p>
              </div>
              <div className="offering-card">
                <h3 className="offering-title">Custom AI Solutions</h3>
                <p className="offering-description">
                  Learn how to implement AI in your specific business workflows and processes.
                </p>
              </div>
              <div className="offering-card">
                <h3 className="offering-title">Team Workshops</h3>
                <p className="offering-description">
                  Interactive group sessions designed to get your entire team up to speed on AI tools.
                </p>
              </div>
              <div className="offering-card">
                <h3 className="offering-title">Ongoing Support</h3>
                <p className="offering-description">
                  Continued guidance and consultation as you integrate AI into your operations.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Dates */}
          <section className="training-section">
            <h2 className="section-heading">Upcoming Sessions</h2>
            <div className="dates-container">
              <div className="date-card">
                <div className="date-badge">DEC 15</div>
                <h3 className="session-title">Introduction to Claude AI</h3>
                <p className="session-details">Half-day workshop • Virtual or In-Person</p>
              </div>
              <div className="date-card">
                <div className="date-badge">JAN 12</div>
                <h3 className="session-title">Advanced Prompt Engineering</h3>
                <p className="session-details">Full-day intensive • Limited to 10 participants</p>
              </div>
              <div className="date-card">
                <div className="date-badge">FEB 8</div>
                <h3 className="session-title">AI for Business Operations</h3>
                <p className="session-details">Two-day course • Practical applications focus</p>
              </div>
            </div>
          </section>

          {/* Training Formats */}
          <section className="training-section">
            <h2 className="section-heading">Training Formats</h2>
            <div className="formats-grid">
              <div className="format-card">
                <h3 className="format-title">Group Workshops</h3>
                <p className="format-description">
                  Cost-effective training for teams of 5-15 people with hands-on exercises and collaboration.
                </p>
              </div>
              <div className="format-card">
                <h3 className="format-title">One-on-One Consulting</h3>
                <p className="format-description">
                  Personalized training tailored to your specific needs and business goals.
                </p>
              </div>
              <div className="format-card">
                <h3 className="format-title">Virtual Training</h3>
                <p className="format-description">
                  Remote sessions via video conference, perfect for distributed teams or remote work.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="training-section contact-section">
            <h2 className="section-heading">Request Information</h2>
            <p className="form-intro">
              Interested in AI training for your team? Fill out the form below and we'll get back to you with details and availability.
            </p>

            {submitStatus.success && (
              <div className="alert alert-success">
                ✅ {submitStatus.message}
              </div>
            )}

            {submitStatus.error && (
              <div className="alert alert-error">
                ❌ {submitStatus.message}
              </div>
            )}

            <form className="training-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <input
                type="text"
                name="preferredDate"
                placeholder="Preferred Date(s)"
                value={formData.preferredDate}
                onChange={handleChange}
                className="form-input"
              />

              <input
                type="text"
                name="topics"
                placeholder="Topics of Interest"
                value={formData.topics}
                onChange={handleChange}
                className="form-input"
              />

              <textarea
                name="message"
                placeholder="Tell us about your training needs..."
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
              />

              <button 
                type="submit" 
                className="submit-button"
                disabled={submitStatus.loading}
              >
                {submitStatus.loading ? 'Sending...' : 'Request Information'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default AITraining;