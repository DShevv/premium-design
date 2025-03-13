import clsx from "clsx";
import styles from "./SearchButton.module.scss";
import Link from "next/link";

const SearchButton = ({
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_76_15)">
            <mask
              id="mask0_76_15"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_76_15)">
              <path
                d="M10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17Z"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinejoin="round"
              />
              <path
                d="M19.6465 20.3537C19.8418 20.5489 20.1584 20.5489 20.3537 20.3537C20.5489 20.1584 20.5489 19.8418 20.3537 19.6465L19.6465 20.3537ZM20.3537 19.6465L15.3537 14.6465L14.6465 15.3537L19.6465 20.3537L20.3537 19.6465Z"
                fill="currentColor"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_76_15">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_76_15)">
          <mask
            id="mask0_76_15"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_76_15)">
            <path
              d="M10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17Z"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M19.6465 20.3537C19.8418 20.5489 20.1584 20.5489 20.3537 20.3537C20.5489 20.1584 20.5489 19.8418 20.3537 19.6465L19.6465 20.3537ZM20.3537 19.6465L15.3537 14.6465L14.6465 15.3537L19.6465 20.3537L20.3537 19.6465Z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_76_15">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default SearchButton;
