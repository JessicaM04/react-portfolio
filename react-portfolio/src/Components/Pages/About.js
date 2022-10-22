import React from "react"
import Avatar from "../../Assets/AvatarMe.png";

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <img src={Avatar}alt="avatar of portfolio owner"></img>
      <p>Thank you for visiting my page! I have been programming for about six months. I have learned a lot 
        during the past few months and have a lot more ahead of me! Please visit my portfolio to view some of
        my past projects.
      </p>
    </section>
  );
}

export default About;