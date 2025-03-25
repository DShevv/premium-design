"use client";
import Image from "next/image";
import styles from "./ComfortWorkRebuild.module.scss";
import clsx from "clsx";
import pic1 from "@/assets/images/rebuild1.png";
import pic2 from "@/assets/images/portfolio4.png";
import pic3 from "@/assets/images/rebuild2.png";
import pic4 from "@/assets/images/works-3.png";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const ComfortWorkRebuild = () => {
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
            <span>[ Наши преимущества ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Мы работаем для вашего комфорта
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <div
            ref={(el) => setRef(el, 0)}
            className={clsx(styles.item, styles.desktop, styles.wide, {
              [styles.active]: activeIndex === 0,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic1} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Закупка материалов</div>
            <div className={clsx("body-1", styles.text)}>
              Закупкой и доставкой всех материалов занимается специалист
              по снабжению, который отвечает за графики закупки и коммерческие
              предложения.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 0)}
            className={clsx(styles.item, styles.laptop, {
              [styles.active]: activeIndex === 0,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic1} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Закупка материалов</div>
            <div className={clsx("body-1", styles.text)}>
              Закупкой и доставкой всех материалов занимается специалист
              по снабжению, который отвечает за графики закупки и коммерческие
              предложения.
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
            <div className={clsx("h4", styles.name)}>Подробная смета</div>
            <div className={clsx("body-1", styles.text)}>
              Перед началом ремонта составляется смета с точными объемами
              и расценками. После согласования готовится смета на материалы
              и графики закупки.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 2)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 2,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic3} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Контроль качества</div>
            <div className={clsx("body-1", styles.text)}>
              Инженер контролирует качество и технический аспект проекта.
              Клиенты могут общаться с ним для разъяснений и демонстрации
              качества работ.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 3)}
            className={clsx(styles.item, styles.desktop, styles.wide, {
              [styles.active]: activeIndex === 3,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic4} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Коммуникации</div>
            <div className={clsx("body-1", styles.text)}>
              Все коммуникации со строителями ведет прораб, инженер и дизайнер.
              Инженер также общается с ТЭС/ЖЭС, минимизируя время клиента.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 3)}
            className={clsx(styles.item, styles.laptop, {
              [styles.active]: activeIndex === 3,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic4} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Коммуникации</div>
            <div className={clsx("body-1", styles.text)}>
              Все коммуникации со строителями ведет прораб, инженер и дизайнер.
              Инженер также общается с ТЭС/ЖЭС, минимизируя время клиента.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortWorkRebuild;
