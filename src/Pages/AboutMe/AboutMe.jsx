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
        <p className="aboutme__text">
          Hello! my name is Felipe Villa Obregon Jr, born and raised in
          Miami,Florida from two Colombian-American Immigrants in the 90s. I am
          natively proficient in both English and Spanish. I studied at FIU
          university in 2010, Miami-Dade College in 2012 and Graduated
          BrainStation in 2021. My pasttimes include MMORPGS, RPGS, the
          occasional DnD tabletop game and enjoy running and working out. I
          spend my free time hanging out with family and writing too! I've been
          playing guitar, drawing, and writing since I was fourteen but my
          passion for technology has always been greater. I love to learn new
          things and breaking things down to understand them. My current goal is
          to be a full time Web Developer. Working with JavaScript has been like
          a dream come true and I hope I can continue to practice my new found
          skills in multiple arenas(frontend and backend). If you have gotten
          this far, I appreciate you and hope you check out my services section
          to see what types of skills I bring to the table for your next
          project.
        </p>
      </section>
    </div>
  );
}
