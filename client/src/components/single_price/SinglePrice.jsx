import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const SinglePrice = () => {
  return (
    <section className={style.single_price}>
      <div className="container">
        <div className={style.single_price__wrapper}>
          <ul>
            <li>
              <h3>Претензионно-исковая работа и представительство</h3>

              <ul>
                <li>
                  <p>Составление претензий, жалоб, заявлений</p>
                  <div></div>
                  <p>от 2 500 ₽</p>
                </li>

                <li>
                  <p>
                    Составление исковых заявлений, апелляционных, кассационных
                    жалоб, возражений на них
                  </p>
                  <div></div>
                  <p>от 10 000 ₽</p>
                </li>

                <li>
                  <p>
                    Участие в судебном заседании/изучение материалов дел в судах
                  </p>
                  <div></div>
                  <p>от 10 000 ₽</p>
                </li>
              </ul>
            </li>

            <li>
              <h3>Договорная работа</h3>

              <ul>
                <li>
                  <p>Составление договора с типовыми условиями</p>
                  <div></div>
                  <p>от 5 000 ₽</p>
                </li>

                <li>
                  <p>Составление договора под индивидуальные условия</p>
                  <div></div>
                  <p>от 10 000 ₽</p>
                </li>

                <li>
                  <p>
                    Участие в судебном заседании/изучение материалов дел в судах
                  </p>
                  <div></div>
                  <p>от 10 000 ₽</p>
                </li>
              </ul>
            </li>

            <li>
              <h3>Разработка учредительных документов</h3>
              <div></div>
              <p>от 10 000 ₽</p>
            </li>

            <li>
              <h3>
                Составление заявлений о совершении регистрационных действий
              </h3>
              <div></div>
              <p>от 5 000 ₽</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.single_price__bottom}>
        <div className="container">
          <div className={style.single_price__bottom__wrapper}>
            <h3>
              Остались вопросы? Заполните форму и мы свяжемся с вами в ближайшее
              время
            </h3>

            <Link to="#contacts">Заказать консультацию</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePrice;
