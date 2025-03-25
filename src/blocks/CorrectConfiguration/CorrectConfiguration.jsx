"use client";
import Image from "next/image";
import styles from "./CorrectConfiguration.module.scss";
import clsx from "clsx";
import pic1 from "@/assets/images/config1.png";
import pic2 from "@/assets/images/portfolio3.png";
import pic3 from "@/assets/images/works-2.png";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const CorrectConfiguration = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);
  const thumbRef = useRef(null);

  const setRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "visible";
    const handleScroll = () => {
      if (!thumbRef.current) return;

      const thumbRect = thumbRef.current.getBoundingClientRect();

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const circle = item.querySelector(`.${styles.circle}`);
        if (!circle) return;

        const circleRect = circle.getBoundingClientRect();

        if (
          thumbRect.top < circleRect.bottom &&
          thumbRect.bottom > circleRect.top
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <section className={clsx(styles.container)}>
      <div className={styles.wrapper}>
        <div className={clsx(styles.header, styles.mobile)}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Важность правильной комплектации ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Что обеспечивает правильная комплектация
            </h2>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={clsx(styles.header, styles.desktop)}>
              <div className={clsx("body-1", styles.caption)}>
                <span>[ Важность правильной комплектации ]</span>
                <h2 className={clsx("h2", styles.title)}>
                  Что обеспечивает правильная комплектация
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.thumb} ref={thumbRef}></div>

          <div className={styles.right}>
            <div
              ref={(el) => setRef(el, 0)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 0,
              })}
            >
              <div className={styles.circle}></div>
              <Image src={pic1} alt="" />
              <div className={clsx("h4", styles.text)}>
                Гармоничный и комфортный интерьер
              </div>
            </div>
            <div
              ref={(el) => setRef(el, 1)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 1,
              })}
            >
              <div className={styles.circle}></div>
              <Image src={pic2} alt="" />
              <div className={clsx("h4", styles.text)}>
                Оптимальное использование пространства
              </div>
            </div>
            <div
              ref={(el) => setRef(el, 2)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 2,
              })}
            >
              <div className={styles.circle}></div>
              <Image src={pic3} alt="" />
              <div className={clsx("h4", styles.text)}>
                Экономию времени и средств заказчика
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorrectConfiguration;
