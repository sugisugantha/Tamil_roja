import React, { forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Servicepage.css";
import client from "../../../Common/Client/Client";

const ServicePage = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const [serviceDetail, setServiceDetails] = useState([]);

  useEffect(() => {
    getService();
  }, []);

  const getService = async () => {
    try {
      const response = await client.get("/service/get-service", {
        withCredentials: true,
      });
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setServiceDetails(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  ref.current = {};

  return (
    <div className="container con">
      <div className="div">
        {serviceDetail.map((item) => (
          <div
            key={item._id}
            ref={(el) => (ref.current[item._id] = el)}
            className="service-cards"
          >
            <div className="image">
              <img src={item.image} alt="service-image" />
            </div>
            <div className="content">
              <h3 className="why-choose-heading">{item.name}</h3>
              <p className="why-choose-description">{item.description}</p>
              <div>
                <h3
                  className="why-choose-heading"
                  style={{
                    margin: "10px 0px",
                  }}
                >
                  Features
                </h3>
                <ul
                  className="about-us-list"
                  style={{
                    gap: "2px",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {item.feature.map((point, index) => (
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
                      <span
                        className="point-content"
                        style={{
                          textAlign: "start",
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3
                  className="why-choose-heading"
                  style={{
                    margin: "10px 0px",
                  }}
                >
                  Benefits
                </h3>
                <p className="why-choose-description">{item.benefits}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ServicePage;
