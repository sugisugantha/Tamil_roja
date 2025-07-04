import React, { useContext } from "react";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import PageTop from "../../Common/PageTop/PageTop";
import { FaHome, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";

const Privacy = () => {
  const { userContact } = useContext(AppContext);
  return (
    <div>
      <Header />
      <PageTop title={"Privacy Policy"} />

      <div className="terms-containers con">
        <div className="booking-heading-subtitle">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#15224a",
            }}
          >
            <span className="below-border"> Privacy Policy </span>
          </h2>
        </div>
        <section className="section1-card1s">
          <h3>1. Information We Collect</h3>
          <p>
            We collect the following information when you use our website or
            services:
          </p>
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
                Personal Details: Name, mobile number, email address.
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
                Consultation Details: Topics or areas of interest discussed
                during consultations.
              </span>
            </li>
          </ul>
        </section>
        <section className="section1-card1s">
          <h3>2. How We Use Your Information</h3>
          <p>We use your information strictly for:</p>
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
                Scheduling and managing consultations or services.
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
                Contacting you with updates or confirmations.
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
                Internal analysis to improve services.
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
                Ensuring secure communication and record-keeping.
              </span>
            </li>
          </ul>
        </section>
        <section className="section1-card1s">
          <h3>3.Data Sharing</h3>
          <p>
            We do not sell, rent, or share your data with external parties for
            marketing. We only share your data with:
          </p>
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
                Internal Team: For managing your queries or consultation.
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
                IT & Hosting Partners: To securely manage our website and forms.
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
                Legal/Compliance Bodies: Only if required by law.
              </span>
            </li>
          </ul>
        </section>
        <section className="section1-card1s">
          <h3>4. Data Security</h3>

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
                All form submissions and files are encrypted and stored
                securely.
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
                We use strict access controls and security protocols to prevent
                misuse
              </span>
            </li>
          </ul>
        </section>
        <section className="section1-card1s">
          <h3>5. Your Privacy Rights</h3>
          <p>You have the right to:</p>

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
                Request access to the personal information we store.
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
                Ask us to correct or delete your data.
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
                Withdraw consent at any time by contacting us.
              </span>
            </li>
          </ul>
        </section>
        <section className="section1-card1s">
          <h3>6.Contact Us</h3>
          <p>For privacy questions or data-related requests, reach us at:</p>

          <ul
            className="about-us-list"
            style={{
              gap: "2px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <li
              className="footmail"
              style={{ display: "flex", gap: "14px" }}
              onClick={() => {
                window.location.href = `mailto:${userContact[0]?.email}`;
              }}
            >
              <span>
                <FaEnvelope style={{ color: "#e89e25" }} />
              </span>
              <span
                style={{
                  color: "#444",
                }}
              >
                {userContact[0]?.email}
              </span>
            </li>
            <li
              className="footphone"
              style={{ display: "flex", gap: "14px" }}
             onClick={() => {
                              
                                      window.open(`https://wa.me/${userContact[0]?.whatsapp}`, "_blank"); // Opens in a new tab
                                    }}
            >
              <span>
                <FaWhatsapp style={{ color: "#e89e25" }} />
              </span>
              <span
                style={{
                  color: "#444",
                }}
              >
                +91 {userContact[0]?.whatsapp}
              </span>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
