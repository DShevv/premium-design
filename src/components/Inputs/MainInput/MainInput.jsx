"use client";
import clsx from "clsx";
import styles from "./MainInput.module.scss";
import InputMask from "@mona-health/react-input-mask";

const MainInput = ({
  name,
  placeholder,
  type,
  mask,
  value,
  onChange,
  error,
  disabled,
  className,
  dark,
  ...other
}) => {
  return (
    <label
      className={clsx("t-placeholder", styles.container, className, {
        [styles.dark]: dark,
      })}
    >
      <InputMask
        className={clsx("t-placeholder", styles.field, {
          [styles.error]: error,
          [styles.dark]: dark,
        })}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        mask={mask}
        value={value}
        onChange={onChange}
        {...other}
      />
      {error && <div className={clsx("body-5", styles.message)}>* {error}</div>}
    </label>
  );
};

export default MainInput;
