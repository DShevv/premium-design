"use client";
import Image from "next/image";
import styles from "./News.module.scss";
import clsx from "clsx";
import picture1 from "@/assets/images/works-1.png";
import picture2 from "@/assets/images/works-2.png";
import picture3 from "@/assets/images/works-3.png";
import picture4 from "@/assets/images/works-1.png";

import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useRef, useState } from "react";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import NewsItem from "@/components/NewsItem/NewsItem";
import { motion as m, LayoutGroup } from "motion/react";

const items = [
  {
    image: picture1,
    tag: "Статьи",
    title: "Что такое дежурный свет в интерьере и как его реализовать",
    date: "01.03.2024",
    text: `Дежурный свет в интерьере играет далеко не последнюю роль, он не только выполняет функциональную задачу, но и является важным элементом дизайна, который создает особую атмосферу и подчеркивает стиль помещения. Этот тип освещения обеспечивает необходимую видимость в темное время суток, позволяя безопасно перемещаться по квартире или дому без необходимости включения верхнего яркого освещения...`,
  },
  {
    image: picture2,
    tag: "Статьи",
    title: "Гостиные в современном стиле. Особенности и разновидности",
    date: "01.03.2024",
    text: `Современный стиль в оформлении интерьера гостиных является универсальным и гибким, что позволяет его успешно воссоздать в помещении любой площади. Этот стиль отличается своей способностью создавать гармоничное и сбалансированное пространство, независимо от размеров комнаты. В маленьких помещениях современный стиль помогает визуально расширить пространство, используя светлые цвета, зеркальные поверхности и функциональную...`,
  },
  {
    image: picture3,
    tag: "Статьи",
    title: "10 самых частых ошибок, допускаемых при ремонте ванной или санузла",
    date: "01.03.2024",
    text: `Ремонт ванной и санузла – это действительно дело ответственное, требующее тщательного планирования и профессионального подхода. Недостаточно просто найти красивые картинки в интернете, например, проекты из нашего портфолио, и смиксовать самые интересные на ваш взгляд решения. Такой подход может привести к тому, что конечный результат не будет соответствовать ожиданиям и не обеспечит комфортного и функционального использования...`,
  },
  {
    image: picture3,
    tag: "Статьи",
    title: "10  частых ошибок, допускаемых при ремонте ванной или санузла",
    date: "01.03.2024",
    text: `Ремонт ванной и санузла – это действительно дело ответственное, требующее тщательного планирования и профессионального подхода. Недостаточно просто найти красивые картинки в интернете, например, проекты из нашего портфолио, и смиксовать самые интересные на ваш взгляд решения. Такой подход может привести к тому, что конечный результат не будет соответствовать ожиданиям и не обеспечит комфортного и функционального использования...`,
  },
];

const tags = ["Все", "Статьи", "Новости компании"];

const AnimateButton = m.create(CircleButton);

const News = () => {
  const sliderRef = useRef(null);
  const [currentTag, setTag] = useState(tags[0]);

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
      <m.div
        layout
        transition={{
          duration: 0.3,
          type: "tween",
          ease: "linear",
        }}
        className={styles.wrapper}
      >
        <LayoutGroup>
          <m.div layout className={styles.header}>
            <div className={clsx("body-1", styles.caption)}>
              <span>[ Последние новости и статьи ]</span>
              <h2 className={clsx("h2", styles.title)}>
                Будьте в курсе наших последних новостей
              </h2>
              <div className={styles.tagsWrapper}>
                <div className={styles.tags}>
                  {tags.map((elem) => (
                    <div
                      className={clsx("h4", styles.tag, {
                        [styles.active]: currentTag === elem,
                      })}
                      key={elem}
                      onClick={() => setTag(elem)}
                    >
                      {elem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <CircleButton className={"desktop"} href={"/news"}>
              Читать все новости
            </CircleButton>
          </m.div>

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
                <NewsItem item={elem} />
              </SwiperSlide>
            ))}
          </Swiper>

          <m.div
            layout
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "linear",
            }}
            className={styles.mobileContainer}
          >
            <LayoutGroup>
              {items.map((elem, index) => (
                <NewsItem key={index} item={elem} />
              ))}
            </LayoutGroup>
          </m.div>

          <div className={styles.navigation}>
            <ArrowButton className={clsx(styles.prev)} onClick={handlePrev} />
            <ArrowButton className={clsx(styles.next)} onClick={handleNext} />
          </div>

          <AnimateButton
            layout
            type="link"
            className={styles.mobileButton}
            href={"/news"}
          >
            Читать все новости
          </AnimateButton>
        </LayoutGroup>
      </m.div>
    </section>
  );
};

export default News;
