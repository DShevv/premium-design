"use client";
import clsx from "clsx";
import { motion as m, useInView } from "motion/react";
import React, { useRef } from "react";
import styles from "./Line.module.scss";

const Line = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const childrenWithClass = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: clsx(child.props.className, { [styles.hover]: isInView }),
      });
    }
    return child;
  });

  return (
    <m.div
      ref={ref}
      className={clsx("body-1", styles.line, { [styles.hover]: isInView })}
    >
      {childrenWithClass}
    </m.div>
  );
};

export default Line;
