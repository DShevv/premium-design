"use client";
import clsx from "clsx";
import styles from "./FavoriteLink.module.css";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import { useEffect, useState } from "react";

const FavoriteLink = observer(
  ({ type, onClick, disabled, className, href, ...other }) => {
    const { favoriteStore, cartStore } = globalStore;
    const { items } = favoriteStore;
    const { cartItems } = cartStore;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    return (
      <Link
        className={clsx(
          "t-button",
          { [styles.disabled]: disabled },
          styles.active,
          styles.button,
          className
        )}
        href={href}
        {...other}
      >
        {type === "cart" ? (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3996 10.9823C23.3996 9.87896 22.9614 8.82084 22.1811 8.0407C21.401 7.26054 20.3429 6.82227 19.2396 6.82227H6.75961C5.6563 6.82227 4.59826 7.26054 3.8181 8.0407C3.03796 8.82084 2.59961 9.87896 2.59961 10.9823"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3998 10.9824L22.3598 19.3024C22.2046 20.4347 21.6519 21.475 20.8001 22.2371C19.9484 22.9992 18.8535 23.4335 17.711 23.4624H8.20537C7.06286 23.4335 5.96789 22.9992 5.11623 22.2371C4.26455 21.475 3.71175 20.4347 3.5566 19.3024L2.5166 10.9824"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.85059 6.49984C8.85059 5.39654 9.28886 4.33843 10.069 3.55828C10.8492 2.77812 11.9073 2.33984 13.0106 2.33984C14.1138 2.33984 15.172 2.77812 15.9522 3.55828C16.7323 4.33843 17.1706 5.39654 17.1706 6.49984"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7438 4.07624C15.3584 4.08039 14.0239 4.59935 12.9996 5.53227C12.1965 4.80162 11.198 4.3205 10.1259 4.14758C9.05391 3.97466 7.95471 4.11739 6.96243 4.5584C5.97015 4.99941 5.12769 5.71964 4.53769 6.63124C3.94768 7.54283 3.63563 8.6064 3.63969 9.69226C3.63969 16.4003 12.9996 20.9451 12.9996 20.9451C12.9996 20.9451 22.3596 16.4003 22.3596 9.69226C22.3596 8.20281 21.768 6.77437 20.7148 5.72117C19.6616 4.66797 18.2331 4.07624 16.7438 4.07624Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        <div className={styles.caption}>
          <div className={clsx("body-3")}>
            {type === "cart" ? "Корзина" : "Избранное"}
          </div>
          <div className={clsx("body-4", styles.text)}>
            {isClient
              ? type === "cart"
                ? cartItems.length
                : items.length
              : "0"}{" "}
            товаров (0 BYN)
          </div>
        </div>
      </Link>
    );
  }
);

export default FavoriteLink;
