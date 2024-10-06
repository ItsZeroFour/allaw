import React from "react";
import style from "./style.module.scss";

const Price = ({
  price_title,
  price_item_1_name,
  price_item_1_desc,
  price_item_1_price,

  price_item_2_name,
  price_item_2_desc,
  price_item_2_price,

  price_item_3_name,
  price_item_3_desc,
  price_item_3_price,

  price_item_4_name,
  price_item_4_desc,
  price_item_4_price,

  price_item_5_name,
  price_item_5_desc,
  price_item_5_price,

  price_not_title,
  price_not_desc,
  single_price_title,
}) => {
  return (
    <section className={style.price} id="prices">
      <div className="container">
        <div className={style.price__wrapper}>
          <h2>{price_title}</h2>

          <ul>
            <li>
              <div className={style.price__item__text}>
                <h3>{price_item_1_name}</h3>
                <p>{price_item_1_desc}</p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>{price_item_1_price}</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>{price_item_2_name}</h3>
                <p>{price_item_2_desc}</p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>{price_item_2_price}</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>{price_item_3_name}</h3>
                <p>{price_item_3_desc}</p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>{price_item_3_price}</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>{price_item_4_name}</h3>
                <p>{price_item_4_desc}</p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>{price_item_4_price}</h3>
                </div>
              </div>
            </li>

            <li>
              <div className={style.price__item__text}>
                <h3>{price_item_5_name}</h3>
                <p>{price_item_5_desc}</p>
              </div>

              <div className={style.price__item__price}>
                <div>
                  <h4>Стоимость</h4>
                  <h3>{price_item_5_price}</h3>
                </div>
              </div>
            </li>
          </ul>

          <div className={style.price__notification}>
            <h3>{price_not_title}</h3>
            <p>{price_not_desc}</p>
          </div>

          <h2 style={{ textAlign: "center", marginTop: 40 }}>
            {single_price_title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Price;
