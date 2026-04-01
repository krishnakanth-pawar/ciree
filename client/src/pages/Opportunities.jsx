// import React, {useEffect, useRef, useState} from "react";
// import * as THREE from "three";
// import TOPOLOGY from "vanta/src/vanta.topology.js";
// import { motion } from "framer-motion";
// import "./VantaHeader.css";import { FaArrowRight } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Outreach/OutreachPages.css";
// import "./Outreach/ModernCardStyles.css";

// const FORM_LINK = "https://forms.gle/Xs8EV3t3b8CbKXM57";

// const projects = [
//   {
//     code: "RECAP",
//     title: "Restoration Ecology of Cultivation-Abandoned Podus",
//     subtitle: "Biodiversity recovery in shifting cultivation landscapes",
//     description:
//       "This project studies podus—cleared shifting cultivation plots within forests of the Eastern Ghats—and examines how abandoned podu lands transform into biodiversity havens. We investigate how podu age influences species richness and identify forest restoration strategies for podu-dominated landscapes.",
//     theme: "recap",
//   },
//   {
//     code: "CHASE",
//     title: "Community Hunting Assessment of Species & Ecology",
//     subtitle: "Understanding hunting drivers and ecological impacts",
//     description:
//       "CHASE focuses on assessing the drivers, patterns, and ecological impacts of hunting by forest-dwelling communities. The project combines ecological surveys with socio-ecological perspectives to inform conservation-relevant interventions.",
//     theme: "chase",
//   },
//   {
//     code: "MESH",
//     title: "Mammal Ecology in Shared Habitats",
//     subtitle: "Human-Wildlife interactions through camera trapping",
//     description:
//       "MESH uses camera traps to study mammal behaviour in human-impacted forests of the Eastern Ghats. The project analyses how mammals respond to human presence and activities in shared landscapes.",
//     theme: "mesh",
//   },
//   {
//     code: "HERP",
//     title: "Herpetofauna Ecology & Roadkill Prevention",
//     subtitle: "Mitigating amphibian and reptile mortality",
//     description:
//       "HERP investigates behavioural and cognitive pathways influencing amphibian road-avoidance behaviour. The project conducts herpetofaunal surveys, identifies roadkill hotspots, and supports mitigation planning in forested landscapes.",
//     theme: "herp",
//   },
//   {
//     code: "P-NUTS",
//     title: "Primate Novel Use of Tools & Strategies",
//     subtitle: "Cognition and innovation in macaques",
//     description:
//       "P-NUTS explores food-extraction techniques in Rhesus and Bonnet macaques, examining how strategies vary with age, experience, and human interactions. The project blends behavioural ecology with cognitive science.",
//     theme: "pnuts",
//   },
//   {
//     code: "CONECT",
//     title: "Community Outreach for Networking in Coexistence & Traditional Knowledge",
//     subtitle: "People-centric conservation science",
//     description:
//       "CONECT partners with local communities to document perceptions of biodiversity, coexistence practices, and traditional ecological knowledge, strengthening inclusive conservation approaches.",
//     theme: "conect",
//   },
//   {
//     code: "SYNC",
//     title: "Synurbanisation & Coexistence",
//     subtitle: "Wildlife in human-dominated landscapes",
//     description:
//       "SYNC examines how animals coexist with humans in urban and peri-urban ecosystems. The project spans birds, mammals, and herpetofauna, using cognitive and animal personality frameworks.",
//     theme: "sync",
//   },
//   {
//     code: "ESAP",
//     title: "Ecosystem Services & Adaptive Pest management",
//     subtitle: "Harnessing Predator Intelligence for Sustainable Pest Control",
//     description:
//       "ESAP focus on studying predator cognition to improve sustainable pest management strategies by exploring owl cognition and its role in natural pest control (Initiating a new project).",
//     theme: "esap",
//   },
// ];

// // Modern Project Card Component with Animations
// const ModernProjectCard = ({ project, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.1 }}
//     viewport={{ once: true }}
//     whileHover={{ y: -8 }}
//     className="modern-project-card"
//   >
//     <div className="project-card-label">{project.code}</div>
//     <h3 className="project-card-title">{project.title}</h3>
//     <p className="project-card-subtitle">{project.subtitle}</p>
//     <p className="project-card-description">{project.description}</p>
//     <div className="project-card-footer">
//       <a
//         href={FORM_LINK}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="project-card-button"
//       >
//         Apply Now
//         <FaArrowRight size={14} />
//       </a>
//     </div>
//   </motion.div>
// );

