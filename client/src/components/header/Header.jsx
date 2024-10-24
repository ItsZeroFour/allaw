import React, { useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import local from "../../assets/icons/local.svg";
import mail from "../../assets/icons/mail.svg";
import phone_ from "../../assets/icons/phone.svg";
import vk from "../../assets/icons/vk2.svg";

const Header = ({
  phone,
  companyName,
  headerButton1,
  headerButton2,
  headerButton3,
  logo,
  phone_reception,
  phone_director,
  vk_link,
  email,
}) => {
  const [openModal, setOpenModal] = useState(false);

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
                  <button
                    onClick={() => {
                      if (window.ym) {
                        window.ym(98719616, "reachGoal", "contacts");
                      }
                      setOpenModal(true);
                    }}
                  >
                    {headerButton3}
                  </button>
                </li>
              </ul>

              <a href={`tel:${phone}`}>{phone}</a>
            </aside>
          </div>
        </div>
      </div>

      {openModal && (
        <div className={style.header__contacts}>
          <div className={style.header__contacts__wrapper}>
            <p>
              <img src={local} alt="local" /> Адрес: г.Симферополь, ул.
              Севастопольская 20А
            </p>
            <Link to={`tel:+${phone_reception.replace(/\D/g, "")}`}>
              <img src={phone_} alt="phone" /> {phone_reception}
            </Link>
            <Link to={`tel:+${phone_director.replace(/\D/g, "")}`}>
              <img src={phone_} alt="phone" /> {phone_director}
            </Link>
            <p>
              <img src={mail} alt="phone" />{" "}
              <Link to={`mailto:${email}`}>{email}</Link>
            </p>
            <Link to={vk_link} target="_blank">
              <img src={vk} alt="vk" /> Мы в VK
            </Link>

            <div style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://yandex.ru/maps/146/simferopol/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Симферополь
              </a>
              <a
                href="https://yandex.ru/maps/146/simferopol/house/sevastopolskaya_ulitsa_20a/Z00Ydg5pTUQOQFpufXV1dHlmbA==/?ll=34.099419%2C44.945558&utm_medium=mapframe&utm_source=maps&z=17.05"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Севастопольская улица, 20А — Яндекс Карты
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=34.099419%2C44.945558&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDUzNTI1NDY5EnTQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCa0YDRi9C8LCDQodC40LzRhNC10YDQvtC_0L7Qu9GMLCDQodC10LLQsNGB0YLQvtC_0L7Qu9GM0YHQutCw0Y8g0YPQu9C40YbQsCwgMjDQkCIKDc9lCEIVQMgzQg%2C%2C&z=17.05"
                width="100%"
                height="500"
                frameborder="1"
                allowfullscreen="true"
                style={{ position: "relative" }}
              ></iframe>
            </div>

            <div
              className={style.header__contacts__close}
              onClick={() => setOpenModal(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
