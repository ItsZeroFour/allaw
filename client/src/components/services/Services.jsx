import React from "react";
import style from "./style.module.scss";

const Services = () => {
  return (
    <div className={style.services}>
      <div className="container">
        <div className={style.services__wrapper}>
          <h2>Наши услуги</h2>

          <ul>
            <li>
              <p>
                Юридическое сопровождение регистрации бизнеса, реорганизации и
                ликвидации компании
              </p>
            </li>

            <li>
              <p>
                Полное абонентское юридическое обслуживание по фиксированной
                ежемесячной цене
              </p>
            </li>

            <li>
              <p>Разовые услуги по запросу компании:</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
