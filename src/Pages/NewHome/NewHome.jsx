import React from "react";
import "./NewHome.scss";
// import { Link } from "react-router-dom";
// import logo from "../../Assets/IMGS/web_design_logo.png";
import Github from "../../Assets/LOGO/GitHub-Mark-64px.png";
import LinkedIn from "../../Assets/LOGO/LinkedIn-Blue-14@2x.png";
import Email from "../../Assets/LOGO/email_logo.png";

export default function NewHome() {
  return (
    <div className="newHome">
      <section className="nav">
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact Me</li>
        </ul>
      </section>

      <section className="portfolio__cards">
        <h3>About me</h3>
        Hello! my name is Felipe Villa Obregon Jr, born and raised in
        Miami,Florida from two Colombian-American Immigrants in the 90s. I am
        natively proficient in both English and Spanish. I studied at FIU
        university in 2010, Miami-Dade College in 2012 and Graduated
        BrainStation in 2021. My pasttimes include MMORPGS, RPGS, the occasional
        DnD tabletop game and enjoy running and working out. I spend my free
        time hanging out with family and writing too! I've been playing guitar,
        drawing, and writing since I was fourteen but my passion for technology
        has always been greater. I love to learn new things and breaking things
        down to understand them. My current goal is to be a full time Web
        Developer. Working with JavaScript has been like a dream come true and I
        hope I can continue to practice my new found skills in multiple
        arenas(frontend and backend). If you have gotten this far, I appreciate
        you and hope you check out my portfolio section to see what types of
        projects I have been working on.
      </section>
      <h3>Porfolio!</h3>
      <h4>Recent Projects</h4>
      <section className="portfolio__cards">
        <a
          className="portfolio__card1"
          href="https://pacific-retreat-51764.herokuapp.com/"
        ></a>
        <a
          className="portfolio__card2"
          href="https://github.com/Felipevillajr/felipe-villa-bandsite"
        ></a>

        <a
          className="portfolio__card3"
          href="https://github.com/Felipevillajr/nbc_hackathon"
        ></a>

        <a
          className="portfolio__card4"
          href="https://github.com/Felipevillajr/felipe-villa-brainflix"
        ></a>
      </section>
      <section>
        <div className="contactme__contactlinks">
          <a
            className="contactme__link"
            href="https://github.com/Felipevillajr"
          >
            {/* <p>GitHub</p> */}
            <img src={Github} alt="github logo" />
          </a>
          <a
            href="mailto: felipevilla.webdev@gmail.com<"
            className="contactme__link"
          >
            <img className="contactme__email" src={Email} alt="email logo" />
          </a>
          <a
            className="contactme__link"
            href="https://www.linkedin.com/in/felipe-villa-jr/"
          >
            {/* <p>linkedIn </p> */}
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
        </div>
      </section>
    </div>
  );
}
