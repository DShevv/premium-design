import Link from "next/link";
import styles from "./Pagination.module.css";
import clsx from "clsx";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";

const Pagination = ({ current, max, maxPerView, ...other }) => {
  return (
    <div className={clsx(styles.container)}>
      <ArrowButton
        disabled={current === 1}
        type="link"
        href={`?page=${current - 1}`}
        className={styles.prev}
      />

      <ul className={clsx(styles.list)}>
        {Array.from({ length: max }, (_, i) => i + 1)
          .filter((_, index) => {
            if (index - current > Math.floor(maxPerView / 2) - 1) return false;
            if (current - index > Math.floor(maxPerView / 2) + 1) return false;
            return true;
          })
          .map((elem) => {
            const pageNumber = elem;
            if (elem > max) return null;
            return (
              <Link
                key={pageNumber}
                className={clsx("h4", styles.page, {
                  [styles.active]: elem === current,
                })}
                href={`?page=${pageNumber}`}
                {...other}
              >
                {pageNumber}
              </Link>
            );
          })}

        {current < max - maxPerView / 2 && (
          <>
            ...
            <Link
              className={clsx("h4", styles.page)}
              href={`?page=${max}`}
              {...other}
            >
              {max}
            </Link>
          </>
        )}
      </ul>

      <ArrowButton
        disabled={current === max}
        type="link"
        href={`?page=${current + 1}`}
        className={styles.next}
      />
    </div>
  );
};

export default Pagination;
