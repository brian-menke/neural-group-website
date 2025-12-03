import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../assets/styles/FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does The Neural Group offer?",
      answer: "We specialize in AI solutions and technology consulting for businesses. Our services include AI training and workshops, custom AI implementation, technology consulting, system integration, strategic planning, and ongoing support. We help businesses leverage cutting-edge AI technology to improve operations and drive growth."
    },
    {
      question: "What is AI training and who is it for?",
      answer: "Our AI training programs teach individuals and teams how to effectively use AI tools like Claude AI for maximum productivity. We offer workshops on prompt engineering, custom AI solutions implementation, and practical applications for business workflows. Our training is designed for business professionals, teams, and organizations looking to adopt AI technology."
    },
    {
      question: "Do you offer both in-person and virtual training?",
      answer: "Yes! We offer flexible training formats including in-person workshops, virtual training sessions via video conference, group workshops (5-15 participants), and one-on-one consulting tailored to your specific needs. We can accommodate distributed teams and remote work environments."
    },
    {
      question: "How long does a typical AI training session last?",
      answer: "Our training sessions vary based on depth and content. We offer half-day introductory workshops (4 hours), full-day intensive courses (8 hours), and multi-day comprehensive programs (2+ days). We customize the duration based on your team's needs and learning objectives."
    },
    {
      question: "What is the AI Assessment service?",
      answer: "Our AI Assessment is a comprehensive evaluation of your business operations to identify opportunities for AI implementation. We analyze your current workflows, pain points, and goals, then provide detailed recommendations for AI solutions that can improve efficiency, reduce costs, and drive innovation in your organization."
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing varies based on the scope and complexity of each project. AI training workshops start at competitive rates for groups, while custom consulting projects are quoted individually. We offer flexible pricing options and can work within various budget constraints. Contact us for a detailed quote tailored to your specific needs."
    },
    {
      question: "How quickly can we get started with AI training?",
      answer: "We can typically schedule initial consultations within a few business days. For training sessions, we recommend booking 2-3 weeks in advance to ensure proper preparation and scheduling coordination. However, we can accommodate urgent requests when possible. Contact us to discuss your timeline."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with businesses of all sizes, from small startups to large enterprises. Our solutions are scalable and can be customized to fit your organization's size, budget, and specific requirements. We've successfully helped businesses across various industries adopt AI technology."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we have experience across multiple industries, our AI solutions are particularly effective in professional services, technology, healthcare, finance, education, manufacturing, and retail. Our approach focuses on understanding your unique business challenges rather than being limited to specific industries."
    },
    {
      question: "What AI tools and platforms do you teach?",
      answer: "We specialize in Claude AI and provide comprehensive training on prompt engineering and effective AI usage. We also cover other leading AI platforms and tools based on your business needs. Our focus is on practical, business-applicable AI solutions rather than theoretical concepts."
    },
    {
      question: "Can you help us implement custom AI solutions?",
      answer: "Absolutely! Beyond training, we offer custom AI implementation services. We can help you integrate AI into your existing workflows, develop custom automation solutions, and create AI-powered tools tailored to your specific business processes. We provide ongoing support throughout the implementation process."
    },
    {
      question: "What kind of support do you provide after training?",
      answer: "We offer ongoing support packages that include follow-up consultations, Q&A sessions, troubleshooting assistance, and continued guidance as you implement AI in your operations. We're committed to your long-term success and can provide both scheduled and on-demand support based on your needs."
    },
    {
      question: "How do I know if my business is ready for AI?",
      answer: "Almost any business can benefit from AI! If you're looking to improve efficiency, automate repetitive tasks, make data-driven decisions, or enhance customer experience, you're ready for AI. Our AI Assessment service can help identify the best starting points for your organization, regardless of your current technical sophistication."
    },
    {
      question: "What makes The Neural Group different from other AI consultants?",
      answer: "We focus on practical, business-applicable AI solutions rather than theoretical concepts. Our training emphasizes hands-on learning and real-world applications. We take time to understand your unique business challenges and provide personalized solutions. Plus, we offer ongoing support to ensure successful AI adoption, not just one-time training."
    },
    {
      question: "How can I get started or request more information?",
      answer: "Getting started is easy! You can fill out our contact form on the Contact page, request information through our AI Training page, or schedule an AI Assessment. We'll respond within 24 hours to discuss your needs and provide personalized recommendations. We're here to help you navigate your AI journey."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* SEO Component */}
      <SEO 
        title="Frequently Asked Questions - AI Services & Training | The Neural Group"
        description="Get answers to common questions about The Neural Group's AI services, training programs, pricing, timelines, and implementation process. Learn how we can help your business adopt AI technology."
        keywords="AI FAQ, AI questions, AI training questions, AI consulting FAQ, AI services information, business AI help, AI training cost, AI implementation"
        url="https://theneuralgroup.ai/faq"
        image="https://theneuralgroup.ai/og-image.jpg"
        type="website"
      />

      <div className="faq-container">
        <div className="faq-content">
          {/* Hero Section */}
          <section className="faq-hero">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <p className="faq-subtitle">Everything You Need to Know About The Neural Group</p>
          </section>

          {/* Introduction */}
          <section className="faq-intro-section">
            <p className="faq-intro">
              Have questions about our AI services, training programs, or consulting? 
              We've compiled answers to the most common questions we receive. 
              If you don't find what you're looking for, feel free to contact us directly!
            </p>
          </section>

          {/* FAQ List */}
          <section className="faq-list-section">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openIndex === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="question-text">{faq.question}</span>
                    <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="faq-cta-section">
            <h2 className="cta-heading">Still Have Questions?</h2>
            <p className="cta-text">
              We're here to help! Contact us directly and we'll be happy to answer any questions you have about our services.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Contact Us</a>
              <a href="/ai-training" className="cta-button secondary">Request Training Info</a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default FAQ;