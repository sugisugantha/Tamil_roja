import React from "react";
import "./Fouter.css";
import founderImg from "../../../../assets/Images/founder.jpeg";
import backgorundfounder from "../../../../assets/Images/backgorundfounder.png";

const Founder = () => {
  return (
    <section className="container con about-section founder-section">
      <div className="about-container">
        <div className="aboutus-container">
          <img
            src={backgorundfounder}
            alt="Background Shape"
            className="background-images"
          />
          <div className="circle-image-wrapper">
            <img
              src={founderImg}
              alt="Team"
              className="circle-image bounce-y"
            />
          </div>
          <div className="experience-badge">
            <p>9+ Years </p>
            <p> of Our Experience</p>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label">● Meet Our Founder</span>
          <h1>Strategic Leadership Behind Tamil Roja</h1>
          <p>
            <strong>Meiyazhagan</strong>, the visionary behind Tamil Roja
            Consulting Services Pvt. Ltd., With over 9 years of experience in
            the field of politics, I have been serving as a Chief Political
            Consultant in Tamil Nadu since 2016. My expertise extends across
            multiple states, including Tamil Nadu, Karnataka, Maharashtra, and
            Puducherry, where I have provided strategic election advice. I have
            successfully formulated and delivered winning election plans for
            more than 25 municipal councilors and 3 MLAs, contributing to
            impactful political campaigns and leadership victories.
          </p>

          <p>
            <strong>📊 People-oriented campaigning – 50+ constituencies</strong>
          </p>
          <div className="aboutus-features">
            <ul
              className="about-us-list"
              style={{
                gap: "2px",
              }}
            >
              <li
                className="about-us-list-1"
                style={{
                  width: "100%",
                }}
              >
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
                  In the 2021 assembly elections alone, I played a key role in
                  shaping people-oriented campaigns across 50+ constituencies by
                  providing tailored election strategies, detailed campaign
                  plans, and in-depth voter analysis.
                </span>
              </li>
           <li
                className="about-us-list-1"
                style={{
                  width: "100%",
                }}
              >
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
               My work included
                  conducting opinion polls to gauge public sentiment, offering
                  psychological and intelligence-based guidance, and organizing
                  effective, constituency-specific field campaigns that
                  resonated with local voters and delivered measurable impact.
                </span>
              </li>
            </ul>
          </div>
          <p>
            <strong>🏆 Personal Achievements</strong>
          </p>
          <div className="aboutus-features">
            <ul
              className="about-us-list"
              style={{
                gap: "2px",
              }}
            >
              <li
                className="about-us-list-1"
                style={{
                  width: "100%",
                }}
              >
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
                Development of Tamil Nadu's first completely green-based election plan –
"Green Tamil Nadu Vision 2036".
                </span>
              </li>
              <li
                className="about-us-list-1"
                style={{
                  width: "100%",
                }}
              >
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
                 Based on public support, independent of any party, a separate political strategy agency – "Meiyazhagan" brand creation.
                </span>
              </li>
              <li
                className="about-us-list-1"
                style={{
                  width: "100%",
                }}
              >
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
                 Unique strategist praised in many quarters – through social media, customer reviews.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
