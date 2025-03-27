"use client";
import { observer } from "mobx-react-lite";
import styles from "./Notification.module.scss";
import globalStore from "@/stores/global-store";
import clsx from "clsx";

const Notification = observer(() => {
  const { notificationStore } = globalStore;
  const { title, info, type, isVisible, removeNotification } =
    notificationStore;

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: isVisible })}
      onClick={() => removeNotification()}
    >
      <div className={clsx(styles.item, { [styles.error]: type === "error" })}>
        <div className={styles.close}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6374 24.364L24.3653 11.636M11.6374 11.636L24.3653 24.364"
              stroke="#FEFCFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={clsx("h3", styles.title)}>
          {type === "success" && (
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M32.0026 58.6673C46.7302 58.6673 58.6693 46.7282 58.6693 32.0006C58.6693 17.2731 46.7302 5.33398 32.0026 5.33398C17.275 5.33398 5.33594 17.2731 5.33594 32.0006C5.33594 46.7282 17.275 58.6673 32.0026 58.6673Z"
                stroke="#C8986A"
                strokeWidth="2"
              />
              <path
                d="M22.6641 33.334L27.9974 38.6673L41.3307 25.334"
                stroke="#C8986A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {type === "error" && (
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M32.0026 58.6673C46.7302 58.6673 58.6693 46.7282 58.6693 32.0006C58.6693 17.2731 46.7302 5.33398 32.0026 5.33398C17.275 5.33398 5.33594 17.2731 5.33594 32.0006C5.33594 46.7282 17.275 58.6673 32.0026 58.6673Z"
                stroke="#FEFCFA"
                strokeWidth="2"
              />
              <path
                d="M38.6693 25.334L25.336 38.6673M25.3359 25.334L38.6693 38.6673"
                stroke="#FEFCFA"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {title}
        </div>
        {info && <div className={clsx("body-2", styles.text)}>{info}</div>}
      </div>
    </div>
  );
});

export default Notification;
