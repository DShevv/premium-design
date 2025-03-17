"use client";
import clsx from "clsx";
import styles from "./CommentInput.module.scss";
import { Field } from "formik";

const CommentInput = ({
  name,
  placeholder,
  error,
  dark,
  disabled,
  className,
  ...other
}) => {
  return (
    <label className={clsx("t-placeholder", styles.container)}>
      <Field
        className={clsx(
          "t-placeholder",
          styles.field,
          { [styles.error]: error },
          className
        )}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        component="textarea"
        {...other}
      ></Field>
      {error && <div className={clsx("body-5", styles.message)}>{error}</div>}
    </label>
  );
};

export default CommentInput;
