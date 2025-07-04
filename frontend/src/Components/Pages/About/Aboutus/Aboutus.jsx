import React from "react";
import background from "../../../../assets/Images/kk.png";
import circleImage from "../../../../assets/Images/about-2-2.jpg";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <section className="container con about-section">
      <div className="about-container">
        <div className="aboutus-container">
          <img
            src={background}
            alt="Background Shape"
            className="background-image"
          />

          <div className="circle-image-wrapper">
            <img
              src={circleImage}
              alt="Team"
              className="circle-image bounce-y"
            />
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">● About Company</span>
          <h1>Committed to Your Political Growth and Victory</h1>
          <p>
            Tamil Roja Consulting Services Pvt. Ltd. is a leading political
            consulting firm based in Tamil Nadu, dedicated to empowering
            political campaigns with strategy, data, and grassroots strength.
            Founded by Meiyazhagan, we provide actionable insights and
            full-spectrum support to help leaders and parties connect with
            people and win with confidence.
          </p>
          <div className="aboutus-features">
            <ul
              className="about-us-list"
              style={{
                gap: "2px",
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
                <span className="point-content">Booth-Level Expertise</span>
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
                <span className="point-content">
                 Data-Driven Strategies
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
                <span className="point-content">End-to-End Campaign Support</span>
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
                <span className="point-content">Leadership with Ground Experience</span>
              </li>
             
            </ul>
          </div>
          <button className="about-button">Contact Us +</button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
