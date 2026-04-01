// import React, {useEffect, useRef, useState, useMemo} from "react";
// import * as THREE from "three";
// import TOPOLOGY from "vanta/src/vanta.topology.js";
// import { motion } from "framer-motion";
// import "../VantaHeader.css";

// import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./OutreachPages.css";
// import "./ModernCardStyles.css";

// // article data
// const articlesData = [
//   {
//     id: 1,
//     category: "Amphibians",
//     title: "Know Your Salamander to Conserve Amphibians: Study Their Intelligence",
//     source: "Mongabay",
//     date: "2024",
//     link: "https://news.mongabay.com/2024/06/know-your-salamander-to-conserve-amphibians-study-their-intelligence-commentary/",
//   },
//   {
//     id: 2,
//     category: "Reptiles",
//     title: "Reptiles are nature’s mappers",
//     source: "Down To Earth",
//     date: "2024",
//     link: "https://www.downtoearth.org.in/wildlife-biodiversity/reptiles-are-natures-mappers",
//   },
//   {
//     id: 3,
//     category: "Amphibians",
//     title: "Frogs are saying more than the usual- Are we listening",
//     source: "Science The Wire",
//     date: "2023",
//     link: "https://science.thewire.in/environment/frogs-vocalising-habitat-conservation/",
//   },
//   {
//     id: 4,
//     category: "Reptiles",
//     title: "Oriental Garden Lizards: Quick Learners or Bloodsuckers?",
//     source: "Roundglass Sustain",
//     date: "2023",
//     link: "https://roundglasssustain.com/species/oriental-garden-lizard",
//   },
//   {
//     id: 5,
//     category: "Agriculture",
//     title: "Killed in cold blood: Amphibians and reptiles are bearing the brunt of crop intensification",
//     source: "Down To Earth",
//     date: "2023",
//     link: "https://www.downtoearth.org.in/agriculture/killed-in-cold-blood-amphibians-and-reptiles-are-bearing-the-brunt-of-crop-intensification-87069",
//   },
//   {
//     id: 6,
//     category: "Reptiles",
//     title: "Understanding reptile intelligence can aid conservation and safeguard ecosystems",
//     source: "Mongabay",
//     date: "2023",
//     link: "https://news.mongabay.com/2023/01/reptile-intelligence-can-help-conservation-and-safeguard-ecosystems-commentary/",
//   },
//   {
//     id: 7,
//     category: "Amphibians",
//     title: "The Special, Spatial Lives of Amphibians",
//     source: "Sanctuary Asia",
//     date: "2022",
//     link: "https://sanctuarynaturefoundation.org/article/the-special%2C-spatial-lives-of-amphibians",
//   },
//   {
//     id: 8,
//     category: "Wildlife Policy",
//     title: "How the CITES wildlife pact missed the chance to curb trade in species that cause human disease",
//     source: "Scroll",
//     date: "2022",
//     link: "https://scroll.in/article/1039747/how-cites-wildlife-pact-missed-the-chance-to-curb-trade-in-species-that-cause-human-disease",
//   },
//   {
//     id: 9,
//     category: "Wildlife",
//     title: "Winged wonders: we should not resent bats, because we need them. ",
//     source: "Down To Earth",
//     date: "2020",
//     link: "https://www.downtoearth.org.in/wildlife-biodiversity/winged-wonders-we-should-not-resent-bats-because-we-need-them-72351",
//   },
//   {
//     id: 10,
//     category: "Wildlife",
//     title: "Under cover of lockdown, pangolin hunting continues-increasing India’s risk of disease",
//     source: "Scroll",
//     date: "2020",
//     link: "https://scroll.in/article/963824/under-cover-of-lockdown-pangolin-hunting-continues-increasing-indias-risk-of-disease",
//   },
  
//   {
//     id: 11,
//     category: "Wildlife",
//     title: "Pangolins in Peril: The illicit wildlife trade has pushed this mammal to the brink of extinction.",
//     source: "Roundglass Sustain",
//     date: "2020",
//     link: "https://roundglasssustain.com/species/pangolin-trade",
//   },
//   {
//     id: 12,
//     category: "Communities",
//     title: "How the Pandemic Has Affected India’s Forest-Dwelling Communities.",
//     source: "The Wire",
//     date: "2020",
//     link: "https://science.thewire.in/environment/how-the-pandemic-has-affected-indias-forest-dwelling-communities/",
//   },
//   {
//     id: 13,
//     category: "Communities",
//     title: "Pastoral communities of Tamil Nadu in peril",
//     source: "Mongabay",
//     date: "2020",
//     link: "https://india.mongabay.com/2020/04/commentary-pastoral-communities-of-tamil-nadu-in-peril/",
//   },
//   {
//     id: 14,
//     category: "Wildlife",
//     title: "How the cyber revolution is fuelling wildlife poaching in India: the story of the pangolin.",
//     source: "ATREE",
//     date: "2019",
//     link: "https://ayrnstories.wordpress.com/2019/06/07/how-the-cyber-revolution-is-fueling-wildlife-poaching-the-case-of-the-pangolin/",
//   },
//   {
//     id: 15,
//     category: "Wildlife",
//     title: "Scale of the issue: The Indian pangolin is losing ground in the northern Eastern Ghats",
//     source: "Mongabay",
//     date: "2019",
//     link: "https://india.mongabay.com/2019/02/commentary-scale-of-the-issue-the-indian-pangolin-is-losing-ground-in-the-northern-eastern-ghats/",
//   },
// ];

