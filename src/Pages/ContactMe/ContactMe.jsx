import React from "react";
import "./ContactMe.scss";
import video from "../../Assets/VIDEOS/Mountains__trees.mp4";
import { Link } from "react-router-dom";
import Github from "../../Assets/LOGO/GitHub-Mark-64px.png";
import LinkedIn from "../../Assets/LOGO/LinkedIn-Blue-14@2x.png";
import Email from "../../Assets/LOGO/email_logo.png";
export default function ContactMe() {
  return (
    <div className="contactme">
      <section className="navigation">
        <video
          loop={true}
          autoPlay="autoPlay"
          muted
          id="navigation__background__video"
        >
          <source src={video} type="video/mp4" />
        </video>
        <Link to="/">
          <div id="navigation__name" className="fade__in__text">
            Felipe Villa <br /> Web Developer
          </div>
        </Link>
        <Link to="/aboutme">
          <div id="navigation__about" className="fade__in__text">
            About Me
          </div>
        </Link>
        <Link to="/portfolio">
          <div id="navigation__portfolio" className="fade__in__text">
            Portfolio
          </div>
        </Link>
        <Link to="/contactme">
          <div id="navigation__contact__me" className="fade__in__text">
            Contact Me @
          </div>
        </Link>
        <Link to="/services">
          <div id="navigation__services" className="fade__in__text">
            Services
          </div>
        </Link>
      </section>
      <section className="aboutme__card">
        <a className="aboutme__link" href="https://github.com/Felipevillajr">
          {/* <p>GitHub</p> */}
          <img src={Github} alt="github logo" />
        </a>

        <a
          className="aboutme__link"
          href="https://www.linkedin.com/in/felipe-villa-jr/"
        >
          {/* <p>linkedIn </p> */}
          <img src={LinkedIn} alt="linkedin logo" />
        </a>
        <a href="mailto: felipevilla.webdev@gmail.com<">
          <img className="aboutme__email" src={Email} alt="email logo" />
        </a>
      </section>
    </div>
  );
}
