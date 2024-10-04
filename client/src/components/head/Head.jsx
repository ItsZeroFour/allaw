import React, { useState } from "react";
import style from "./style.module.scss";
import OrderCall from "../order_call/OrderCall";

const Head = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__text}>
            <h1>Юридический аутсорсинг</h1>
            <p>Правовое сопровождение бизнеса</p>
          </div>

          <button onClick={() => setShowModal(true)}>Связаться с нами</button>
        </div>
      </div>

      {showModal && <OrderCall openModal={setShowModal} />}
    </section>
  );
};

export default Head;
