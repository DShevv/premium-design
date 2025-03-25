"use client";
import Image from "next/image";
import styles from "./CompareBlock.module.scss";
import clsx from "clsx";
import before from "@/assets/images/before.png";
import after from "@/assets/images/after.png";

import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useCallback, useRef, useState } from "react";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import CompareImages from "@/components/CompareImages/CompareImages";
import { Pagination } from "swiper/modules";

const items = [
  {
    before: before,
    after: after,
  },
  {
    before: before,
    after: after,
  },
  {
    before: before,
    after: after,
  },
  {
    before: before,
    after: after,
  },
];

const CompareBlock = ({ className, sliderClass, title, inside }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const changeIsDragging = (value) => {
    console.log(value);
    setIsDragging(value);
  };

  return (
    <section className={clsx(styles.container, className)}>
      {!inside && (
        <div className={clsx(styles.header, { [styles.visible]: title })}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ До-после ]</span>
            <h2 className={clsx("h2", styles.title)}>
              {title ? title : "Результаты наших работ"}
            </h2>
          </div>
          {title === undefined && (
            <CircleButton className={"desktop"} href={"/our-projects"}>
              смотреть все проекты
            </CircleButton>
          )}
        </div>
      )}
      <Swiper
        slidesPerView={1}
        ref={sliderRef}
        className={clsx(styles.swiper, sliderClass)}
        allowTouchMove={false}
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
          <SwiperSlide key={index} className={styles.slide}>
            <CompareImages items={elem} onDrag={changeIsDragging} />
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
    </section>
  );
};

export default CompareBlock;
