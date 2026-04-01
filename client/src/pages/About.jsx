// with vantajs

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import "./VantaHeader.css";


export default function About() {
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
    <div>
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
              About
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Center for Interdisciplinary Research in Ecology & the Environment
            </motion.p>

          
          </motion.div>
        </div>
      </section>


      {/* Main Content */}
      <div className="about-content">
        <div className="about-container">
          
          {/* Featured Image */}
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="aboutmain.jpg"
              alt="CIREE - Field research in the Western Ghats"
              className="about-featured-image"
            />
            <div className="image-caption">
              <span>Field research in the Western Ghats</span>
            </div>
          </motion.div>

          {/* Introduction Paragraph */}
          <motion.div 
            className="about-paragraph intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="dropcap">
              <strong>The Center for Interdisciplinary Research in Ecology & the Environment (CIREE)</strong> is a not-for-profit trust based in Bangalore, India dedicated to advancing conservation through community-driven research and action. We believe that long-term ecological resilience can only be achieved when science and society work hand in hand.
            </p>
          </motion.div>

          {/* Philosophy Block */}
          <motion.div 
            className="about-paragraph philosophy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              We believe that science is not merely the pursuit of knowledge, but a creative, inclusive, 
              and deeply collaborative human endeavour. Our platform is open to all who are passionate 
              about research with the freedom to express science in their own unique ways: through data, 
              dialogue, fieldwork, or even art. We celebrate curiosity, diversity of thought, and 
              innovation in all its forms.
            </p>
          </motion.div>

          {/* Work Description */}
          <motion.div 
            className="about-paragraph work"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              CIREE works across landscapes and disciplines to conserve and restore biodiversity, 
              promote sustainable resource use, enhance livelihoods and human well-being, and address 
              ecological challenges through on-ground solutions.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="about-paragraph mission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Our mission is to bridge the gap between research and practice by combining rigorous 
              scientific inquiry with the traditional knowledge and lived experiences of local communities. 
              By fostering collaboration across disciplines and stakeholders, we aim to develop solutions 
              that are ecologically sound, socially inclusive, and ethically responsible. At the heart of 
              CIREE's work is the vision of a world where humans and wildlife coexist in harmony.
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div 
            className="about-paragraph vision"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              We are committed to creating models of conservation that not only protect biodiversity 
              but also empower communities, address social and ecological justice, and inspire future 
              generations to value and steward the natural world. At CIREE, we believe that research is 
              most powerful when it is inclusive, interdisciplinary, and rooted in real-world conservation 
              challenges.
            </p>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}


