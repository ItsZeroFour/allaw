import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__link}>
            <Link to="#contacts">Подробнее</Link>
          </div>

          <div className={style.about__title}>
            <h2>О нашей компании</h2>
            <p>
              В современных условиях без качественной правовой помощи не
              обойтись любому предпринимателю.
            </p>
          </div>

          <div className={style.about__text}>
            <h5>
              Наша компания с 2014 года успешно ведет дела предпринимателей
              различных сфер деятельности.
            </h5>

            <p>
              Мы избавим вас от необходимости преодоления сложных
              бюрократических процессов и «канцелярщины», не допустим нарушений
              закона, которые влекут убытки, поможем организовать взаимодействие
              с клиентами и государственными органами в интересах вашей
              компании, защитим в суде и заставим проигравшую сторону оплатить
              наши услуги.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
