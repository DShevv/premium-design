import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";
import clsx from "clsx";

const Breadcrumbs = ({ items, className, ...other }) => {
  return (
    <div className={clsx(styles.container, className)}>
      {items.map((item, index) => (
        <div key={`${index}${item.title}`}>
          {items.length > index + 1 ? (
            <Link
              key={`${index}${item.title}`}
              href={item.href}
              className={clsx("body-4", styles.link)}
            >
              {item.title}
            </Link>
          ) : (
            <div className={clsx("body-4", styles.link)}> {item.title}</div>
          )}
          {index < items.length - 1 && "/"}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
