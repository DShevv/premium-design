import clsx from "clsx";
import styles from "./not-found.module.css";

const page = () => {
  return (
    <>
      <main className={clsx("wrapper", styles.container)}>404</main>
    </>
  );
};

export default page;
