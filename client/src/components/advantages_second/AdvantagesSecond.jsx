import React from "react";
import style from "./style.module.scss";
import check2Img from "../../assets/icons/check-2.svg";

const AdvantagesSecond = () => {
  return (
    <section className={style.advantages_second}>
      <div className="container">
        <div className={style.advantages_second__wrapper}>
          <ul>
            <li>
              <h2>Преимущества работы с нами</h2>
              <img src={check2Img} alt="check2" />
            </li>

            <li>
              <p>
                Сокращение затрат на юридическое обслуживание (с каждых 100
                рублей на руки штатному сотруднику компании платят 30 рублей
                налогов)
              </p>
            </li>

            <li>
              <p>
                Качественная юридическая поддержка во всех областях деятельности
                компании командой опытных юристов
              </p>
            </li>

            <li>
              <p>
                Юридические консультанты и компании обязаны соблюдать
                конфиденциальность и защиту данных
              </p>
            </li>

            <li>
              <p>
                Все условия обговариваются сторонами и прописываются в договоре
              </p>
            </li>

            <li>
              <p>
                Возможность получать и оплачивать только те услуги, которые
                необходимы в данный момент
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSecond;
