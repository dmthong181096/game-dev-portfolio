import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'dmthong181096@gmail.com',
      link: 'mailto:dmthong181096@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '0915156560',
      link: 'tel:0915156560'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Binh Tan, Ho Chi Minh City',
      link: '#'
    },
    {
      icon: '💼',
      title: 'Facebook',
      value: 'facebook.com/doanminhthong1810',
      link: 'https://www.facebook.com/doanminhthong1810'
    }
  ];



  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Create Something Amazing Together!</h3>
              <p>
                I'm always ready to discuss new game projects, collaboration opportunities, 
                or simply chat about game development. 
                Don't hesitate to reach out to me!
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-method"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <div className="contact-title">{info.title}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>


          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  ✅ Message sent successfully! I will respond as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="availability">
          <div className="availability-card">
            <div className="availability-icon">🟢</div>
            <div className="availability-info">
              <h4>Available for New Projects</h4>
              <p>Currently open to freelance opportunities and full-time positions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;