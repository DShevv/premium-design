"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AccordionItemDesign.module.scss";
import clsx from "clsx";
import Image from "next/image";

const AccordionItemDesign = ({ title, image, children, number, isOpened }) => {
  const [isOpen, setIsOpen] = useState(isOpened);

  return (
    <div
      className={clsx(styles.accordion, { [styles.active]: isOpen })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className={clsx("h4", styles.header)}>
        <div>
          <span className="h3">0{number}</span>
          {title}
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {isOpen ? (
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 32H48"
                stroke="#C8986A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 32H48M32 16V48"
                stroke="#C8986A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.span>
      </button>
      <motion.div
        className={styles.content}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={clsx(styles.inner, "body-1-regular")}>
          <Image src={image} alt="" />
          <span>{children}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItemDesign;
