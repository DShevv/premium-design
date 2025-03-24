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
                    <li>Концепция планировки (несколько вариантов)</li>
                    <li>Обмерные чертежи (планы)</li>
                    <li>
                      Планы с указанием элементов стен и перегородок, подлежащих
                      демонтажу
                    </li>
                    <li>
                      Планы с указанием элементов стен и перегородок, которые
                      будут возведены
                    </li>
                    <li>
                      Планы расстановки мебели и привязки сантехнического
                      оборудования
                    </li>
                    <li>Планы с указанием типов напольных покрытий</li>
                    <li>Схема системы подогрева полов</li>
                    <li>Планы подвесных потолков</li>
                    <li>Схема установки кондиционеров</li>
                    <li>Сечения подвесных потолков</li>
                    <li>Планы расположения светильников и выключателей</li>
                    <li>Спецификация светильников и выключателей</li>
                    <li>Планы расположения розеток</li>
                    <li>Спецификация розеток</li>
                    <li>Ведомость внутренней отделки помещений</li>
                    <li>
                      Разрезы и/или развертки всех стен с основными размерами
                    </li>
                    <li>Разрезы и/или развертки всех стен в цвете</li>
                    <li>Узлы и фрагменты (укрупненные с размерами)</li>
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
