import clsx from "clsx";
import styles from "./DesignDrop.module.scss";
import Image from "next/image";
import AccordionItemDesign from "@/components/AccordionItemDesign/AccordionItemDesign";

const DesignDrop = ({ items }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Этапы работы ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Как строится наша работа
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          {items &&
            items.map((step) => (
              <AccordionItemDesign
                key={step.id}
                title={step.title}
                image={step.image}
                number={step.number}
              >
                {step.description}
              </AccordionItemDesign>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DesignDrop;
