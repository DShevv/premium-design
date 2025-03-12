"use client";
import clsx from "clsx";
import styles from "./MainInput.module.css";
import InputMask from "@mona-health/react-input-mask";

const MainInput = ({
  name,
  placeholder,
  type,
  mask,
  error,
  disabled,
  className,
  ...other
}) => {
  return (
    <label className={clsx("t-placeholder", styles.container, className)}>
      <InputMask
        className={clsx("t-placeholder", styles.field, {
          [styles.error]: error,
        })}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        mask={mask}
        {...other}
      />
      {error && <div className={clsx("body-5", styles.message)}>* {error}</div>}
    </label>
  );
};

export default MainInput;
