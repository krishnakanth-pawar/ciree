
import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel, Card, Button, Badge } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaPeopleArrows, FaHandsHelping, FaLeaf,  FaArrowRight,
  FaHeart, FaMicroscope, FaCamera, FaCalendarAlt, FaBookOpen
} from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";

const values = [
  {
    icon: <FaPeopleArrows size={40} className="mb-3"style={{ color: "#1EEF5A" }} />,
    title: "Inclusive conservation",
    desc: "We bring together multiple approaches, ecology, cognition, animal responses, and human perspectives to build a more inclusive, holistic, and forward-looking understanding of conservation challenges."
  },
  {
    icon: <FaHandsHelping size={40} className="mb-3"style={{ color: "#1EEF5A" }} />,
    title: "Communities as co-creators",
    desc: "We see local communities not as stakeholders but as knowledge holders and co-creators of conservation. Lasting coexistence emerges when people drive the decisions that affect their own landscapes and futures."
  },
  {
    icon: <FaLeaf size={40} className="mb-3"style={{ color: "#1EEF5A" }} />,
    title: "Compassion and coexistence",
    desc: "Our work is guided by compassion for the forests, for the animals, and for the people who share their lives with them. By respecting both human dignity and animal welfare, we aim to foster coexistence rooted in fairness and care."
  }
];

const researchAreas = [
  { 
    title: "Human Wildlife Interaction", 
    img: "/researchCarousels/Humawildlife1.jpg", 
    path: "/research/human-wildlife",
    // icon: <FaPeopleArrows size={30} />,
    description: "Understanding complex relationships between humans and wildlife in shared landscapes",
    // stats: "24+ Active Studies"
  },
  { 
    title: "Ecosystem Services", 
    img: "/researchCarousels/Ecosystem1.jpg", 
    path: "/research/ecosystem",
    // icon: <FaGlobeAsia size={30} />,
    description: "Quantifying the benefits nature provides to communities and biodiversity",
    // stats: "15 Ecosystems Monitored"
  },
  { 
    title: "Coexistence", 
    img: "/researchCarousels/house.jpeg", 
    path: "/research/coexistence",
    // icon: <FaHeart size={30} />,
    description: "Developing models for sustainable human-wildlife coexistence",
    // stats: "12 Community Programs"
  },
  { 
    title: "Ecology", 
    img: "/researchCarousels/ecologyNew1.webp", 
    path: "/research/ecology",
    // icon: <FaTree size={30} />,
    description: "Studying species interactions and ecosystem dynamics",
    // stats: "50+ Species Tracked"
  },
  { 
    title: "Communities", 
    img: "/researchCarousels/community1.jpeg", 
    path: "/research/communities",
    // icon: <FaUsers size={30} />,
    description: "Empowering local communities as conservation leaders",
    // stats: "8 Indigenous Partnerships"
  },
  { 
    title: "Biodiversity Conservation", 
    img: "/researchCarousels/biodiversity1.jpg", 
    path: "/research/biodiversity",
    // icon: <FaPaw size={30} />,
    description: "Protecting and restoring critical habitats and species",
    // stats: "1000+ Acres Protected"
  }
];


const featuredProjects = [
  {
    title: "Leopard Corridor Project",
    location: "Western Ghats",
    image: "/banner/Leopard1.jpg",
    progress: 75,
    description: "Establishing safe passage routes for leopards between fragmented habitats"
  },
  {
    title: "Community Forest Stewards",
    location: "Central India",
    image: "/researchCarousels/community1.jpeg",
    progress: 60,
    description: "Training local communities in sustainable forest management"
  },
  {
    title: "Elephant Migration Study",
    location: "Eastern Himalayas",
    image: "/banner/scene1.jpeg",
    progress: 90,
    description: "Tracking elephant corridors using GPS collars and community knowledge"
  }
];
// NEW: Recent Updates
const recentUpdates = [
  {
    title: "New Leopard Corridor Identified",
    date: "March 2024",
    category: "Research",
    image: "/banner/Leopard1.jpg",
    excerpt: "Groundbreaking study reveals critical connectivity between protected areas in Western Ghats"
  },
  {
    title: "Community Workshop Success",
    date: "February 2024",
    category: "Community",
    image: "/researchCarousels/community1.jpeg",
    excerpt: "Local stewards complete training in sustainable forest management"
  },
  {
    title: "Elephant Migration Patterns",
    date: "January 2024",
    category: "Publication",
    image: "/banner/scene1.jpeg",
    excerpt: "New paper published on seasonal movement patterns in Eastern Himalayas"
  }
];
// NEW: Featured Publications
const featuredPublications = [
  {
    title: "Conservation Behavior in Amphibians",
    authors: "Ghosh, D., et al.",
    journal: "Conservation Biology",
    year: "2023",
    impact: "IF: 6.3"
  },
  {
    title: "Human-Wildlife Coexistence Models",
    authors: "Aditya, V., et al.",
    journal: "Frontiers in Ecology",
    year: "2023",
    impact: "IF: 5.1"
  },
  {
    title: "Forest Phenology and Climate",
    authors: "Ganesh, T., et al.",
    journal: "Ecology Letters",
    year: "2022",
    impact: "IF: 8.8"
  }
];




