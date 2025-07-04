import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ServiceDetails.css";
import client from "../../../Common/Client/Client";
import { motion } from "framer-motion";

const ServiceDetails = ({ onReadMore }) => {
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
        <span className="section-label">● Our Service</span>
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
                Service <span className="below-border"> We Have</span> Done
              </h2>
            </div>
          </motion.h2>
        </div>
      </div>
      <div className="ser">
        {serviceDetail.map((item) => (
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
              <p className="why-choose-description">
                {item.description.slice(0, 120)}...
              </p>

              <div>
                <p
                  onClick={() => onReadMore(item._id)}
                  style={{ cursor: "pointer", color: "#ec2125" }}
                >
                  Read More <FaArrowRightLong />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
