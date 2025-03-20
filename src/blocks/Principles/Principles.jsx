"use client";
import Image from "next/image";
import styles from "./Principles.module.scss";
import clsx from "clsx";
import pic1 from "@/assets/images/portfolio3.png";
import pic2 from "@/assets/images/portfolio5.png";
import pic3 from "@/assets/images/works-2.png";
import pic4 from "@/assets/images/works-1.png";
import pic5 from "@/assets/images/news.png";
import pic6 from "@/assets/images/about.png";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const Principles = () => {
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
    <section className={clsx(styles.container)}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наши ценности ]</span>
            <h2 className={clsx("h2", styles.title)}>
              В своей работе мы следуем 6 принципам
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <div
            ref={(el) => setRef(el, 0)}
            className={clsx(styles.item, {
              [styles.active]: activeIndex === 0,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic1} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Индивидуальный подход</div>
            <div className={clsx("body-1", styles.text)}>
              Мы создаем уникальный интерьер, учитывая все желания и потребности
              заказчика, а зачастую и с прогнозом его развития.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 1)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 1,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic2} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>
              Функциональность и комфорт
            </div>
            <div className={clsx("body-1", styles.text)}>
              Мы уделяем особое внимание функциональности интерьера, создавая
              практичные и удобные решения для жилья.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 2)}
            className={clsx(styles.item, {
              [styles.active]: activeIndex === 2,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic3} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>
              Долговечность и качество
            </div>
            <div className={clsx("body-1", styles.text)}>
              Мы используем только высококачественные материалы и передовые
              технологии, чтобы гарантировать долговечность наших решений.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 3)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 3,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic4} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Комплексный подход</div>
            <div className={clsx("body-1", styles.text)}>
              Мы предлагаем полный цикл работ, включая разработку проекта,
              выполнение ремонтных работ, доставку материалов и управление
              логистикой.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 4)}
            className={clsx(styles.item, styles.thin, {
              [styles.active]: activeIndex === 4,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic5} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Внимание к деталям</div>
            <div className={clsx("body-1", styles.text)}>
              Мы придаем большое значение мелочам, которые делают интерьер
              уникальным и особенным.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 5)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 5,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic6} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Современные тенденции</div>
            <div className={clsx("body-1", styles.text)}>
              Мы следим за последними тенденциями в дизайне и архитектуре,
              интегрируя их в наши проекты.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
