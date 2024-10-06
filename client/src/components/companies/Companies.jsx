import React from "react";
import style from "./style.module.scss";

const Companies = ({
  services_adv_1,
  services_adv_2,
  services_adv_3,
  services_adv_4,
  services_list_item_1,
  services_list_item_2,
  services_list_item_3,
  services_list_item_4,
  services_list_item_5,
  services_list_item_6,
  services_list_item_7,
  services_list_item_8,
  services_button_text,
  services_notfound_title,
  advantage_2_title,
}) => {
  return (
    <section className={style.companies}>
      <div className="container">
        <div className={style.companies__wrapper}>
          <div className={style.companies__main}>
            <aside className={style.companies__left}>
              <ul>
                <li>
                  <p>{services_adv_1}</p>
                </li>
                <li>
                  <p>{services_adv_2}</p>
                </li>
                <li>
                  <p>{services_adv_3}</p>
                </li>
                <li>
                  <p>{services_adv_4}</p>
                </li>
              </ul>

              <a href="#contacts">{services_button_text}</a>
            </aside>
            <aside className={style.companies__right}>
              <ul>
                <li>{services_list_item_1}</li>

                <li>{services_list_item_2}</li>

                <li>{services_list_item_3}</li>

                <li>{services_list_item_4}</li>

                <li>{services_list_item_5}</li>

                <li>{services_list_item_6}</li>

                <li>{services_list_item_7}</li>

                <li>{services_list_item_8}</li>
              </ul>

              <h2>{services_notfound_title}</h2>
            </aside>
          </div>

          <h2>{advantage_2_title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Companies;
