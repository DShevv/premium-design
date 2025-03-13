import clsx from "clsx";
import styles from "./ArrowButton.module.scss";
import Link from "next/link";

const ArrowButton = ({
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
        className={clsx("t-button", styles.button, className, {
          [styles.disabled]: disabled,
        })}
        disabled={disabled}
        href={href}
        onClick={onClick}
        {...other}
      >
        {children}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4341 27.4396C20.8484 28.0254 19.8986 28.0254 19.3128 27.4396L11.9817 20.1013C10.8111 18.9295 10.8116 17.0308 11.9826 15.8596L19.3182 8.52413C19.904 7.93823 20.8538 7.93823 21.4396 8.52413C22.0254 9.10988 22.0254 10.0597 21.4396 10.6454L15.1611 16.9238C14.5752 17.5096 14.5754 18.4594 15.1611 19.0451L21.4341 25.3182C22.0199 25.904 22.0199 26.8538 21.4341 27.4396Z"
            fill="currentColor"
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
      {children}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4341 27.4396C20.8484 28.0254 19.8986 28.0254 19.3128 27.4396L11.9817 20.1013C10.8111 18.9295 10.8116 17.0308 11.9826 15.8596L19.3182 8.52413C19.904 7.93823 20.8538 7.93823 21.4396 8.52413C22.0254 9.10988 22.0254 10.0597 21.4396 10.6454L15.1611 16.9238C14.5752 17.5096 14.5754 18.4594 15.1611 19.0451L21.4341 25.3182C22.0199 25.904 22.0199 26.8538 21.4341 27.4396Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
