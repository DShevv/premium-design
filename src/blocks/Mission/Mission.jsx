import Image from "next/image";
import styles from "./Mission.module.scss";
import clsx from "clsx";
import picture from "@/assets/images/portfolio4.png";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";

const Mission = () => {
  return (
    <section className={styles.container}>
      <div className={clsx("body-1", styles.caption, styles.laptop)}>
        <span>[ Наша миссия ]</span>
        <h2 className={clsx("h2", styles.title)}>
          Создаем <br /> уникальные решения
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={clsx("body-1", styles.caption, styles.desktop)}>
            <span>[ Наша миссия ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Создаем <br /> уникальные решения
            </h2>
          </div>

          <p className={clsx("body-1")}>
            Мы реализуем проекты по всей стране и по всему миру, создавая
            уникальные решения, которые превращают мечты в реальность без
            использования волшебной палочки. Наше основное внимание уделяется
            структурному дизайну, в то время как дизайн интерьера направлен
            на создание уютной и вдохновляющей внутренней атмосферы.
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
                построенных <br /> квадратных метров
              </span>
            </div>
          </div>
        </div>
        <Image className={styles.image} src={picture} alt="" />
      </div>
    </section>
  );
};

export default Mission;
