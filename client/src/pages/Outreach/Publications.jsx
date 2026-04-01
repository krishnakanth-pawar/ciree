

// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import TOPOLOGY from "vanta/src/vanta.topology.js";
// import { motion } from "framer-motion";
// import "../VantaHeader.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./OutreachPages.css";

// const publications = [
//   {
//     title: "Giving a cold shoulder: why and how do we conserve farmland herpetofauna in India?",
//     authors: "Ghosh D",
//     summary: "Numerous studies highlight the adverse impacts of agriculture on farmland biodiversity. Balancing increased agricultural production along with biodiversity conservation is a critical global challenge, especially in India. Amphibians and reptiles face the greatest threats from agriculture. This perspective article highlights the need to conserve amphibian and reptile diversity in farmlands, presenting evidence of their decline and emphasizing their ecological importance.",
//     image: "publication/Giving.jpg",
//     doi: "https://doi.org/10.1017/S0376892924000316",
//     journal: "Environmental Conservation"
//   },
//   {
//     title: "Does agricultural intensification impact pest regulation service by frogs in a natural multi-trophic system?",
//     authors: "Ghosh D, Basu P",
//     summary: "Experimental research linking biodiversity loss to ecosystem service decline is rare. This study demonstrated how reduced frog densities—caused by agricultural intensification—can alter multi-trophic interactions, with limited pest control but unintended suppression of natural arthropod predators.",
//     image: "publication/Does.jpg",
//     doi: "https://doi.org/10.1016/j.pecon.2023.06.002",
//     journal: "Perspective in Ecology and Conservation"
//   },
//   {
//     title: "Unsung heroes: What does herpetofauna do for us?",
//     authors: "Ghosh D, Aditya V, Aravind N A",
//     summary: "Herpetofauna, despite their vital role as natural pest predators in agroecosystems, are largely overlooked in biological control strategies. This review synthesizes five decades of research on their pest regulation potential, highlighting the need to better understand and integrate reptiles and amphibians into sustainable pest management and conservation efforts.",
//     image: "publication/Unsung.jpg",
//     doi: "https://doi.org/10.1670/23-026",
//     journal: "Journal of Herpetology"
//   },
//   {
//     title: "What are we saving? The amphibians and reptiles of the rice paddies in Balasore, India",
//     authors: "Ghosh D",
//     summary: "Agricultural landscapes, especially rice paddies, are critical but under-studied habitats for herpetofauna. This project aims to document amphibian and reptile species diversity in these environments, providing baseline data necessary for effective conservation efforts both outside and inside protected areas. By integrating ecological sampling with community knowledge, the project will highlight the conservation potential of agricultural lands.",
//     image: "publication/What.jpg",
//     doi: "https://doi.org/10.17161/randa.v31i1.20815",
//     journal: "Reptiles and Amphibians"
//   },
//   {
//     title: "Clever pest control? The role of cognition in biological pest regulation",
//     authors: "Ghosh D, John EA, Wilkinson A",
//     summary: "Effective biological pest control requires more than identifying natural predators—it hinges on understanding the cognitive processes that shape predator behaviour, such as foraging, memory, and prey recognition. This paper found that integrating cognition into pest management could enhance the efficiency, specificity, and sustainability of crop protection strategies.",
//     image: "publication/Clever.jpg",
//     doi: "https://doi.org/10.1007/s10071-022-01731-4",
//     journal: "Animal Cognition"
//   },
//   {
//     title: "Factors influencing herpetofauna abundance and diversity in a tropical heterogeneous landscape mosaic",
//     authors: "Ghosh D, Basu P",
//     summary: "Amphibian and reptile diversity in agricultural landscapes is shaped by multiple factors operating at different spatial scales. Amphibians are more sensitive to agricultural intensification across both patch and landscape levels, while reptiles were influenced more by proximity to forests and fallow lands. These scale-specific patterns offer critical insights for targeted herpetofauna conservation in farming regions.",
//     image: "publication/Factors.jpg",
//     doi: "https://doi.org/10.1111/btp.12799",
//     journal: "Biotropica"
//   },
//   {
//     title: "Deciphering forest change: linking satellite-based forest cover change and community perceptions in a threatened landscape in India",
//     authors: "Aditya V, Ganesh T",
//     summary: "The Eastern Ghats of India is an unexplored forest landscape that has remained neglected for conservation despite supporting several endemic and threatened species. Only 3.53% of the total area of the Northern Eastern Ghats is under protection. Here, we examined the effectiveness of protected areas like the Papikonda National Park in preventing forest degradation in the Eastern Ghats, combining community perceptions of land cover change with satellite-based landscape change analyses and ecological field surveys.",
//     image: "publication/Deciphering.jpg",
//     doi: "https://doi.org/10.1007/s13280-018-1108-x",
//     journal: "Ambio"
//   },
//   {
//     title: "Integrating camera traps and community knowledge to assess the status of the Indian pangolin Manis crassicaudata in the Eastern Ghats, India",
//     authors: "Aditya V, Komanduri K, Subhedar R, Ganesh T",
//     summary: "Pangolins are the most highly trafficked animals globally because of the escalating demand for their scales, meat and skin. We conducted detailed interviews with 30 village communities to understand factors driving pangolin occurrence and distribution in the Eastern Ghats, and to identify drivers of hunting and trade. This work was interdisciplinary in nature, combining the ecology of pangolins with a social science approach using GIS/RS and mapping tools.",
//     image: "publication/Integrating.jpg",
//     doi: "https://doi.org/10.1017/S0030605319001303",
//     journal: "Oryx"
//   },
//   {
//     title: "Insights into human‐wildlife coexistence through temporal activity pattern overlaps in a neglected tropical forest in India",
//     authors: "Aditya V., Ganesh T. (2022)",
//     summary: "Forests in India face high anthropogenic pressure from human activities such as collection of forest products, hunting, etc., which affect the circadian temporal activity patterns of mammals. Here, we assessed how human activity in forests influenced mammal temporal activity patterns in the Northern Eastern Ghats. This was the first paper showing how mammal activity overlapped with humans in the Eastern Ghats forests and was interdisciplinary based on camera trap surveys and GIS/RS.",
//     image: "publication/Insights.png",
//     doi: "https://doi.org/10.1111/btp.13131",
//     journal: "Biotropica"
//   },
//   {
//     title: "Collation of indigenous and local knowledge as evidence base for herpetofauna conservation outside protected areas: Case study from an agricultural landscape in Eastern India",
//     authors: "Ghosh D, Basu P",
//     summary: "Farmers across varying levels of agricultural intensification reported a marked decline in herpetofauna, particularly amphibians and snakes, with pesticides identified as the leading threat. Despite the decline, most recognized their ecological role in pest control, highlighting opportunities for community-led conservation in rural landscapes.",
//     image: "publication/Collation.JPG",
//     doi: "https://doi.org/10.1007/s12595-021-00386-2",
//     journal: "Proceedings of the Zoological Society"
//   },
//   {
//     title: "Scale of the issue: Mapping the impact of the COVID-19 lockdown on pangolin trade across India",
//     authors: "Aditya V, Goswami R, Mendis A, Roopa R",
//     summary: "The COVID-19 pandemic induced restrictions of public movement led to an increase in wildlife trade in India. We used online seizure reports to assess the scale of pangolins trade across India during the lockdown months and previous years, and found a threefold increase during COVID-19. This research involved extensive geographic analysis of trade patterns across India using GIS/RS tools, and was one of the first to reveal trends in wildlife trade across the country during the pandemic.",
//     image: "publication/Scale.jpg",
//     doi: "https://doi.org/10.1016/j.biocon.2021.109136",
//     journal: "Biological Conservation"
//   },
//   {
//     title: "First record of Forsten's Catsnake, Boiga forsteni",
//     authors: "Pasul Y, Aditya V, Ghosh D",
//     summary: "Roadkill surveys detect through conventional field methods. This study has reported the Forsten's cat snake presence in the buffer zone of Papikonda National Park, in the poorly studied Northern Eastern Ghats landscape.",
//     image: "publication/Forsten.jpg",
//     doi: null,
//     journal: "(Accepted: Zoo's Print)"
//   }
// ];