// // Article Card Component with Modern Design
// const ModernArticleCard = ({ article, index }) => {
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       variants={itemVariants}
//       initial="hidden"
//       whileInView="visible"
//       whileHover={{ y: -8, transition: { duration: 0.3 } }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="modern-article-card"
//     >
//       <div className="article-card-header">
//         <span className="article-card-badge article-source-badge">{article.source}</span>
//         <div className="article-card-meta">
//           <div className="article-card-date">{formatDate(article.date)}</div>
//         </div>
//       </div>
//       <div className="article-card-body">
//         <motion.a
//           href={article.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="article-card-title"
//           whileHover={{ x: 4 }}
//         >
//           {article.title}
//         </motion.a>
//       </div>
//       <div className="article-card-footer">
//         <motion.a
//           href={article.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="article-card-link"
//           whileHover={{ gap: "0.75rem" }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Read Article
//           <motion.span whileHover={{ x: 3 }}>
//             <FaExternalLinkAlt size={12} />
//           </motion.span>
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// // Article List Item Component
// const ArticleListItem = ({ article, index }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.4, delay: index * 0.05 }}
//     viewport={{ once: true }}
//     className="article-list-item"
//   >
//     <div className="article-number">{String(index + 1).padStart(2, "0")}</div>
//     <div className="article-info">
//       <a
//         href={article.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="article-list-title"
//       >
//         {article.title}
//       </a>
//       <div className="article-list-meta">
//         <span className="source-badge">{article.source}</span>
//         <span className="list-date">{formatDate(article.date)}</span>
//       </div>
//     </div>
//     <a
//       href={article.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="article-link-icon"
//     >
//       <FaExternalLinkAlt size={14} />
//     </a>
//   </motion.div>
// );

// // Utility function to format date
// function formatDate(dateString) {
//   if (!dateString) return "";
//   // If only a year is provided, return it as-is
//   if (/^\d{4}$/.test(dateString)) return dateString;

//   const d = new Date(dateString);
//   if (isNaN(d)) return dateString;

//   const options = { year: "numeric", month: "short", day: "numeric" };
//   return d.toLocaleDateString("en-US", options);
// }

// export default function ScienceArticles() {
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


//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter and sort articles
//   const filteredArticles = useMemo(() => {
//     let filtered = articlesData;

//     // Filter by search
//     if (searchTerm.trim()) {
//       filtered = filtered.filter(
//         (a) =>
//           a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           a.source.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Sort by date (most recent first)
//     filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
//     return filtered;
//   }, [searchTerm]);

//   // Use all filtered articles
//   const displayArticles = filteredArticles;

//   return (
//     <div className="outreach-wrapper">
//       {/* Header */}
//        <section ref={vantaRef} className="vanta-hero">
//               {/* Content overlay - positioned above the background */}
//               <div className="vanta-overlay">
//                 <motion.div
//                   className="vanta-content"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 >
//                   <motion.h1 
//                     className="vanta-title"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                   >
//                     In the News
//                   </motion.h1>
                  
//                   <motion.p 
//                     className="vanta-subtitle"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                   >
//                     Our research and conservation work featured in leading media outlets
//                   </motion.p>
//       </motion.div>
                 
//               </div>
//             </section>
            

//       {/* Search controls */}
//       <div className="content-controls">
    
      

//           <div className="search-input-wrapper">
//             <FaSearch className="search-icon" />
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search articles by title or source..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
          
//         </div>
//       </div>

//       {/* Articles Grid */}
//       <motion.div
//         className="articles-grid"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {displayArticles.length > 0 ? (
//           displayArticles.map((article, index) => (
//             <ModernArticleCard key={article.id} article={article} index={index} />
//           ))
//         ) : (
//           <div className="no-results">
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               No articles found. Try adjusting your search term.
//             </motion.p>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

//new upgarde
import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "../VantaHeader.css";

import { FaExternalLinkAlt, FaSearch, FaNewspaper, FaCalendarAlt } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./OutreachPages.css";

