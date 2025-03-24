import clsx from "clsx";
import styles from "./StepBlock.module.scss";
import { AnimatePresence, motion as m } from "motion/react";
import Image from "next/image";

const AnimatedImage = m.create(Image);

const variants = {
  initial: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const variantsReversed = {
  initial: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const variantsText = {
  initial: {
    opacity: 0,
    y: "-50%",
    x: 50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  animate: {
    opacity: 1,
    y: "-50%",
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const variantsTextReversed = {
  initial: {
    opacity: 0,
    y: "-50%",
    x: -50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  animate: {
    opacity: 1,
    y: "-50%",
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const StepBlock = ({ image, subtitle, title, children, isReversed }) => {
  return (
    <section
      className={clsx(styles.container, { [styles.reversed]: isReversed })}
    >
      <div className={styles.wrapper}>
        <AnimatedImage
          viewport={{ once: true }}
          variants={isReversed ? variantsReversed : variants}
          initial="initial"
          whileInView="animate"
          src={image}
          alt=""
          className={styles.image}
        />
        <m.div
          className={clsx(styles.caption, styles.desktop)}
          viewport={{ once: true }}
          variants={isReversed ? variantsTextReversed : variantsText}
          initial="initial"
          whileInView="animate"
        >
          <div className={clsx("body-1", styles.subtitle)}>{subtitle}</div>
          <h2 className={clsx("h2", styles.title)}>{title}</h2>
          <p className={"body-1-regular"}>{children}</p>
        </m.div>
        <m.div
          className={clsx(styles.caption, styles.mobile)}
          viewport={{ once: true }}
          variants={isReversed ? variants : variantsReversed}
          initial="initial"
          whileInView="animate"
        >
          <div className={clsx("body-1", styles.subtitle)}>{subtitle}</div>
          <h2 className={clsx("h2", styles.title)}>{title}</h2>
          <p className={"body-1-regular"}>{children}</p>
        </m.div>
      </div>
    </section>
  );
};

export default StepBlock;
