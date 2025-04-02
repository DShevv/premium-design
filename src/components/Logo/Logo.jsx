"use client";
import Link from "next/link";
import styles from "./Logo.module.scss";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";

const Logo = observer(({ className, ...other }) => {
  const { popupStore } = globalStore;
  const { closePopup } = popupStore;

  return (
    <Link
      className={clsx(styles.container, className)}
      href={"/"}
      onClick={() => {
        closePopup("menu");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflowY = "";
        document.body.style.width = "";
      }}
    >
      {other.children}
    </Link>
  );
});

export default Logo;
