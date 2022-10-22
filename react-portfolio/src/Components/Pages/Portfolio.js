import React from "react";
import Concert from "../../Assets/concert.png";
import Holiday from "../../Assets/holiday-hiway.png";
import Run from "../../Assets/hero-bg.jpg";
import Horiseon from "../../Assets/horiseon-deployed-site.png";
import Password from "../../Assets/top-secret.webp";

function Portfolio() {

  return (
    <section>
    <h1>Portfolio</h1>
    <div>
      <h3>Event Finder<br>
      </br>
      <a href="https://github.com/JessicaM04/wheres-the-band">Visit Event Finder GitHub</a>
      </h3>
      <h4>Click on image to see deployed application</h4>
      <a href="https://jessicam04.github.io/wheres-the-band/">
      <img class="subimage" src={Concert} alt="people at a concert with hands raised"/>
      </a>
    </div>
    <div>
      <h3>Holiday HiWay<br>
      </br>
      <a href="https://github.com/cduwors/holiday-hiway">Visit Holiday HiWay GitHub</a>
      </h3>
      <h4>Click on image to see deployed application</h4>
      <a href="https://github.com/cduwors/holiday-hiway">
      <img class="subimage" src={Holiday} alt="festive holiday light displays"/>
      </a>
    </div>
    <div>
      <h3>Run Buddy<br>
      </br>
      <a href="https://github.com/JessicaM04/run-buddy">Visit Run Buddy GitHub</a>
      </h3>
      <h4>Click on image to see deployed application</h4>
      <a href="https://jessicam04.github.io/run-buddy/">
        <img class="subimage" src={Run} alt="woman tying shoe on the side of the road">
        </img>
      </a>
    </div>
    <div>
      <h3>Horiseon Refactor<br>
      </br>
      <a href="https://github.com/JessicaM04/horiseonRefactorMod1">Visit Horiseon Refactor GitHub</a>
      </h3>
      <h4>Click on image to see deployed application</h4>
      <a href="https://jessicam04.github.io/horiseonRefactorMod1/">
        <img class="subimage" src={Horiseon}
          alt="people at a meeting gathered around a table with electronics and papers">
        </img>
      </a>
    </div>
    <div>
      <h3>Password Generator<br>
      </br>
      <a href="https://github.com/JessicaM04/password-generator">Visit Password Generator GitHub</a>
      </h3>
      <h4>Click on image to see deployed application</h4>
      <a href="https://jessicam04.github.io/password-generator">
        <img class="subimage" src={Password} alt="top secret sign">
        </img>
      </a>
    </div>
    </section>
  );
}

export default Portfolio;