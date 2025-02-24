import React, { useState } from "react";
import style from "./style.module.scss";
import OrderCall from "../order_call/OrderCall";

const Head = ({ title, subTitle, buttonText, policy }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__text}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </div>

          <button onClick={() => setShowModal(true)}>{buttonText}</button>
        </div>
      </div>

      {showModal && <OrderCall openModal={setShowModal} policy={policy} />}
    </section>
  );
};

export default Head;
