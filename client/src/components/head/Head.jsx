import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__text}>
            <h1>Юридический аутсорсинг</h1>
            <p>Правовое сопровождение бизнеса</p>
          </div>

          <Link to="#contacts">Связаться с нами</Link>
        </div>
      </div>
    </section>
  );
};

export default Head;
