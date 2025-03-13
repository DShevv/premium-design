import clsx from "clsx";
import styles from "./MainButton.module.scss";
import Link from "next/link";

const MainButton = ({
  onClick,
  disabled,
  children,
  className,
  type = "button",
  href,
  ...other
}) => {
  if (type === "link") {
    return (
      <Link
        className={clsx("t-button", styles.button, className)}
        disabled={disabled}
        href={href}
        onClick={onClick}
        {...other}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx("t-button", styles.button, className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
};

export default MainButton;
