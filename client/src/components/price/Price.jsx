import React from "react";
import style from "./style.module.scss";

const Price = () => {
  return (
    <section className={style.price} id="prices">
      <div className="container">
        <div className={style.price__wrapper}>
          <h2>Расценки на ежемесячное абонентское обслуживание</h2>

          <ul>
            <li>
              <div className={style.price__item__text}>
                <h3>Минимальный</h3>
                <p>
                  Устные консультации, разработка служебных документов, правовой
                  анализ и составление договоров
                </p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>40 000 ₽</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>Базовый</h3>
                <p>
                  Все услуги пакета «Минимальный» +претензионно‒исковая работа
                  (не включая судебное представительство)
                </p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>60 000 ₽</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>Расширенный</h3>
                <p>
                  Все услуги пакета «Базовый» + представительство в рамках
                  исполнительного производства, судебное представительство
                </p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>80 000 ₽</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>Максимальный</h3>
                <p>
                  Все услуги пакета «Расширенный» + юридическое сопровождение
                  при проверках контрольных органов
                </p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>100 000 ₽</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>Старт</h3>
                <p>Устные консультации юриста</p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>8 000 ₽</h3>
                </div>
              </div>
            </li>
          </ul>

          <div className={style.price__notification}>
            <h3>Не является публичной офертой</h3>
            <p>
              Указанные перечни услуг в пакетах являются примерными и
              устанавливаются в каждом конкретном случае на индивидуальных
              условиях, согласованных с заказчиком, в зависимости от объемов
              работ и необходимого заказчику комплекса услуг
            </p>
          </div>

          <h2 style={{ textAlign: "center", marginTop: 40 }}>
            Цены разовых услуг
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Price;
