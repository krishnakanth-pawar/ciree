import { Link } from "react-router-dom";
import React from "react";
import '/src/App.css'; // Import the CSS file for styling

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg custom-navbar-bg sticky-top w-100"> 
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2 flex-nowrap" to="/">
          <img src="22.png" alt="Logo" style={{ height: '80px' }} />
          
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
         <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Research
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/research/human-wildlife">Human wildlife interactions</Link></li>
                <li><Link className="dropdown-item" to="/research/ecosystem">Ecosystem services</Link></li>
                <li><Link className="dropdown-item" to="/research/coexistence">Coexistence</Link></li>
                <li><Link className="dropdown-item" to="/research/ecology">Ecology</Link></li>
                <li><Link className="dropdown-item" to="/research/communities">Communities</Link></li>
                <li><Link className="dropdown-item" to="/research/biodiversity">Biodiversity conservation</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Outreach
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/outreach/publications">Publications</Link></li>
                <li><Link className="dropdown-item" to="/outreach/science-articles">Press</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/opportunities">Opportunities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    
  );
}
