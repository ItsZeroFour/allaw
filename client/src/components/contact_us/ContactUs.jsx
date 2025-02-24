import React, { useState } from "react";
import style from "./style.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactUs = ({ contact_us_title }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(true);

  const sendMail = async (event) => {
    event.preventDefault();

    if (!agree) return;

    try {
      if (!email || !fullName || !phone || !message) {
        return alert("Ошибка! Заполните все поля");
      }

      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/sendMail`,
        {
          email,
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
    <section className={style.contact_us} id="contacts">
      <div className="container">
        <div className={style.contact_us__wrapper}>
          <h2>{contact_us_title}</h2>

          <form>
            <input
              type="text"
              placeholder="Имя *"
              onChange={(event) => setFullName(event.target.value)}
            />
            <input
              type="email"
              placeholder="example@mail.ru *"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="number"
              maxLength={12}
              placeholder="+7(978)123-45-67 *"
              onChange={(event) => setPhone(event.target.value)}
            />
            <textarea
              placeholder="У меня вопрос... *"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </form>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >

            <p>
               Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и в целях, определенных в Согласии на обработку персональных данных
            </p>
          </div>

          <button onClick={sendMail} disabled={!agree}>
            Отправить
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
