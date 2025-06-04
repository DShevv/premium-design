"use client";
import Image from "next/image";
import styles from "./Companies.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useCallback, useRef, useState } from "react";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import Link from "next/link";

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

  if (!items || items.length === 0) return null;

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
        {items && (
          <div className={styles.navigation}>
            <ArrowButton className={clsx(styles.prev)} onClick={handlePrev} />
            <ArrowButton className={clsx(styles.next)} onClick={handleNext} />
          </div>
        )}
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper
          className={styles.swiper}
          ref={sliderRef}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={16}
          speed={600}
          watchSlidesProgress={true}
          onSlideChange={(slider) => {
            setActiveIndex(slider.activeIndex);
          }}
          modules={[Autoplay]}
        >
          {items &&
            items.map((elem, index) => (
              <SwiperSlide
                key={elem.id}
                className={clsx(styles.slide, {
                  [styles.active]: activeIndex === index,
                })}
              >
                <Link href={elem.url} target="_blank">
                  <Image
                    src={`${process.env.STORE_URL}/storage/${elem.logo_path}`}
                    alt={elem.name}
                    width={388}
                    height={223}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Companies;
