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

const Principles = ({ values }) => {
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

  if (!values) return null;

  return (
    <section className={clsx(styles.container)}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наши ценности ]</span>
            <h2 className={clsx("h2", styles.title)}>{values.section.title}</h2>
          </div>
        </div>

        <div className={styles.content}>
          {values.values.map((elem, index) => (
            <div
              key={index}
              ref={(el) => setRef(el, index)}
              className={clsx(styles.item, {
                [styles.active]: activeIndex === index,
                [styles.thin]: index % 6 === 4,
                [styles.wide]:
                  index % 6 === 1 || index % 6 === 3 || index % 6 === 5,
              })}
            >
              <div className={styles.bg}>
                <Image
                  src={`${process.env.STORE_URL}/storage/${elem.photo_path}`}
                  alt=""
                  width={490}
                  height={200}
                />
              </div>
              <div className={clsx("h4", styles.name)}>{elem.title}</div>
              <div className={clsx("body-1", styles.text)}>
                {elem.description.replaceAll("<p>", "").replaceAll("</p>", "")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
