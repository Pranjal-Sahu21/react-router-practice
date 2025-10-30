import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h2>Send us a Message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
