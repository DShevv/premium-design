import clsx from "clsx";
import styles from "./IncludesBlock.module.scss";
import Image from "next/image";
import image1 from "@/assets/images/about.png";
import image2 from "@/assets/images/plan.png";

const IncludesBlock = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Что мы предоставим ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Что входит в дизайн-проект
            </h2>
          </div>
        </div>

        <div className={styles.lists}>
          <div className={styles.item}>
            <div className={styles.bg}>
              <Image src={image1} alt="" />
            </div>
            <div className={styles.scrollContainer}>
              <div className={styles.content}>
                <div className={clsx("h4", styles.listTitle)}>Документация</div>
                <div className={clsx("body-1", styles.text)}>
                  <ol>
                    <li>Обмерный план</li>
                    <li>План демонтируемых перегородок</li>
                    <li>План возводимых перегородок и конструкций</li>
                    <li>План после перепланировки</li>
                    <li>План расстановки мебели и оборудования</li>
                    <li>План потолков</li>
                    <li>
                      Схема размещения светильников с привязками к группам
                      включения
                    </li>
                    <li>План монтажа розеток и выключателей</li>
                    <li>План полов, плинтусов</li>
                    <li>План монтажа тёплого пола</li>
                    <li>
                      План привязок холодного и горячего водоснабжения и
                      канализации
                    </li>
                    <li>План-схема отделки стен</li>
                    <li>План заполнения дверных проёмов</li>
                    <li>Развёртка санузла</li>
                    <li>Развёртка кухни</li>
                    <li>3D-визуализации</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.bg}>
              <Image src={image2} alt="" />
            </div>
            <div className={styles.scrollContainer}>
              <div className={styles.content}>
                <div className={clsx("h4", styles.listTitle)}>
                  Фотореалистичная 3D-визуализация
                </div>
                <div className={clsx("body-1", styles.text)}>
                  Перед началом этого этапа мы вместе просматриваем примеры
                  успешных интерьеров и архитектурных объектов, разработанных
                  как в нашей студии, так и по всему миру. Мы составляем кейс
                  понравившихся работ, отмечая, что именно в них вас привлекает
                  или отталкивает. Это помогает нам определить ваши
                  стилистические и цветовые предпочтения.
                  <ul>
                    <li>Обычно для одного помещения требуется 3-5 ракурсов.</li>
                    <li>
                      Для совмещенной зоны кухни-столовой-гостиной: 7-10
                      ракурсов.
                    </li>
                    <li>
                      Количество помещений, для которых требуется визуализация,
                      уточняется индивидуально для каждого проекта, но как
                      минимум необходимо визуализировать основные помещения:
                      прихожая, гостиная, кухня, столовая, спальня.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludesBlock;
