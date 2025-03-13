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
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const ProjectItem = ({ item }) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <>
      <m.a
        onClick={(e) => {
          e.preventDefault();
          router.push("/contact");
        }}
        ref={ref}
        className={clsx(styles.item, styles.desktop)}
        whileHover={"hover"}
        animate={"rest"}
        initial={"rest"}
        href={`/our-projects/${slugifyWithOpts(item.title)}`}
      >
        <Image src={item.image} alt="" />

        <m.div className={styles.caption} variants={itemVariants}>
          <div className={clsx("body-2", styles.tag)}>{item.tag}</div>
          <div className={clsx("h4", styles.name)}>{item.title}</div>
          <InlineButton className={styles.button}>Подробнее</InlineButton>
        </m.div>
      </m.a>
      <m.a
        onClick={(e) => {
          e.preventDefault();
          router.push("/contact");
        }}
        ref={ref}
        className={clsx(styles.item, styles.mobile)}
        whileHover={"hover"}
        animate={isInView ? "hover" : "rest"}
        initial={"rest"}
        href={`/our-projects/${slugifyWithOpts(item.title)}`}
      >
        <Image src={item.image} alt="" />

        <m.div className={styles.caption} variants={itemVariants}>
          <div className={clsx("body-2", styles.tag)}>{item.tag}</div>
          <div className={clsx("h4", styles.name)}>{item.title}</div>
          <InlineButton className={styles.button}>Подробнее</InlineButton>
        </m.div>
      </m.a>
    </>
  );
};

export default ProjectItem;
