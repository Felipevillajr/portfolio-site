import React from "react";
import "./Header.scss";
import logo from "../../Assets/IMGS/web_design_logo.png";

export default function Header() {
  return (
    <div>
      <section className="header">
        <img
          src={logo}
          alt="felipe_villa_img"
          className="logoImg__header"
        ></img>
        <div id="name__header" className="fade__in__text">
          Felipe Villa <br /> Web Developer
        </div>
        <div id="about__header" className="fade__in__text">
          About Me
        </div>
        <div id="portfolio__header" className="fade__in__text">
          Portfolio
        </div>
        <div id="contact__me__header" className="fade__in__text">
          Contact Me @
        </div>
        <div id="services__header" className="fade__in__text">
          Services
        </div>
      </section>
    </div>
  );
}
