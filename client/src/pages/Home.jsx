import React from 'react'
import '../assets/home.css'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to a Seamless Visa Application Journey</h1>
        <p className="hero-description">
          Say goodbye to complex paperwork and confusion. Get your visa application
          started with ease and confidence.
        </p>
        <a href="/visa-types" className="btn btn-primary">Explore Visa Types</a>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Simple & Efficient</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-file-alt"></i>
            <h3>Simplified Forms</h3>
            <p>No more long, confusing forms. We guide you through each step.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>Faster Processing</h3>
            <p>Our streamlined system ensures a quicker application review.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-lock"></i>
            <h3>Secure & Encrypted</h3>
            <p>Your data is safe with us. We use industry-leading security.</p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <h2>What our users say</h2>
        <div className="testimonial-card">
          <p>
            "The visa application process used to be daunting, but this system
            made it incredibly smooth and clear."
          </p>
          <span>- John Smith, Traveler</span>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="get-started-section flex flex-col">
        <h2 className='border-spacing-5 flex flex-col'>Ready to embark on your journey?</h2>
        <Link to="/visaApplicationForm" className="btn btn-primary">Start your application</Link>
      </div>
    </div>
  )
}
