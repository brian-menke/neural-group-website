import API_BASE_URL from '../config';
import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../assets/styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryInterest: '',
    subject: '',
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
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
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
          message: data.message || 'Thank you! We\'ll get back to you soon.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          primaryInterest: '',
          subject: '',
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
        title="Contact Us - Get Started with AI Solutions | The Neural Group"
        description="Ready to transform your business with AI? Contact The Neural Group for a consultation, schedule an AI assessment, or request training information. We respond within 24 hours to all inquiries."
        keywords="contact AI consultant, AI consultation, schedule AI assessment, AI training inquiry, business AI contact, Phoenix AI services contact, get in touch"
        url="https://theneuralgroup.ai/contact"
        image="https://theneuralgroup.ai/og-image.png"
        type="website"
      />

      <div className="contact-container">
        <div className="contact-content">
          {/* Hero Section */}
          <section className="contact-hero">
            <h1 className="contact-title">CONTACT US</h1>
            <p className="contact-subtitle">Get in Touch with The Neural Group</p>
          </section>

          {/* Why Choose Section - MOVED TO TOP */}
          <section className="additional-info">
            <h2 className="section-heading">Why Choose The Neural Group?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🚀 Fast Response Time</h3>
                <p>We typically respond to inquiries within 24 hours</p>
              </div>
              <div className="benefit-card">
                <h3>💼 Professional Service</h3>
                <p>Expert solutions tailored to your business needs</p>
              </div>
              <div className="benefit-card">
                <h3>🎯 Custom Solutions</h3>
                <p>We create technology solutions that fit your specific requirements</p>
              </div>
              <div className="benefit-card">
                <h3>🤝 Ongoing Support</h3>
                <p>We're here to help long after your project launches</p>
              </div>
            </div>
          </section>

          {/* Contact Form Section - STAYS IN MIDDLE */}
          <section className="contact-form-section">
            <h2 className="section-heading">Send Us a Message</h2>
            <p className="form-intro">
              Have a question or want to learn more about our services? Fill out the form below and we'll get back to you promptly.
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

            <form className="contact-form" onSubmit={handleSubmit}>
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
                  placeholder="Your Email*"
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
                <select
                  name="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Primary Interest*</option>
                  <option value="AI Training">AI Training</option>
                  <option value="AI Assessment">AI Assessment</option>
                  <option value="Technology Consulting">Technology Consulting</option>
                  <option value="Business Solutions">Business Solutions</option>
                  <option value="System Integration">System Integration</option>
                  <option value="Strategic Planning">Strategic Planning</option>
                  <option value="Support & Maintenance">Support & Maintenance</option>
                </select>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />

              <textarea
                name="message"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="6"
              />

              <button 
                type="submit" 
                className="submit-button"
                disabled={submitStatus.loading}
              >
                {submitStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          {/* Contact Info Section - MOVED TO BOTTOM */}
          <section className="contact-info-section">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3 className="info-title">Email</h3>
                <p className="info-detail">info@theneuralgroup.ai</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3 className="info-title">Location</h3>
                <p className="info-detail">Phoenix, Arizona</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⏰</div>
                <h3 className="info-title">Business Hours</h3>
                <p className="info-detail">Monday - Friday<br/>9:00 AM - 5:00 PM MST</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;