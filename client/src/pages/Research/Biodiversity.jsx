// client/src/pages/Research/Biodiversity.jsx

import mainImage from "/Research/biodiversityNew.webp";
import React, {useState,useEffect,useRef} from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";
import '../../components/ResearchPages.css';

export default function Biodiversity() {
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
              Biodiversity Conservation
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Understanding species diversity, ecological roles, and threats across landscapes
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
                 
          
          <small className="text-muted d-block mt-2">
            Photo by Manoj B Dodwad
          </small>
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
                  Our research under this theme focuses on understanding patterns of species
                  diversity, their ecological roles, and the threats they face, with the
                  ultimate goal of informing effective conservation action. We study a wide
                  range of taxa from reptiles and amphibians to mammals across diverse
                  habitats, including forests, plantations, caves, and urban ecosystems. We also integrate anthropogenic impacts and animal behavioural traits to develop behaviour based conservation strategies.
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
                  <h4 className="readmore-title">Read more</h4>
                  <ul className="readmore-list">
                    <li className="readmore-item">
                      <a 
                        href="https://doi.org/10.1016/j.biocon.2021.109136" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="readmore-link"
                      > Scale of the issue: Mapping the impact of the COVID-19 lockdown on pangolin trade across India -  Biological Conservation
                      </a>
                    </li>
                   </ul>
                       </motion.div>
                     </div>
                   </div>
                </div>
               );
             }