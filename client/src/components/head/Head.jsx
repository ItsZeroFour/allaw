import React from "react";
import style from "./style.module.scss";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__text}>
            <h1>Юридический аутсорсинг</h1>
            <p>Правовое сопровождение бизнеса</p>
          </div>

          <button>Связаться с нами</button>
        </div>
      </div>
    </section>
  );
};

export default Head;
