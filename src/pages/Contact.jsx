import { useState } from 'react'
import Hero from '../components/Hero'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Hero 
        title="Get In Touch"
        backgroundImage="/images/hero-bg.png"
        centered
      />

      {/* Contact Info Cards */}
      <div className="contact-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <h3>Our Location</h3>
                <p>Montreal, Quebec<br />Canada</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card">
                <div className="contact-card-icon">📧</div>
                <h3>Email Us</h3>
                <p><a href="mailto:contact@mtlelite.com">contact@mtlelite.com</a></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card">
                <div className="contact-card-icon">📱</div>
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                  <p>Have questions about MTL Elite Flag Football? Want to join a team or start one? Drop us a line!</p>
                </div>

                {submitted && (
                  <div className="success-message">
                    <span className="success-icon">✓</span>
                    <div>
                      <strong>Message Sent!</strong>
                      <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="name">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        className="form-control" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group half">
                      <label htmlFor="email">Your Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="form-control" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="join-team">Join a Team</option>
                      <option value="create-team">Create a Team</option>
                      <option value="sponsorship">Sponsorship Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      className="form-control" 
                      rows="6" 
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <span className="btn-icon">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">🏈</span>
                    How do I join MTL Elite?
                  </div>
                  <div className="faq-answer">
                    Simply fill out the contact form above or reach out to us on social media. We'll match you with a team based on your skill level and availability.
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">📅</span>
                    When does the season start?
                  </div>
                  <div className="faq-answer">
                    Season 1 kicks off on May 18th, 2026! Registration opens 2 months before the season starts.
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">💰</span>
                    What are the fees?
                  </div>
                  <div className="faq-answer">
                    Registration fees cover jerseys, field rentals, refs, and equipment. Contact us for current pricing and payment plans.
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span className="faq-icon">🎯</span>
                    Do I need experience?
                  </div>
                  <div className="faq-answer">
                    Not at all! We have tiers for all skill levels, from beginners to elite players. Everyone is welcome.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
