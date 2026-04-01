// import React, {useEffect, useRef, useState} from "react";
// import * as THREE from "three";
// import TOPOLOGY from "vanta/src/vanta.topology.js";
// import { motion } from "framer-motion";
// import "./VantaHeader.css";
// import './Team.css';

// const teamData = [
//   {
//     name: 'Dr. Deyatima Ghosh',
//     quote: 'I am an ecologist approaching conservation from an animal cognition perspective and initiating the research theme of conservation behaviour. I work on amphibians, reptiles, birds, primates and other mammals, to understand how we can integrate their cognitive abilities into informing more effective conservation actions. I love to understand animals in their own right.',
//     image: 'team/DeyaNewProfile.jpg',
//   },
//   {
//     name: 'Dr. Vikram Aditya',
//     quote: 'I am an ecologist working on biodiversity and conservation for the past 20 years, primarily focusing on mammals and birds in the Eastern Ghats landscape. Currently, I am trying to understand the impacts of hunting on wildlife, and their spatio-temporal diversity and behaviour patterns inside and outside protected areas. For me, conservation is always with and for the communities that share their homes with wildlife.',
//     image: 'team/Vikram.jpg',
//   },
//   {
//     name: 'Dr. T. Ganesh',
//     quote: 'I am a scientist, ecologist, and naturalist with over three decades of experience in studying tropical forest ecology, phenology, and wildlife conservation in India. My research integrates long-term ecological monitoring, migration ecology, and community-based conservation to understand how climate and land-use change shape biodiversity patterns. I have published extensively in international journals and regularly contribute to capacity-building activities that shape the next generation of conservation scientists.',
//     image: 'team/tg.png',
//   },
//   {
//     name: 'Dr. Venkat Ramanujam',
//     quote: 'I am currently Assistant Professor in the Rural Management Programme, School of Humanities and Social Sciences, Shiv Nadar University, Delhi-NCR. I completed my PhD at the Ashoka Trust for Research in Ecology and the Environment (ATREE), Bengaluru. My alma maters include the University of Cambridge, the Tata Institute of Social Sciences (TISS), Mumbai, and St. Stephen’s College, Delhi. I was a development practitioner in the past with experience of working in the Nicobar Islands, Rajasthan, and central India. I am interested in rural transformation in indigenous communities, particularly in central India, and have been. My research examines ongoing livelihood transitions between forest-dependence, farming, market-dependence and migration. I have been closely engaged with the recognition of forest rights of indigenous communities in Madhya Pradesh and Chhattisgarh.',
//     image: 'team/Venkat_Ram.jpg',
//   },
//   {
//     name: 'Bhargavi Rao',
//     quote: "I bring over 25 years of experience working at the intersection of community action, law, policy, and practice. My work focuses on climate justice, land and livelihood rights, bridging grassroots realities with policy and institutional decision-making. I nurture a deep respect for local knowledge, lived experiences and a commitment to equitable, long-term solutions. I have worked with Environment Support Group, Centre for Financial Accountability, Azim Premji Philanthropic Initiatives, PHFI to name a few. I teach in various local institutions as guest faculty and on various study abroad programmes.",
//     image: 'team/BhargaviRao1.jpg',
//   },
//   {
//     name: 'Krishnakanth Pawar',
//     quote: "I am a Computer Science & Engineering undergraduate, working interdisciplinary from tracking critically endangered IUCN species' habitat selection in fresh water ecosystems to studying the shift in Phenological pattern of urban trees. Currently trying to understand, how Machine Learning modelling can strengthen the conservational efforts in Ecology. I developed this website with passion and now maintain it with care.",
//     image: 'team/krishnakanth1.jpg',
//   },
//   {
//     name: 'Farida Tampal',
//     quote: "Farida Tampal is a biologist who currently works as the State Director for WWF-India’s Hyderabad Office, overseeing both Andhra Pradesh and Telangana. Her career spanning diverse ecosystems and regions across India is a testament to her dedication to wildlife conservation and environmental sustainability. She obtained a Master's degree in Ecology in 1992 from Pondicherry University, and has since worked at the Centre for Herpetology at the Madras Crocodile Bank Trust (MCBT) as a Research Associate specialising in venomous snake captive breeding, and later at WWF-India’s West Bengal office as Senior Project Officer, working on wildlife conservation and research in the Eastern Himalayan and the Sundarbans. She is a member of several national and state-level steering and expert committees, including the State Board for Wildlife and the Biodiversity Board of Telangana, the National Biodiversity Authority, and the IUCN Task Force on the Global Biodiversity Framework and Education. Her work extends into sustainable livelihood initiatives, particularly empowering women in forest areas and addressing the links between environmental degradation and women’s rights. She has done pioneering work in integrating renewable energy for water management in forest areas.",
//     image: 'team/Farida.jpeg',
//   }
// ];

