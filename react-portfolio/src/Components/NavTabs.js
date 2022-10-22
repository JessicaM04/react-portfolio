import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  const headerStyle = {
    color: "black",
    backgroundColor: "rgb(66, 200, 245)",
    padding: "10px",
    fontFamily: "Sans-Serif",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 20,
  };
  return(
    <ul className="nav nav-tabs" style={headerStyle}>
      <li className="nav-item">
        <a 
        href="#about"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#portfolio"
        onClick={() => handlePageChange("Portfolio")}
        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#contact-me"
        onClick={() => handlePageChange("ContactForm")}
        className={currentPage === "ContactForm" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  )
}

export default NavTabs;