// export default function Publications() {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect && vantaRef.current) {
//       const effect = TOPOLOGY({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00,
//       });

//       setVantaEffect(effect);
//     }

//     return () => {
//       if (vantaEffect) {
//         vantaEffect.destroy();
//       }
//     };
//   }, [vantaEffect]);

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Function to truncate summary
//   const truncateSummary = (text, maxLength = 180) => {
//     if (text.length <= maxLength) return text;
//     return text.substr(0, maxLength) + "...";
//   };

//   return (
//     <div className="outreach-wrapper">
//       {/* Vanta Background Section */}
//       <section ref={vantaRef} className="vanta-hero">
//         <div className="vanta-overlay">
//           <motion.div
//             className="vanta-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <motion.h1
//               className="vanta-title"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Our Publications
//             </motion.h1>

//             <motion.p
//               className="vanta-subtitle"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               Selected peer-reviewed work and research outputs
//             </motion.p>

//             <motion.div
//               className="vanta-underline"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             />
//           </motion.div>
//         </div>
//       </section>

//       <div className="container py-5">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {publications.map((pub, index) => (
//             <motion.div
//               key={index}
//               className="col"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//             >
//               <motion.div
//                 className="card h-100 border-0 shadow-sm"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 whileHover={{
//                   y: -8,
//                   boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)"
//                 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 style={{
//                   cursor: "pointer",
//                   borderRadius: "16px",
//                   overflow: "hidden",
//                   backgroundColor: "#fff"
//                 }}
//               >
//                 {/* Image Container with Gradient Overlay */}
//                 <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
//                   <motion.img
//                     src={`/${pub.image}`}
//                     className="w-100 h-100"
//                     alt={pub.title}
//                     style={{ objectFit: "cover" }}
//                     animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       height: "50%",
//                       background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)"
//                     }}
//                   />
                  
