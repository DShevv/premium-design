"use client";
import { observer } from "mobx-react-lite";
import styles from "./Notification.module.css";
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
        <div className={clsx("body-1", styles.title)}>
          {type === "success" && (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9974 29.3327C23.3612 29.3327 29.3307 23.3631 29.3307 15.9993C29.3307 8.63555 23.3612 2.66602 15.9974 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9993C2.66406 23.3631 8.6336 29.3327 15.9974 29.3327Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M11.3359 16.666L14.0026 19.3327L20.6693 12.666"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {type === "error" && (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9974 29.3327C23.3612 29.3327 29.3307 23.3631 29.3307 15.9993C29.3307 8.63555 23.3612 2.66602 15.9974 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9993C2.66406 23.3631 8.6336 29.3327 15.9974 29.3327Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M19.3308 12.666L12.6641 19.3327M12.6641 12.666L19.3308 19.3327"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
          {title}
        </div>
        {info && <div className={clsx("body-4", styles.text)}>{info}</div>}
      </div>
    </div>
  );
});

export default Notification;
