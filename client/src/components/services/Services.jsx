import React from "react";
import style from "./style.module.scss";

const Services = ({
  services__title,
  services_item_1,
  services_item_2,
  services_item_3,
}) => {
  return (
    <div className={style.services} id="services">
      <div className="container">
        <div className={style.services__wrapper}>
          <h2>{services__title}</h2>

          <ul>
            <li>
              <p>{services_item_1}</p>
            </li>

            <li>
              <p>{services_item_2}</p>
            </li>

            <li>
              <p>{services_item_3}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
