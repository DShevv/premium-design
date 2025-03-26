"use client";
import Image from "next/image";
import styles from "./DreamRework.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/steps1.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";

const DreamRework = () => {
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
      <div className={clsx("body-1", styles.caption, styles.laptop)}>
        <span>[ Ремонт ]</span>
        <h2 className={clsx("h2", styles.title)}>Поможем с ремонтом мечты</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={clsx("body-1", styles.caption, styles.desktop)}>
            <span>[ Ремонт ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Поможем с ремонтом мечты{" "}
            </h2>
          </div>

          <p className={clsx("body-1")}>
            Мы предлагаем полный цикл профессиональных услуг: от разработки
            концептуальных решений и детализированного дизайн-проекта
            с 3D-визуализацией до комплексного сопровождения на всех этапах
            строительных работ. Наши эксперты осуществляют авторский надзор,
            проводят технические консультации, подбирают материалы и выполняют
            поэтапный контроль качества, что позволяет реализовать проектную
            концепцию без потери эстетики и функциональности, обеспечивая
            идеальное соответствие задуманному образу.
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

export default DreamRework;
