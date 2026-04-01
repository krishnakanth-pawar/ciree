// client/src/pages/Research/Coexistence.jsx

import mainImage from "/Research/house.jpeg"; // Replace with actual image path
import React, {useState,useEffect,useRef} from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";
import '../../components/ResearchPages.css';

export default function Coexistence() {
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
                  Coexistence
                  </motion.h1>
                  
                  <motion.p 
                    className="vanta-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                   Understanding how species and people share landscapes
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
                  <p className="research-paragraph text-left">As we move closer to forests and wildlife, coexistence is not a choice but a necessity. We attempt to understand how species coexist with each other and with human societies. We take a social, animal centric and behavioural approach to understanding animal responses to human activities and vice versa.</p>
                 
                    </motion.div>
                </div>
          </div>
              </div>       
                    );}
                  