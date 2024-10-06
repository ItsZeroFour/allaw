import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const About = ({
  about_title,
  about_text,
  about_subtitle,
  about_desc,
  slider_button_text,
}) => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__link}>
            <a href="#contacts">{slider_button_text}</a>
          </div>

          <div className={style.about__title}>
            <h2>{about_title}</h2>
            <p>{about_text}</p>
          </div>

          <div className={style.about__text}>
            <h5>{about_subtitle}</h5>

            <p>{about_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