// article data
const articlesData = [
  {
    id: 1,
    category: "Amphibians",
    title: "Know Your Salamander to Conserve Amphibians: Study Their Intelligence",
    source: "Mongabay",
    date: "2024",
    link: "https://news.mongabay.com/2024/06/know-your-salamander-to-conserve-amphibians-study-their-intelligence-commentary/",
  },
  {
    id: 2,
    category: "Reptiles",
    title: "Reptiles are nature’s mappers",
    source: "Down To Earth",
    date: "2024",
    link: "https://www.downtoearth.org.in/wildlife-biodiversity/reptiles-are-natures-mappers",
  },
  {
    id: 3,
    category: "Amphibians",
    title: "Frogs are saying more than the usual- Are we listening",
    source: "Science The Wire",
    date: "2023",
    link: "https://science.thewire.in/environment/frogs-vocalising-habitat-conservation/",
  },
  {
    id: 4,
    category: "Reptiles",
    title: "Oriental Garden Lizards: Quick Learners or Bloodsuckers?",
    source: "Roundglass Sustain",
    date: "2023",
    link: "https://roundglasssustain.com/species/oriental-garden-lizard",
  },
  {
    id: 5,
    category: "Agriculture",
    title: "Killed in cold blood: Amphibians and reptiles are bearing the brunt of crop intensification",
    source: "Down To Earth",
    date: "2023",
    link: "https://www.downtoearth.org.in/agriculture/killed-in-cold-blood-amphibians-and-reptiles-are-bearing-the-brunt-of-crop-intensification-87069",
  },
  {
    id: 6,
    category: "Reptiles",
    title: "Understanding reptile intelligence can aid conservation and safeguard ecosystems",
    source: "Mongabay",
    date: "2023",
    link: "https://news.mongabay.com/2023/01/reptile-intelligence-can-help-conservation-and-safeguard-ecosystems-commentary/",
  },
  {
    id: 7,
    category: "Amphibians",
    title: "The Special, Spatial Lives of Amphibians",
    source: "Sanctuary Asia",
    date: "2022",
    link: "https://sanctuarynaturefoundation.org/article/the-special%2C-spatial-lives-of-amphibians",
  },
  {
    id: 8,
    category: "Wildlife Policy",
    title: "How the CITES wildlife pact missed the chance to curb trade in species that cause human disease",
    source: "Scroll",
    date: "2022",
    link: "https://scroll.in/article/1039747/how-cites-wildlife-pact-missed-the-chance-to-curb-trade-in-species-that-cause-human-disease",
  },
  {
    id: 9,
    category: "Wildlife",
    title: "Winged wonders: we should not resent bats, because we need them. ",
    source: "Down To Earth",
    date: "2020",
    link: "https://www.downtoearth.org.in/wildlife-biodiversity/winged-wonders-we-should-not-resent-bats-because-we-need-them-72351",
  },
  {
    id: 10,
    category: "Wildlife",
    title: "Under cover of lockdown, pangolin hunting continues-increasing India’s risk of disease",
    source: "Scroll",
    date: "2020",
    link: "https://scroll.in/article/963824/under-cover-of-lockdown-pangolin-hunting-continues-increasing-indias-risk-of-disease",
  },
  {
    id: 11,
    category: "Wildlife",
    title: "Pangolins in Peril: The illicit wildlife trade has pushed this mammal to the brink of extinction.",
    source: "Roundglass Sustain",
    date: "2020",
    link: "https://roundglasssustain.com/species/pangolin-trade",
  },
  {
    id: 12,
    category: "Communities",
    title: "How the Pandemic Has Affected India’s Forest-Dwelling Communities.",
    source: "The Wire",
    date: "2020",
    link: "https://science.thewire.in/environment/how-the-pandemic-has-affected-indias-forest-dwelling-communities/",
  },
  {
    id: 13,
    category: "Communities",
    title: "Pastoral communities of Tamil Nadu in peril",
    source: "Mongabay",
    date: "2020",
    link: "https://india.mongabay.com/2020/04/commentary-pastoral-communities-of-tamil-nadu-in-peril/",
  },
  {
    id: 14,
    category: "Wildlife",
    title: "How the cyber revolution is fuelling wildlife poaching in India: the story of the pangolin.",
    source: "ATREE",
    date: "2019",
    link: "https://ayrnstories.wordpress.com/2019/06/07/how-the-cyber-revolution-is-fueling-wildlife-poaching-the-case-of-the-pangolin/",
  },
  {
    id: 15,
    category: "Wildlife",
    title: "Scale of the issue: The Indian pangolin is losing ground in the northern Eastern Ghats",
    source: "Mongabay",
    date: "2019",
    link: "https://india.mongabay.com/2019/02/commentary-scale-of-the-issue-the-indian-pangolin-is-losing-ground-in-the-northern-eastern-ghats/",
  },
];

