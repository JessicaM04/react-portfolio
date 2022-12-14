import React from "react";

function ContactForm() {

  const ContactStyle = {
    marginTop: "10px",
    marginBottom: "10px",
  };

  const ContainerStyle = {
    width: "25rem",
    margin: "0, auto"
  };

  return (
    <container style={ContainerStyle}>
      <form id="contact-form">
        <h1>Contact me</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div style={ContactStyle} >
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </container>
    );
}

export default ContactForm;