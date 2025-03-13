import Link from "next/link";
import styles from "./Logo.module.scss";
import clsx from "clsx";

const Logo = ({ className, ...other }) => {
  return (
    <Link className={clsx(styles.container, className)} href={"/"}>
      {other.children}
    </Link>
  );
};

export default Logo;
