

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/newsletter", { email });
      setMessage(res.data.message);
      setEmail("");
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Quick Links */}
          <div className="footer-col text-start">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="#">Conservation</Link></li>
              <li><Link to="/opportunities">Opportunities</Link></li>
              <li><Link to="/support">Support Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col text-start">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/outreach/publications">Publications</Link></li>
              <li><Link to="/research/human-wildlife">Research</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Annual Reports</Link></li>
              <li><Link to="#">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-col text-start">
           
            <h4>Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button type="submit" className="subscribe-btn" disabled={loading}>
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
            {message && <p className={`message ${message.includes('error') ? 'error' : 'success'}`}>{message}</p>} <br />

            <div className="contact-info text-start">
            <h4>Contact Us</h4>
              <p>Phone: +91 11111111111</p>
              <p>Email: cireeindia@gmail.com</p> 
              <p>Location: Bengaluru, India</p>
            </div>
          </div>
        </div>

       
        {/* Bottom Bar with Developer Credit */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p>&copy; {currentYear} CIREE. All rights reserved.</p>
            <p> Logo design: <a href="mailto:arijit8chatterjee@gmail.com">Arijit Chatterjee</a></p>
            </div>
          {/* <div className="developer-credit border-top w-100">
            <p>Website developed by <strong>Krishnakanth Pawar</strong> <a href="mailto:writeto.krishnakanth@gmail.com">writeto.krishnakanth@gmail.com</a></p>
         </div> */}
        </div>
      </div> 
      <hr className="my-0 border-secondary" />

        <div className="bg-devname text-dark py-2">
          <div className="container">
            <p className="mb-1 small fw-bold">
            Website designed and developed by <a href="https://www.linkedin.com/in/krishnakanthpawar" className="link-primary" target="_blank" 
            rel="noopener noreferrer">Krishnakanth Pawar</a> 
            </p>
          </div>
        </div>
    </footer>
    
    
  );
}