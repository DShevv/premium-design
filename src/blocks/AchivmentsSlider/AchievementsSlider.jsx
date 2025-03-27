"use client";
import Image from "next/image";
import styles from "./AchievementsSlider.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useRef, useState } from "react";
import cerf from "@/assets/images/certificate.png";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const items = [cerf, cerf, cerf, cerf, cerf, cerf];

const AchievementsSlider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наши достижения ]</span>
            <h2 className={clsx("h2", styles.title)}>
              профессионализм подтвердят наши награды
            </h2>
          </div>

          <p className={clsx("body-1")}>
            Мы гордимся нашими достижениями, которые подтверждают наш
            профессионализм и успех в области дизайна интерьеров. Наши награды
            отражают нашу способность создавать уникальные и функциональные
            пространства, соответствующие высоким стандартам клиентов. Эти
            достижения мотивируют нас совершенствовать навыки и предлагать
            инновационные решения, чтобы поддерживать лидирующие позиции
            в индустрии.
          </p>
        </div>
        <div className={styles.navigation}>
          <ArrowButton className={clsx(styles.prev)} onClick={handlePrev} />
          <ArrowButton className={clsx(styles.next)} onClick={handleNext} />
        </div>
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper
          className={styles.swiper}
          ref={sliderRef}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          speed={600}
          onSlideChange={(slider) => {
            setActiveIndex(slider.activeIndex);
          }}
        >
          {items.map((elem, index) => (
            <SwiperSlide
              key={index}
              className={clsx(styles.slide, {
                [styles.active]: activeIndex === index,
              })}
            >
              <Image src={elem} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AchievementsSlider;
