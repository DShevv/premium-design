import Link from "next/link";
import React from "react";
import styles from "./ImageLink.module.css";
import clsx from "clsx";
import Image from "next/image";

const ImageLink = ({ image, href, target, className, ...other }) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(styles.link, className)}
      {...other}
    >
      <Image src={image} alt="" />
    </Link>
  );
};

export default ImageLink;
