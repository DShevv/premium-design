import clsx from "clsx";
import styles from "./PopularFaq.module.scss";
import Image from "next/image";
import image1 from "@/assets/images/about.png";
import image2 from "@/assets/images/plan.png";
import AccordionItem from "@/components/AccordionItem/AccordionItem";

const PopularFaq = () => {
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
          <AccordionItem
            isOpened={true}
            title={"На каком этапе происходит комплектация интерьера?"}
          >
            Чаще всего комплектация интерьера происходит после завершения
            проектирования, а не в процессе его разработки. Некоторые
            закладывают все в проект заранее, но мы предпочитаем комплектовать
            объект в процессе авторского надзора, параллельно с началом
            строительных работ.
          </AccordionItem>
          <AccordionItem
            title={"На каком этапе происходит комплектация интерьера?"}
          >
            Чаще всего комплектация интерьера происходит после завершения
            проектирования, а не в процессе его разработки. Некоторые
            закладывают все в проект заранее, но мы предпочитаем комплектовать
            объект в процессе авторского надзора, параллельно с началом
            строительных работ.
          </AccordionItem>
          <AccordionItem
            title={"На каком этапе происходит комплектация интерьера?"}
          >
            Чаще всего комплектация интерьера происходит после завершения
            проектирования, а не в процессе его разработки. Некоторые
            закладывают все в проект заранее, но мы предпочитаем комплектовать
            объект в процессе авторского надзора, параллельно с началом
            строительных работ.
          </AccordionItem>
          <AccordionItem
            title={"На каком этапе происходит комплектация интерьера?"}
          >
            Чаще всего комплектация интерьера происходит после завершения
            проектирования, а не в процессе его разработки. Некоторые
            закладывают все в проект заранее, но мы предпочитаем комплектовать
            объект в процессе авторского надзора, параллельно с началом
            строительных работ.
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default PopularFaq;
