import React, { useState } from "react";
import style from "./style.module.scss";
import axios from "axios";

const OrderCall = ({ openModal }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();

    try {
      if (!fullName || !phone || !message) {
        return alert("Ошибка! Заполните все поля");
      }

      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/telMail`,
        {
          fullName,
          phone,
          message,
        }
      );

      if (!data) {
        return alert("Не удалось отправить сообщение, повторите попытку позже");
      }

      return alert("Сообщение успешно отправлено!");
    } catch (err) {
      console.log(err);
      alert("Не удалось отправить сообщение, повторите попытку позже");
    }
  };

  return (
    <div className={style.order_call}>
      <button
        className={style.order_call__close}
        onClick={() => openModal(false)}
      ></button>
      <div className={style.order_call__wrapper}>
        <form>
          <input
            type="text"
            placeholder="Имя"
            onChange={(event) => setFullName(event.target.value)}
          />
          <input
            type="number"
            placeholder="Телефон"
            onChange={(event) => setPhone(event.target.value)}
          />
          <textarea
            type="text"
            placeholder="Сообщение"
            onChange={(event) => setMessage(event.target.value)}
          />
        </form>

        <button onClick={sendMail}>Отправить</button>
      </div>
    </div>
  );
};

export default OrderCall;
