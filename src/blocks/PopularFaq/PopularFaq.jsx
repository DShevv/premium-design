import clsx from "clsx";
import styles from "./PopularFaq.module.scss";
import Image from "next/image";
import image1 from "@/assets/images/about.png";
import image2 from "@/assets/images/plan.png";
import AccordionItem from "@/components/AccordionItem/AccordionItem";

const PopularFaq = ({ items }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ FAQ ]</span>
            <h2 className={clsx("h2", styles.title)}>
              ответы на самые популярные вопросы
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          {items &&
            items.map((item) => (
              <AccordionItem key={item.id} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFaq;
