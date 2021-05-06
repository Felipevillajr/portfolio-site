import React from "react";
import "./Home.scss";
import logo from "../../Assets/IMGS/web_design_logo.png";
import video from "../../Assets/VIDEOS/River_mountains.mp4";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <video loop={true} autoPlay="autoPlay" muted id="background__video">
        <source src={video} type="video/mp4" />
      </video>
      <h1 id="name">Felipe Villa</h1>
      <h2 id="title">Web Developer</h2>
      <section className="home__links">
        <Link to="/services">
          <h1 id="services" className="fade__in__text">
            Services
          </h1>
        </Link>
        <Link to="/contactme">
          <h1 id="contact__me" className="fade__in__text">
            Contact Me @
          </h1>
        </Link>
        <Link to="/portfolio">
          <h1 id="portfolio" className="fade__in__text">
            Portfolio
          </h1>
        </Link>
        <Link to="/aboutme">
          <h1 id="about" className="fade__in__text">
            About Me
          </h1>
        </Link>
      </section>
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
