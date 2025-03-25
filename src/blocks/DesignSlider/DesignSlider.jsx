"use client";
import clsx from "clsx";
import styles from "./DesignSlider.module.scss";
import { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import Image from "next/image";

const AnimatedImage = m.create(Image);

const variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const DesignSlider = ({ title, items }) => {
  const [step, setStep] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Этапы работы ]</span>
            <h2 className={clsx("h2", styles.title)}>
              {title ? title : "Как строится наша работа"}
            </h2>
          </div>
        </div>
      </div>

      <m.div className={styles.steps}>
        <AnimatePresence layout mode="sync">
          <m.div
            key={step}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className={styles.bgWrapper}
          >
            <Image src={items[step].image} alt="" className={styles.bg} />
          </m.div>
        </AnimatePresence>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons}>
            <button
              className={clsx(styles.button, "h4", {
                [styles.active]: step === 0,
              })}
              onClick={() => setStep(0)}
            >
              Этап 1
            </button>
            <button
              className={clsx(styles.button, "h4", {
                [styles.active]: step === 1,
              })}
              onClick={() => setStep(1)}
            >
              Этап 2
            </button>
            <button
              className={clsx(styles.button, "h4", {
                [styles.active]: step === 2,
              })}
              onClick={() => setStep(2)}
            >
              Этап 3
            </button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.innerContainer}>
            <m.div layout className={styles.text}>
              <m.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={clsx("h3", styles.textTitle)}
                key={items[step].title}
              >
                {items[step].title}
              </m.div>
              <m.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={clsx("body-1")}
                key={items[step].text}
              >
                {items[step].text}
              </m.div>
              {items[step].time && (
                <m.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={clsx("body-1-regular", styles.time)}
                  key={items[step].time}
                >
                  {items[step].time}
                </m.div>
              )}
            </m.div>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default DesignSlider;
