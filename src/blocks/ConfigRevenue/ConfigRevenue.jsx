"use client";
import Image from "next/image";
import styles from "./ConfigRevenue.module.scss";
import clsx from "clsx";
import pic1 from "@/assets/images/portfolio3.png";
import pic2 from "@/assets/images/portfolio5.png";
import pic3 from "@/assets/images/works-2.png";
import pic4 from "@/assets/images/works-1.png";
import pic5 from "@/assets/images/news.png";
import pic6 from "@/assets/images/about.png";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const ConfigRevenue = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const setRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      itemRefs.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const itemCenterY = rect.top + rect.height / 2;

          if (
            itemCenterY >= centerY - rect.height / 2 &&
            itemCenterY <= centerY + rect.height / 2
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={clsx(styles.container)}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={clsx("body-1", styles.caption)}>
            <span>[ Ваши выгоды ]</span>
            <h2 className={clsx("h2", styles.title)}>
              Какие выгоды вы получите с комплектацией
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <div
            ref={(el) => setRef(el, 0)}
            className={clsx(styles.item, {
              [styles.active]: activeIndex === 0,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic1} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Экономия времени</div>
            <div className={clsx("body-1", styles.text)}>
              Клиент не тратит свое время на поиск подходящих материалов, мебели
              и исполнителей. Все эти задачи берет на себя профессиональная
              команда.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 1)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 1,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic2} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Оптимизация бюджета</div>
            <div className={clsx("body-1", styles.text)}>
              Профессионалы знают, где найти качественные материалы по выгодной
              цене, что позволяет избежать лишних затрат.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 2)}
            className={clsx(styles.item, {
              [styles.active]: activeIndex === 2,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic3} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Гарантия качества</div>
            <div className={clsx("body-1", styles.text)}>
              Подбор проверенных поставщиков и контроль на каждом этапе
              комплектации гарантируют высокое качество всех элементов
              интерьера.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 3)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 3,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic4} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Индивидуальный подход</div>
            <div className={clsx("body-1", styles.text)}>
              Все решения принимаются с учетом пожеланий и потребностей клиента,
              создавая уникальное и комфортное пространство.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 4)}
            className={clsx(styles.item, styles.thin, {
              [styles.active]: activeIndex === 4,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic5} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>Прозрачность процесса</div>
            <div className={clsx("body-1", styles.text)}>
              Клиентможет контролировать ход работ, получая отчеты
              и консультации на каждом этапе.
            </div>
          </div>
          <div
            ref={(el) => setRef(el, 5)}
            className={clsx(styles.item, styles.wide, {
              [styles.active]: activeIndex === 5,
            })}
          >
            <div className={styles.bg}>
              <Image src={pic6} alt="" />
            </div>
            <div className={clsx("h4", styles.name)}>
              Уверенность в результате
            </div>
            <div className={clsx("body-1", styles.text)}>
              Опыт и профессионализм команды гарантируют, что интерьер будет
              соответствовать всем стандартам качества и эстетики.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigRevenue;
