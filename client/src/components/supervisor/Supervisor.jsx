import React from "react";
import style from "./style.module.scss";
import supervisorImage from "../../assets/images/supervisor_image.png";

const supervisor = ({
  leader_name,
  leader_role,
  leader_text_1,
  leader_text_2,
  leader_age,
  leader_age_desc,
  leader_photo,
}) => {
  return (
    <section className={style.supervisor}>
      <div className="container">
        <div className={style.supervisor__wrapper}>
          <aside className={style.supervisor__left}>
            <div className={style.supervisor__title}>
              <h2>{leader_name}</h2>
              <h3>{leader_role}</h3>
            </div>

            <p>{leader_text_1}</p>

            <div className={style.supervisor__experience}>
              <div className={style.supervisor__experience__years}>
                <h2>{leader_age}</h2>
                <h3>лет</h3>
              </div>

              <p>{leader_age_desc}</p>
            </div>

            <p>{leader_text_2}</p>
          </aside>

          <aside className={style.supervisor__right}>
            <img
              src={supervisorImage}
              alt={leader_name}
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default supervisor;
