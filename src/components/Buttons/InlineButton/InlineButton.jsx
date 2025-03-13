import clsx from "clsx";
import styles from "./InlineButton.module.scss";
import Link from "next/link";

const InlineButton = ({
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
        {...other}
      >
        <span>{children}</span>
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
      <span>{children}</span>

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
    </button>
  );
};

export default InlineButton;
