import React from "react";
import style from "./style.module.scss";
import checkImg from "../../assets/icons/check.svg";

const Advantages = ({
  advTitle,
  text_advantages_1,
  text_advantages_2,
  text_advantages_3,
}) => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <ul>
            <li>
              <img src={checkImg} alt="check" />
              <div>
                <p>{text_advantages_1}</p>
              </div>
            </li>

            <li>
              <img src={checkImg} alt="check" />
              <div>
                <p>{text_advantages_2}</p>
              </div>
            </li>

            <li>
              <img src={checkImg} alt="check" />
              <div>
                <p>{text_advantages_3}</p>
              </div>
            </li>
          </ul>

          <h2>{advTitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
