import React, { useContext } from "react";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import PageTop from "../../Common/PageTop/PageTop";
import "./Term.css";
import { FaTicketAlt } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";

const Term = () => {
  return (
    <div>
      <Header />
      <PageTop title={"Terms and Condition"} />

      <div className="terms-containers con">
        <div className="booking-heading-subtitle">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#15224a",
            }}
          >
            Terms
            <span className="below-border"> &</span> Conditions
          </h2>
        </div>
        <section className="section1-card1s">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing this website or using our consulting services, you
            agree to comply with these Terms and Conditions. If you disagree
            with any part of these terms, please refrain from using our
            services.
          </p>
        </section>

        <section className="section1-card1s">
          <h3>2. Services Provided</h3>
          <p>We offer:</p>
          <ul
            className="about-us-list"
            style={{
              gap: "2px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <li
              className="about-us-list-1"
              style={{
                width: "100%",
                marginTop: "10px",
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
                Political strategy consulting
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
                Business development and policy advisory
              </span>
            </li>{" "}
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
                Research, analysis, and campaign planning All services are
                provided based on prior discussion and mutual agreement.
              </span>
            </li>
          </ul>
        </section>

        <section className="section1-card1s">
          <h3>3. Consultations and Engagements</h3>

          <ul
            className="about-us-list"
            style={{
              gap: "2px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <li
              className="about-us-list-1"
              style={{
                width: "100%",
                marginTop: "10px",
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
                All consultations are offered on a case-by-case basis.
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
                The scope, duration, and deliverables will be defined before any
                engagement begins.
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
                We reserve the right to accept or decline any consultation
                request based on relevance and availability.
              </span>
            </li>
          </ul>
        </section>

        <section className="section1-card1s">
          <h3>4. Intellectual Property</h3>
          <ul
            className="about-us-list"
            style={{
              gap: "2px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <li
              className="about-us-list-1"
              style={{
                width: "100%",
                marginTop: "10px",
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
                All materials, strategies, documents, or content shared with
                clients remain the intellectual property of Tamil Roja
                Consulting, unless otherwise agreed.
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
                Clients may not reproduce, distribute, or use our material
                without prior written permission.
              </span>
            </li>
          </ul>
        </section>

        <section className="section1-card1s">
          <h3>5. Confidentiality</h3>
          <ul
            className="about-us-list"
            style={{
              gap: "2px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <li
              className="about-us-list-1"
              style={{
                width: "100%",
                marginTop: "10px",
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
                We treat all client information with the highest level of
                confidentiality.
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
                Client data, discussions, and documents are kept private and are
                not shared without consent.
              </span>
            </li>
          </ul>
        </section>

        <section className="section1-card1s">
          <h3>6. Limitation of Liability</h3>
          <p>
            Our strategies and advice are based on analysis and experience.
            However, Tamil Roja Consulting is not liable for any direct or
            indirect outcomes resulting from the application of our
            recommendations.
          </p>
        </section>

        <section className="section1-card1s">
          <h3>7.Policy Updates</h3>
          <p>
            We may update these Terms from time to time. Continued use of our
            services implies acceptance of the latest version.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Term;
