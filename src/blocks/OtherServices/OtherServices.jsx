"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./OtherServices.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import service1 from "@/assets/images/services-1.png";

const OtherServices = () => {
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
    <div className={styles.side}>
      <div className={clsx("h3", styles.sideTitle)}>другие услуги</div>
      <div className={styles.items}>
        <Link
          href={"/services/design-project"}
          className={clsx(styles.service, {
            [styles.activeService]: activeIndex === 0,
          })}
          ref={(el) => setRef(el, 0)}
          data-index={0}
        >
          <div className={styles.serviceBg}>
            <Image src={service1} alt="" />
          </div>
          <div className={styles.caption}>
            <span className="h4">Дизайн проект</span>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </div>
        </Link>
        <Link
          href={"/services/design-complect"}
          className={clsx(styles.service, {
            [styles.activeService]: activeIndex === 1,
          })}
          data-index={1}
          ref={(el) => setRef(el, 1)}
        >
          <div className={styles.serviceBg}>
            <Image src={service1} alt="" />
          </div>
          <div className={styles.caption}>
            <span className="h4">Дизайн проект с комплектацией</span>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </div>
        </Link>
        <Link
          href={"/services/design"}
          className={clsx(styles.service, {
            [styles.activeService]: activeIndex === 2,
          })}
          data-index={2}
          ref={(el) => setRef(el, 2)}
        >
          <div className={styles.serviceBg}>
            <Image src={service1} alt="" />
          </div>
          <div className={styles.caption}>
            <span className="h4">
              Ремонт под ключ (с дизайн проектом заказчика)
            </span>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </div>
        </Link>
        <Link
          href={"/services/design"}
          className={clsx(styles.service, {
            [styles.activeService]: activeIndex === 3,
          })}
          data-index={3}
          ref={(el) => setRef(el, 3)}
        >
          <div className={styles.serviceBg}>
            <Image src={service1} alt="" />
          </div>
          <div className={styles.caption}>
            <span className="h4">
              Ремонт под ключ с комплектацией (с дизайн проектом заказчика)
            </span>

            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OtherServices;
