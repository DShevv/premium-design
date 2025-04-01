"use client";
import clsx from "clsx";
import { motion as m, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Line.module.scss";

const Line = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0% 0px -50% 0px" });
  const isInTop = useInView(ref, { margin: "10% 0px -90% 0px" });
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (isInView || isInTop) {
      setActive(true);
    }
  }, [isInView, isInTop]);

  const childrenWithClass = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: clsx(child.props.className, { [styles.hover]: isActive }),
      });
    }
    return child;
  });

  return (
    <m.div
      ref={ref}
      className={clsx("body-1", styles.line, { [styles.hover]: isActive })}
    >
      {childrenWithClass}
    </m.div>
  );
};

export default Line;
