"use client";
import Image from "next/image";
import styles from "./Mission.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/portfolio4.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";

const Mission = ({ info, direction }) => {
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
        <span>[ {info.tag} ]</span>
        <h2 className={clsx("h2", styles.title)}>{info.title}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.text} style={{ order: direction ? "unset" : 1 }}>
          <div className={clsx("body-1", styles.caption, styles.desktop)}>
            <span>[ {info.tag} ]</span>
            <h2 className={clsx("h2", styles.title)}>{info.title}</h2>
          </div>

          <p className={clsx("body-1")}>
            {info.description.replaceAll("<p>", "").replaceAll("</p>", "")}
          </p>
          <div className={styles.info}>
            {info.stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => setRef(el, index)}
                className={clsx("h1", styles.line, {
                  [styles.active]: activeIndexes.includes(index),
                })}
              >
                {stat.value}
                <span className="h4">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
        <Image
          className={styles.image}
          src={`${process.env.STORE_URL}/storage/${info.photo_path}`}
          alt=""
          width={802}
          height={872}
        />
      </div>
    </section>
  );
};

export default Mission;
