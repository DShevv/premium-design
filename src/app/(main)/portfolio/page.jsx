"use client";
import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import picture1 from "@/assets/images/works-1.png";
import picture2 from "@/assets/images/works-2.png";
import picture3 from "@/assets/images/works-3.png";
import picture4 from "@/assets/images/works-1.png";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import Pagination from "@/components/Pagination/Pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tags = [
  "Все",
  "Дизайн проект",
  "Дизайн проект с комплектацией",
  "Ремонт под ключ",
];

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
  {
    image: picture1,
    tag: "Дизайн-проект",
    title: "Трёхэтажная квартира в москве",
  },
];

const page = () => {
  const [currentTag, setTag] = useState(tags[0]);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={clsx("h1", styles.title)}>портфолио</h1>
        <Breadcrumbs
          items={[
            {
              title: "Главная",
              href: "/",
            },
            {
              title: "портфолио",
              href: "/",
            },
          ]}
        />
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
              item={elem}
              className={clsx(styles.item, styles.wide, {
                [styles.right]: index % 2 === 1,
              })}
            />
          ))}
        </div>
        <div className={styles.pagination}>
          <Pagination max={8} maxPerView={4} current={1} />
        </div>
      </div>
    </>
  );
};

export default page;
