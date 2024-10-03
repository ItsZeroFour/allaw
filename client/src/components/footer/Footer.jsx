import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import vk from "../../assets/icons/vk.svg";
import tel from "../../assets/icons/tel.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <h2>Юридическая компания «Деловое право» – бизнес по закону</h2>

          <Link to="#">
            <img src={logo} alt="Лого ALLaw" />
          </Link>

          <div className={style.footer__contacts}>
            <Link to="mailto:delovoye.pravo@mail.ru">
              delovoye.pravo@mail.ru
            </Link>

            <Link to="https://vk.com/biznes_yuristy" target="_blank">
              <img src={vk} alt="vk biznes_yuristy" />
            </Link>

            <Link to="tel:+79786710708">
              <img src={tel} alt="tel" />
            </Link>
          </div>
        </div>

        <div className={style.footer__copyright}>
          <Link to="tel:+79786710708">+79786710708 - Ресепшн</Link>
          <Link to="tel:+79788175626">+79788175626 - Директор</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
