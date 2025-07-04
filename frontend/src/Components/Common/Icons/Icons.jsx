import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Icons.css";
import { PiPhoneCallFill } from "react-icons/pi";
import client from "../Client/Client";
import { FaWhatsapp } from "react-icons/fa";
const Icons = () => {
  const [contact, setContact] = useState({
    whatsapp: "",
    email: "",
  });
  useEffect(() => {
    fecthContact();
  }, []);

  const fecthContact = async () => {
    try {
      const response = await client.get("/contact/get-contact");
      if (response.status === 200) {
        const data = response.data[0];
        setContact((pre) => {
          return {
            ...pre,
            email: data.email,

            whatsapp: data.phone,
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        {/* <Link
          to=""
          onClick={() => {
            window.location.href = `tel: ${contact.phoneIndia}`;
          }}
          class="btn-phone-pulse btn-phone-pulse-border"
          title="Call Now"
          style={{
            "z-index": "100",
            "margin-bottom": "px",
          }}
        >
          <span
            className="icon"
            style={{
              fontSize: "17px",
            }}
          >
            <PiPhoneCallFill className="icons-header" />
          </span>
        </Link> */}

        <Link
          onClick={() => {
            const formattedNumber = contact.whatsapp.replace(/[^0-9]/g, ""); // Removes all non-numeric characters
            window.open(`https://wa.me/${formattedNumber}`, "_blank"); // Opens in a new tab
          }}
          class="btn-whatsapp-pulse btn-whatsapp-pulse-border"
          title="Whatsapp Now"
          style={{
            "z-index": "100",
            "margin-bottom": "px",
            color: "white",
          }}
        >
          <span
            className="icon"
            style={{
              fontSize: "17px",
            }}
          >
            <FaWhatsapp
              className="icons-header"
              style={{
                color: "white",
              }}
            />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Icons;
