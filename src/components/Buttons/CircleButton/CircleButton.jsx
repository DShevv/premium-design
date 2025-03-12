import clsx from "clsx";
import styles from "./CircleButton.module.css";
import Link from "next/link";

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
        {...other}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 25.5L25.5 10.5M25.5 10.5H12M25.5 10.5V24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
      {...other}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 25.5L25.5 10.5M25.5 10.5H12M25.5 10.5V24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children && <span>{children}</span>}
    </button>
  );
};

export default CircleButton;
