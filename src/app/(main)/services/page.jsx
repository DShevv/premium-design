"use client";
import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import image1 from "@/assets/images/news.png";
import image2 from "@/assets/images/rebuild-complect.png";
import image3 from "@/assets/images/rebuild-head.jpg";
import image4 from "@/assets/images/works-1.png";
import Image from "next/image";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";

const page = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div className={styles.info}>
            <h1 className={clsx("h1", styles.title)}>Услуги</h1>
            <Breadcrumbs
              items={[
                {
                  title: "Главная",
                  href: "/",
                },
                {
                  title: "Услуги",
                  href: "/",
                },
              ]}
            />
          </div>
          <div className={clsx("body-1", styles.text)}>
            Наша компания предоставляет полный спектр услуг в сфере обустройства
            пространств, сосредоточившись на трёх ключевых направлениях:
            профессиональная разработка дизайн-проектов с 3D-визуализацией,
            реализация ремонта «под ключ» (включая демонтажные работы, монтаж
            инженерных коммуникаций, черновую и чистовую отделку), а также
            комплексная закупка сертифицированных материалов с оптимизацией
            бюджета (от напольных покрытий до декоративных элементов)
            с предоставлением детализированной сметы и поэтапным контролем
            качества.
          </div>
        </div>

        <div className={styles.container}>
          <Link href={"design-project"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image1} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>Дизайн-проект</div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
          <Link href={"design-complect"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image2} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>
              Дизайн проект с комплектацией
            </div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
          <Link href={"rebuild-project"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image3} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>
              Ремонт под ключ (с дизайн проектом заказчика)
            </div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
          <Link href={"rebuild-complect"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image4} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>
              Ремонт под ключ с комплектацией (с дизайн проектом заказчика)
            </div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
