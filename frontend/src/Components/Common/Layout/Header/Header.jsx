import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import logo from "../../../../assets/logo.png";
import {  FaWhatsapp } from "react-icons/fa";;
import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Above from "../../Above/Above";
import Icons from "../../Icons/Icons";
import { AppContext } from "../../../Pages/Context/AppContext";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {userContact}=useContext(AppContext)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <Above/>
    <Icons/>
      <header
        className={`  ${
          isSticky
            ? "pt-header-sticky animated fadeInDown animate__faster cons"
            : " container con"
        }`}
      >
        <div
          className={`${isSticky ? "header-containers" : "header-container"}`}
        >
          <div className={`${isSticky ? "headers" : "header"}`}>
            <div className="logo">
              <img src={logo} alt="Company Logo" />
            </div>
            <nav className="navigate-links">
              <ul>
                <li>
                  <NavLink to="/" className="link-header">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="link-header">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Service" className="link-header">
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="link-header">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="contact-info">
              <div className="contact-box">
                <span className="icon">
                  < FaWhatsapp  className="icons-header"/>
                </span>
                <div className="contact-text">
                  <p className="label">Call Us Anytime</p>
                  <p
                    className="number"
                    onClick={() => {
                              
                                      window.open(`https://wa.me/${userContact[0]?.whatsapp}`, "_blank"); // Opens in a new tab
                                    }}
                  >
                    +91 {userContact[0]?.whatsapp}
                  </p>
                </div>
              </div>
            </div>
            <div className="mobile-icons">
              <IoReorderThree onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </div>
      </header>
      <div className={`mobile-nav-panel ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <img src={logo} alt="logo" className="mobile-logo" />
          <IoClose
            className="close-icon"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="mobile-nav-links">
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/" className="link-header">
              Home
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/about" className="link-header">
              About us
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/service" className="link-header">
              service
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/contact" className="link-header">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;
