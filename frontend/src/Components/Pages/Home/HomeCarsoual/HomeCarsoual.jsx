import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../../../assets/Images/seman.webp";
import ExampleCarouselImage1 from "../../../../assets/Images/1.png";
import ExampleCarouselImage2 from "../../../../assets/Images/dmk.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeCarsoual.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircle  } from "react-icons/fa6";
import { motion } from 'framer-motion';

const HomeCarsoual = () => {
  const navigate=useNavigate()
  return (
    <section >
       
      <div className="home-container-carousel">
        <Carousel fade>
          <Carousel.Item>
         
            <div className="image-container">
              <img src={ExampleCarouselImage2} className="d-block w-100" />
              <div className="gradient-overlay"></div>
                 

            </div>

          <Carousel.Caption>
  <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{ display: "flex", marginBottom: "20px" }}
  >
    <span className="hero-carousel-highlight">
      <span style={{ marginRight: "10px" }}>
        <FaCircle />
      </span>
      Booth-Level Intelligence
    </span>
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="hero-carousel-title"
  >
    Win Where It Matters – <span style={{ color: "#ffffff" }}>On the Ground</span>
  </motion.h1>

  <motion.h5
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mt-3"
  >
    Data-driven booth analysis and micro-targeted strategy for every region.
    <br />
    Build from the base. Build to win.
  </motion.h5>

  <motion.button
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="btn btn-dark text-light mt-4"
  >
    <Link to="/services" className="text-light">
      Learn More
    </Link>
    <span style={{ marginLeft: "10px" }}>
      <FaArrowRightLong />
    </span>
  </motion.button>
</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img src={ExampleCarouselImage1} className="d-block w-100" />
              <div className="gradient-overlay"></div>
             
            </div>
         <Carousel.Caption>
  <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{ display: "flex", marginBottom: "20px" }}
  >
    <span className="hero-carousel-highlight">
      <span style={{ marginRight: "10px" }}>
        <FaCircle />
      </span>
      Voter Behavior Insights
    </span>
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="hero-carousel-title"
  >
    Understand What <span style={{ color: "#ffffff" }}>Voters Really Want</span>
  </motion.h1>

  <motion.h5
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mt-3"
  >
    Analyze public sentiment, expectations, and loyalty shifts with smart data.
    <br />
    Build trust through insight.
  </motion.h5>

  <motion.button
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="btn btn-dark text-light mt-4"
  >
    <Link to="/service" className="text-light">
      Learn More
    </Link>
    <span style={{ marginLeft: "10px" }}>
      <FaArrowRightLong />
    </span>
  </motion.button>
</Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img src={ExampleCarouselImage} className="d-block w-100" />
              <div className="gradient-overlay"></div>
             
            </div>
         <Carousel.Caption>
  <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{ display: "flex", marginBottom: "20px" }}
  >
    <span className="hero-carousel-highlight">
      <span style={{ marginRight: "10px" }}>
        <FaCircle />
      </span>
     End-to-End Political Consulting
    </span>
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="hero-carousel-title"
  >
  From Planning to <span style={{ color: "#ffffff" }}>Political Victory</span>
  </motion.h1>

  <motion.h5
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mt-3"
  >
   Crisis management, survey analysis, cadre training — all under one roof.
    <br />
    Plan smart. Lead strong.
  </motion.h5>

  <motion.button
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="btn btn-dark text-light mt-4"
  >
    <Link to="/contact" className="text-light">
      Get In Touch
    </Link>
    <span style={{ marginLeft: "10px" }}>
      <FaArrowRightLong />
    </span>
  </motion.button>
</Carousel.Caption>

          </Carousel.Item>
        </Carousel>
      
      </div>
      
   
   
    </section>
  );
};

export default HomeCarsoual;
