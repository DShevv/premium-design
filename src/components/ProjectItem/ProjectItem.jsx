"use client";
import styles from "./ProjectItem.module.scss";
import { motion as m, useInView } from "motion/react";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import Link from "next/link";
import { slugifyWithOpts } from "@/utils/helper";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";

const itemVariants = {
  rest: {
    scaleX: 0,
    opacity: 0,
    transformOrigin: "right center",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const ProjectItem = ({ item, className }) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <>
      <div className={clsx(className, styles.desktop)}>
        <m.a
          onClick={(e) => {
            e.preventDefault();
            router.push(`/portfolio/${slugifyWithOpts(item.title)}_${item.id}`);
          }}
          ref={ref}
          className={clsx(styles.item, styles.desktop)}
          whileHover={"hover"}
          animate={"rest"}
          initial={"rest"}
          href={`/portfolio/${slugifyWithOpts(item.title)}_${item.id}`}
        >
          <Image
            src={`${process.env.STORE_URL}/${item.image}`}
            alt=""
            height={760}
            width={400}
          />

          <m.div className={styles.caption} variants={itemVariants}>
            <div className={clsx("body-2", styles.tag)}>{item.tag}</div>
            <div className={clsx("h4", styles.name)}>{item.title}</div>
            <InlineButton className={styles.button}>Подробнее</InlineButton>
          </m.div>
        </m.a>
      </div>
      <div className={clsx(className, styles.mobile)}>
        <m.a
          onClick={(e) => {
            e.preventDefault();
            router.push(`/portfolio/${slugifyWithOpts(item.title)}_${item.id}`);
          }}
          ref={ref}
          className={clsx(styles.item, styles.mobile)}
          whileHover={"hover"}
          animate={isInView ? "hover" : "rest"}
          initial={"rest"}
          href={`/portfolio/${slugifyWithOpts(item.title)}_${item.id}`}
        >
          <Image
            src={`${process.env.STORE_URL}/${item.image}`}
            alt=""
            height={760}
            width={400}
          />

          <m.div className={styles.caption} variants={itemVariants}>
            <div className={clsx("body-2", styles.tag)}>{item.tag}</div>
            <div className={clsx("h4", styles.name)}>{item.title}</div>
            <InlineButton className={styles.button}>Подробнее</InlineButton>
          </m.div>
        </m.a>
      </div>
    </>
  );
};

export default ProjectItem;
