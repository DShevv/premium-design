"use client";
import styles from "./PortfolioSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import portfolio1 from "@/assets/images/portfolio2.png";
import portfolio2 from "@/assets/images/portfolio3.png";
import portfolio3 from "@/assets/images/portfolio4.png";
import portfolio4 from "@/assets/images/portfolio5.png";
import portfolio5 from "@/assets/images/portfolio6.png";
import clsx from "clsx";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const PortfolioSlider = ({ items }) => {
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
    <div className={styles.swiperBlock}>
      <Swiper
        slidesPerView={1}
        ref={sliderRef}
        className={styles.swiper}
        modules={[Pagination]}
        pagination={{
          el: ".swiper-pagination", // Use a valid DOM element here
          type: "bullets",
          clickable: true,
          bulletClass: `${styles.bullet}`,
          bulletActiveClass: `${styles.bulletActive}`,
        }}
      >
        {items.map((elem, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image
              src={`${process.env.STORE_URL}/storage/${elem}`}
              alt=""
              width={1354}
              height={700}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={clsx(
          "swiper-pagination",
          styles.pagination,
          styles.paginationImportant
        )}
      ></div>
      <div className={styles.navigation}>
        <ArrowButton className={clsx(styles.prev)} onClick={handlePrev} />
        <ArrowButton className={clsx(styles.next)} onClick={handleNext} />
      </div>
    </div>
  );
};

export default PortfolioSlider;
