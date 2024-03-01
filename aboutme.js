import React from "react";
import "./styles.css";
import myImage from "./profile.jpg";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="image-container">
        <img src={myImage} alt="Profile" className="profile-image" />
      </div>
      <div className="details-container">
        <h1 className="name">netsanet</h1>
        <p className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          hendrerit velit, nec posuere mauris. Nulla facilisi. Proin pulvinar
          purus id velit lobortis eleifend.
        </p>
        <div className="contact-info">
          <p>Email: netsanettesfaye122@gmail.com</p>
          <p>Phone: +1234567890</p>
          <p>Location: AASTU</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
