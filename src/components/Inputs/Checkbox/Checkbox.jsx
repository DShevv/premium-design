"use client";
import { Field } from "formik";
import styles from "./Checkbox.module.css";
import clsx from "clsx";

const Checkbox = ({ disabled, children, className, ...other }) => {
  if (other.name) {
    return (
      <label className={clsx(styles.container, className)}>
        <Field
          type="checkbox"
          className={clsx(styles.input)}
          disabled={disabled}
          {...other}
        />

        <div className={styles.checkbox}>
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              d="M17 1.5L6 12.5L1 7.5"
              stroke="#0B3D3E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {children && <span className={"body-4"}>{children}</span>}
      </label>
    );
  }
  return (
    <label className={clsx(styles.container, className)}>
      <input
        type="checkbox"
        className={clsx(styles.input)}
        disabled={disabled}
        {...other}
      />

      <div className={styles.checkbox}>
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            d="M17 1.5L6 12.5L1 7.5"
            stroke="#0B3D3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {children && <span className={"body-4"}>{children}</span>}
    </label>
  );
};

export default Checkbox;
