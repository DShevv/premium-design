"use client";
import Image from "next/image";
import styles from "./ProgressHistory.module.scss";
import clsx from "clsx";
import pic from "@/assets/images/progress.png";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const ProgressHistory = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);
  const thumbRef = useRef(null);

  const setRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!thumbRef.current) return;

      const thumbRect = thumbRef.current.getBoundingClientRect();

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const circle = item.querySelector(`.${styles.circle}`);
        if (!circle) return;

        const circleRect = circle.getBoundingClientRect();

        // Проверяем, пересекается ли .thumb с .circle
        if (
          thumbRect.top < circleRect.bottom &&
          thumbRect.bottom > circleRect.top
        ) {
          setActiveIndex(index);
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
            <span>[ О нас ]</span>
            <h2 className={clsx("h2", styles.title)}>
              История нашего развития
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div
              ref={(el) => setRef(el, 0)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 0,
              })}
            >
              <div className={clsx("h4", styles.year)}>2005</div>
              <div className={styles.line}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.info}>
                <div className={clsx("h3", styles.name)}>создание компании</div>
                <div className={styles.infoContainer}>
                  <Image src={pic} alt="" />
                  <div className={clsx("body-1", styles.text)}>
                    В 2005 году трое единомышленников, объединенных страстью
                    к дизайну и желанием создавать уникальные интерьеры, приняли
                    решение о создании собственной компании. Их цель состояла
                    в том, чтобы предложить клиентам не только функциональные,
                    но и эстетически совершенные решения для их жилищ
                    и коммерческих пространств.
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={(el) => setRef(el, 2)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 2,
              })}
            >
              <div className={clsx("h4", styles.year)}>2005</div>
              <div className={styles.line}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.info}>
                <div className={clsx("h3", styles.name)}>создание компании</div>
                <div className={styles.infoContainer}>
                  <Image src={pic} alt="" />
                  <div className={clsx("body-1", styles.text)}>
                    В 2005 году трое единомышленников, объединенных страстью
                    к дизайну и желанием создавать уникальные интерьеры, приняли
                    решение о создании собственной компании. Их цель состояла
                    в том, чтобы предложить клиентам не только функциональные,
                    но и эстетически совершенные решения для их жилищ
                    и коммерческих пространств.
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={(el) => setRef(el, 4)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 4,
              })}
            >
              <div className={clsx("h4", styles.year)}>2005</div>
              <div className={styles.line}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.info}>
                <div className={clsx("h3", styles.name)}>создание компании</div>
                <div className={styles.infoContainer}>
                  <Image src={pic} alt="" />
                  <div className={clsx("body-1", styles.text)}>
                    В 2005 году трое единомышленников, объединенных страстью
                    к дизайну и желанием создавать уникальные интерьеры, приняли
                    решение о создании собственной компании. Их цель состояла
                    в том, чтобы предложить клиентам не только функциональные,
                    но и эстетически совершенные решения для их жилищ
                    и коммерческих пространств.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thumb} ref={thumbRef}></div>

          <div className={styles.right}>
            <div
              ref={(el) => setRef(el, 1)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 1,
              })}
            >
              <div className={clsx("h4", styles.year)}>2005</div>
              <div className={styles.line}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.info}>
                <div className={clsx("h3", styles.name)}>создание компании</div>
                <div className={styles.infoContainer}>
                  <Image src={pic} alt="" />
                  <div className={clsx("body-1", styles.text)}>
                    В 2005 году трое единомышленников, объединенных страстью
                    к дизайну и желанием создавать уникальные интерьеры, приняли
                    решение о создании собственной компании. Их цель состояла
                    в том, чтобы предложить клиентам не только функциональные,
                    но и эстетически совершенные решения для их жилищ
                    и коммерческих пространств.
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={(el) => setRef(el, 3)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === 3,
              })}
            >
              <div className={clsx("h4", styles.year)}>2005</div>
              <div className={styles.line}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.info}>
                <div className={clsx("h3", styles.name)}>создание компании</div>
                <div className={styles.infoContainer}>
                  <Image src={pic} alt="" />
                  <div className={clsx("body-1", styles.text)}>
                    В 2005 году трое единомышленников, объединенных страстью
                    к дизайну и желанием создавать уникальные интерьеры, приняли
                    решение о создании собственной компании. Их цель состояла
                    в том, чтобы предложить клиентам не только функциональные,
                    но и эстетически совершенные решения для их жилищ
                    и коммерческих пространств.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressHistory;
