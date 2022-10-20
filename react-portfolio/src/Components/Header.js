import React from "react";
// import blueRidgeMtns from "./react-portfolio/public/blueRidgeMtns.png"; 

function Header() {
  const headerStyle = {
    // backgroundImage: "./react-portfolio/public/blueRidgeMtns.png", alt:"Blue Ridge Mountains",
    color: "black",
    backgroundColor: "rgb(66, 200, 245)",
    padding: "10px",
    fontFamily: "Sans-Serif",
    display: "flex",
    justifyContent: "space-between",
    // flexWrap: "wrap",
    fontSize: 20,
  };

  // const image = {
  //   backgroundImage: "./react-portfolio/public/blueRidgeMtns.png", alt:"Blue Ridge Mountains",
  // };

  return (
    <section style={headerStyle}>
      <img src={"./react-portfolio/public/blueRidgeMtns.png"} alt="Blue Ridge Mountains"/>
      <h1>About Me</h1>
      <h1>Portfolio</h1>
      <h1>Contact Me</h1>
      <h1>Resume</h1>
    </section>
  );
}

export default Header;
