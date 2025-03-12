"use client";
import clsx from "clsx";
import styles from "./CommentInput.module.css";
import { Field } from "formik";

const CommentInput = ({
  name,
  placeholder,
  error,
  disabled,
  className,
  ...other
}) => {
  return (
    <label className={clsx("t-field", styles.container)}>
      <Field
        className={clsx(
          "t-field",
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
      {error && <div className={clsx("t-field", styles.message)}>{error}</div>}
    </label>
  );
};

export default CommentInput;
