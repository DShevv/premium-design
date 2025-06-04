"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./OtherServices.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import { slugifyWithOpts } from "@/utils/helper";

const OtherServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/v1/additional-services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

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
        {services.map((item, index) => (
          <Link
            href={`/services/${slugifyWithOpts(item.title)}_${item.id}`}
            className={clsx(styles.service, {
              [styles.activeService]: activeIndex === index,
            })}
            ref={(el) => setRef(el, index)}
            data-index={index}
            key={item.id}
          >
            <div className={styles.serviceBg}>
              <Image
                src={`${process.env.STORE_URL}/${item.photo_path}`}
                alt={item.title}
                width={1024}
                height={768}
              />
            </div>
            <div className={styles.caption}>
              <span className="h4">{item.title}</span>
              <InlineButton className={styles.more}>Подробнее</InlineButton>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
