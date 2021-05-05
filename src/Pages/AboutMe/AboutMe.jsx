import React from "react";
import "./AboutMe.scss";
import video from "../../Assets/VIDEOS/Mountains__trees.mp4";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <section className="navigation">
        <video
          loop={true}
          autoPlay="autoPlay"
          muted
          id="navigation__background__video"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div id="navigation__name" className="fade__in__text">
          Felipe Villa <br /> Web Developer
        </div>
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
      <section className="aboutme__card">this </section>
    </div>
  );
}
