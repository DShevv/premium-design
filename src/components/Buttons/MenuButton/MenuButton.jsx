import clsx from "clsx";
import styles from "./MenuButton.module.css";
import Link from "next/link";

const MenuButton = ({
  onClick,
  isOpened,
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
        className={clsx(className, styles.container)}
        href={href}
        onClick={onClick}
        {...other}
      >
        <div className={clsx("t-button", styles.button)} disabled={disabled}>
          {isOpened ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6374 24.364L24.3653 11.636M11.6374 11.636L24.3653 24.364"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.5"
                cx="23.5"
                cy="23.5"
                r="23"
                stroke="currentColor"
              />
              <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" />
              <circle cx="23.5" cy="15.5" r="1.5" fill="currentColor" />
              <circle cx="31.5" cy="15.5" r="1.5" fill="currentColor" />
              <circle cx="15.5" cy="23.5" r="1.5" fill="currentColor" />
              <circle cx="23.5" cy="23.5" r="1.5" fill="currentColor" />
              <circle cx="31.5" cy="23.5" r="1.5" fill="currentColor" />
              <circle cx="15.5" cy="31.5" r="1.5" fill="currentColor" />
              <circle cx="23.5" cy="31.5" r="1.5" fill="currentColor" />
              <circle cx="31.5" cy="31.5" r="1.5" fill="currentColor" />
            </svg>
          )}
        </div>
        {children && <div className="body-3">{children}</div>}
      </Link>
    );
  }

  return (
    <button className={clsx(className, styles.container)} onClick={onClick}>
      <div
        className={clsx("t-button", styles.button)}
        disabled={disabled}
        type={type}
        {...other}
      >
        {isOpened ? (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6374 24.364L24.3653 11.636M11.6374 11.636L24.3653 24.364"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.5"
              cx="23.5"
              cy="23.5"
              r="23"
              stroke="currentColor"
            />
            <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" />
            <circle cx="23.5" cy="15.5" r="1.5" fill="currentColor" />
            <circle cx="31.5" cy="15.5" r="1.5" fill="currentColor" />
            <circle cx="15.5" cy="23.5" r="1.5" fill="currentColor" />
            <circle cx="23.5" cy="23.5" r="1.5" fill="currentColor" />
            <circle cx="31.5" cy="23.5" r="1.5" fill="currentColor" />
            <circle cx="15.5" cy="31.5" r="1.5" fill="currentColor" />
            <circle cx="23.5" cy="31.5" r="1.5" fill="currentColor" />
            <circle cx="31.5" cy="31.5" r="1.5" fill="currentColor" />
          </svg>
        )}
      </div>
      {children && <div className="body-3">{children}</div>}
    </button>
  );
};

export default MenuButton;
