"use client";
import clsx from "clsx";
import { motion, useMotionValue, useSpring } from "motion/react";
import styles from "./CircleButton.module.scss";
import Link from "next/link";
import { useState } from "react";

const CircleButton = ({
  onClick,
  disabled,
  children,
  centered,
  className,
  dark,
  secondary,
  type = "button",
  href,
  ...other
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / 10;
    const deltaY = (clientY - centerY) / 10;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (type === "link") {
    return (
      <Link
        className={clsx(styles.button, className, {
          [styles.empty]: !children,
          [styles.dark]: dark,
          [styles.secondary]: secondary,
          [styles.centered]: centered,
          ["t-button"]: !centered,
          ["h3"]: centered,
        })}
        disabled={disabled}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...other}
      >
        <motion.svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ x: springX, y: springY }}
        >
          <path
            d="M10.5 25.5L25.5 10.5M25.5 10.5H12M25.5 10.5V24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        {children && <span>{children}</span>}
      </Link>
    );
  }

  return (
    <button
      className={clsx(styles.button, className, {
        [styles.secondary]: secondary,
        [styles.empty]: !children,
        [styles.dark]: dark,
        [styles.centered]: centered,
        ["t-button"]: !centered,
        ["h3"]: centered,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...other}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ x: springX, y: springY }}
      >
        <path
          d="M10.5 25.5L25.5 10.5M25.5 10.5H12M25.5 10.5V24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      {children && <span>{children}</span>}
    </button>
  );
};

export default CircleButton;
