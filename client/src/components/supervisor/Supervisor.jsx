import React from "react";
import style from "./style.module.scss";
import supervisorImage from "../../assets/images/supervisor_image.png";

const supervisor = () => {
  return (
    <section className={style.supervisor}>
      <div className="container">
        <div className={style.supervisor__wrapper}>
          <aside className={style.supervisor__left}>
            <div className={style.supervisor__title}>
              <h2>Агафонова Людмила Леонидовна</h2>
              <h3>Руководитель</h3>
            </div>

            <p>
              Здравствуйте, я руководитель компании «Деловое право», доцент
              кафедры предпринимательского права.C 2014 года возглавляю команду
              квалифицированных юристов специализирующихся на различных отраслях
              права в Крыму и по всей России.
            </p>

            <div className={style.supervisor__experience}>
              <div className={style.supervisor__experience__years}>
                <h2>17</h2>
                <h3>лет</h3>
              </div>

              <p>
                Опыт практической деятельности по оказанию правовых услуг
                юридическим лицам и индивидуальным предпринимателям.
              </p>
            </div>

            <p>
              Если у вас есть вопросы к юристу или нужна помощь в решении
              конкретной юридической задачи, онлайн-консультация юриста –
              обращайтесь, мы будем рады помочь вам!
            </p>
          </aside>

          <aside className={style.supervisor__right}>
            <img src={supervisorImage} alt="supervisor" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default supervisor;
