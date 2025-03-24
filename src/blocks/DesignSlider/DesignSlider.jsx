"use client";
import clsx from "clsx";
import styles from "./DesignSlider.module.scss";
import { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import Image from "next/image";
import image1 from "@/assets/images/design-slider.jpg";
import image2 from "@/assets/images/hero.png";
import image3 from "@/assets/images/hero-light.png";

const AnimatedImage = m.create(Image);

const stepsData = [
  {
    title: "Обмеры",
    text: `Мы выезжаем на объект для проведения тщательного анализа, выполнения точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
  },
  {
    title: "Работа",
    text: `Мы выезжаем на  для проведения тщательного анализа, выполнения точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
  },
  {
    title: "Контроль качества",
    text: `Мы выезжаем на объект для  тщательного анализа,  этапов проектирования и реализации.`,
  },
];

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

const DesignSlider = () => {
  const [step, setStep] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Этапы работы ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Как строится наша работа
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
            <Image
              src={step === 0 ? image1 : step === 1 ? image2 : image3}
              alt=""
              className={styles.bg}
            />
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
                key={stepsData[step].title}
              >
                {stepsData[step].title}
              </m.div>
              <m.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={clsx("body-1")}
                key={stepsData[step].text}
              >
                {stepsData[step].text}
              </m.div>
            </m.div>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default DesignSlider;
