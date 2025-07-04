import React, { useContext, useEffect, useState } from "react";
import "./Footer.css";
import { FaHome, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import logo from "../../../../assets/logo.png";
import { AppContext } from "../../../Pages/Context/AppContext";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

function Footer() {
  const { userContact } = useContext(AppContext);

  return (
    <>
      <footer className="ssfooter">
        <div className="container con">
          <div className="footerlinks">
            <div className="row rows">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                {/* <img src={logo} alt="Logo" /> */}
                <h5>About Us</h5>
                <p className="footabout">
                  Thank you for choosing Tamil Roja Consulting. We are committed
                  to delivering reliable, data-driven political strategies
                  rooted in grassroots realities. From booth-level insights to
                  complete campaign support, we ensure your political journey is
                  strategic, efficient, and impactful. Lead with clarity. Win
                  with confidence.
                </p>
                <ul
                  class="wrapper"
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <li
                    class="icon facebook"
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/share/15xXxuwg9m/",
                        "_blank"
                      );
                    }}
                  >
                    <span class="tooltip">Facebook</span>
                    <svg
                      viewBox="0 0 320 512"
                      height="1.2em"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </li>
                  <li
                    class="icon youtube"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/tamilroja-consulting-63670a370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        "_blank"
                      );
                    }}
                  >
                    <span class="tooltip">Linkedin</span>
                    <svg
                      viewBox="0 0 24 24"
                      height="1.2em"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4v16h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.13V24h-4v-8.8c0-2.1-.04-4.8-2.93-4.8-2.94 0-3.4 2.3-3.4 4.67V24h-4V8Z"
                      />
                    </svg>
                  </li>
                  <li
                    class="icon twitter"
                    onClick={() => {
                      window.open(
                      "https://www.threads.com/@tamil_roja_consulting?invite=0",
                        "_blank"
                      );
                    }}
                  >
                    <span class="tooltip">Threads </span>
                   <FaThreads/>
                  </li>
  <li
                    class="icon twitter"
                    onClick={() => {
                      window.open(
                        "https://x.com/Tamilroja_C?t=CCLf78Oem4Elfswe77ww3w&s=08",
                        "_blank"
                      );
                    }}
                  >
                    <span class="tooltip">Twitter</span>
                  <FaXTwitter/>
                  </li>
                  <li
                    class="icon instagram"
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/tamil_roja_consulting?igsh=MXN5Z2p1Z2V0aW9rOA==&utm_source=ig_contact_invite",
                        "_blank"
                      );
                    }}
                  >
                    <span class="tooltip">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </li>

                  {/* <li
                    class="icon whatsapp"
                    onClick={() => {
                      window.open(
                        `https://wa.me/${userContact[0]?.whatsapp}`,
                        "_blank"
                      ); // Opens in a new tab
                    }}
                  >
                    <span class="tooltip">Whatsapp</span>
                    <FaWhatsapp />
                  </li> */}
                </ul>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4 footersections">
                <h5>Quick Links</h5>
                <ul className="quicklinks">
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>

                    <NavLink className="footer-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>
                    <NavLink className="footer-link" to="/about">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>
                    <NavLink className="footer-link" to="/service">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>
                    <NavLink className="footer-link" to="/business">
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>
                    <NavLink className="footer-link" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4 footersections">
                <h5>Help & Info</h5>
                <ul className="quicklinks">
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>
                    <NavLink className="footer-link" to="/terms">
                      Term & Condition
                    </NavLink>
                  </li>
                  <li>
                    <span className="footer-icons">
                      <MdDoubleArrow />
                    </span>
                    <NavLink className="footer-link" to="/privacy">
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4 footersections">
                <h5>Reach Us</h5>
                <ul className="quicklinks">
                  <>
                    <li
                      className="footaddress"
                      style={{ display: "flex", gap: "14px" }}
                    >
                      <span>
                        <FaHome style={{ color: "#ed2024 " }} />
                      </span>
                      <span style={{ textTransform: "capitalize" }}>
                        {userContact[0]?.address || "Visit Us"}
                      </span>
                    </li>

                    <li
                      className="footmail"
                      style={{ display: "flex", gap: "14px" }}
                      onClick={() => {
                        window.location.href = `mailto:${userContact[0]?.email}`;
                      }}
                    >
                      <span>
                        <FaEnvelope style={{ color: "#ed2024 " }} />
                      </span>
                      <span>{userContact[0]?.email}</span>
                    </li>

                    {/* <li
                      className="footphone"
                      style={{ display: "flex", gap: "14px" }}
                      onClick={() => {
                        window.location.href = `tel:${userContact[0]?.phoneIndia}`;
                      }}
                    >
                      <span>
                        <FaPhone style={{ color: "#ed2024 " }} />
                      </span>
                      <span>+91 {userContact[0]?.phoneIndia}</span>
                    </li> */}

                    <li>
                      <a
                        href={`https://wa.me/${userContact[0]?.whatsapp?.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        style={{ display: "flex", gap: "14px" }}
                        target="_blank"
                        className="footphone"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <FaWhatsapp style={{ color: "#ed2024 " }} />
                        </span>
                        <span className="number-footer">
                          {" "}
                          +91 {userContact[0]?.whatsapp}
                        </span>
                      </a>
                    </li>
                  </>
                </ul>
              </div>
            </div>
          </div>
          <hr style={{ color: "white" }} />

          <div className="companydetails">
            <div
              className="terms-privacy"
              style={{
                color: "white",
              }}
            >
              ©{" "}
              <span
                style={{
                  color: "#ed2024 ",
                }}
              >
                Tamil Roja Consulting Services Pvt.Ltd
              </span>
              <span> All Rights Reserved.</span>
            </div>
            {/* <div className="copyrights">
              <p style={{ color: "white" }}>
                Developed by{" "}
                <a
                  href="https://hellowtec.com/"
                  target="_blank"
                  style={{
                    textTransform: "uppercase",
                    textDecoration: "underline",
                    color: "#ed2024 ",
                  }}
                >
                  Hello Technologies
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
