import clsx from "clsx";
import styles from "./BackButton.module.css";
import Link from "next/link";

const BackButton = ({
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
        className={clsx("t-button-back", styles.button, className)}
        disabled={disabled}
        href={href}
        {...other}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2894 18.293C13.8989 18.6836 13.2657 18.6836 12.8752 18.293L7.98782 13.4008C7.20742 12.6196 7.20772 11.3538 7.98842 10.5731L12.8788 5.68275C13.2693 5.29215 13.9025 5.29215 14.293 5.68275C14.6836 6.07325 14.6836 6.70645 14.293 7.09695L10.1074 11.2826C9.71682 11.6731 9.71692 12.3063 10.1074 12.6968L14.2894 16.8788C14.68 17.2694 14.68 17.9025 14.2894 18.293Z"
            fill="currentColor"
          />
        </svg>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={clsx("t-button-back", styles.button, className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...other}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2894 18.293C13.8989 18.6836 13.2657 18.6836 12.8752 18.293L7.98782 13.4008C7.20742 12.6196 7.20772 11.3538 7.98842 10.5731L12.8788 5.68275C13.2693 5.29215 13.9025 5.29215 14.293 5.68275C14.6836 6.07325 14.6836 6.70645 14.293 7.09695L10.1074 11.2826C9.71682 11.6731 9.71692 12.3063 10.1074 12.6968L14.2894 16.8788C14.68 17.2694 14.68 17.9025 14.2894 18.293Z"
          fill="currentColor"
        />
      </svg>
      <span>{children}</span>
    </button>
  );
};

export default BackButton;
