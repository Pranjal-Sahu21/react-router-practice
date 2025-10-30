import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2>Get in Touch</h2>
      <div className="info-card">
        <span className="icon">📧</span>
        <span>Email: sahupranjal1619@gmail.com</span>
      </div>
      <div className="info-card">
        <span className="icon">📞</span>
        <span>Phone: +91 8895596189</span>
      </div>
      <div className="info-card">
        <span className="icon">📍</span>
        <span>Address: NIT Rourkela</span>
      </div>
    </div>
  );
};

export default ContactInfo;
