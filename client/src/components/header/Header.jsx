import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className="container">
          <div className={style.header__wrapper}>
            <aside className={style.header__left}>
              <div className={style.header__burger}>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <Link to="#">
                <img src={logo} alt="logo" />
              </Link>

              <h2>ООО «Деловое право»</h2>
            </aside>

            <aside className={style.header__right}>
              <ul>
                <li>
                  <a href="#services">Услуги</a>
                </li>
                <li>
                  <a href="#prices">Цены</a>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>

              <a href="tel:+79786710709">+79786710709</a>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