//                   {/* Journal Badge */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "12px",
//                       right: "12px",
//                       backgroundColor: "rgba(40, 167, 69, 0.9)",
//                       color: "white",
//                       padding: "4px 12px",
//                       borderRadius: "20px",
//                       fontSize: "0.75rem",
//                       fontWeight: "600",
//                       backdropFilter: "blur(4px)"
//                     }}
//                   >
//                     {pub.journal}
//                   </div>
//                 </div>

//                 <div className="card-body d-flex flex-column p-4">
//                   {/* Title */}
//                   <motion.h5
//                     className="card-title fw-bold mb-3"
//                     style={{
//                       fontSize: "1.1rem",
//                       lineHeight: "1.4",
//                       color: "#1a2b3c"
//                     }}
//                     animate={hoveredIndex === index ? { color: "#28a745" } : { color: "#1a2b3c" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {pub.title}
//                   </motion.h5>

//                   {/* Authors */}
//                   <motion.p
//                     className="mb-2"
//                     style={{
//                       fontSize: "0.9rem",
//                       color: "#6c757d",
//                       fontStyle: "italic"
//                     }}
//                   >
//                     {pub.authors}
//                   </motion.p>

//                   {/* Summary */}
//                   <motion.p
//                     className="card-text mb-4"
//                     style={{
//                       fontSize: "0.95rem",
//                       color: "#495057",
//                       lineHeight: "1.6",
//                       flex: "1"
//                     }}
//                   >
//                     {truncateSummary(pub.summary)}
//                   </motion.p>

