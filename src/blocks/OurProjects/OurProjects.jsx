"use client";
import Image from "next/image";
import styles from "./OurProjects.module.scss";
import clsx from "clsx";
import picture1 from "@/assets/images/works-1.png";
import picture2 from "@/assets/images/works-2.png";
import picture3 from "@/assets/images/works-3.png";
import picture4 from "@/assets/images/works-1.png";

import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const OurProjects = ({ title }) => {
  const sliderRef = useRef(null);
  const [slides, setSlides] = useState([]);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    async function fetchPortfolio() {
      const posts = await fetch(`${process.env.API_URL}/v1/portfolio`, {
        next: { revalidate: 60 },
      })
        .then((res) => res.json())
        .catch((err) => undefined);

      if (posts) {
        let data = posts.data;
        if (data.length < 6 && data.length > 0) {
          while (data.length < 6) {
            data = [...data, ...posts.data];
          }
        }
        setSlides(data);
      }
    }

    fetchPortfolio();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наши работы ]</span>
            <h2 className={clsx("h2", styles.title)}>
              {title ? title : "Реализованные проекты компании"}
            </h2>
          </div>
          <CircleButton
            dark={true}
            className={"desktop"}
            href={"/portfolio"}
            type="link"
          >
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
          {slides.map((elem, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <ProjectItem item={elem} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.mobileContainer}>
          {slides.map((elem, index) => (
            <ProjectItem key={index} item={elem} />
          ))}
        </div>

        {slides.length > 0 && (
          <div className={styles.navigation}>
            <ArrowButton className={clsx(styles.prev)} onClick={handlePrev} />
            <ArrowButton className={clsx(styles.next)} onClick={handleNext} />
          </div>
        )}

        <CircleButton
          dark={true}
          className={styles.mobileButton}
          href={"/our-projects"}
        >
          смотреть все проекты
        </CircleButton>
      </div>
    </section>
  );
};

export default OurProjects;
