import React from "react";
import style from "./style.module.scss";
import check2Img from "../../assets/icons/check-2.svg";

const AdvantagesSecond = ({
  advantage_2_item_1,
  advantage_2_item_2,
  advantage_2_item_3,
  advantage_2_item_4,
  advantage_2_item_5,
  advantage_2_item_6,
}) => {
  return (
    <section className={style.advantages_second}>
      <div className="container">
        <div className={style.advantages_second__wrapper}>
          <ul>
            <li>
              <h2>{advantage_2_item_1}</h2>
              <img src={check2Img} alt="check2" />
            </li>

            <li>
              <p>{advantage_2_item_2}</p>
            </li>

            <li>
              <p>{advantage_2_item_3}</p>
            </li>

            <li>
              <p>{advantage_2_item_4}</p>
            </li>

            <li>
              <p>{advantage_2_item_5}</p>
            </li>

            <li>
              <p>{advantage_2_item_6}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSecond;