// export default function Team() {
//    const [vantaEffect, setVantaEffect] = useState(null);
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
//   return (
//     <div className="team-page">
//     <section ref={vantaRef} className="vanta-hero">
//             {/* Content overlay - positioned above the background */}
//             <div className="vanta-overlay">
//               <motion.div
//                 className="vanta-content"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <motion.h1 
//                   className="vanta-title"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                 >
//                   Meet the Team
//                 </motion.h1>
                
//                 <motion.p 
//                   className="vanta-subtitle"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                 >
//                   The people behind the mission, making impact possible
//                 </motion.p>
    
//                 <motion.div 
//                   className="vanta-underline"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: 0.8, delay: 0.8 }}
//                 />
//               </motion.div>
//             </div>
//           </section>





    
//       {teamData.map((member, idx) => (
//         <section key={idx} className={`member-section section-${idx}`}>
//           <div className="member-content">
//             <div className="photo">
//               <img src={member.image} alt={member.name} />
//             </div>
//             <div className="info">
//               <h3>{member.name}</h3>
//               <p>{member.quote}</p>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }

//2nd upgrade

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion, useInView } from "framer-motion";
import "./VantaHeader.css";
import './Team.css';

const teamData = [
  {
    name: 'Dr. Deyatima Ghosh',
    quote: 'I am an ecologist approaching conservation from an animal cognition perspective and initiating the research theme of conservation behaviour. I work on amphibians, reptiles, birds, primates and other mammals, to understand how we can integrate their cognitive abilities into informing more effective conservation actions. I love to understand animals in their own right.',
    image: 'team/deyahs.jpeg',
    role: 'Principal Investigator',
  },
  {
    name: 'Dr. Vikram Aditya',
    quote: 'I am an ecologist working on biodiversity and conservation for the past 20 years, primarily focusing on mammals and birds in the Eastern Ghats landscape. Currently, I am trying to understand the impacts of hunting on wildlife, and their spatio-temporal diversity and behaviour patterns inside and outside protected areas. For me, conservation is always with and for the communities that share their homes with wildlife.',
    image: 'team/Vikram.jpg',
    role: 'Principal Investigator',
  },
  {
    name: 'Dr. T. Ganesh',
    quote: 'I am a scientist, ecologist, and naturalist with over three decades of experience in studying tropical forest ecology, phenology, and wildlife conservation in India. My research integrates long-term ecological monitoring, migration ecology, and community-based conservation to understand how climate and land-use change shape biodiversity patterns. I have published extensively in international journals and regularly contribute to capacity-building activities that shape the next generation of conservation scientists.',
    image: 'team/tg.png',
    role: 'Senior Advisor',
  },
  {
    name: 'Dr. Venkat Ramanujam',
    quote: 'I am currently Assistant Professor in the Rural Management Programme, School of Humanities and Social Sciences, Shiv Nadar University, Delhi-NCR. I completed my PhD at the Ashoka Trust for Research in Ecology and the Environment (ATREE), Bengaluru. My alma maters include the University of Cambridge, the Tata Institute of Social Sciences (TISS), Mumbai, and St. Stephen\'s College, Delhi. I was a development practitioner in the past with experience of working in the Nicobar Islands, Rajasthan, and central India. I am interested in rural transformation in indigenous communities, particularly in central India, and have been. My research examines ongoing livelihood transitions between forest-dependence, farming, market-dependence and migration. I have been closely engaged with the recognition of forest rights of indigenous communities in Madhya Pradesh and Chhattisgarh.',
    image: 'team/Venkat_Ram.jpg',
    role: 'Collaborator',
  },
  {
    name: 'Bhargavi Rao',
    quote: "I bring over 25 years of experience working at the intersection of community action, law, policy, and practice. My work focuses on climate justice, land and livelihood rights, bridging grassroots realities with policy and institutional decision-making. I nurture a deep respect for local knowledge, lived experiences and a commitment to equitable, long-term solutions. I have worked with Environment Support Group, Centre for Financial Accountability, Azim Premji Philanthropic Initiatives, PHFI to name a few. I teach in various local institutions as guest faculty and on various study abroad programmes.",
    image: 'team/BhargaviRao1.jpg',
    role: 'Collaborator',
  },
  {
    name: 'Farida Tampal',
    quote: "I am a biologist currently serving as the State Director for WWF-India’s Hyderabad Office, overseeing conservation initiatives across Andhra Pradesh and Telangana. My career spans diverse ecosystems and regions across India, reflecting my long-standing commitment to wildlife conservation and environmental sustainability. I earned my Master’s degree in Ecology in 1992 from Pondicherry University. Over the years, I have worked as a Research Associate at the Centre for Herpetology at the Madras Crocodile Bank Trust, where I specialised in the captive breeding of venomous snakes. I later joined WWF-India’s West Bengal office as Senior Project Officer, contributing to wildlife conservation and research initiatives in the Eastern Himalayan region and the Sundarbans. I am a member of several national and state-level steering and expert committees, including the State Board for Wildlife and the Biodiversity Board of Telangana, the National Biodiversity Authority, and the IUCN Task Force on the Global Biodiversity Framework and Education. My work also extends into sustainable livelihood initiatives, with a strong focus on empowering women in forest-dependent communities and addressing the intersections between environmental degradation and women’s rights. Additionally, I have been involved in pioneering efforts to integrate renewable energy solutions for water management in forest areas.",
image: 'team/Farida.jpeg',
    role: 'Collaborator',
  },
  {
    name: 'Krishnakanth Pawar',
    quote: "I am a Computer Science and Engineering undergraduate, working interdisciplinary from tracking critically endangered IUCN species' habitat selection in fresh water ecosystems to studying the shift in Phenological pattern of urban trees. Currently trying to understand, how Machine Learning modelling can strengthen the conservational efforts by improving ecological insights and predictions. I developed this website with passion and continue to maintain it with care.  Find me hugging a tree or building SaaS products for wildlife and conservation.",
    image: 'team/krishnakanth1.jpg',
    role: 'Research Assistant',
  }
  
];

