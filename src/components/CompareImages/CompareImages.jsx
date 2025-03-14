"use client";
import Image from "next/image";
import styles from "./CompareImages.module.scss";
import { useRef, useState } from "react";
import clsx from "clsx";

const CompareImages = ({ items, onDrag }) => {
  const [imageRevealFrag, setImageRevealFrag] = useState(0.5);
  const imageContainer = useRef(null);

  const slide = (xPos) => {
    const containerRect = imageContainer.current.getBoundingClientRect();

    setImageRevealFrag(() => {
      if (xPos < containerRect.left) {
        return 0;
      }

      if (xPos > containerRect.right) {
        return 1;
      }
      return (xPos - containerRect.left) / containerRect.width;
    });
  };

  const handlePointerDown = (e) => {
    onDrag(true);

    window.onpointermove = handlePointerMove;
    window.onpointerup = handlePointerUp;
  };

  const handlePointerMove = (e) => {
    slide(e.clientX);
  };

  const handlePointerUp = () => {
    window.onpointermove = null;
    window.onpointerup = null;
    onDrag(false);
  };

  const handelTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };

  return (
    <div className={styles.container} ref={imageContainer}>
      <div className={styles.imageContainer}>
        <div className={clsx("body-4", styles.label)}>дизайн “после”</div>

        <Image src={items.after} alt="" className={styles.after} />
      </div>
      <div
        className={styles.imageContainer}
        style={{
          clipPath: `polygon(0 0, ${imageRevealFrag * 100}% 0, ${
            imageRevealFrag * 100
          }% 100%, 0 100%)`,
        }}
      >
        <div className={clsx("body-4", styles.label)}>дизайн “до”</div>
        <Image src={items.before} alt="" className={styles.before} />
      </div>

      <div
        className={styles.divider}
        draggable="false"
        style={{ left: `${imageRevealFrag * 100}%` }}
      >
        <div className={styles.line} draggable="false"></div>
        <div
          className={styles.button}
          onPointerDown={handlePointerDown}
          onTouchMove={handelTouchMove}
          role="button"
          tabIndex={0}
          draggable="false"
        >
          <svg
            width="44"
            height="16"
            viewBox="0 0 44 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM23 9H43V7H23V9Z"
              fill="currentColor"
            />
            <path
              d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM21 9H1V7H21V9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CompareImages;
