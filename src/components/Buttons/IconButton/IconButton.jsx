import clsx from "clsx";
import styles from "./IconButton.module.css";
import Link from "next/link";

const IconButton = ({
  Icon,
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
        className={clsx(className, styles.container)}
        href={href}
        onClick={onClick}
        {...other}
      >
        <div className={clsx("t-button", styles.button)} disabled={disabled}>
          <Icon />
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
        <Icon />
      </div>
      {children && <div className="body-3">{children}</div>}
    </button>
  );
};

export default IconButton;
