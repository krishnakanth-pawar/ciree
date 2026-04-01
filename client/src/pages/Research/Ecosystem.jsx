// client/src/pages/Research/Ecology.jsx
import React, {useState,useEffect,useRef} from "react";
import mainImage from "/Research/ecosystemNew.webp";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";
import '../../components/ResearchPages.css';

export default function Ecosystem() {
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
              Ecosystem Services
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Valuing interactions that support biodiversity and people
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
                   The multitude of ecosystem services that nature performs form the foundation of our world, offering direct and indirect benefits that sustain both biodiversity and human well-being. Our work under this theme explores how species interactions, such as biological pest control, contribute to ecosystem stability, resilience, function, agricultural productivity and ultimately societal well-being. We also attempt to study ecosystem services from a cognition outlook. We look at how animal cognition and behaviour can help us develop sustainable agriculture. Through a combination of field ecology, cognitive behavioural research, and community-based inquiry, we aim to quantify and elevate the value of often-overlooked contributors to ecosystem health. 
                  </p>
                </motion.div>
              </div>
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
            <ul className="readmore-list text-start">
              <li className="readmore-item">
                <a 
                  href="https://doi.org/10.1016/j.pecon.2023.06.002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >
                  Does agricultural intensification impact pest regulation service by frogs in a natural multi-trophic system? - Perspective in Ecology and Conservation
              </a>
              </li>
              <li className="readmore-item">
                <a 
                  href="https://www.cambridge.org/core/journals/environmental-conservation/article/abs/giving-the-cold-shoulder-why-and-how-do-we-conserve-farmland-herpetofauna-in-india/9F9D4F669E704DF65A69950DE7F13D48" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >Giving a cold shoulder: why and how do we conserve farmland herpetofauna in India? - Environmental Conservation 
             
                  </a>
              </li>
              <li className="readmore-item">
                <a 
                  href="https://doi.org/10.1670/23-026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >
                 Unsung heroes: What does herpetofauna do for us? - Journal of Herpetology  
              </a>
              </li>
              <li className="readmore-item">
                <a 
                  href="https://doi.org/10.17161/randa.v31i1.20815" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >
                 What are we saving? The amphibians and reptiles of the rice paddies in Balasore, India. - Reptiles and Amphibians 
              </a>
              </li>
              <li className="readmore-item">
                <a 
                  href="http://doi.org/10.1007/s10071-022-01731-4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="readmore-link"
                >
                Clever pest control? The role of cognition in biological pest regulation. - Animal Cognition
              </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}







      