// export default function Opportunities() {



//   const [vantaEffect, setVantaEffect] = useState(null);
//         const vantaRef = useRef(null);
      
//         useEffect(() => {
//           if (!vantaEffect && vantaRef.current) {
//             // Initialize the Vanta effect with the topology configuration
//             const effect = TOPOLOGY({
//               el: vantaRef.current,
//               THREE: THREE,
//               mouseControls: true,      // Enable mouse interaction
//               touchControls: true,      // Enable touch interaction
//               gyroControls: false,      // Disable gyroscope
//               minHeight: 200.00,
//               minWidth: 200.00,
//               scale: 1.00,
//               scaleMobile: 1.00,
//               // Topology specific parameters for continuous animation
//               // color: 0x89964e,          // Brand purple as primary color
//               // backgroundColor: 0x222200, // White background
//               // wingSpan: 40.00,          // Controls the spread of the topology
//               // speed: 1.50,              // Animation speed (higher = faster morphing)
//               // Additional parameters for better topology effect
//               // noiseFactor: 12,         // Adds variation to the morphing
//               // waveHeight: 10.00,        // Controls the intensity of the waves
//               // zoom: 2,                // Slight zoom for better visibility
//             });
      
//             setVantaEffect(effect);
//           }
      
//           return () => {
//             if (vantaEffect) {
//               vantaEffect.destroy();
//             }
//           };
//         }, [vantaEffect]); // Only re-run if vantaEffect changes
// return(
// <div className="outreach-wrapper"> 
//  { /* Vanta Background Section */}
//         <section ref={vantaRef} className="vanta-hero">
//           {/* Content overlay - positioned above the background */}
//           <div className="vanta-overlay">
//             <motion.div
//               className="vanta-content"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.h1 
//                 className="vanta-title"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                Join Our Research & Conservation Team
//               </motion.h1>
              
//               <motion.p 
//                 className="vanta-subtitle"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                 Work at the intersection of ecology, cognition, communities, and conservation. Explore current openings across our ongoing projects.
                
//               </motion.p>
  
//               <motion.div 
//                 className="vanta-underline"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//               />
//             </motion.div>
//           </div>
//         </section>
     


//       {/* Projects Grid */}
//       <div className="projects-grid ">
//         {projects.map((project, index) => (
//           <ModernProjectCard key={project.code} project={project} index={index} />
//         ))}
//       </div>
    
// </div> );
// }

//new upgarde
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "./VantaHeader.css";
import { FaArrowRight, FaFlask, FaTree, FaPaw, FaFrog, FaBrain, FaUsers, FaCity, FaSeedling } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Outreach/OutreachPages.css";

const FORM_LINK = "https://forms.gle/Xs8EV3t3b8CbKXM57";

// Icon mapping for each project
const projectIcons = {
  recap: <FaTree size={24} />,
  chase: <FaPaw size={24} />,
  mesh: <FaPaw size={24} />,
  herp: <FaFrog size={24} />,
  pnuts: <FaBrain size={24} />,
  conect: <FaUsers size={24} />,
  sync: <FaCity size={24} />,
  esap: <FaSeedling size={24} />,
};

