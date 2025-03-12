"use client";
import Image from "next/image";
import styles from "./OurProjects.module.css";
import clsx from "clsx";
import picture1 from "@/assets/images/works-1.png";
import picture2 from "@/assets/images/works-2.png";
import picture3 from "@/assets/images/works-3.png";
import picture4 from "@/assets/images/works-1.png";

import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectItem from "./ProjectItem";
import { useCallback, useRef } from "react";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const items = [
  {
    image: picture1,
    tag: "Дизайн-проект",
    title: "Трёхэтажная квартира в москве",
  },
  {
    image: picture2,
    tag: "Дизайн-проект",
    title: "Трёхэтажная квартира в москве",
  },
  {
    image: picture3,
    tag: "Дизайн-проект",
    title: "Трёхэтажная квартира в москве",
  },
  {
    image: picture1,
    tag: "Дизайн-проект",
    title: "Трёхэтажная квартира в москве",
  },
];

const OurProjects = () => {
  const sliderRef = useRef(null);

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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наши работы ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Реализованные проекты компании
            </h2>
          </div>
          <CircleButton className={"desktop"} href={"/our-projects"}>
            смотреть все проекты
          </CircleButton>
        </div>

        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={24}
          breakpoints={{
            1440: {
              spaceBetween: 26,
            },
          }}
          loop={true}
          className={styles.swiper}
        >
          {items.map((elem, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <ProjectItem item={elem} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.mobileContainer}>
          {items.map((elem, index) => (
            <ProjectItem key={index} item={elem} />
          ))}
        </div>

        <div className={styles.navigation}>
          <ArrowButton className={clsx(styles.prev)} onClick={handlePrev} />
          <ArrowButton className={clsx(styles.next)} onClick={handleNext} />
        </div>

        <CircleButton className={styles.mobileButton} href={"/our-projects"}>
          смотреть все проекты
        </CircleButton>
      </div>
    </section>
  );
};

export default OurProjects;