// Individual Member Card Component
const MemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const brandColor = "#1eef5a";

  // Soft, professional background colors
  const bgColors = [
    "#f8fafc",
    "#f0f4f8",
    "#f5f7fa",
    "#faf9f7",
  ];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        backgroundColor: bgColor,
        padding: "40px 0",
        borderBottom: "1px solid #eaeef2",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container">
        <div 
          className="member-content"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "50px",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Image Container - Square, not circle */}
          <motion.div 
            className="photo"
            animate={{
              scale: isHovered ? 1.02 : 1,
              boxShadow: isHovered 
                ? "0 20px 30px -10px rgba(0,0,0,0.15)" 
                : "0 10px 20px -5px rgba(0,0,0,0.05)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              flex: "0 0 240px",
              height: "240px",
              borderRadius: "12px", // Square with slight rounding
              overflow: "hidden",
              boxShadow: "0 10px 20px -5px rgba(0,0,0,0.05)",
              border: "1px solid #ffffff",
            }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>

          {/* Info Container */}
          <motion.div 
            className="info"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{
              flex: 1,
              textAlign: "justify",
            }}
          >
            {/* Name */}
            <motion.h2
              animate={{ color: isHovered ? brandColor : "#1a2b3c" }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "8px",
                lineHeight: "1.3",
                letterSpacing: "-0.02em",
              }}
            >
              {member.name}
            </motion.h2>

            {/* Role */}
            {/* <motion.p
              animate={{ color: isHovered ? brandColor : "#4a5b6c" }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#4a5b6c",
              }}
            >
              {member.role}
            </motion.p> */}

            {/* Quote/Bio */}
            <motion.p
              animate={{
                opacity: isHovered ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "#2c3e50",
                marginBottom: "20px",
                textAlign: "justify",
              }}
            >
              {member.quote}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              animate={{
                width: isHovered ? "80px" : "40px",
                backgroundColor: isHovered ? brandColor : "#cbd5e0",
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: "2px",
                borderRadius: "2px",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const brandColor = "#1eef5a";

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
    <div className="team-page">
      {/* Hero Section with Vanta */}
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
              Meet the Team
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ color: "#e0e0e0" }}
            >
              The people behind the mission, making impact possible
            </motion.p>

            <motion.div 
              className="vanta-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ backgroundColor: brandColor }}
            />
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <div className="team-members">
        {teamData.map((member, idx) => (
          <MemberCard key={idx} member={member} index={idx} />
        ))}
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .member-content {
            flex-direction: column !important;
            align-items: center !important;
            gap: 30px !important;
          }
          
          .photo {
            flex: 0 0 200px !important;
            width: 200px !important;
            height: 200px !important;
          }
          
          .info {
            text-align: center !important;
          }
          
          .info h2 {
            text-align: center !important;
          }
          
          .info p {
            text-align: left !important;
          }
          
          .info div {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </div>
  );
}