const projects = [
  {
    code: "RECAP",
    title: "Restoration Ecology of Cultivation-Abandoned Podus",
    subtitle: "Biodiversity recovery in shifting cultivation landscapes",
    description:
      "This project studies podus—cleared shifting cultivation plots within forests of the Eastern Ghats—and examines how abandoned podu lands transform into biodiversity havens. We investigate how podu age influences species richness and identify forest restoration strategies for podu-dominated landscapes.",
    theme: "recap",
  },
  {
    code: "CHASE",
    title: "Community Hunting Assessment of Species & Ecology",
    subtitle: "Understanding hunting drivers and ecological impacts",
    description:
      "CHASE focuses on assessing the drivers, patterns, and ecological impacts of hunting by forest-dwelling communities. The project combines ecological surveys with socio-ecological perspectives to inform conservation-relevant interventions.",
    theme: "chase",
  },
  {
    code: "MESH",
    title: "Mammal Ecology in Shared Habitats",
    subtitle: "Human-Wildlife interactions through camera trapping",
    description:
      "MESH uses camera traps to study mammal behaviour in human-impacted forests of the Eastern Ghats. The project analyses how mammals respond to human presence and activities in shared landscapes.",
    theme: "mesh",
  },
  {
    code: "HERP",
    title: "Herpetofauna Ecology & Roadkill Prevention",
    subtitle: "Mitigating amphibian and reptile mortality",
    description:
      "HERP investigates behavioural and cognitive pathways influencing amphibian road-avoidance behaviour. The project conducts herpetofaunal surveys, identifies roadkill hotspots, and supports mitigation planning in forested landscapes.",
    theme: "herp",
  },
  {
    code: "P-NUTS",
    title: "Primate Novel Use of Tools & Strategies",
    subtitle: "Cognition and innovation in macaques",
    description:
      "P-NUTS explores food-extraction techniques in Rhesus and Bonnet macaques, examining how strategies vary with age, experience, and human interactions. The project blends behavioural ecology with cognitive science.",
    theme: "pnuts",
  },
  {
    code: "CONECT",
    title: "Community Outreach for Networking in Coexistence & Traditional Knowledge",
    subtitle: "People-centric conservation science",
    description:
      "CONECT partners with local communities to document perceptions of biodiversity, coexistence practices, and traditional ecological knowledge, strengthening inclusive conservation approaches.",
    theme: "conect",
  },
  {
    code: "SYNC",
    title: "Synurbanisation & Coexistence",
    subtitle: "Wildlife in human-dominated landscapes",
    description:
      "SYNC examines how animals coexist with humans in urban and peri-urban ecosystems. The project spans birds, mammals, and herpetofauna, using cognitive and animal personality frameworks.",
    theme: "sync",
  },
  {
    code: "ESAP",
    title: "Ecosystem Services & Adaptive Pest management",
    subtitle: "Harnessing Predator Intelligence for Sustainable Pest Control",
    description:
      "ESAP focus on studying predator cognition to improve sustainable pest management strategies by exploring owl cognition and its role in natural pest control (Initiating a new project).",
    theme: "esap",
  },
];

// Truncate description to ensure uniform card height
const truncateDescription = (text, maxLength = 180) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

// Modern Project Card Component with Clean Animations
const ModernProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const brandColor = "#1eef5a";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="col"
      style={{ height: "100%" }}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          background: "#1a2b3c",
          border: `1px solid ${isHovered ? brandColor : "#2a3b4c"}`,
          borderRadius: "20px",
          padding: "28px 24px",
          height: "520px", // Fixed height for all cards
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          boxShadow: isHovered 
            ? `0 20px 30px -10px ${brandColor}40` 
            : "0 10px 20px -5px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        {/* Icon Container */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            color: isHovered ? brandColor : "#fff",
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: `${brandColor}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            border: `1px solid ${brandColor}30`,
            color: "#fff",
          }}
        >
          {projectIcons[project.theme] || <FaFlask size={22} />}
        </motion.div>

        {/* Project Code Badge */}
        <div
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
            marginBottom: "16px",
            alignSelf: "flex-start",
            color: brandColor,
            border: `1px solid ${brandColor}40`,
            backgroundColor: `${brandColor}10`,
          }}
        >
          {project.code}
        </div>

        {/* Title - Changes to green on hover */}
        <motion.h3
          animate={{ color: isHovered ? brandColor : "#ffffff" }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          {project.title}
        </motion.h3>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "#b0b0b0",
            fontWeight: "500",
            marginBottom: "12px",
            fontStyle: "italic",
            lineHeight: "1.4",
          }}
        >
          {project.subtitle}
        </p>

        {/* Description - Truncated for uniformity */}
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.6",
            color: "#d0d0d0",
            marginBottom: "20px",
            flex: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
          }}
        >
          {truncateDescription(project.description)}
        </p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ marginTop: "auto" }}
        >
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 20px",
              background: isHovered ? brandColor : "transparent",
              color: isHovered ? "#0a2b1a" : brandColor,
              border: `1.5px solid ${brandColor}`,
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
              width: "100%",
            }}
          >
            Apply Now
            <motion.span
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowRight size={12} />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Opportunities() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = TOPOLOGY({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div className="outreach-wrapper">
      {/* Vanta Background Section */}
      <section ref={vantaRef} className="vanta-hero">
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
              style={{ color: "#1eef5a " }}
            >
              Get Involved
            </motion.h1>

            <motion.p
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ color: "#e0e0e0" }}
            >
              Work at the intersection of ecology, cognition, communities, and conservation. 
              Explore current openings across our ongoing projects.
            </motion.p>

            <motion.div
              className="vanta-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ backgroundColor: "#1eef5a" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Uniform Cards */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <ModernProjectCard key={project.code} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}