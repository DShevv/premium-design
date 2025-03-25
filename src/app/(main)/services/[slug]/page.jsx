"use client";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/steps2.png";
import Image from "next/image";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import service1 from "@/assets/images/services-1.png";
import { SvgArrowCorner } from "@/assets/icons/svgs";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const page = () => {
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
    <>
      <div className={styles.head}>
        <div className={styles.bg}>
          <Image src={hero} alt="" />
        </div>
        <div className={styles.wrapper}>
          <h1 className={clsx("h1-news", styles.title)}>Закупка материалов</h1>
          <Breadcrumbs
            isWhite={true}
            items={[
              {
                title: "Главная",
                href: "/",
              },
              {
                title: "услуги",
                href: "/services",
              },
              {
                title: "Закупка материалов",
                href: "/",
              },
            ]}
          />
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.side}>
          <div className={clsx("h3", styles.sideTitle)}>другие услуги</div>
          <div className={styles.items}>
            <Link
              href={"/services/design-project"}
              className={clsx(styles.service, {
                [styles.activeService]: activeIndex === 0,
              })}
              ref={(el) => setRef(el, 0)}
              data-index={0}
            >
              <div className={styles.serviceBg}>
                <Image src={service1} alt="" />
              </div>
              <div className={styles.caption}>
                <span className="h4">Дизайн проект</span>
                <InlineButton className={styles.more}>Подробнее</InlineButton>
              </div>
            </Link>
            <Link
              href={"/services/design-complect"}
              className={clsx(styles.service, {
                [styles.activeService]: activeIndex === 1,
              })}
              data-index={1}
              ref={(el) => setRef(el, 1)}
            >
              <div className={styles.serviceBg}>
                <Image src={service1} alt="" />
              </div>
              <div className={styles.caption}>
                <span className="h4">Дизайн проект с комплектацией</span>
                <InlineButton className={styles.more}>Подробнее</InlineButton>
              </div>
            </Link>
            <Link
              href={"/services/design"}
              className={clsx(styles.service, {
                [styles.activeService]: activeIndex === 2,
              })}
              data-index={2}
              ref={(el) => setRef(el, 2)}
            >
              <div className={styles.serviceBg}>
                <Image src={service1} alt="" />
              </div>
              <div className={styles.caption}>
                <span className="h4">
                  Ремонт под ключ (с дизайн проектом заказчика)
                </span>
                <InlineButton className={styles.more}>Подробнее</InlineButton>
              </div>
            </Link>
            <Link
              href={"/services/design"}
              className={clsx(styles.service, {
                [styles.activeService]: activeIndex === 3,
              })}
              data-index={3}
              ref={(el) => setRef(el, 3)}
            >
              <div className={styles.serviceBg}>
                <Image src={service1} alt="" />
              </div>
              <div className={styles.caption}>
                <span className="h4">
                  Ремонт под ключ с комплектацией (с дизайн проектом заказчика)
                </span>

                <InlineButton className={styles.more}>Подробнее</InlineButton>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <p className={"body-1-regular"}>
            Стройка и ремонт — это сложный процесс, требующий четкой организации
            и слаженной работы всех участников. Одной из ключевых составляющих
            успеха является правильная и эффективная система закупки
            строительных материалов. Если ее не продумать заранее, могут
            возникнуть негативные последствия: перерасход бюджета, задержки
            в сроках выполнения работ и снижение качества итогового результата.
            Вот несколько полезных советов по оптимизации закупки
            стройматериалов.
          </p>
          <h4 className="h4">Анализ текущей ситуации</h4>
          <p className="body-1">
            Перед тем как начать оптимизацию, необходимо провести тщательный
            анализ текущего процесса закупок: кто отвечает за это, на чем
            основывается выбор материалов, сколько покупается и т.д. Это поможет
            быстро выявить слабые места и понять, что требует улучшения. Для
            удобства анализа можно выделить несколько ключевых аспектов закупок.
          </p>

          <div className={styles.imageBlock}>
            <Image src={service1} alt="" />
            <Image src={service1} alt="" />
          </div>

          <div className={clsx(styles.quote, "body-1-regular")}>
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M8.96739 0L7.06522 20H0L3.62319 0H8.96739ZM25 0L23.0978 20H16.1232L19.6558 0H25Z"
                fill="#FEFCFA"
              />
            </svg>
            Для крупных проектов чрезвычайно важно четко понимать, какие заявки,
            спецификации и контракты вы готовите. Необходимо убедиться, что вся
            информация о качестве и безопасности материалов тщательно учтена
            и отражена в документации. Это позволит избежать возможных проблем
            в будущем и гарантирует, что все используемые материалы
            соответствуют необходимым стандартам и требованиям. Более того,
            четкое оформление документов помогает минимизировать риски
            и обеспечивает плавный и эффективный процесс закупок.
          </div>
          <h4 className="h4">Поиск поставщиков</h4>
          <p className="body-1">
            Важно правильно выбрать поставщика, который будет соблюдать сроки,
            не завышать цены и предоставлять качественные услуги. Ведь вы не
            хотите, чтобы новые окна, которые вы ждали осенью, приехали зимой,
            или чтобы полы растрескались через несколько месяцев после укладки.
            Импульсивное желание купить быстро и без раздумий часто приводит к
            выбору необоснованно дорогих и менее качественных материалов, что
            может привести к перерасходу бюджета и задержкам в работах.
          </p>
          <div className={styles.imageBlock}>
            <Image src={service1} alt="" />
          </div>
          <h4 className="h4">Учет закупок</h4>
          <p className="body-1">
            Следите за учетом закупленных и использованных материалов, чтобы
            всегда знать, сколько и каких материалов у вас осталось. Это можно
            делать как в специализированных системах для крупных проектов, так и
            в обычных таблицах Excel. Отсутствие учета часто приводит к тому,
            что нужные материалы заканчиваются в самый неподходящий момент или,
            наоборот, их оказывается слишком много. Это негативно сказывается на
            бюджете и замедляет сроки выполнения работ.
          </p>
        </div>
      </section>

      <OurProjects title={"Реализованные дизайн-проекты"} />
      <Feedback />
    </>
  );
};

export default page;
