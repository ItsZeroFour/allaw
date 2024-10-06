import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import style from "./style.module.scss";

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
        </div>
      </div>
    </section>
  );
};

export default Slider;
