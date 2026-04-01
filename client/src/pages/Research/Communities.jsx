
//client/src/pages/Research/Communities.jsx
import React, {useState,useEffect,useRef} from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";
import mainImage from "/Research/community1.jpeg";
import '../../components/ResearchPages.css';

export default function Communities() {
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
    <div className="container-fluid p-0">
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
            Communities
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Co-creating conservation with local knowledge and partnerships
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
                   Our research with communities emphasizes the vital role of people in shaping, sustaining and preserving biodiversity. We engage with local communities to understand traditional ecological knowledge, perceptions of wildlife, and socio-cultural drivers of conservation and conflict. Using interviews, surveys, and participatory methods, we study how myths, beliefs, practices, and lived experiences influence attitudes towards wildlife. These community insights help co-create conservation strategies that are ethical, locally grounded, and culturally relevant. Our work includes creating culturally sensitive educational materials, conducting workshops with schoolchildren and forest communities, and training early-career researchers in participatory conservation science.
                  </p>
                </motion.div>
              </div>

      <hr className="my-5" />
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
                  href="https://doi.org/10.1007/s12595-021-00386-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >  Collation of indigenous and local knowledge as evidence base for herpetofauna conservation outside protected areas: Case study from an agricultural landscape in Eastern India. – Proceedings of the Zoological Society
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
      

