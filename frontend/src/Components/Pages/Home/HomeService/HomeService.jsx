import React from "react";
import { FaUsers, FaBullhorn, FaNetworkWired, FaChartLine } from "react-icons/fa";
import "./HomeService.css"; 

const services = [
  {
    title: "Political Party Transformation",
    description: "Shaping committed leaders with local insight and long-term strategic vision.",
    icon: <FaUsers className="service-icon" />,
  },
  {
    title: "Campaign Management",
    description: "Designing ground-level campaigns that truly connect with the hearts of the people.",
    icon: <FaNetworkWired className="service-icon" />,
  },
  {
    title: "Political Communication",
    description: "Building trustworthy political narratives that resonate with every voter segment.",
    icon: <FaBullhorn className="service-icon" />,
  },
  {
    title: "Technical Strategy",
    description: "Using data, booth-level intelligence, and digital tools to influence key voter groups.",
    icon: <FaChartLine className="service-icon" />,
  },
];

const HomeService = () => {
  return (
   <section className="services-section">
    <div className="container con">
 <div className="services-container">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
           <span>
            {item.icon}
            </span>
            <div>
                 <h3 className="service-titles">{item.title}</h3>
            <p className="service-description">{item.description}</p>
                </div> 
           
          </div>
        ))}
      </div>
    </div>
     
    </section>
  );
};

export default HomeService;