//                   {/* Button Container */}
//                   <div className="mt-auto">
//                     {pub.doi ? (
//                       <motion.a
//                         href={pub.doi}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="subscribe-btn d-inline-block text-decoration-none"
//                         whileHover={{
//                           scale: 1.05,
//                           boxShadow: "0 5px 15px rgba(40, 167, 69, 0.3)"
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                         style={{
//                           width: "100%",
//                           textAlign: "center",
//                           backgroundColor: "#28a745",
//                           color: "#fff",
//                           padding: "0.75rem 1rem",
//                           borderRadius: "8px",
//                           fontWeight: "600",
//                           fontSize: "0.95rem",
//                           transition: "all 0.3s ease"
//                         }}
//                       >
//                         Read Full Paper
//                         <i className="bi bi-arrow-right ms-2"></i>
//                       </motion.a>
//                     ) : (
//                       <button
//                         className="subscribe-btn w-100"
//                         disabled
//                         style={{
//                           backgroundColor: "#e9ecef",
//                           color: "#6c757d",
//                           cursor: "not-allowed",
//                           padding: "0.75rem 1rem",
//                           borderRadius: "8px",
//                           fontWeight: "600",
//                           fontSize: "0.95rem",
//                           border: "none"
//                         }}
//                       >
//                         In Press
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 {/* Hover Effect Border */}
//                 <motion.div
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     height: "4px",
//                     backgroundColor: "#28a745",
//                     transformOrigin: "left"
//                   }}
//                   initial={{ scaleX: 0 }}
//                   animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

//2nd upgardewith opportunities like cards
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Outreach/OutreachPages.css";

const publications = [
  {
    title: "Giving a cold shoulder: why and how do we conserve farmland herpetofauna in India?",
    authors: "Ghosh D",
    summary: "Numerous studies highlight the adverse impacts of agriculture on farmland biodiversity. Balancing increased agricultural production along with biodiversity conservation is a critical global challenge, especially in India. Amphibians and reptiles face the greatest threats from agriculture. This perspective article highlights the need to conserve amphibian and reptile diversity in farmlands, presenting evidence of their decline and emphasizing their ecological importance.",
    image: "publication/Giving.jpg",
    doi: "https://doi.org/10.1017/S0376892924000316",
    journal: "Environmental Conservation"
  },
  {
    title: "Does agricultural intensification impact pest regulation service by frogs in a natural multi-trophic system?",
    authors: "Ghosh D, Basu P",
    summary: "Experimental research linking biodiversity loss to ecosystem service decline is rare. This study demonstrated how reduced frog densities—caused by agricultural intensification—can alter multi-trophic interactions, with limited pest control but unintended suppression of natural arthropod predators.",
    image: "publication/Does.jpg",
    doi: "https://doi.org/10.1016/j.pecon.2023.06.002",
    journal: "Perspective in Ecology and Conservation"
  },
  {
    title: "Unsung heroes: What does herpetofauna do for us?",
    authors: "Ghosh D, Aditya V, Aravind N A",
    summary: "Herpetofauna, despite their vital role as natural pest predators in agroecosystems, are largely overlooked in biological control strategies. This review synthesizes five decades of research on their pest regulation potential, highlighting the need to better understand and integrate reptiles and amphibians into sustainable pest management and conservation efforts.",
    image: "publication/Unsung.jpg",
    doi: "https://doi.org/10.1670/23-026",
    journal: "Journal of Herpetology"
  },
  {
    title: "What are we saving? The amphibians and reptiles of the rice paddies in Balasore, India",
    authors: "Ghosh D",
    summary: "Agricultural landscapes, especially rice paddies, are critical but under-studied habitats for herpetofauna. This project aims to document amphibian and reptile species diversity in these environments, providing baseline data necessary for effective conservation efforts both outside and inside protected areas. By integrating ecological sampling with community knowledge, the project will highlight the conservation potential of agricultural lands.",
    image: "publication/What.jpg",
    doi: "https://doi.org/10.17161/randa.v31i1.20815",
    journal: "Reptiles and Amphibians"
  },
  {
    title: "Clever pest control? The role of cognition in biological pest regulation",
    authors: "Ghosh D, John EA, Wilkinson A",
    summary: "Effective biological pest control requires more than identifying natural predators—it hinges on understanding the cognitive processes that shape predator behaviour, such as foraging, memory, and prey recognition. This paper found that integrating cognition into pest management could enhance the efficiency, specificity, and sustainability of crop protection strategies.",
    image: "publication/Clever.jpg",
    doi: "https://doi.org/10.1007/s10071-022-01731-4",
    journal: "Animal Cognition"
  },
  {
    title: "Factors influencing herpetofauna abundance and diversity in a tropical heterogeneous landscape mosaic",
    authors: "Ghosh D, Basu P",
    summary: "Amphibian and reptile diversity in agricultural landscapes is shaped by multiple factors operating at different spatial scales. Amphibians are more sensitive to agricultural intensification across both patch and landscape levels, while reptiles were influenced more by proximity to forests and fallow lands. These scale-specific patterns offer critical insights for targeted herpetofauna conservation in farming regions.",
    image: "publication/Factors.jpg",
    doi: "https://doi.org/10.1111/btp.12799",
    journal: "Biotropica"
  },
  {
    title: "Deciphering forest change: linking satellite-based forest cover change and community perceptions in a threatened landscape in India",
    authors: "Aditya V, Ganesh T",
    summary: "The Eastern Ghats of India is an unexplored forest landscape that has remained neglected for conservation despite supporting several endemic and threatened species. Only 3.53% of the total area of the Northern Eastern Ghats is under protection. Here, we examined the effectiveness of protected areas like the Papikonda National Park in preventing forest degradation in the Eastern Ghats, combining community perceptions of land cover change with satellite-based landscape change analyses and ecological field surveys.",
    image: "publication/Deciphering.jpg",
    doi: "https://doi.org/10.1007/s13280-018-1108-x",
    journal: "Ambio"
  },
  {
    title: "Integrating camera traps and community knowledge to assess the status of the Indian pangolin Manis crassicaudata in the Eastern Ghats, India",
    authors: "Aditya V, Komanduri K, Subhedar R, Ganesh T",
    summary: "Pangolins are the most highly trafficked animals globally because of the escalating demand for their scales, meat and skin. We conducted detailed interviews with 30 village communities to understand factors driving pangolin occurrence and distribution in the Eastern Ghats, and to identify drivers of hunting and trade. This work was interdisciplinary in nature, combining the ecology of pangolins with a social science approach using GIS/RS and mapping tools.",
    image: "publication/Integrating.jpg",
    doi: "https://doi.org/10.1017/S0030605319001303",
    journal: "Oryx"
  },
  {
    title: "Insights into human‐wildlife coexistence through temporal activity pattern overlaps in a neglected tropical forest in India",
    authors: "Aditya V., Ganesh T. (2022)",
    summary: "Forests in India face high anthropogenic pressure from human activities such as collection of forest products, hunting, etc., which affect the circadian temporal activity patterns of mammals. Here, we assessed how human activity in forests influenced mammal temporal activity patterns in the Northern Eastern Ghats. This was the first paper showing how mammal activity overlapped with humans in the Eastern Ghats forests and was interdisciplinary based on camera trap surveys and GIS/RS.",
    image: "publication/Insights.png",
    doi: "https://doi.org/10.1111/btp.13131",
    journal: "Biotropica"
  },
  {
    title: "Collation of indigenous and local knowledge as evidence base for herpetofauna conservation outside protected areas: Case study from an agricultural landscape in Eastern India",
    authors: "Ghosh D, Basu P",
    summary: "Farmers across varying levels of agricultural intensification reported a marked decline in herpetofauna, particularly amphibians and snakes, with pesticides identified as the leading threat. Despite the decline, most recognized their ecological role in pest control, highlighting opportunities for community-led conservation in rural landscapes.",
    image: "publication/Collation.JPG",
    doi: "https://doi.org/10.1007/s12595-021-00386-2",
    journal: "Proceedings of the Zoological Society"
  },
  {
    title: "Scale of the issue: Mapping the impact of the COVID-19 lockdown on pangolin trade across India",
    authors: "Aditya V, Goswami R, Mendis A, Roopa R",
    summary: "The COVID-19 pandemic induced restrictions of public movement led to an increase in wildlife trade in India. We used online seizure reports to assess the scale of pangolins trade across India during the lockdown months and previous years, and found a threefold increase during COVID-19. This research involved extensive geographic analysis of trade patterns across India using GIS/RS tools, and was one of the first to reveal trends in wildlife trade across the country during the pandemic.",
    image: "publication/Scale.jpg",
    doi: "https://doi.org/10.1016/j.biocon.2021.109136",
    journal: "Biological Conservation"
  }, 
  {
    title: "First record of Forsten's Catsnake, Boiga forsteni",
    authors: "Pasul Y, Aditya V, Ghosh D",
    summary: "Roadkill surveys detect through conventional field methods. This study has reported the Forsten's cat snake presence in the buffer zone of Papikonda National Park, in the poorly studied Northern Eastern Ghats landscape.",
    image: "publication/Forsten.jpg",
    doi: null,
    journal: "(Accepted: Zoo's Print)"
  }
];

// Truncate summary to ensure uniform card height
const truncateSummary = (text, maxLength = 140) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

// Publication Card Component - Matching Opportunities card design with images
const PublicationCard = ({ pub, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const brandColor = "#1eef5a";

  // Default placeholder if image fails to load
  const handleImageError = () => {
    setImageError(true);
  };

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
          background: "#1a2b3c", // Same dark background as Opportunities
          border: `1px solid ${isHovered ? brandColor : "#2a3b4c"}`,
          borderRadius: "20px",
          padding: "0", // Remove padding to accommodate image at top
          height: "560px", // Slightly taller to accommodate image
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
        {/* Image Container */}
        <div
          style={{
            height: "160px",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#0a1a2a",
          }}
        >
          {!imageError ? (
            <motion.img
              src={`/${pub.image}`}
              alt={pub.title}
              onError={handleImageError}
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1a2b3c, #2a3b4c)",
                color: "#b0b0b0",
                fontSize: "0.9rem",
              }}
            >
              <FaBookOpen size={32} color={`${brandColor}40`} />
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40px",
              background: "linear-gradient(to top, #1a2b3c, transparent)",
            }}
          />
        </div>

        {/* Content Container */}
        <div
          style={{
            padding: "20px 20px 24px 20px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Journal Badge */}
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "600",
              letterSpacing: "0.3px",
              marginBottom: "12px",
              alignSelf: "flex-start",
              color: brandColor,
              border: `1px solid ${brandColor}40`,
              backgroundColor: `${brandColor}10`,
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <FaBookOpen size={10} style={{ marginRight: "6px", marginTop: "-2px" }} />
            {pub.journal}
          </div>

          {/* Title - Changes to green on hover */}
          <motion.h3
            animate={{ color: isHovered ? brandColor : "#ffffff" }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              marginBottom: "8px",
              lineHeight: "1.4",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {pub.title}
          </motion.h3>

          {/* Authors */}
          <p
            style={{
              fontSize: "0.85rem",
              color: "#b0b0b0",
              fontWeight: "500",
              marginBottom: "12px",
              fontStyle: "italic",
              lineHeight: "1.4",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {pub.authors}
          </p>

          {/* Summary - Truncated for uniformity */}
          <p
            style={{
              fontSize: "0.85rem",
              lineHeight: "1.5",
              color: "#d0d0d0",
              marginBottom: "16px",
              flex: 1,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {truncateSummary(pub.summary)}
          </p>

          {/* DOI Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ marginTop: "auto" }}
          >
            {pub.doi ? (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  background: isHovered ? brandColor : "transparent",
                  color: isHovered ? "#0a2b1a" : brandColor,
                  border: `1.5px solid ${brandColor}`,
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
              >
                Read Paper
                <motion.span
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaExternalLinkAlt size={11} />
                </motion.span>
              </a>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  background: "#2a3b4c",
                  color: "#999",
                  border: `1.5px solid #3a4b5c`,
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  width: "100%",
                  cursor: "not-allowed",
                }}
              >
                In Press
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Publications() {
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
            Publications
            </motion.h1>

            <motion.p
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ color: "#e0e0e0" }}
            >
              Selected peer-reviewed work and research outputs
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

      {/* Publications Grid - Uniform Cards with Images */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {publications.map((pub, index) => (
            <PublicationCard key={index} pub={pub} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}