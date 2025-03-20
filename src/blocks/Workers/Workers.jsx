"use client";
import Image from "next/image";
import styles from "./Workers.module.scss";
import clsx from "clsx";
import emp1 from "@/assets/images/emp1.png";
import emp2 from "@/assets/images/emp2.png";
import emp3 from "@/assets/images/emp3.png";
import emp4 from "@/assets/images/emp4.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion as m } from "motion/react";

const workers = [
  {
    name: "Алексей Алексеев",
    image: emp1,
    position: "Главный архитектор",
    experience:
      "Опыт в профессии составляет уже 15 лет, и за это время Алексей успешно реализовал более 100 архитектурных проектов. Каждый из них является подтверждением профессионализма и способности создавать уникальные и функциональные пространства, соответствующие высоким стандартам наших клиентов.",
    educ: "Окончил МАРХИ (Московский Архитектурный Институт) по специальности «Дизайн архитектурной среды».",
  },
  {
    name: "Анна Иванова",
    image: emp2,
    position: "Главный Aрхитектор",
    experience:
      "Опыт в профессии составляет уже 15 лет, и за это время Алексей успешно реализовал более 100 архитектурных проектов. Каждый из них является подтверждением профессионализма и способности создавать уникальные и функциональные пространства, соответствующие высоким стандартам наших клиентов.",
    educ: "Окончил МАРХИ (Московский Архитектурный Институт) по специальности «Диайн архитектурной среды».",
  },
  {
    name: "Николай Иванов",
    image: emp3,
    position: "Архитектор",
    experience:
      "Опыт в профессии составляет уже 15 лет, и за это время Алексей успешно  более 100 архитектурных проектов. Каждый из них является подтверждением профессионализма и способности создавать уникальные и функциональные пространства, соответствующие высоким стандартам наших клиентов.",
    educ: "Окончил МАРХИ (Московский Архитектурный Институт) по специальности «Дизайн архитектурной среды».",
  },
  {
    name: "Анастасия Алексеева",
    image: emp4,
    position: "Главный",
    experience:
      "Опыт в профессии составляет уже 15 лет, и за это время Алексей уешно реализовал более 100 архитектурных проектов. Каждый из них является подтверждением профессионализма и способности создавать уникальные и функциональные пространства, соответствующие высоким стандартам наших клиентов.",
    educ: "Окончил МАРХИ (Московский Архитектурный Институт) по специальности «Дизайн архитектурной среды».",
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
const Workers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
          const itemCenterY = rect.top + rect.height / 2.4;

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
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наша команда ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Профессионалы своего дела
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <m.div layout className={styles.photos}>
            <LayoutGroup>
              {workers.map((elem, index) => (
                <m.div
                  ref={(el) => setRef(el, index)}
                  layout
                  key={index}
                  className={clsx(styles.item, {
                    [styles.active]: index === activeIndex,
                  })}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Image
                    src={elem.image}
                    alt={elem.name}
                    width={150}
                    height={150}
                  />
                  <m.div className={clsx("body-1-regular", styles.tag)}>
                    {elem.name}
                  </m.div>

                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <m.div
                        layout
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: "1000px" }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{
                          duration: 0.8,
                          type: "tween",
                          ease: "easeInOut",
                        }}
                        className={styles.itemInfo}
                      >
                        <div className={styles.head}>
                          <div className={clsx("h4", styles.name)}>
                            {elem.name}
                          </div>
                          <div className={clsx("body-3", styles.position)}>
                            {elem.position}
                          </div>
                        </div>
                        <div className={clsx("body-1", styles.text)}>
                          <p>{elem.experience}</p>
                          <p>{elem.educ}</p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.div>
              ))}
            </LayoutGroup>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Workers;
