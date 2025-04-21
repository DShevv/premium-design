import { getSeoText } from "@/services/getSeoText";
import styles from "./SeoText.module.scss";
import clsx from "clsx";

const SeoText = async ({ page }) => {
  const data = await getSeoText(page);

  if (!data) {
    return null;
  }

  return (
    <section className={clsx(styles.container)}>
      <div
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </section>
  );
};

export default SeoText;
