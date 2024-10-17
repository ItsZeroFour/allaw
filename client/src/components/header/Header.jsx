import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = ({
  phone,
  companyName,
  headerButton1,
  headerButton2,
  headerButton3,
  logo,
}) => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className="container">
          <div className={style.header__wrapper}>
            <aside className={style.header__left}>
              {/* <div className={style.header__burger}>
                <div></div>
                <div></div>
                <div></div>
              </div> */}

              <Link to="#">
                <img
                  src={`${process.env.REACT_APP_CMS_URL}${logo}`}
                  alt="logo"
                />
              </Link>

              <h2>{companyName}</h2>
            </aside>

            <aside className={style.header__right}>
              <ul>
                <li>
                  <a href="#services">{headerButton1}</a>
                </li>
                <li>
                  <a href="#prices">{headerButton2}</a>
                </li>
                <li>
                  <a href="#contacts">{headerButton3}</a>
                </li>
              </ul>

              <a href={`tel:${phone}`}>{phone}</a>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
