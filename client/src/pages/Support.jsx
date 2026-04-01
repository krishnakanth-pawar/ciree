
import axios from "axios";
// removed Carousel in favor of a CSS-based parallax stack
import React, {useEffect, useRef, useState} from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology.js";
import { motion } from "framer-motion";
import "./VantaHeader.css";

export default function Support() {


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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    help: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validators = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your full name (min 2 characters)."),
    email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? "" : "Enter a valid email address."),
    designation: (v) => (v.trim().length > 0 ? "" : "Please provide your designation."),
    help: (v) => (v.trim().length >= 10 ? "" : "Tell us how you'd like to help (min 10 characters).")
  };

  const validateField = (name, value) => {
    const fn = validators[name];
    return fn ? fn(value) : "";
  };

  const validateAll = (data) => {
    const next = {};
    Object.keys(validators).forEach((k) => {
      const err = validateField(k, data[k] ?? "");
      if (err) next[k] = err;
    });
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    if (touched[name]) {
      setErrors((s) => ({ ...s, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((s) => ({ ...s, [name]: true }));
    setErrors((s) => ({ ...s, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const nextTouched = { name: true, email: true, designation: true, help: true };
    setTouched(nextTouched);

    const validation = validateAll(formData);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus("Please fix the errors above.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/support", formData);
      setStatus(res?.data?.message || "Thanks — we received your request.");
      setFormData({ name: "", email: "", designation: "", help: "" });
      setTouched({});
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2500);
    } catch (err) {
      console.error(err);
      const serverMsg = err?.response?.data?.message;
      setStatus(serverMsg || "Sorry - an error occurred while submitting. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status && status.toLowerCase().includes("error")) {
      // keep status visible for a few seconds if error
      const t = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    
    <div className="outreach-wrapper"> 
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
                Support Our Conservation Efforts
              </motion.h1>
              
              <motion.p 
                className="vanta-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
               Fill the form to be a part of real world conservation impact.
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
      

      {/* Main content: form + imagery */}
      <section className="outreach-content container my-5">
        <div className="row gy-4 align-items-start">
          <div className="col-md-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="support-form-wrapper"
            >
              <div className="support-form p-4 bg-white">
              <div className="mb-3">
                <p className="form-label text-start">Name</p>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                  placeholder="Tell us your full name"
                />
                {touched.name && errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <p className="form-label text-start">Email</p>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                  placeholder="you@example.com"
                />
                {touched.email && errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <p className="form-label text-start">Designation</p>
                <input
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${touched.designation && errors.designation ? "is-invalid" : ""}`}
                  placeholder="Student,Researcher,etc."
                />
                {touched.designation && errors.designation && (
                  <div className="invalid-feedback">{errors.designation}</div>
                )}
              </div>

              <div className="mb-3">
                <p className="form-label text-start">How do you wish to help us?</p>
                <textarea
                  name="help"
                  rows={6}
                  value={formData.help}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${touched.help && errors.help ? "is-invalid" : ""}`}
                  placeholder="Tell us how you'd like to contribute or support us"
                />
                {touched.help && errors.help && (
                  <div className="invalid-feedback">{errors.help}</div>
                )}
              </div>

              <div className="d-flex align-items-center">
                <button type="submit" className="subscribe-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {showSuccess && <div className="text-success">Request submitted.</div>}
                {!showSuccess && status && (
                  <div className="text-muted small">{status}</div>
                )}
              </div>
              </div>
            </motion.form>
          </div>

          <div className="col-md-5">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              <div className="parallax-viewport">
                <div className="parallax-item" style={{ backgroundImage: "url('/paralax1.JPG')" }}>
                  <div className="parallax-caption">
                     <h5>Science with communities, for coexistence</h5>
                    {/* <p>Join our field teams for monitoring and surveys.</p>  */}
                  </div>
                </div>

                <div className="parallax-item" style={{ backgroundImage: "url('/paralax2.jpg')" }}>
                  <div className="parallax-caption">
                     <h5>Ecological Challenges into Collaborative Solutions</h5>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}


