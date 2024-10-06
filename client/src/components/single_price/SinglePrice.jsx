import React, { useState } from "react";
import style from "./style.module.scss";
import OrderCall from "../order_call/OrderCall";

const SinglePrice = ({
  single_price_item_1_title,
  single_price_item_1_item_1,
  single_price_item_1_price_1,
  single_price_item_1_item_2,
  single_price_item_1_price_2,
  single_price_item_1_item_3,
  single_price_item_1_price_3,
  single_price_item_2_title,
  single_price_item_2_item_1,
  single_price_item_2_price_1,
  single_price_item_2_item_2,
  single_price_item_2_price_2,
  single_price_item_2_item_3,
  single_price_item_2_price_3,

  single_price_item_3_title,
  single_price_item_3_price,

  single_price_item_4_title,
  single_price_item_4_price,

  any_questions_title,
  any_questions_button_text,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={style.single_price}>
      <div className="container">
        <div className={style.single_price__wrapper}>
          <ul>
            <li>
              <h3>{single_price_item_1_title}</h3>

              <ul>
                <li>
                  <p>{single_price_item_1_item_1}</p>
                  <div></div>
                  <p>{single_price_item_1_price_1}</p>
                </li>

                <li>
                  <p>{single_price_item_1_item_2}</p>
                  <div></div>
                  <p>{single_price_item_1_price_2}</p>
                </li>

                <li>
                  <p>{single_price_item_1_item_3}</p>
                  <div></div>
                  <p>{single_price_item_1_price_3}</p>
                </li>
              </ul>
            </li>

            <li>
              <h3>{single_price_item_2_title}</h3>

              <ul>
                <li>
                  <p>{single_price_item_2_item_1}</p>
                  <div></div>
                  <p>{single_price_item_2_price_1}</p>
                </li>

                <li>
                  <p>{single_price_item_2_item_2}</p>
                  <div></div>
                  <p>{single_price_item_2_price_2}</p>
                </li>

                <li>
                  <p>{single_price_item_2_item_3}</p>
                  <div></div>
                  <p>{single_price_item_2_price_3}</p>
                </li>
              </ul>
            </li>

            <li>
              <h3>{single_price_item_3_title}</h3>
              <div></div>
              <p>{single_price_item_3_price}</p>
            </li>

            <li>
              <h3>{single_price_item_4_title}</h3>
              <div></div>
              <p>{single_price_item_4_price}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.single_price__bottom}>
        <div className="container">
          <div className={style.single_price__bottom__wrapper}>
            <h3>{any_questions_title}</h3>

            <button onClick={() => setShowModal(true)}>
              {any_questions_button_text}
            </button>
          </div>
        </div>
      </div>

      {showModal && <OrderCall openModal={setShowModal} />}
    </section>
  );
};

export default SinglePrice;
