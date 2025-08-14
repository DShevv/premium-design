import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/rebuild-complect/bg.jpg";
import live from "@/assets/images/rebuild-complect/live.jpg";
import optimize from "@/assets/images/rebuild-complect/optimize.jpg";
import zoom1 from "@/assets/images/rebuild-complect/hero1.jpg";
import zoom2 from "@/assets/images/rebuild-complect/hero2.jpg";
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
import CorrectConfiguration from "@/blocks/CorrectConfiguration/CorrectConfiguration";
import ConfigRevenue from "@/blocks/ConfigRevenue/ConfigRevenue";
import CompareBlock from "@/blocks/CompareBlock/CompareBlock";
import ComfortWorkRebuild from "@/blocks/ComfortWorkRebuild/ComfortWorkRebuild";
import { getSeoPage } from "@/services/getSeoPage";
import DesignDrop from "@/blocks/DesignDrop/DesignDrop";
import SeoText from "@/blocks/SeoText/SeoText";
export async function generateMetadata() {
  const { seo } = await getSeoPage("rebuild-complect");

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
  const res = await fetch(`${process.env.API_URL}/v1/before-after`, {
    next: { revalidate: 60 },
  });
  let compareItems;
  if (res.ok) {
    compareItems = await res.json();
  }
  compareItems = compareItems?.data
    .filter((elem) => elem.active)
    .map((elem) => ({
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
            Дизайн.Ремонт. Комплектация{" "}
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
                title: "Дизайн.Ремонт. Комплектация",
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
              Хотите сэкономить свои силы, время и нервы на стройке и получить
              именно то, о чём мечтали? Тогда заказывайте у нас полный цикл
              работ- от бетона до уюта . Мы сопровождаем ваш проект от самой
              идеи до момента, когда вы открываете дверь в свой новый дом — тот
              самый, о котором мечтали.
            </span>
            <span className="body-1">
              Мы не просто разрабатываем индивидуальный дизайн-проект и
              выполняем ремонт — мы полностью комплектуем ваш интерьер мебелью,
              техникой, светом, текстилем и декором. Каждый штрих продуман с
              заботой о вашем комфорте и стиле жизни.После сдачи вы получаете
              готовое жилое пространство, в которое можно сразу заехать и начать
              жить — без забот, без доделок, без суеты.
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
        </div>

        <CircleButton
          className={styles.mobile}
          dark={true}
          openPopupName="feedback"
        >
          оставить заявку
        </CircleButton>
      </div>

      {/* <DesignDrop /> */}

      {/*  <DesignSlider
        items={[
          {
            image: image1,
            title: "Черновые работы",
            time: "Срок: от 2 до 3,5 месяцев",
            text: `Подготовительные работы, демонтажные и монтажные работы, штукатурные работы, прокладка черновой электрики и вентиляции, а также установка черновой сантехники.`,
          },
          {
            image: image2,
            time: "Срок: от 2 до 3 месяцев",
            title: "Мониторинг цен",
            text: `Это позволяет заказчику сэкономить средства  точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
          },
          {
            image: image3,
            time: "Срок: от 1 до 3,5 месяцев",
            title: "поиск выгодных предложений",
            text: `Это позволяет заказчику сэкономить средства без потери качеств.`,
          },
        ]}
      /> */}

      <ComfortWorkRebuild />

      {/*    <CompareBlock
        items={compareItems}
        className={clsx(styles.compare, styles.slider)}
        sliderClass={styles.swiper}
        title={"До-после нашего ремонта под ключ"}
      /> */}

      <StepBlock
        image={live}
        subtitle={"[ Оставьте заботы ]"}
        title={"Живите, а не контролируйте"}
      >
        Представьте, что ваша будущая квартира создаётся без вашей головной
        боли. Вы не звоните мастерам, не спорите с поставщиками, не отслеживаете
        этапы — мы всё это делаем за вас. Ваше пространство рождается как по
        щелчку: вы приходите — и оно готово к жизни, красивое, удобное и
        полностью укомплектованное.
      </StepBlock>

      <StepBlock
        image={optimize}
        subtitle={"[ Разумно вкладывайте ]"}
        title={"Оптимизация бюджета: разумный подход к большим результатам"}
        isReversed={true}
      >
        Мы знаем, как важно вложить средства с умом — особенно в такой сложный и
        многослойный процесс, как создание интерьера. Поэтому мы используем
        комплексный подход, при котором каждое решение проходит сквозь призму
        эффективности: от архитектурной концепции до закупки последней детали
        декора.
      </StepBlock>

      {/*  <PopularFaq /> */}

      <OurProjects title={"Реализованные проекты"} />
      <SeoText page="rebuild-complect" />
      <Feedback />
    </>
  );
};

export default page;
