import React from 'react';
import SEO from '../components/SEO';
import '../assets/styles/Services.css';

function Services() {
  const services = [
    {
      title: 'AI Training',
      description: 'Master the art of prompt engineering and learn to leverage AI for maximum productivity.'
    },
    {
      title: 'Technology Consulting',
      description: 'Strategic technology guidance to help your business leverage the latest innovations and stay competitive in the digital landscape.'
    },
    {
      title: 'Business Solutions',
      description: 'Customized solutions designed to streamline your operations, increase efficiency, and drive growth.'
    },
    {
      title: 'AI Assessment',
      description: 'Discover untapped opportunities for AI in your business. We analyze your workflows, identify high-impact automation areas, and create a roadmap for AI implementation tailored to your specific needs.'
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of your business systems to create a unified, efficient technology ecosystem.'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support to ensure your systems run smoothly and your team stays productive.'
    },
    {
      title: 'Strategic Planning',
      description: 'Long-term technology roadmaps aligned with your business objectives and growth goals.'
    }
  ];

  return (
    <>
      {/* SEO Component - Optimizes this page for search engines */}
      <SEO 
        title="AI Services - Training, Consulting & Custom Solutions | The Neural Group"
        description="Comprehensive AI services including training workshops, technology consulting, custom business solutions, AI assessment, system integration, and ongoing support. Tailored solutions for businesses of all sizes."
        keywords="AI services, AI training, technology consulting, business solutions, AI assessment, system integration, AI support, custom AI solutions, enterprise AI, AI workshops"
        url="https://theneuralgroup.ai/services"
        image="https://theneuralgroup.ai/og-image.png"
        type="website"
      />

      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">Our Services</h1>
          <p className="services-intro">
            We offer comprehensive technology services designed to meet the unique needs of your business.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-text">
              Contact us today to discuss how we can help your business succeed.
            </p>
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;