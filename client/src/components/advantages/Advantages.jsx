import React from "react";
import style from "./style.module.scss";
import checkImg from "../../assets/icons/check.svg";

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <ul>
            <li>
              <img src={checkImg} alt="check" />
              <div>
                <p>Комплексное юридическое сопровождение</p>
              </div>
            </li>

            <li>
              <img src={checkImg} alt="check" />
              <div>
                <p>Персональный юрист всегда на связи с вами</p>
              </div>
            </li>

            <li>
              <img src={checkImg} alt="check" />
              <div>
                <p>Максимально быстрое решение задач</p>
              </div>
            </li>
          </ul>

          <h2>
            Компания «Деловое право» – проводник в мире законов для вашего
            бизнеса
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
