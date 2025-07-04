import React, { useEffect, useState } from "react";
import "./HomeServices.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import housing from "../../../../assets/Images/carsoual.jpeg";
import { motion } from "framer-motion";
import client from "../../../Common/Client/Client";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeServices = ({ st }) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [service, setService] = useState([]);
   useEffect(() => {
      getService();
    }, []);
  
    const getService = async () => {
      try {
        const response = await client.get("/service/get-service", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setService(response.data);
        }
      } catch (err) {
      console.log(err)
      }
    };
  
  return (
    <>
      <div className={`service-image ${st ? st : ""}`}>
        <img src={housing} alt="service-image" />
        <div className="overlay"></div>
        <div
          className="service-title "
          style={{
            overflow: "hidden",
            width: "100%",
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
              className=""
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
                  <h2
                    style={{
                      color: "white",
                    }}
                  >
                    Service <span className="below-border"> We  Have</span>  Done
                  </h2>
                </div>
              </motion.h2>
            </div>
          </div>
              {service.length > 0 ?  <div
          className="container con service-cont-slik-slider"
          
        >
          <div className="slider-container">
            <Slider {...settings} className="customPrdouct">
                {
                    service.map((value,index)=>{
                        return  <div className="service-box">
                <img src={value.image} alt="service1" />
                <div className="service-content">
                  <h6>{value.name}</h6>
                  <p>
                    {value.description.slice(0,200)}...
                  </p>
                  <Link to="/service"                   style={{ cursor: "pointer", color: "#ec2125" }}>Read More <FaArrowRightLong /></Link>
                </div>
              </div>
                    })
                }
             
            </Slider>
          </div>
        </div> : <div className="not-service"><p>Please contact the admin.No service</p></div>}
        </div>
    
       
      </div>
    </>
  );
};

export default HomeServices;
