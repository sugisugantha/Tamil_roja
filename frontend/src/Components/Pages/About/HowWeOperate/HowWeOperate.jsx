import React from "react";
import "./HowWeOperate.css";
import { FaUsers, FaChartLine, FaCogs, FaSyncAlt } from "react-icons/fa";
import arrow from "../../../../assets/Images/arrow.png"
import { motion } from "framer-motion";

const HowWeOperate = () => {
  return (

        <section>
          <section className="home-feature-container">
            <div className="feature-area feature-bg py-120">
                <div className="container con" style={{
                      overflow:"hidden"
                    }}>
                      <motion.div
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }} className="booking-heading">
                        <div className="booking-heading-title">
                           <span className="section-label">● Work Process</span>
                        </div>
                        <div className="booking-heading-subtitle">
                          <h2 style={{
                            color:"white"
                          }}>
                          How<span className="below-border"> We </span>Operate
                          </h2>
                        </div>
                      </motion.div>
                      
                
                      <motion.div
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }} className="booking-step">
                        <motion.div
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }} className="booking-steps">
                          <div>
                            <FaUsers />
                          </div>
                          <div className="about-content" style={{
                         
                            width:"100%"
                          }}>
                            <h3>Initial Political Consultation</h3>
                            <p>We begin by understanding the candidate, party position, constituency demographics, and campaign goals in a personalized session.</p>
                          </div>
                          <div className="arrow">
                            <img src={arrow} alt="arrow" className="arrow-icons" />
                          </div>
                        </motion.div>
                
                        <motion.div
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }} className="booking-steps">
                          <div>
                            <FaChartLine />
                          </div>
                          <div className="about-content" style={{
                         
                            width:"100%"
                          }}>
                            <h3>Strategy Development</h3>
                            <p>A detailed winning plan is crafted — including booth-level analysis, voter segmentation, and messaging.</p>
                          </div>
                          <div className="arrows">
                            <img src={arrow} alt="arrow" className="arrow-icon" />
                          </div>
                        </motion.div>
                
                        <motion.div
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }} className="booking-steps">
                          <div>
                            <FaCogs />
                          </div>
                          <div className="about-content" style={{
                         
                            width:"100%"
                          }}>
                            <h3>Campaign Implementation</h3>
                            <p>Our team executes the plan through survey teams, cadre training, digital outreach, and issue targeting.</p>
                          </div>
                          <div className="arrow">
                            <img src={arrow} alt="arrow" className="arrow-icons" />
                          </div>
                        </motion.div>
                
                        <motion.div
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0}} className="booking-steps">
                          <div>
                            <FaSyncAlt />
                          </div>
                          <div className="about-content" style={{
                         
                            width:"100%"
                          }}>
                            <h3  style={{
                         
                            width:"100%"
                          }}>Live Monitoring & Feedback</h3>
                            <p>We track progress in real-time, monitor voter sentiment, and fine-tune the approach till polling day.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
            </div>
          </section>
        </section>
    // <section className="how-we-operate-section">
    //   <div className="how-we-operate-container">
    //     {steps.map((step, index) => (
    //       <div className="step-card" key={index}>
    //         <div className="step-badge">
    //           <span>{step.number}</span>
    //           <div className="step-icon">{step.icon}</div>
    //         </div>
    //         <h3 className="step-title">{step.title}</h3>
    //         <p className="step-description">{step.description}</p>
    //         {index !== steps.length - 1 && <div className="arrow-right" />}
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default HowWeOperate;