import React, { Fragment, useRef } from "react";
import PageTop from "../../Common/PageTop/PageTop";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import HowWeOperate from "../About/HowWeOperate/HowWeOperate";
import ServicePage from "./ServicePage/ServicePage";

const Service = () => {
  const servicePageRef = useRef(null);

  const handleScrollToService = (serviceId) => {
    if (servicePageRef.current && servicePageRef.current[serviceId]) {
      servicePageRef.current[serviceId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div>
      <Header />
      <PageTop title={"Service"} />
      <ServiceDetails onReadMore={handleScrollToService} />
      <HowWeOperate />
      <ServicePage ref={servicePageRef} />
      <Footer />
    </div>
  );
};

export default Service;
