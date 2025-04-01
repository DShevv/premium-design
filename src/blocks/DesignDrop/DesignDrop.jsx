import clsx from "clsx";
import styles from "./DesignDrop.module.scss";
import Image from "next/image";
import image1 from "@/assets/images/about.png";
import image2 from "@/assets/images/plan.png";
import AccordionItemDesign from "@/components/AccordionItemDesign/AccordionItemDesign";

const DesignDrop = () => {
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
          <AccordionItemDesign title={"Обмеры"} image={image1} number={1}>
            Мы выезжаем на объект для проведения тщательного анализа, выполнения
            точных замеров и фотофиксации всех необходимых деталей. На основе
            собранных данных мы разрабатываем подробные обмерные чертежи,
            включая планы, разрезы и сечения, которые служат надежной основой
            для дальнейших этапов проектирования и реализации.
          </AccordionItemDesign>
          <AccordionItemDesign title={"Обмеры"} image={image1} number={2}>
            Мы выезжаем на объект для проведения тщательного анализа, выполнения
            точных замеров и фотофиксации всех необходимых деталей. На основе
            собранных данных мы разрабатываем подробные обмерные чертежи,
            включая планы, разрезы и сечения, которые служат надежной основой
            для дальнейших этапов проектирования и реализации.
          </AccordionItemDesign>
          <AccordionItemDesign title={"Обмеры"} image={image1} number={3}>
            Мы выезжаем на объект для проведения тщательного анализа, выполнения
            точных замеров и фотофиксации всех необходимых деталей. На основе
            собранных данных мы разрабатываем подробные обмерные чертежи,
            включая планы, разрезы и сечения, которые служат надежной основой
            для дальнейших этапов проектирования и реализации.
          </AccordionItemDesign>
        </div>
      </div>
    </section>
  );
};

export default DesignDrop;
