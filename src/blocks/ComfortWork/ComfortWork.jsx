import clsx from "clsx";
import styles from "./ComfortWork.module.scss";
import Image from "next/image";
import image1 from "@/assets/images/history-small.png";
import {
  SvgDialog,
  SvgDocument,
  SvgMedal,
  SvgPaint,
} from "@/assets/icons/svgs";

const ComfortWork = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={clsx(styles.header, styles.laptop)}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Наши преимущества ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Мы работаем для вашего комфорта
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <div className={clsx(styles.header, styles.desktop)}>
            <div className={clsx("body-1", styles.caption)}>
              <span>[ Наши преимущества ]</span>
              <h2 className={clsx("h2", styles.title)}>
                Мы работаем для вашего комфорта
              </h2>
            </div>
          </div>

          <div className={styles.blocks}>
            <div className={styles.item}>
              <SvgPaint />
              <h4 className={clsx("h4", styles.itemTitle)}>
                Закупка материалов
              </h4>
              <p className={clsx("body-1")}>
                Закупкой и доставкой всех материалов занимается специалист
                по снабжению, который отвечает за графики закупки и коммерческие
                предложения.
              </p>
            </div>
            <div className={styles.item}>
              <SvgDocument />
              <h4 className={clsx("h4", styles.itemTitle)}>Подробная смета</h4>
              <p className={clsx("body-1")}>
                Перед началом ремонта составляется смета с точными объемами
                и расценками. После согласования готовится смета на материалы
                и графики закупки.
              </p>
            </div>
            <div className={styles.item}>
              <SvgMedal />
              <h4 className={clsx("h4", styles.itemTitle)}>
                Контроль качества
              </h4>
              <p className={clsx("body-1")}>
                Инженер контролирует качество и технический аспект проекта.
                Клиенты могут общаться с ним для разъяснений и демонстрации
                качества работ.
              </p>
            </div>
            <div className={styles.item}>
              <SvgDialog />
              <h4 className={clsx("h4", styles.itemTitle)}>Коммуникации</h4>
              <p className={clsx("body-1")}>
                Все коммуникации со строителями ведет прораб, инженер и
                дизайнер. Инженер также общается с ТЭС/ЖЭС, минимизируя время
                клиента.
              </p>
            </div>
          </div>
        </div>
        <Image src={image1} alt="" className={styles.image} />
      </div>
    </section>
  );
};

export default ComfortWork;
