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
      <h1 id="name" className="fade__in__text">
        Felipe Villa
      </h1>
      <h2 id="title" className="fade__in__text">
        Web Developer
      </h2>
      <section className="home__links">
        <h1 id="services" className="fade__in__text">
          Services
        </h1>
        <h1 id="contact__me" className="fade__in__text">
          Contact Me @
        </h1>
        <h1 id="portfolio" className="fade__in__text">
          Portfolio
        </h1>
        <h1 id="about" className="fade__in__text">
          About Me
        </h1>
      </section>
      <section className="home__img">
        <img src={logo} alt="felipe_villa_img" className="logoImg"></img>
      </section>
    </div>
  );
}
