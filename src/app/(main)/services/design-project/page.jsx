import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/steps2.png";
import zoom1 from "@/assets/images/works-2.png";
import zoom2 from "@/assets/images/portfolio2.png";
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
import image1 from "@/assets/images/design-slider.jpg";
import image2 from "@/assets/images/hero.png";
import image3 from "@/assets/images/hero-light.png";
import { getSeoPage } from "@/services/getSeoPage";
import DesignDrop from "@/blocks/DesignDrop/DesignDrop";

export async function generateMetadata() {
  const { seo } = await getSeoPage("design-project");

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
          <h1 className={clsx("h1-news", styles.title)}>Дизайн проект</h1>
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
                title: "Дизайн проект",
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
              Мы не просто создаем красивый интерьер, но разрабатываем удобное
              и функциональное пространство, в котором вы сможете чувствовать
              себя комфортно в любое время. Наша задача — учесть все ваши
              потребности и предпочтения, чтобы сделать каждое помещение
              не только эстетически привлекательным, но и практичным для
              повседневной жизни. Мы стремимся к тому, чтобы каждый элемент
              интерьера отвечал вашим ожиданиям и создавал атмосферу, в которой
              вы будете чувствовать себя как дома.
            </span>
            <span className="body-1">
              Мы стремимся к тому, чтобы каждое решение было логичным
              и гармонично вписывалось в общую концепцию, обеспечивая
              максимальный комфорт и удовольствие от использования пространства.
              Наш подход заключается в том, чтобы учитывать все аспекты вашего
              образа жизни и предпочтений, чтобы создать интерьер, который
              не только выглядит великолепно, но и функционирует так, как
              вы того хотите.
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

      <DesignDrop />

      {/* <DesignSlider
        items={[
          {
            image: image1,
            title: "Обмеры",
            text: `Мы выезжаем на объект для проведения тщательного анализа, выполнения точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
          },
          {
            image: image2,
            title: "Работа",
            text: `Мы выезжаем на  для проведения тщательного анализа, выполнения точных замеров и фотофиксации всех необходимых деталей. На основе собранных данных мы разрабатываем подробные обмерные чертежи, включая планы, разрезы и сечения, которые служат надежной основой для дальнейших этапов проектирования и реализации.`,
          },
          {
            image: image3,
            title: "Контроль качества",
            text: `Мы выезжаем на объект для  тщательного анализа,  этапов проектирования и реализации.`,
          },
        ]}
      /> */}
      <StepBlock
        image={stepBlock1}
        subtitle={"[ Авторское сопровождение ]"}
        title={"Мы с вами на всех этапах работы"}
      >
        Мы разрабатываем четкую схему выполнения проектных предложений и строго
        контролируем выполнение работ подрядчиков на всех этапах. Такой подход
        позволяет нам исключить возможность возникновения ошибок или недочетов
        на смежных участках работ. Мы не бросаем свою работу на половине пути,
        а сопровождаем проекты от начала до конца, обеспечивая полную реализацию
        всех запланированных решений и гарантируя высокое качество конечного
        результата. Наше внимание к деталям и ответственный подход гарантируют,
        что каждый проект будет выполнен в соответствии с самыми высокими
        стандартами и ожиданиями наших клиентов.
      </StepBlock>
      <StepBlock
        isReversed={true}
        image={stepBlock2}
        subtitle={"[ Комплектация объекта ]"}
        title={"Мы с вами на всех этапах работы"}
      >
        Мы разрабатываем четкую схему выполнения проектных предложений и строго
        контролируем выполнение работ подрядчиков на всех этапах. Такой подход
        позволяет нам исключить возможность возникновения ошибок или недочетов
        на смежных участках работ. Мы не бросаем свою работу на половине пути,
        а сопровождаем проекты от начала до конца, обеспечивая полную реализацию
        всех запланированных решений и гарантируя высокое качество конечного
        результата. Наше внимание к деталям и ответственный подход гарантируют,
        что каждый проект будет выполнен в соответствии с самыми высокими
        стандартами и ожиданиями наших клиентов.
      </StepBlock>

      <IncludesBlock />
      <PopularFaq />

      <OurProjects title={"Реализованные дизайн-проекты"} />
      <Feedback />
    </>
  );
};

export default page;
