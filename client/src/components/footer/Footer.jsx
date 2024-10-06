import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import vk from "../../assets/icons/vk.svg";
import tel from "../../assets/icons/tel.svg";

const Footer = ({
  companyName,
  logo,
  phone_reception,
  phone_director,
  vk_link,
  email,
}) => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <h2>{companyName}</h2>

          <a href="#">
            <img
              src={`${process.env.REACT_APP_CMS_URL}${logo}`}
              alt="Лого ALLaw"
            />
          </a>

          <div className={style.footer__contacts}>
            <Link to={`mailto:${email}`}>{email}</Link>

            <Link to={vk_link} target="_blank">
              <img src={vk} alt="vk biznes_yuristy" />
            </Link>

            <Link to={`tel:+${phone_reception.replace(/\D/g, "")}`}>
              <img src={tel} alt="tel" />
            </Link>
          </div>
        </div>

        <div className={style.footer__copyright}>
          <Link to={`tel:+${phone_reception.replace(/\D/g, "")}`}>
            {phone_reception}
          </Link>
          <Link to={`tel:+${phone_director.replace(/\D/g, "")}`}>
            {phone_director}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
