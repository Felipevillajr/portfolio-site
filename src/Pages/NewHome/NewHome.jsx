import React from "react";
import "./NewHome.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/IMGS/web_design_logo.png";

export default function NewHome() {
  return (
    <div>
      <section className="header">
        {/* <img
          src={logo}
          alt="felipe_villa_img"
          className="logoImg__header"
        ></img> */}
        <div id="name__header" className="fade__in__text">
          Felipe Villa <br /> Web Developer
        </div>
        <Link to="/aboutme">
          <div id="about__header" className="fade__in__text">
            About Me
          </div>
        </Link>
        <Link to="/portfolio">
          <div id="portfolio__header" className="fade__in__text">
            Portfolio
          </div>
        </Link>
        <Link to="/contactme">
          <div id="contact__me__header" className="fade__in__text">
            Contact Me @
          </div>
        </Link>
        <Link to="/services">
          <div id="services__header" className="fade__in__text">
            Services
          </div>
        </Link>
      </section>
      <section className="home__img">
        <img src={logo} alt="felipe_villa_img" className="logoImg"></img>
      </section>
    </div>
  );
}
