import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/rebuild-head.jpg";
import zoom1 from "@/assets/images/rebuild2.png";
import zoom2 from "@/assets/images/rebuild1.png";
import zoom3 from "@/assets/images/design-slider.jpg";
import stepBlock1 from "@/assets/images/portfolio4.png";
import stepBlock2 from "@/assets/images/steps1.png";
import Image from "next/image";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import ImageZoom from "@/components/ImageZoom/ImageZoom";
import DesignSlider from "@/blocks/DesignSlider/DesignSlider";
import StepBlock from "@/blocks/StepBlock/StepBlock";
import IncludesBlock from "@/blocks/IncludesBlock/IncludesBlock";
import PopularFaq from "@/blocks/PopularFaq/PopularFaq";
import image1 from "@/assets/images/prepare.png";
import image2 from "@/assets/images/hero.png";
import image3 from "@/assets/images/hero-light.png";
import CompareBlock from "@/blocks/CompareBlock/CompareBlock";
import ComfortWork from "@/blocks/ComfortWork/ComfortWork";
import { getSeoPage } from "@/services/getSeoPage";
import DesignDrop from "@/blocks/DesignDrop/DesignDrop";

export async function generateMetadata() {
  const { seo } = await getSeoPage("rebuild-project");

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
  const res = await fetch(`${process.env.API_URL}/v1/before-after`);
  let compareItems;
  if (res.ok) {
    compareItems = await res.json();
  }
  compareItems = compareItems?.data.map((elem) => ({
    before: elem.before_image,
    after: elem.after_image,
  }));

  return (
    <>
      <div className={styles.head}>
        <div className={styles.bg}>
          <Image src={hero} alt="" />
        </div>
        <div className={styles.wrapper}>
          <h1 className={clsx("h1-news", styles.title)}>
            Ремонт под ключ (с дизайн проектом заказчика)
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
                title: "Ремонт под ключ (с дизайн проектом заказчика)",
                href: "/",
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroHeader}>
          <div className={styles.text}>
            <p className="body-1-regular">
              <span>
                ланируете отделку новостройки, но не знаете, с чего начать? Или
                затеяли ремонт с перепланировкой и беспокоитесь, что
                все ли будет сделано правильно, без переделок, чтобы не выйти
                за рамки желаемого бюджета?
              </span>

              <span>
                Все эти вопросы отпадают, если заказать ремонт под ключ
                с дизайн-проектом интерьера. Наша команда профессионалов возьмет
                на себя все зависящие от нас этапы работы.
              </span>
            </p>
            <span className="body-1">
              Будь то функциональный дизайн интерьера однокомнатной
              квартиры-студии, или дизайнерский ремонт под ключ в новостройке с
              удобной планировкой, а может, неповторимый ремонт по
              дизайн-проекту элитной квартиры или коттеджа, — мы внимательно
              слушаем все пожелания заказчика и реализуем их в наших проектах.
            </span>
          </div>
          <CircleButton
            className={styles.desktop}
            dark={true}
            openPopupName="feedback"
          >
            оставить заявку
          </CircleButton>
        </div>

        <div className={styles.imageBox}>
          <ImageZoom src={zoom1} className={styles.zoomed} id="first" />
          <ImageZoom src={zoom2} className={styles.zoomed} id="second" />
          <ImageZoom src={zoom3} className={styles.zoomed} id="third" />
        </div>

        <CircleButton
          className={styles.mobile}
          dark={true}
          openPopupName="feedback"
        >
          оставить заявку
        </CircleButton>
      </div>

      <DesignDrop />

      {/* <DesignSlider
        title={"Как проходят работы по ремонту"}
        items={[
          {
            image: image1,
            title: "Черновые работы",
            time: "Срок: от 2 до 3,5 месяцев",
            text: `Подготовительные работы, демонтажные и монтажные работы, штукатурные работы, прокладка черновой электрики и вентиляции, а также установка черновой сантехники.`,
          },
          {
            image: image2,
            title: "Работа",
            time: "Срок: от 1 до 3,5 месяцев",
            text: `Мы выезжаем на  для проведения тщательного анализа, выполнения точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
          },
          {
            image: image3,
            title: "Контроль качества",
            time: "Срок: от 2 до 3 месяцев",
            text: `Мы выезжаем на объект для  тщательного анализа,  этапов проектирования и реализации.`,
          },
        ]}
      /> */}

      <ComfortWork />

      <CompareBlock
        items={compareItems}
        className={clsx(styles.compare, styles.slider)}
        sliderClass={styles.swiper}
        title={"До-после нашего ремонта под ключ"}
      />

      <StepBlock
        image={hero}
        subtitle={"[ Бесплатный расчет ]"}
        title={"Учтем все нюансы и дадим вам точный расчет"}
      >
        Для определения точной стоимости именно вашего дизайнерского ремонта под
        ключ, мы предлагаем бесплатно составить для вас подробную смету на
        ремонтные работы. Расчет может будет выполнен основе вашего
        существующего дизайн-проекта. Просчет обязательно сопровождается выездом
        нашего специалиста на объект для консультации. Этот шаг позволяет нам
        учесть все особенности вашего помещения и гарантировать максимальную
        точность расчета.
      </StepBlock>

      <PopularFaq />

      <OurProjects title={"Реализованные дизайн-проекты"} />
      <Feedback />
    </>
  );
};

export default page;
