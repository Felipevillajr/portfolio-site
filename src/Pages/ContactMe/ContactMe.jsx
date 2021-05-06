import React, { useState } from "react";
import "./ContactMe.scss";
import video from "../../Assets/VIDEOS/Forest_Thick_Fog.mp4";
import { Link } from "react-router-dom";
import Github from "../../Assets/LOGO/GitHub-Mark-64px.png";
import LinkedIn from "../../Assets/LOGO/LinkedIn-Blue-14@2x.png";
import Email from "../../Assets/LOGO/email_logo.png";
export default function ContactMe() {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function formSubmit(e) {
    e.preventDefault();
  }

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
      <section className="contactme__card">
        <form
          onSubmit={formSubmit}
          className="contactme__form"
          action="mailto:felipevilla.webdev@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <h1 className="form__title">Contact me Directly!</h1>
          <label className="form__label">Full Name </label>
          <input
            placeholder="Full Name"
            className="form__input"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <label className="form__label">Phone Number</label>
          <input
            placeholder="Phone Number"
            className="form__input"
            type="text"
            name="phone"
            onChange={handleChange}
          />
          <label className="form__label">Email</label>
          <input
            placeholder="Email "
            className="form__input"
            type="text"
            name="contact"
            onChange={handleChange}
          />
          <label className="form__label">Short Description/Message</label>
          <textarea
            placeholder="place a short description of what I will be helping you with!"
            className="form__input2"
            type="textarea"
            name="message"
            onChange={handleChange}
          />
          <button type="submit" className="form__button">
            Send!
          </button>
        </form>
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
