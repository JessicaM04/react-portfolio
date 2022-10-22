import React from "react";

function Footer() {
  const footerStyle = {
    padding: 65,
    textDecoration: "underline",
    display: "flex",
    color: "black",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
      <section style={footerStyle}>
        <h1>Contact</h1>
        <div class="contact-info">555-555-5555</div>
        <div class="contact-info">lernantino@website.com</div>
        <div class="contact-info">GitHub</div>
        <div class="contact-info">LinkedIn</div>
        <div class="contact-info">Spotify</div>
      </section>
    );
}

export default Footer;