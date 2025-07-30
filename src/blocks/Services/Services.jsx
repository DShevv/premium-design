"use client";
import Image from "next/image";
import styles from "./Services.module.scss";
import clsx from "clsx";
import picture1 from "@/assets/images/slider-1.png";
import picture2 from "@/assets/images/slider-2.png";
import picture3 from "@/assets/images/slider-3.png";
import picture4 from "@/assets/images/slider-4.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";
import { slugifyWithOpts } from "@/utils/helper";

const Services = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const setRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let indexToActivate = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            indexToActivate = Number(entry.target.dataset.index);
          }
        });

        setActiveIndex(indexToActivate);
      },
      {
        root: null,
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0.9, 1],
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container}>
      {/* {items &&
        items.splice(0, 4).map((item, index) => (
          <div
            key={item.id}
            className={clsx(styles.item, {
              [styles.active]: activeIndex === index,
            })}
            ref={(el) => setRef(el, index)}
            data-index={index}
          >
            <div className={styles.bg}>
              <Image
                src={`${process.env.STORE_URL}/${item.photo_path}`}
                alt={item.title}
                width={1024}
                height={768}
              />
            </div>
            <div className={clsx("h3", styles.title)}>{item.title}</div>

            <CircleButton
              type="link"
              href={`/services/${slugifyWithOpts(item.title)}_${item.id}`}
              centered={true}
              className={styles.button}
            >
              {item.title}
            </CircleButton>
          </div>
        ))} */}

      <div
        className={clsx(styles.item, {
          [styles.active]: activeIndex === 1,
        })}
        ref={(el) => setRef(el, 1)}
        data-index={1}
      >
        <div className={styles.bg}>
          <Image src={picture1} alt="" />
        </div>
        <div className={clsx("h3", styles.title)}>Дизайн проект</div>

        <CircleButton
          type="link"
          href={`/services/design-project`}
          centered={true}
          className={styles.button}
        >
          Дизайн проект
        </CircleButton>
      </div>

      <div
        className={clsx(styles.item, {
          [styles.active]: activeIndex === 1,
        })}
        ref={(el) => setRef(el, 1)}
        data-index={1}
      >
        <div className={styles.bg}>
          <Image src={picture2} alt="" />
        </div>
        <div className={clsx("h3", styles.title)}>
          Дизайн проект с комплектацией
        </div>

        <CircleButton
          type="link"
          href={`/services/design-complect`}
          centered={true}
          className={styles.button}
        >
          Дизайн проект с комплектацией
        </CircleButton>
      </div>

      <div
        className={clsx(styles.item, {
          [styles.active]: activeIndex === 2,
        })}
        ref={(el) => setRef(el, 2)}
        data-index={2}
      >
        <div className={styles.bg}>
          <Image src={picture3} alt="" />
        </div>
        <div className={clsx("h3", styles.title)}>Ремонт под ключ</div>

        <CircleButton
          type="link"
          href={`/services/rebuild-project`}
          centered={true}
          className={styles.button}
        >
          Ремонт под ключ
        </CircleButton>
      </div>

      <div
        className={clsx(styles.item, {
          [styles.active]: activeIndex === 3,
        })}
        ref={(el) => setRef(el, 3)}
        data-index={3}
      >
        <div className={styles.bg}>
          <Image src={picture4} alt="" />
        </div>
        <div className={clsx("h3", styles.title)}>
          Ремонт под ключ с комплектацией
        </div>

        <CircleButton
          type="link"
          href={`/services/rebuild-complect`}
          centered={true}
          className={styles.button}
        >
          Ремонт под ключ с комплектацией
        </CircleButton>
      </div>
    </section>
  );
};

export default Services;
