import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import style from "./style.module.scss";
import arrowLeft from "../../assets/icons/chevron-left.svg";
import arrowRight from "../../assets/icons/chevron-right.svg";

const Slider = ({
  slider_item_1_title,
  slider_item_1_text,
  slider_item_2_title,
  slider_item_2_text,
  slider_item_3_title,
  slider_item_3_text,
  slider_item_4_title,
  slider_item_4_text,
}) => {
  const swiperRef = useRef(null);

  return (
    <section className={style.slider}>
      <div className="container">
        <div className={style.slider__wrapper}>
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            slidesPerView={1.3}
            centeredSlides={true}
            spaceBetween={180}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 1.05,
                spaceBetween: 30,
              },
              1465: {
                slidesPerView: 1.05,
                spaceBetween: 40,
              },

              1920: {
                slidesPerView: 2.3,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>{slider_item_1_title}</h2>
                <p>{slider_item_1_text}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>{slider_item_2_title}</h2>
                <p>{slider_item_2_text}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>{slider_item_3_title}</h2>
                <p>{slider_item_3_text}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>{slider_item_4_title}</h2>
                <p>{slider_item_4_text}</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
