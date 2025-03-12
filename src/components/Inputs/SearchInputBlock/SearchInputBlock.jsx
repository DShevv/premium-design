"use client";
import clsx from "clsx";
import styles from "./SearchInputBlock.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SearchInputBlock = ({
  name,
  placeholder,
  disabled,
  value,
  onChange,
  className,
  ...other
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label
        className={clsx("t-field", styles.container, {
          [styles.active]: value.length > 0,
        })}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(styles.search)}
        >
          <path
            d="M17.1118 17.1287L22.75 22.75M19.5 11.375C19.5 15.8623 15.8623 19.5 11.375 19.5C6.88768 19.5 3.25 15.8623 3.25 11.375C3.25 6.88768 6.88768 3.25 11.375 3.25C15.8623 3.25 19.5 6.88768 19.5 11.375Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(styles.clear)}
          onClick={() => {
            onChange("");
          }}
        >
          <path
            d="M22.475 3.60588C22.0519 3.18281 21.3659 3.18281 20.9429 3.60588L13.0406 11.5081L5.13843 3.60588C4.71537 3.18281 4.02943 3.18281 3.60637 3.60588C3.18329 4.02894 3.18329 4.71488 3.60637 5.13794L11.5086 13.0402L3.60639 20.9423C3.18332 21.3655 3.18332 22.0514 3.60639 22.4745C4.02945 22.8975 4.71539 22.8975 5.13845 22.4745L13.0406 14.5722L20.9429 22.4745C21.3659 22.8975 22.0519 22.8975 22.475 22.4745C22.898 22.0514 22.898 21.3655 22.475 20.9424L14.5727 13.0402L22.475 5.13794C22.898 4.71488 22.898 4.02894 22.475 3.60588Z"
            fill="currentColor"
          />
        </svg>

        <input
          className={clsx("t-field", styles.field)}
          type="text"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          {...other}
        />
      </label>
    </div>
  );
};

export default SearchInputBlock;
