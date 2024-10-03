import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <section className={style.companies}>
      <div className="container">
        <div className={style.companies__wrapper}>
          <aside className={style.companies__left}>
            <ul>
              <li>
                <p>Партнерство</p>
              </li>
              <li>
                <p>Оптимизация расходов</p>
              </li>
              <li>
                <p>Экономия времени</p>
              </li>
              <li>
                <p>Выгода для всех</p>
              </li>
            </ul>

            <Link to="#contacts">Связаться</Link>
          </aside>
          <aside className={style.companies__right}>
            <ul>
              <li>Консультации юриста по правовым вопросам деятельности</li>

              <li>
                Составление договоров, в том числе: договор купли-продажи,
                договор аренды, договор оказания услуг, трудовой договор,
                договор ГПХ, договор дарения, договор подряда, договор займа и
                другие виды договоров
              </li>

              <li>Оформление разрешительных документов, лицензий</li>

              <li>
                Подготовка документов: корпоративные документы, письма,
                претензии, иски в суд и др.
              </li>

              <li>Представительство в судах и контрольных органах</li>

              <li>Защита авторских прав</li>

              <li>Регистрация бизнеса и ликвидация бизнеса «под ключ»</li>

              <li>
                «Брендирование» − регистрация товарного знака и промышленного
                образца
              </li>
            </ul>

            <h2>Не нашли необходимую услугу? Просто свяжитесь с нами</h2>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Companies;
