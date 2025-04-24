"use client";
import Image from "next/image";
import styles from "./History.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/history.png";
import pictureSmall from "@/assets/images/history-small.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";
import { parseHistoryContent } from "@/utils/parseHistoryContent";

const History = ({ info }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const itemRefs = useRef([]);

  const parsedContent = parseHistoryContent(info.description);

  const setRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  if (!info) return null;

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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ О компании ]</span>
            <h2 className={clsx("h2", styles.title)}>{info.title}</h2>
          </div>
          <CircleButton
            type="link"
            dark={true}
            className={"desktop"}
            href={"/about"}
          >
            Подробнее о компании
          </CircleButton>
        </div>

        <div className={styles.content}>
          <Image
            className={styles.image}
            src={info.photo_path}
            alt=""
            width={802}
            height={668}
          />
          <div className={styles.text}>
            {parsedContent.map((item, index) => (
              <p key={index} className={clsx(item.type, styles.text)}>
                {item.content}
              </p>
            ))}

            <div className={styles.info}>
              {info.stats.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => setRef(el, index)}
                  className={clsx("h1", styles.line, {
                    [styles.active]: activeIndexes.includes(index),
                  })}
                >
                  {item.value}
                  <span className="h4">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