export default function Home() {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({});
  useEffect(() => {
    // Animate counters when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger counter animation
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('impact-stats');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    // Counter animation logic
    const targets = [15, 50, 1000, 25];
    const increments = [1, 2, 50, 1];
    const intervals = targets.map((target, index) => {
      let current = 0;
      return setInterval(() => {
        current += increments[index];
        if (current >= target) {
          current = target;
          clearInterval(intervals[index]);
        }
        setCounters(prev => ({ ...prev, [index]: current }));
      }, 30);
    });
  };

  const handleExplore = (path) => {
    navigate(path);
  };
  

  return (
  
     <ParallaxProvider>
      <div className="home-page">
        {/* HERO CAROUSEL */}
        <section className="hero-carousel">
          <Carousel interval={3000} fade indicators={false} controls={false}>
            <Carousel.Item>
             

              <img className="d-block w-100" src="/banner/scene1.jpeg" alt="Slide 1"
                style={{ aspectRatio: '21/9', objectFit: 'cover', maxHeight: '1000px' }} />
              <Carousel.Caption className="hero-caption">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Understanding conservation through multiple lenses
                </motion.h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/banner/scene.jpeg" alt="Slide 2"
                style={{ aspectRatio: '21/9', objectFit: 'cover',  maxHeight: '1000px' }} />
              <Carousel.Caption className="hero-caption">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Bridging ecology, cognition, and communities
                </motion.h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/banner/head1.jpg" alt="Slide 3"
                  style={{ aspectRatio: '21/9', objectFit: 'cover', maxHeight: '1000px' }} />
              <Carousel.Caption className="hero-caption">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Where science meets traditional knowledge
                </motion.h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
 {/*SECTION 3: QUICK RESEARCH HIGHLIGHTS */}
    {/* SECTION 3: QUICK RESEARCH HIGHLIGHTS - Auto-scrolling Carousel */}
<section className="research-highlights py-5" style={{ backgroundColor: "#1eef5a" }}>
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-4"
    >
      <h2 className="section-title" style={{ color: "#ffffff" }} >Research Focus</h2>
      
    </motion.div>
  </Container>

  {/* Auto-scrolling carousel */}
  <Container fluid className="px-0">
    <motion.div 
      className="research-auto-scroll"
      animate={{
        x: [0, -1920], // Adjust this value based on total width of cards
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Adjust speed (seconds per full cycle)
          ease: "linear",
        }
      }}
      style={{
        display: 'flex',
        gap: '1.5rem',
        width: 'max-content',
      }}
    >
      {/* Duplicate the array to create seamless loop */}
      {[...researchAreas, ...researchAreas].map((area, idx) => (
        <motion.div
          key={`${area.title}-${idx}`}
          className="research-card-item"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          style={{
            width: '320px',
            minWidth: '280px',
            cursor: 'pointer',
          }}
          onClick={() => handleExplore(area.path)}
        >
          <div className="highlight-card h-100">
            <div className="highlight-image">
              <img src={area.img} alt={area.title} />
              <div className="highlight-overlay">
                <span className="highlight-icon">{area.icon}</span>
              </div>
            </div>
            <div className="highlight-content p-4">
              <h4>{area.title}</h4>
              <p className="text-muted">{area.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Container>

  {/* Pause on hover functionality - Add this if you want hover to pause */}
  <style jsx>{`
    .research-auto-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>

  
</section>

       
        
{/* SECTION 2: WELCOME/MISSION STATEMENT */}
        <section className="mission-section py-5" style={{ backgroundColor: '#f8f9ff' }}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {/* <Badge bg="primary" className="mb-3" style={{ backgroundColor: '#5a1eef' }}>
                    Our Mission
                  </Badge> */}
                  <h2 className="display-5 fw-bold mb-4">
                    Advancing conservation through{' '}
                    <span style={{ color: '#1eef5a' }}>integration</span> and{' '}
                    <span style={{ color: '#ef5a1e' }}>collaboration</span>
                  </h2>
                  <p className="lead mb-4">
                    At Center for Interdisciplinary Research in Ecology and the Environment, we believe that effective conservation requires bringing together 
                    ecological science, animal cognition, and community wisdom. Our interdisciplinary 
                    approach creates holistic solutions that benefit both biodiversity and human communities.
                  </p>
                  <div className="mission-features">
                    <div className="feature-item">
                      <FaLeaf style={{ color: '#1eef5a' }} />
                      <span>Ecology-first approach</span>
                    </div>
                    <div className="feature-item">
                      <FaHeart style={{ color: '#ef5a1e' }} />
                      <span>Community-centered</span>
                    </div>
                    <div className="feature-item">
                      <FaMicroscope style={{ color: '#5a1eef' }} />
                      <span>Evidence-based</span>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  className="mission-image-wrapper"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="mission-image-grid">
                    <div className="grid-item" style={{ borderColor: '#000000' }}>
                      <img src="/banner/Leopard1.jpg" alt="Leopard" />
                    </div>
                    <div className="grid-item" style={{ borderColor: '#000000' }}>
                      <img src="/banner/res1.JPG" alt="Community" />
                    </div>
                    <div className="grid-item" style={{ borderColor: '#000000' }}>
                      <img src="/banner/res2.JPG" alt="Ecology" />
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>


        

        {/* VALUES SECTION */}
        <section className="p-5" style={{ backgroundColor: "#ef5a1e" }}>
          <Container fluid className="px-0">
            <h2 className="section-title text-center fw-bold mb-3" style={{ color: "#ffffff" }}>Core Values</h2>
           
            <Row className="gy-5 gx-4">
              {values.map((val, idx) => (
                <Col md={4} key={idx}>
                  <motion.div
                    className="h-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="value-card rounded-4 shadow-lg h-100">
                      <Card.Body className="bg-light text-dark rounded-4 text-center p-4">
                        {val.icon}
                        <h5 className="fw-bold mb-3" style={{ color: "#000000" }}>{val.title}</h5>
                        <p>{val.desc}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        

        {/* SECTION 6: CALL TO ACTION */}
        <section className="cta-section py-5" style={{ background: 'linear-gradient(135deg, #5a1eef 0%, #ef5a1e 100%)' }}>
          <Container>
            <Row className="align-items-center">
              <Col lg={8}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-white mb-3">Join us in conservation</h2>
                  <p className="text-white-50 mb-0">
                    Whether you're a researcher, student, or community member, there's a place for you at CIREE.
                  </p>
                </motion.div>
              </Col>
              <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    size="lg"
                    onClick={() => handleExplore('/support')}
                    style={{
                      backgroundColor: 'white',
                      color: '#5a1eef',
                      border: 'none',
                      padding: '1rem 2rem',
                      fontWeight: 'bold'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1eef5a';
                      e.target.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#5a1eef';
                    }}
                  >
                    Get Involved <FaArrowRight className="ms-2" />
                  </Button>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        

        <style jsx>{`
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a2c;
            margin-bottom: 1rem;
          }

          .section-underline {
            width: 250px;
            height: 4px;
            background: linear-gradient(90deg, #5a1eef, #1eef5a, #ef5a1e);
            margin: 1rem auto;
            border-radius: 5px;
          }

          .hero-caption {
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            left: 0;
            right: 0;
            bottom: 0;
            padding: 3rem;
            text-align: left;
          }

          .hero-caption h1 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 700;
            max-width: 800px;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }

          .stat-card {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }

          .stat-icon {
            font-size: 2.5rem;
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            color: #6c757d;
            margin: 0;
          }

          .mission-features {
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .mission-image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .grid-item {
            border: 3px solid;
            border-radius: 15px;
            overflow: hidden;
          }

          .grid-item:first-child {
            grid-column: span 2;
          }

          .grid-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .grid-item:hover img {
            transform: scale(1.05);
          }

          .highlight-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .highlight-image {
            position: relative;
            height: 200px;
            overflow: hidden;
          }

          .highlight-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .highlight-card:hover .highlight-image img {
            transform: scale(1.1);
          }

          .highlight-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent, rgba(90, 30, 239, 0.5));
            display: flex;
            align-items: flex-end;
            padding: 1rem;
          }

          .highlight-icon {
            color: white;
            font-size: 2rem;
          }

          .update-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            min-height: 150px;
          }

          .update-card {
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }

          .update-card:hover {
            transform: translateX(5px);
          }

          .publication-card {
            border: none;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }

          .event-item {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          .event-date {
            text-align: center;
            min-width: 60px;
            padding: 0.5rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }

          .event-date .day {
            display: block;
            font-size: 1.5rem;
            font-weight: 700;
            color: #5a1eef;
          }

          .event-date .month {
            font-size: 0.8rem;
            color: #6c757d;
          }

          .partner-logo-wrapper {
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
            }

            .mission-features {
              flex-direction: column;
              gap: 1rem;
            }

            .mission-image-grid {
              margin-top: 2rem;
            }
          }
        `}</style>
      </div>
    </ParallaxProvider>
  );
}


//new page w fix for smaller screen carousel 
