import React, { useState } from "react";
import style from "./style.module.scss";

const Team = ({
  contact_us_text,
  team_img_1,
  team_name_1,
  team_speciality_1,

  team_img_2,
  team_name_2,
  team_speciality_2,

  team_img_3,
  team_name_3,
  team_speciality_3,

  team_img_4,
  team_name_4,
  team_speciality_4,

  team_img_5,
  team_name_5,
  team_speciality_5,
}) => {
  const [modalText, setModalText] = useState("");
  return (
    <section className={style.team}>
      <div className="container">
        <div className={style.team__wrapper}>
          <h3>{contact_us_text}</h3>
        </div>
      </div>

      <div className={style.team__list}>
        <div className="container">
          <ul>
            <li>
              <img
                src={`${process.env.REACT_APP_CMS_URL}${team_img_1}`}
                alt={team_name_1}
              />
              <h4>{team_name_1}</h4>
              <button onClick={() => setModalText(team_speciality_1)}>
                Специализация
              </button>
            </li>

            <li>
              <img
                src={`${process.env.REACT_APP_CMS_URL}${team_img_3}`}
                alt={team_name_3}
              />
              <h4>{team_name_3}</h4>
              <button onClick={() => setModalText(team_speciality_3)}>
                Специализация
              </button>
            </li>

            <li>
              <img
                src={`${process.env.REACT_APP_CMS_URL}${team_img_4}`}
                alt={team_name_4}
              />
              <h4>{team_name_4}</h4>
              <button onClick={() => setModalText(team_speciality_4)}>
                Специализация
              </button>
            </li>

            <li>
              <img
                src={`${process.env.REACT_APP_CMS_URL}${team_img_5}`}
                alt={team_name_5}
              />
              <h4>{team_name_5}</h4>
              <button onClick={() => setModalText(team_speciality_5)}>
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
