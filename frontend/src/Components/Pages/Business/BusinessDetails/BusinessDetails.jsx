import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import client from "../../../Common/Client/Client";
import { motion } from "framer-motion";

const BusinessDetails = () => {
  const [businessDetail, setBusinessDetails] = useState([]);

  useEffect(() => {
    getBusiness();
  }, []);

  const getBusiness = async () => {
    try {
      const response = await client.get("/business/get-business", {
        withCredentials: true,
      });
      if (response.status === 200) {
        const data = response.data;
        setBusinessDetails(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="container con project-header1 "
      style={{
        textAlign: "center",
        padding: "20px 10px",
      }}
    >
      <div
        className="booking-heading-title"
        style={{
          textAlign: "center",
        }}
      >
        <span className="section-label">● Our Business</span>
      </div>
      <div className="col-12 mb-5">
        <div
          className="about-us-content1"
          style={{
            textAlign: "center",
            maxWidth: "100%",
          }}
        >
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            <div className="booking-heading-subtitle">
              <h2>
                Business <span className="below-border"> We Have</span> Done
              </h2>
            </div>
          </motion.h2>
        </div>
      </div>
      <div className="ser">
        {businessDetail.map((item) => (
          <div key={item.id} className="service-cardss">
            <div className="service-card-image">
              <img src={item.image} alt="service-image" />
            </div>
            <div
              className="service-card-content booking-steps"
              style={{
                width: "100%",
                minHeight: "auto",
                background: "none",
                boxShadow: "none",
                textAlign: "start",
                alignItems: "start",
              }}
            >
              <h3>{item.name}</h3>
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

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessDetails;
