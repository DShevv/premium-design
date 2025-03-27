"use client";
import React, { useState, useRef } from "react";
import styles from "./ImageZoom.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { AnimatePresence, motion as m } from "motion/react";

const AnimatedImage = m.create(Image);

const ImageZoom = ({ src, zoom = 2, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({
      x: Math.min(50, Math.max(-50, 50 - x)),
      y: Math.min(50, Math.max(-50, 50 - y)),
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0, visible: false });
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.container, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        src={src}
        alt="Zoomable"
        fill
        sizes="400px, 400px"
        style={{ objectFit: "cover" }}
      />

      <AnimatePresence>
        {position.visible && (
          <m.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
            className={styles.zoom}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <AnimatedImage
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
              src={src}
              alt="Zoomed"
              className={styles.zoomedImage}
              style={{
                position: "absolute",
                top: `${position.y}%`,
                left: `${position.x}%`,
                transform: `scale(${zoom})`,
                width: "100%",
                height: "100%",
              }}
            />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageZoom;
