"use client";
import { observer } from "mobx-react-lite";
import styles from "./NotificationConfirm.module.css";
import globalStore from "@/stores/global-store";
import clsx from "clsx";
import MainButton from "../Buttons/MainButton/MainButton";
import OutlineButton from "../Buttons/OutlineButton/OutlineButton";
import CloseButton from "../Buttons/CloseButton/CloseButton";
import { redirect } from "next/navigation";

const NotificationConfirm = observer(() => {
  const { confirmStore, cartStore } = globalStore;
  const { title, info, type, isVisible, removeConfirm } = confirmStore;
  const { clearAll } = cartStore;

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: isVisible })}
      onClick={() => removeConfirm()}
    >
      {type === "error" && (
        <div className={clsx(styles.item)}>
          <CloseButton
            className={styles.close}
            onClick={() => removeConfirm()}
          />
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5 21C38.5 30.665 30.665 38.5 21 38.5C11.335 38.5 3.5 30.665 3.5 21C3.5 11.335 11.335 3.5 21 3.5C30.665 3.5 38.5 11.335 38.5 21Z"
              fill="#CF2E2F"
            />
            <path
              d="M25.375 16.625L16.625 25.375M16.625 16.625L25.375 25.375"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className={clsx("h3", styles.title)}>
            Ваш заказ не оформлен...
          </div>

          <div className={clsx("body-2", styles.number)}>
            Пожалуйста, повторите попытку ещё раз.
          </div>
        </div>
      )}

      {type === "success" && (
        <div className={clsx(styles.item)}>
          <CloseButton
            className={styles.close}
            onClick={() => {
              removeConfirm();
              clearAll();
              redirect("/");
            }}
          />
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z"
              fill="#36BE24"
              stroke="#36BE24"
              strokeWidth="1.5"
            />
            <path
              d="M14.875 21.875L18.375 25.375L27.125 16.625"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className={clsx("h3", styles.title)}>Ваш заказ оформлен!</div>

          <div className={clsx("h4", styles.number)}>
            Номер вашего заказа: <span>{title}</span>
          </div>

          <div className={clsx("body-4", styles.text)}>
            Скоро с вами свяжется наш менеджер для подтверждения заказа
          </div>

          <div className={styles.buttons}>
            <MainButton
              type="link"
              href={"/catalog"}
              onClick={() => {
                removeConfirm();
                clearAll();
                redirect("/");
              }}
            >
              Продолжить покупки
            </MainButton>
            <OutlineButton
              type="link"
              href={"/"}
              onClick={() => {
                removeConfirm();
                clearAll();
                redirect("/");
              }}
            >
              Перейти на главную
            </OutlineButton>
          </div>
        </div>
      )}

      {type === "confirm" && (
        <div className={clsx(styles.item)}>
          <CloseButton
            className={styles.close}
            onClick={() => removeConfirm()}
          />

          <div className={clsx("h4", styles.number)}>
            Вы действительно хотите <br className="mobile" /> удалить товар из
            корзины?
          </div>

          <div className={styles.buttons}>
            <MainButton
              onClick={() => {
                clearAll();
                removeConfirm();
              }}
            >
              Да
            </MainButton>
            <OutlineButton onClick={() => removeConfirm()}>
              Отмена
            </OutlineButton>
          </div>
        </div>
      )}
    </div>
  );
});

export default NotificationConfirm;
