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
import { getSeoPage } from "@/services/getSeoPage";
import { slugifyWithOpts } from "@/utils/helper";
import SeoText from "@/blocks/SeoText/SeoText";

export async function generateMetadata() {
  const { seo } = await getSeoPage("services");

  return seo
    ? {
        title: seo.title || "Услуги",
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: process.env.HOME_URL,
        },
        openGraph: {
          title: seo.og_title,
          description: seo.og_description,
        },
      }
    : {};
}

const page = async () => {
  const services = await fetch(
    `${process.env.API_URL}/v1/additional-services`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  const text = await fetch(
    `${process.env.API_URL}/v1/additional-services/page/description`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

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
          <div
            className={clsx("body-1", styles.text)}
            dangerouslySetInnerHTML={{ __html: text.description }}
          />
        </div>

        <div className={styles.container}>
          {/*           <Link href={"/services/design-project"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image1} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>Дизайн-проект</div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
          <Link href={"/services/design-complect"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image2} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>
              Дизайн проект с комплектацией
            </div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
          <Link href={"/services/rebuild-project"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image3} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>
              Ремонт под ключ (с дизайн проектом заказчика)
            </div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link>
          <Link href={"/services/rebuild-complect"} className={styles.item}>
            <div className={styles.bg}>
              <Image src={image4} alt="" />
            </div>

            <div className={clsx(styles.name, "h4")}>
              Ремонт под ключ с комплектацией (с дизайн проектом заказчика)
            </div>
            <InlineButton className={styles.more}>Подробнее</InlineButton>
          </Link> */}
          {services &&
            services.map((elem) => {
              return (
                <Link
                  key={elem.id}
                  href={`/services/${slugifyWithOpts(elem.title)}_${elem.id}`}
                  className={styles.item}
                >
                  <div className={styles.bg}>
                    <Image
                      src={`${process.env.STORE_URL}${elem.photo_path}`}
                      alt=""
                      width={940}
                      height={300}
                      unoptimized={true}
                    />
                  </div>

                  <div className={clsx(styles.name, "h4")}>{elem.title}</div>
                  <InlineButton className={styles.more}>Подробнее</InlineButton>
                </Link>
              );
            })}
        </div>
        <SeoText page="services" />
      </div>
    </>
  );
};

export default page;
