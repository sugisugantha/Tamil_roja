import React from "react";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import Aboutus from "./Aboutus/Aboutus";
import AboutService from "./AboutService/AboutService";
import HowWeOperate from "./HowWeOperate/HowWeOperate";
import PageTop from "../../Common/PageTop/PageTop";
import Founder from "./Founder/Founder";

const About = () => {
  return (
    <div>
      <Header />
      <PageTop title={"About"}/>
      <Aboutus/>
       <HowWeOperate/>
      <Founder/>
      <AboutService/>
     
      <Footer />
    </div>
  );
};

export default About;
