"use client";
import styles from "./PortfolioSort.module.scss";
import { useState } from "react";
import picture1 from "@/assets/images/works-1.png";
import picture2 from "@/assets/images/works-2.png";
import picture3 from "@/assets/images/works-3.png";
import picture4 from "@/assets/images/works-1.png";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clsx from "clsx";

const tags = [
  "Все",
  "Дизайн проект",
  "Дизайн проект с комплектацией",
  "Ремонт под ключ",
];

const PortfolioSort = ({ items }) => {
  const [currentTag, setTag] = useState(tags[0]);

  return (
    <div>
      <Swiper
        className={styles.slider}
        slidesPerView={"auto"}
        spaceBetween={12}
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
      >
        {tags.map((elem) => (
          <SwiperSlide key={elem} className={styles.slide}>
            <div
              className={clsx("h4", styles.tag, {
                [styles.active]: currentTag === elem,
              })}
              onClick={() => setTag(elem)}
            >
              {elem}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.container}>
        {items.map((elem, index) => (
          <ProjectItem
            key={index}
            item={{
              title: elem.title,
              id: elem.id,
              tag: elem.tag,
              photo_path: elem.photo_path,
            }}
            className={clsx(styles.item, styles.wide, {
              [styles.right]: index % 2 === 1,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSort;
