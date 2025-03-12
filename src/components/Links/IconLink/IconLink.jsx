import clsx from "clsx";
import Link from "next/link";
import styles from "./IconLink.module.css";
import React from "react";

const IconLink = ({ href, children, target, className }) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx("body-4", styles.link, className)}
    >
      {children}
    </Link>
  );
};

export default IconLink;
