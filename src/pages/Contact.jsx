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
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Hero 
        title="Contact"
        backgroundImage="/images/hero-bg.png"
        centered
      />

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {submitted && (
                <div className="mb-4 p-4 rounded" style={{ background: '#28a745', color: '#fff' }}>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    className="form-control" 
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject"
                    className="form-control" 
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    className="form-control" 
                    cols="30" 
                    rows="10" 
                    placeholder="Write something..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary py-3 px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <ul className="list-unstyled">
                <li className="mb-4">
                  <strong className="text-white d-block mb-2">Address</strong>
                  273 South Riverview Rd.<br />
                  New York, NY 10011
                </li>
                <li className="mb-4">
                  <strong className="text-white d-block mb-2">Email</strong>
                  <a href="mailto:info@unslate.co">info@unslate.co</a>
                </li>
                <li className="mb-4">
                  <strong className="text-white d-block mb-2">Phone</strong>
                  <a href="tel:+123456789012">+12 345 6789 012</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
