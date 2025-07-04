import React from "react";
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map-container">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1166.5185074711335!2d77.55140773964183!3d10.446557531011681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de19f05461b1%3A0x44e2dcd3d7a3cc2e!2sCHW2%2BJGG%2C%20Maravar%20street%2C%20NewAyakudi%2C%20Ayakudi%2C%20Tamil%20Nadu%20624613!5e0!3m2!1sen!2sin!4v1751278972849!5m2!1sen!2sin" 
          width="600"
          height="450"
          style={{ border: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </section>
  );
};

export default ContactMap;
