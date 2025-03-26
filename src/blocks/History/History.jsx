"use client";
import Image from "next/image";
import styles from "./History.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/history.png";
import pictureSmall from "@/assets/images/history-small.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";

const History = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const setRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      itemRefs.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const itemCenterY = rect.top + rect.height / 2;

          if (
            itemCenterY >= centerY - rect.height / 2 &&
            itemCenterY <= centerY + rect.height / 2
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ О компании ]</span>
            <h2 className={clsx("h2", styles.title)}>Наша большая история</h2>
          </div>
          <CircleButton dark={true} className={"desktop"} href={"/about"}>
            Подробнее о компании
          </CircleButton>
        </div>

        <div className={styles.content}>
          <Image className={styles.imageSmall} src={pictureSmall} alt="" />
          <Image className={styles.image} src={picture} alt="" />
          <div className={styles.text}>
            <p className="body-1-regular">
              Мы специализируемся на создании дизайнов интерьеров премиум
              сегмента, где каждая деталь отражает наш подход
              к сбалансированному сочетанию функциональности и красоты.
            </p>
            <p className="body-1">
              Наши работы, вдохновленные этой задачей, воплощают в себе
              современные тенденции и классические элементы, создавая уникальную
              атмосферу, которая соответствует высоким стандартам наших
              клиентов.
            </p>
            <div className={styles.info}>
              <div
                ref={(el) => setRef(el, 0)}
                className={clsx("h1", styles.line, {
                  [styles.active]: activeIndex === 0,
                })}
              >
                20
                <span className="h4">
                  лет в сфере <br /> строительства
                </span>
              </div>
              <div
                ref={(el) => setRef(el, 1)}
                className={clsx("h1", styles.line, {
                  [styles.active]: activeIndex === 1,
                })}
              >
                90+
                <span className="h4">
                  реализованных <br /> проектов
                </span>
              </div>
              <div
                ref={(el) => setRef(el, 2)}
                className={clsx("h1", styles.line, {
                  [styles.active]: activeIndex === 2,
                })}
              >
                3000+
                <span className="h4">
                  построенных <br className="mobile" /> квадратных{" "}
                  <br className="desktop" /> метров
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
