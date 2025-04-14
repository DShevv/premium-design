"use client";
import Image from "next/image";
import styles from "./Hero.module.scss";
import picture from "@/assets/images/hero-light.png";
import { useEffect, useRef } from "react";
import { motion as m, useMotionValue, useSpring } from "motion/react";
import clsx from "clsx";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const heroRef = useRef(null); // <--- Ссылаемся на весь блок Hero

  useEffect(() => {
    const updateMousePosition = (e) => {
      const bounds = heroRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      // Если курсор ниже блока Hero — сброс
      if (e.clientY > bounds.bottom) {
        mouseX.set(0);
        mouseY.set(0);
      } else {
        // Вычитаем половину ширины/высоты spotlight центра, если нужно
        mouseX.set(x - 360);
        mouseY.set(y - 360);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <section className={styles.container} ref={heroRef}>
      <div className={styles.wrapper}>
        <h1 className={clsx("h1", styles.title)}>
          Воплощаем мечты в реальность
        </h1>

        <div className={styles.block}>
          <CircleButton
            secondary={true}
            className={styles.button}
            openPopupName={"feedback"}
          >
            Оставить заявку
          </CircleButton>

          <div className={styles.caption}>
            <div className={clsx("h4", styles.subtitle)}>
              Жизнь в новых тонах
            </div>
            <p className={clsx("body-1", styles.text)}>
              Мы задаем тон в тенденциях и следуем нашей цели: обеспечить
              доступность качественного дизайна для всех, тем самым улучшая
              эстетику повседневной жизни.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bg}>
        <m.div
          className={styles.spotlight}
          style={{ x: smoothX, y: smoothY }}
        />
        <Image src={picture} alt="" />
      </div>
    </section>
  );
};

export default Hero;
