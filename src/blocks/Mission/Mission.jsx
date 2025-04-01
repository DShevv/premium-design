"use client";
import Image from "next/image";
import styles from "./Mission.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/portfolio4.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";

const Mission = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
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
            setActiveIndexes((prevIndexes) =>
              prevIndexes.includes(index)
                ? prevIndexes
                : [...prevIndexes, index]
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.container}>
      <div className={clsx("body-1", styles.caption, styles.laptop)}>
        <span>[ Наша миссия ]</span>
        <h2 className={clsx("h2", styles.title)}>
          Создаем <br /> уникальные решения
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={clsx("body-1", styles.caption, styles.desktop)}>
            <span>[ Наша миссия ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Создаем <br /> уникальные решения
            </h2>
          </div>

          <p className={clsx("body-1")}>
            Мы реализуем проекты по всей стране и по всему миру, создавая
            уникальные решения, которые превращают мечты в реальность без
            использования волшебной палочки. Наше основное внимание уделяется
            структурному дизайну, в то время как дизайн интерьера направлен
            на создание уютной и вдохновляющей внутренней атмосферы.
          </p>
          <div className={styles.info}>
            <div
              ref={(el) => setRef(el, 0)}
              className={clsx("h1", styles.line, {
                [styles.active]: activeIndexes.includes(0),
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
                [styles.active]: activeIndexes.includes(1),
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
                [styles.active]: activeIndexes.includes(2),
              })}
            >
              3000+
              <span className="h4">
                построенных <br /> квадратных метров
              </span>
            </div>
          </div>
        </div>
        <Image className={styles.image} src={picture} alt="" />
      </div>
    </section>
  );
};

export default Mission;
