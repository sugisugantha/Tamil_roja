import React from "react";
import building from "../../../../assets/Images/mission1.png";
import mission from "../../../../assets/Images/missions.png";
import visssion from "../../../../assets/Images/vission.png";
import value from "../../../../assets/Images/values.png";
import dot from "../../../../assets/Images/dot.png";
import "./AboutService.css";
import { motion } from "framer-motion";

const AboutService = () => {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <div className="container con">
        <div className="row">
          <div
            className="col-md-12"
            style={{
              margin: "30px 0px",
            }}
          ></div>
          <div
            className="col-md-12 mb-5"
            style={{
              textAlign: "-webkit-center",
            }}
          >
            <div
              className="about-us-content1 about-content"
              style={{
                textAlign: "center",
                maxWidth: "100%",
              }}
            >
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{
                  textAlign: "center",
                }}
              >
                Our <span className="below-border">Vision, Mission &</span>{" "}
                Values
              </motion.h1>
            </div>
          </div>
          <div
            className="col-md-12 buili"
            style={{
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img src={building} width={100} />
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="mission1">
            <motion.div
              className="vission1-content"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>01</h3>
            </motion.div>
            <motion.div
              className="vission2-content"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5>Our Mission</h5>
              <ul
                className="about-us-list kkk"
                style={{
                  flexDirection: "column",
                }}
              >
                <li className="about-us-list-1 ">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Booth-Level Empowerment - We aim to decode every booth and
                      provide leaders with the clarity to act locally and win
                      decisively.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Voter-Centric Strategies - Our mission is to put the voter
                      at the heart of every political decision, message, and
                      outreach.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      We leverage data tools, behavioral models, and digital
                      platforms to make campaigns smarter and more precise.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Capacity Building for Leaders - We help strengthen
                      leadership at all levels — from grassroots cadres to
                      candidates — through insights and training.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Our strategies are not just for one election but build
                      long-term trust, visibility, and credibility.
                    </span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="mission2"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <img src={mission} className="image-s" />
            <div className="dot">
              <img src={dot} />
            </div>
          </motion.div>
        </div>
        <div className="vission">
          <div className=" mission2 vission2">
            <motion.img
              src={visssion}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="image-s"
            />
            <div className="dots">
              <img src={dot} />
            </div>
          </div>
          <div className="vission1">
            <motion.div
              className="vission1-content"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>02</h3>
            </motion.div>
            <motion.div
              className="vission2-content"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h5>Our Vision</h5>
              <ul
                className="about-us-list kkk"
                style={{
                  flexDirection: "column",
                }}
              >
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      We vision being the go-to agency for all political
                      parties and candidates seeking authentic transformation.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Driving Ethical Leadership - Our vision is to create a
                      political landscape rooted in trust, facts, and integrity.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Community-Driven Campaigns - We believe that campaigns
                      should reflect the real voices, problems, and aspirations
                      of the local people.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      We strive to remain at the forefront of political
                      technology, from predictive analytics to survey
                      innovation.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-content">
                      Our long-term goal is to shape policies, politics, and
                      public leadership that truly serve the people.
                    </span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="value">
          <div className="value1">
            <motion.div
              className="vission1-content"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>03</h3>
            </motion.div>
            <motion.div
              className="vission2-content"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5>Our Value</h5>
              <ul
                className="about-us-list kkk"
                style={{
                  flexDirection: "column",
                }}
              >
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-bold">Integrity :</span>
                    <span className="point-content">
                      We operate with strict confidentiality, political
                      neutrality, and truth-based reporting, no matter the
                      pressure.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-bold">Voter Respect :</span>
                    <span className="point-content">
                      Every strategy respects the will and voice of the people —
                      always grounded in real concerns and local culture.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-bold">Innovation:</span>
                    <span className="point-content">
                      We constantly explore new tools, trends, and techniques to
                      stay ahead of changing political landscapes.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-bold">Excellence :</span>
                    <span className="point-content">
                      From strategy to execution, we are committed to measurable
                      outcomes, continuous improvement, and innovation.
                    </span>
                  </span>
                </li>
                <li className="about-us-list-1">
                  <span className="about-us-listicons">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-check fa-w-14"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="point-bold">Collaboration :</span>
                    <span className="point-content">
                      We work as strategic partners with candidates and cadres —
                      aligning our expertise with your political vision.
                    </span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="mission2"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <img src={value} className="image-s" />
            <div className="dot">
              <img src={dot} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
