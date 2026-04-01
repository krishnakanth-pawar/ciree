// client/src/pages/Research/HumanWildlife.jsx

import mainImage from "/Research/wildlifeNew.webp";
// import ResearchHeader from "../../components/ResearchHeader";
import React, {useEffect, useRef, useState} from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";
import '../../components/ResearchPages.css';


export default function HumanWildlife() {
    const [vantaEffect, setVantaEffect] = useState(null);
      const vantaRef = useRef(null);
    
      useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
          // Initialize the Vanta effect with the topology configuration
          const effect = TOPOLOGY({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,      // Enable mouse interaction
            touchControls: true,      // Enable touch interaction
            gyroControls: false,      // Disable gyroscope
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            // Topology specific parameters for continuous animation
            // color: 0x89964e,          // Brand purple as primary color
            // backgroundColor: 0x222200, // White background
            // wingSpan: 40.00,          // Controls the spread of the topology
            // speed: 1.50,              // Animation speed (higher = faster morphing)
            // Additional parameters for better topology effect
            // noiseFactor: 12,         // Adds variation to the morphing
            // waveHeight: 10.00,        // Controls the intensity of the waves
            // zoom: 2,                // Slight zoom for better visibility
          });
    
          setVantaEffect(effect);
        }
    
        return () => {
          if (vantaEffect) {
            vantaEffect.destroy();
          }
        };
      }, [vantaEffect]); // Only re-run if vantaEffect changes

 return (
    <div className="research-page">
      {/* Vanta Background Section */}
      <section ref={vantaRef} className="vanta-hero">
        {/* Content overlay - positioned above the background */}
        <div className="vanta-overlay">
          <motion.div
            className="vanta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="vanta-title"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Human Wildlife Interactions
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Examining impacts, perceptions, and coexistence strategies
            </motion.p>

            <motion.div 
              className="vanta-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </section>
      
        <div className="research-content-wrapper">
        {/* Image Section */}
        <div className="research-image-section">
          <motion.div 
            className="image-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={mainImage}
              alt="Human Wildlife Interaction research"
              className="research-image"
            />
          </motion.div>
        </div>

      {/* Paragraph Section */}
        <div className="research-paragraph-section">
          <motion.div 
            className="paragraph-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="research-paragraph text-left">
              We approach human wildlife interactions through multiple lenses, examining how animals 
              are influenced by human impacts on their habitat such as through road networks, 
              infrastructure, and hunting practices, as well as from deeply held myths and beliefs 
              amongst communities that often shape their perceptions and behaviours towards nature.
            </p>
          </motion.div>
        </div>
      {/* Divider */}
      <hr className="my-5" />
{/* Read More Section */}
       <div className="research-readmore-section">
          <motion.div 
            className="readmore-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="readmore-title text-start">Read more</h4>
            <ul className="readmore-list">
              <li className="readmore-item">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >
                  First record of Forsten's Catsnake, Boiga forsteni (Duméril, Bibron and Duméril 1854), in the Alluri Seetharama Raju District of Andhra Pradesh, India - Zoo Print
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}