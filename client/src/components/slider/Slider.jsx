import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import style from "./style.module.scss";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

const Slider = () => {
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
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 40,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>Претензионно-исковая работа и представительство</h2>
                <p>
                  Составление претензий, исковых заявлений, апелляционных и
                  кассационных жалоб, возражений на них. Изучение материалов дел
                  в судах, участие в судебных заседаниях.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>Комплексное сопровождение юридических лиц и ИП</h2>
                <p>
                  По всем правовым вопросам деятельности. Вы можете спокойно
                  заниматься тем, что приносит вам доход, а бумажную волокиту мы
                  возьмем на себя.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>Разработка учредительных документов и заявлений</h2>
                <p>
                  Разработка учредительных документов для юридических лиц, а
                  также пакета сопутствующих документов для государственной
                  регистрации при регистрации, реорганизации и внесении
                  изменений в документы компании.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.slider__item}>
                <h2>Договорная работа</h2>
                <p>
                  Разработка и экспертиза любых видов договоров (кули-продажи,
                  поставки, предоставления услуг, лицензионные, агентские,
                  договоры авторского заказа и проч.) под индивидуальные условия
                  и с минимизацией рисков для Вас. Обеспечим юридическое
                  сопровождение исполнения договоров. Консультации, проверка
                  рисков, регистрация сделок с недвижимостью
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={style.slider__navigation}>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={chevronLeft} alt="prev" />
            </button>

            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={chevronRight} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
