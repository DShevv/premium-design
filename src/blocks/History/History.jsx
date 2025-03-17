import Image from "next/image";
import styles from "./History.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/history.png";
import pictureSmall from "@/assets/images/history-small.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";

const History = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ О компании ]</span>
            <h2 className={clsx("h2", styles.title)}>Наша большая история</h2>
          </div>
          <CircleButton dark={true} className={"desktop"} href={"/about"}>
            Подробнее о компании
          </CircleButton>
        </div>

        <div className={styles.content}>
          <Image className={styles.imageSmall} src={pictureSmall} alt="" />
          <Image className={styles.image} src={picture} alt="" />
          <div className={styles.text}>
            <p className="body-1-regular">
              Мы специализируемся на создании дизайнов интерьеров премиум
              сегмента, где каждая деталь отражает наш подход
              к сбалансированному сочетанию функциональности и красоты.
            </p>
            <p className="body-1">
              Наши работы, вдохновленные этой задачей, воплощают в себе
              современные тенденции и классические элементы, создавая уникальную
              атмосферу, которая соответствует высоким стандартам наших
              клиентов.
            </p>
            <div className={styles.info}>
              <div className={clsx("h1", styles.line)}>
                20
                <span className="h4">
                  лет в сфере <br /> строительства
                </span>
              </div>
              <div className={clsx("h1", styles.line)}>
                90+
                <span className="h4">
                  реализованных <br /> проектов
                </span>
              </div>
              <div className={clsx("h1", styles.line)}>
                3000+
                <span className="h4">
                  построенных <br className="mobile" /> квадратных{" "}
                  <br className="desktop" /> метров
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
