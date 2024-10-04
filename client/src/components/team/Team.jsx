import React, { useState } from "react";
import style from "./style.module.scss";
import team1 from "../../assets/images/team/team-1.png";
import team2 from "../../assets/images/team/team-2.png";
import team3 from "../../assets/images/team/team-3.png";
import team4 from "../../assets/images/team/team-4.png";
import team5 from "../../assets/images/team/team-5.png";

const Team = () => {
  const [modalText, setModalText] = useState("");
  return (
    <section className={style.team}>
      <div className="container">
        <div className={style.team__wrapper}>
          <h3>
            Если Вам нужна оперативная и качественная правовая помощь,
            обращайтесь к нам!
          </h3>
        </div>
      </div>

      <div className={style.team__list}>
        <div className="container">
          <ul>
            <li>
              <img src={team1} alt="Агафонова Людмила" />
              <h4>Агафонова Людмила</h4>
              <button
                onClick={() =>
                  setModalText(
                    "Специализация: трудовое право, административное право, корпоративное право, законодательство об образовании, лицензирование. Ведение судебных споров, включая корпоративные споры, споры о защите деловой репутации, об оспаривании ненормативных правовых актов, споры, связанные с законодательством о земле, о признании договоров недействительными, споры, связанные с охраной интеллектуальной собственности (авторские права, право на корпоративное обозначение, товарный знак), о неисполнении обязательств по договорам, споры об административных правонарушениях и др."
                  )
                }
              >
                Специализация
              </button>
            </li>

            <li>
              <img src={team2} alt="Слободенюк Артём" />
              <h4>Слободенюк Артём</h4>
              <button
                onClick={() =>
                  setModalText(
                    "Специализация: Гражданское право (вещное право, договорное право, авторское право), международное частное право, гражданский и арбитражный процессы, предпринимательское право, работа с локальными нормативными актами, подготовка корпоративных документов автор опубликованных в системе РИНЦ научных статей на такие темы, как: “Злоупотребление процессуальными правами в гражданском процессе”, “Проблемы разграничения категорий “основания” и “способы” прекращения обязательств”, “Цифровизация финансового сектора и антимонопольный комплаенс”, “Обход закона в международном частном праве: анализ правого явления и его последствий” и др."
                  )
                }
              >
                Специализация
              </button>
            </li>

            <li>
              <img src={team5} alt="Сулейманова Эльмира" />
              <h4>Сулейманова Эльмира</h4>
              <button
                onClick={() =>
                  setModalText(
                    "Специализация: налоговое и финансовое право Ведение судебных споров, возникающие из налоговых правоотношений и споров по вопросам применения контрольно-кассовой техники"
                  )
                }
              >
                Специализация
              </button>
            </li>

            <li>
              <img src={team3} alt="Дрижжа Мария" />
              <h4>Дрижжа Мария</h4>
              <button
                onClick={() =>
                  setModalText(
                    "Специализация: земельное право, регистрация прав и сделок с недвижимым имуществом, наследственное право, а также по вопросам кредитования. автор опубликованных в системе РИНЦ научных статей на такие темы, как: «Электронное правосудие в гражданском процессе», «Особенности использования интеллектуальной собственности в рамках доктрины Fair Use в США», «Санкционный комплаенс: становление и развитие в Российской Федерации» и т.д."
                  )
                }
              >
                Специализация
              </button>
            </li>

            <li>
              <img src={team4} alt="Ильин Вячеслав" />
              <h4>Ильин Вячеслав</h4>
              <button
                onClick={() =>
                  setModalText(
                    "Специалист по проверкам налоговых и иных контрольных органов"
                  )
                }
              >
                Специализация
              </button>
            </li>
          </ul>
        </div>
      </div>

      {modalText !== "" && (
        <div className={style.team__modal}>
          <button
            className={style.team__modal__close}
            onClick={() => setModalText("")}
          ></button>

          <div className={style.team__modal__info}>
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