// Utility function to format date
function formatDate(dateString) {
  if (!dateString) return "";
  if (/^\d{4}$/.test(dateString)) return dateString;
  
  const d = new Date(dateString);
  if (isNaN(d)) return dateString;
  
  const options = { year: "numeric", month: "short", day: "numeric" };
  return d.toLocaleDateString("en-US", options);
}

// Article List Item Component - Uniform styling
const ArticleListItem = ({ article, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "20px 24px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        border: "1px solid #e9ecef",
        transition: "all 0.3s ease",
        boxShadow: isHovered 
          ? "0 8px 20px rgba(0,0,0,0.08)" 
          : "0 2px 8px rgba(0,0,0,0.02)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        marginBottom: "12px"
      }}
    >
      {/* Number indicator */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          backgroundColor: isHovered ? "#28a745" : "#f0f9f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
          color: isHovered ? "#fff" : "#28a745",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          flexShrink: 0
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      
      {/* Article info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#1a2b3c",
            fontWeight: "600",
            fontSize: "1.05rem",
            lineHeight: "1.5",
            display: "block",
            marginBottom: "8px",
            transition: "color 0.3s ease",
            textAlign: "left",
          }}
          onMouseEnter={(e) => e.target.style.color = "#28a745"}
          onMouseLeave={(e) => e.target.style.color = "#1a2b3c"}
        >
          {article.title}
        </a>
        
        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FaNewspaper size={12} color="#28a745" />
            <span style={{ fontSize: "0.9rem", color: "#28a745", fontWeight: "500" }}>
              {article.source}
            </span>
          </div>
          
          <span style={{ fontSize: "0.8rem", color: "#adb5bd" }}>•</span>
          
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FaCalendarAlt size={11} color="#6c757d" />
            <span style={{ fontSize: "0.9rem", color: "#6c757d" }}>
              {formatDate(article.date)}
            </span>
          </div>
          
          <span style={{ 
            fontSize: "0.75rem", 
            backgroundColor: "#f8f9fa", 
            padding: "2px 8px", 
            borderRadius: "12px",
            color: "#495057",
            display: "inline-block"
          }}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Button - Using subscribe-btn class */}
      <motion.a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="subscribe-btn"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 4px 12px rgba(40, 167, 69, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          backgroundColor: isHovered ? "#28a745" : "#f0f9f0",
          transition: "all 0.3s ease",
          flexShrink: 0
        }}
      >
        <FaExternalLinkAlt 
          size={16} 
          color={isHovered ? "#fff" : "#28a745"} 
        />
      </motion.a>
    </motion.div>
  );
};

export default function ScienceArticles() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter articles based on search only
  const filteredArticles = useMemo(() => {
    let filtered = articlesData;

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.source.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Keep original order
    return filtered;
  }, [searchTerm]);

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
            >
              In the News
            </motion.h1>
            
            <motion.p 
              className="vanta-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our research and conservation work featured in leading media outlets
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

      {/* Search Bar */}
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div style={{ position: "relative" }}>
              <FaSearch 
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#adb5bd",
                  zIndex: 10,
                  fontSize: "1rem"
                }} 
              />
              <input
                type="text"
                className="form-control"
                placeholder="Search articles by title or source..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  paddingLeft: "48px",
                  paddingRight: "20px",
                  height: "56px",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  fontSize: "1rem",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#28a745";
                  e.target.style.boxShadow = "0 4px 16px rgba(40, 167, 69, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e9ecef";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
              />
            </div>
            
            {/* Results count */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ 
                marginTop: "12px", 
                color: "#6c757d", 
                fontSize: "0.95rem",
                textAlign: "right"
              }}
            >
              Showing <strong style={{ color: "#28a745" }}>{filteredArticles.length}</strong> articles
            </motion.p>
          </div>
        </div>

        {/* Articles List - Uniform styling */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            {filteredArticles.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredArticles.map((article, index) => (
                  <ArticleListItem 
                    key={article.id} 
                    article={article} 
                    index={index} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-start"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "16px",
                  padding: "60px 20px"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <h5 style={{ color: "#1a2b3c", marginBottom: "0.5rem" }}>
                  No articles found
                </h5>
                <p style={{ color: "#6c757d", marginBottom: "1.5rem" }}>
                  Try adjusting your search term
                </p>
                <motion.button
                  className="subscribe-btn"
                  onClick={() => setSearchTerm("")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "0.8rem 2rem",
                    borderRadius: "10px",
                    fontSize: "0.95rem"
                  }}
                >
                  Clear Search
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}