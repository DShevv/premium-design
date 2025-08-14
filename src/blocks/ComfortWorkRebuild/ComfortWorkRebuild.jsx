"use client";
import Image from "next/image";
import styles from "./ComfortWorkRebuild.module.scss";
import clsx from "clsx";
import pic1 from "@/assets/images/rebuild-complect/1.jpg";
import pic2 from "@/assets/images/rebuild-complect/2.jpg";
import pic3 from "@/assets/images/rebuild-complect/3.jpg";
import pic4 from "@/assets/images/rebuild-complect/4.jpg";
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
            <div className={clsx("h4", styles.name)}>Дизайн</div>
            <div className={clsx("body-1", styles.text)}>
              Индивидуальный проект, сочетающий эстетику и удобство. Планировки,
              визуализации, подбор материалов.
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
            <div className={clsx("h4", styles.name)}>Дизайн</div>
            <div className={clsx("body-1", styles.text)}>
              Индивидуальный проект, сочетающий эстетику и удобство. Планировки,
              визуализации, подбор материалов.
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
            <div className={clsx("h4", styles.name)}>Ремонт</div>
            <div className={clsx("body-1", styles.text)}>
              Качественно, по графику, без сюрпризов. Работаем по согласованному
              проекту с чётким контролем.
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
            <div className={clsx("h4", styles.name)}>Комплектация</div>
            <div className={clsx("body-1", styles.text)}>
              Всё закупим и доставим: сантехника, мебель, техника, свет,
              текстиль. Квартира полностью готова к жизни.
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
            <div className={clsx("h4", styles.name)}>Гарантии в одном лице</div>
            <div className={clsx("body-1", styles.text)}>
              Только мы ведём проект от начала до конца. Мы отвечаем за
              коммуникацию, сроки, качество и результат. Это не просто удобно —
              это Ваша гарантия того, что всё будет выполнено, как вы ожидали.
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
            <div className={clsx("h4", styles.name)}>Гарантии в одном лице</div>
            <div className={clsx("body-1", styles.text)}>
              Только мы ведём проект от начала до конца. Мы отвечаем за
              коммуникацию, сроки, качество и результат. Это не просто удобно —
              это Ваша гарантия того, что всё будет выполнено, как вы ожидали.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortWorkRebuild;
