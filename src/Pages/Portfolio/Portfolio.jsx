import React from "react";
import "./Portfolio.scss";
import video from "../../Assets/VIDEOS/Pine_tree_forest.mp4";
import { Link } from "react-router-dom";
// import lfg from "../../Assets/IMGS/lfg_forum_homepage.JPG";
// import bandsite from "../../Assets/IMGS/bandsite.JPG";
// import nbchack from "../../Assets/IMGS/NBC_hackathon.JPG";
// import brainflix from "../../Assets/IMGS/brainflix.JPG";

export default function Portfolio() {
  return (
    <div className="portfolio">
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
      <section className="portfolio__cards">
        <a
          className="portfolio__card1"
          href="https://pacific-retreat-51764.herokuapp.com/"
        >
          {/* <div> */}
          {/* <p className="portfolio__title">LFG Forum</p>

            <img id="homepage" src={lfg} alt="lfg forum homepage img" />

            <p className="portfolio__description">
              MySql backend and custom designed frontend, this forum site was
              developed for RPG tabletop community. It is a social platform for
              players and Game Masters to set up meet up times for roleplaying
              games.
            </p> */}

          {/* </div> */}
        </a>
        <a
          className="portfolio__card2"
          href="https://github.com/Felipevillajr/felipe-villa-bandsite"
        >
          {/* <img id="homepage" src={bandsite} alt="bandsite homepage img" /> */}
        </a>
        {/* <div className="portfolio__card2">
          <p className="portfolio__title">Bandsite</p>
          
          <p className="portfolio__description">
            Custom built Bandsite with Biography page and shows page that list
            shows and offers the option to purchase tickets.
          </p>
        </div> */}
        <a
          className="portfolio__card3"
          href="https://github.com/Felipevillajr/nbc_hackathon"
        >
          {/* <img id="homepage" src={nbchack} alt="bandsite homepage img" /> */}
        </a>
        {/* <div>
          <p className="portfolio__title">NBC Hackathon</p>

          
          <p className="portfolio__description">
            Imagined by BrainStation UX/UI designers and created with a group of
            two other web developers this site was created for the NBC telemundo
            management team. It earned Honorable mentions.
          </p>
        </div> */}
        {/* <div className="portfolio__card">
          <p className="portfolio__title">Bandsite</p>
          <a href="https://github.com/Felipevillajr/felipe-villa-bandsite">
            <img id="homepage" src={bandsite} alt="bandsite homepage img" />
          </a>
          <p className="portfolio__description">
            Custom built Bandsite with Biography page and shows page that list
            shows and offers the option to purchase tickets.
          </p>
        </div> */}
        <a
          className="portfolio__card4"
          href="https://github.com/Felipevillajr/felipe-villa-brainflix"
        >
          {/* <img id="homepage" src={brainflix} alt="bandsite homepage img" /> */}
        </a>
      </section>
    </div>
  );
}
