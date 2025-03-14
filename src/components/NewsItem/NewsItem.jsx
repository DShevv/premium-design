"use client";
import styles from "./NewsItem.module.scss";
import { AnimatePresence, motion as m, useInView } from "motion/react";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import Link from "next/link";
import { slugifyWithOpts } from "@/utils/helper";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NewsItem = ({ item }) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [isHover, setIsHover] = useState(false);

  return (
    <m.div
      layout
      layoutId={item.title}
      transition={{
        duration: 0.3,
        type: "tween",
        ease: "linear",
      }}
    >
      <m.a
        onClick={(e) => {
          e.preventDefault();
          router.push("/contact");
        }}
        layout
        ref={ref}
        className={clsx(styles.item, styles.desktop)}
        href={`/our-projects/${slugifyWithOpts(item.title)}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <AnimatePresence mode="popLayout">
          {isHover && (
            <m.div
              layout
              className={styles.bg}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "linear",
              }}
            >
              <Image src={item.image} alt="" />
            </m.div>
          )}
          {isHover && (
            <m.div
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "linear",
              }}
              key="tag"
              layout
              className={clsx("body-2", styles.tag)}
            >
              {item.tag}
            </m.div>
          )}

          <m.div key={"name"} layout className={clsx("h4", styles.name)}>
            {item.title}
          </m.div>
          <m.div key={"date"} layout className={clsx("body-3", styles.date)}>
            {item.date}
          </m.div>
          <m.div
            key={"text"}
            layout
            className={clsx(
              { ["body-1-regular"]: isHover, ["body-1"]: !isHover },
              styles.text
            )}
          >
            {item.text}
          </m.div>

          <InlineButton key="button" className={styles.button}>
            Подробнее
          </InlineButton>
        </AnimatePresence>
      </m.a>
      <m.a
        layout
        transition={{
          duration: 0.3,
          type: "tween",
          ease: "linear",
        }}
        onClick={(e) => {
          e.preventDefault();
          router.push("/contact");
        }}
        ref={ref}
        className={clsx(styles.item, styles.mobile, {
          [styles.inView]: isInView,
        })}
        whileHover={"hover"}
        animate={isInView ? "hover" : "rest"}
        initial={"rest"}
        href={`/our-projects/${slugifyWithOpts(item.title)}`}
      >
        <AnimatePresence mode="popLayout">
          {isInView && (
            <m.div
              layout
              className={styles.bg}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "linear",
              }}
            >
              <Image src={item.image} alt="" />
            </m.div>
          )}
          {isInView && (
            <m.div
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "linear",
              }}
              key="tag"
              layout
              className={clsx("body-2", styles.tag)}
            >
              {item.tag}
            </m.div>
          )}

          <m.div key={"name"} layout className={clsx("h4", styles.name)}>
            {item.title}
          </m.div>
          <m.div key={"date"} layout className={clsx("body-3", styles.date)}>
            {item.date}
          </m.div>
          <m.div
            key={"text"}
            layout
            className={clsx(
              { ["body-1-regular"]: isHover, ["body-1"]: !isHover },
              styles.text
            )}
          >
            {item.text}
          </m.div>

          <InlineButton key="button" className={styles.button}>
            Подробнее
          </InlineButton>
        </AnimatePresence>
      </m.a>
    </m.div>
  );
};

export default NewsItem;
