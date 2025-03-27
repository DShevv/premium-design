import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/steps2.png";
import zoom1 from "@/assets/images/design-complect.png";
import zoom2 from "@/assets/images/steps1.png";
import Image from "next/image";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import ImageZoom from "@/components/ImageZoom/ImageZoom";
import DesignSlider from "@/blocks/DesignSlider/DesignSlider";
import StepBlock from "@/blocks/StepBlock/StepBlock";
import IncludesBlock from "@/blocks/IncludesBlock/IncludesBlock";
import PopularFaq from "@/blocks/PopularFaq/PopularFaq";
import image1 from "@/assets/images/steps2.png";
import image2 from "@/assets/images/hero.png";
import image3 from "@/assets/images/hero-light.png";
import CorrectConfiguration from "@/blocks/CorrectConfiguration/CorrectConfiguration";
import ConfigRevenue from "@/blocks/ConfigRevenue/ConfigRevenue";
import { getSeoPage } from "@/services/getSeoPage";

export async function generateMetadata() {
  const { seo } = await getSeoPage("design-complect");

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

const page = () => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.bg}>
          <Image src={hero} alt="" />
        </div>
        <div className={styles.wrapper}>
          <h1 className={clsx("h1-news", styles.title)}>
            Дизайн проект с комплектацией
          </h1>
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
                title: "Дизайн проект с комплектацией",
                href: "/",
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroHeader}>
          <div className={styles.text}>
            <span className="body-1-regular">
              Комплектация дизайн-проекта является одним из самых важных этапов
              в создании уникального и функционального интерьера. На этом этапе
              мы тщательно подбираем и координируем все необходимые материалы,
              мебель и декоративные элементы, чтобы обеспечить гармоничное
              и стильное оформление пространства. Наши специалисты учитывают все
              детали, от текстуры и цвета материалов до формы и стиля мебели,
              чтобы каждый элемент идеально вписывался в общую концепцию
              проекта.
            </span>
          </div>
          <CircleButton
            className={styles.desktop}
            dark={true}
            openPopupName={"feedback"}
          >
            оставить заявку
          </CircleButton>
        </div>

        <div className={styles.imageBox}>
          <ImageZoom src={zoom1} className={styles.zoomed} id="first" />
          <ImageZoom src={zoom2} className={styles.zoomed} id="second" />
        </div>

        <CircleButton
          className={styles.mobile}
          dark={true}
          openPopupName={"feedback"}
        >
          оставить заявку
        </CircleButton>
      </div>

      <DesignSlider
        items={[
          {
            image: image1,
            title: "Мониторинг цен и поиск выгодных предложений",
            text: `Это позволяет заказчику сэкономить средства без потери качества.`,
          },
          {
            image: image2,
            title: "Мониторинг цен",
            text: `Это позволяет заказчику сэкономить средства  точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
          },
          {
            image: image3,
            title: "поиск выгодных предложений",
            text: `Это позволяет заказчику сэкономить средства без потери качеств.`,
          },
        ]}
      />

      <CorrectConfiguration />
      <ConfigRevenue />

      <PopularFaq />

      <OurProjects title={"Реализованные дизайн-проекты"} />
      <Feedback />
    </>
  );
};

export default page;
