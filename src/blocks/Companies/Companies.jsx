"use client";
import Image from "next/image";
import styles from "./Companies.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useRef, useState } from "react";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const Companies = ({ items }) => {
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
            <span>[ Наши партнёры ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Бренды, с которыми мы работаем
            </h2>
          </div>
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
          spaceBetween={16}
          speed={600}
          onSlideChange={(slider) => {
            setActiveIndex(slider.activeIndex);
          }}
        >
          {items.map((elem, index) => (
            <SwiperSlide
              key={elem.id}
              className={clsx(styles.slide, {
                [styles.active]: activeIndex === index,
              })}
            >
              <Image
                src={`${process.env.STORE_URL}/storage/${elem.photo_path}`}
                alt={elem.title}
                width={388}
                height={223}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Companies;
