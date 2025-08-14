import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/steps2.png";
import zoom1 from "@/assets/images/works-2.png";
import zoom2 from "@/assets/images/portfolio2.png";
import stepBlock1 from "@/assets/images/portfolio4.png";
import stepBlock2 from "@/assets/images/design-project/price.jpg";
import project1 from "@/assets/images/project-1.jpg";
import project3 from "@/assets/images/project-3.jpg";

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
import SeoText from "@/blocks/SeoText/SeoText";
import image11 from "@/assets/images/design-project/1.png";
import image12 from "@/assets/images/design-project/2.jpg";
import image13 from "@/assets/images/design-project/3.png";
import image14 from "@/assets/images/design-project/4.jpg";
import image15 from "@/assets/images/design-project/5.png";
import image16 from "@/assets/images/design-project/6.jpg";
import image17 from "@/assets/images/design-project/7.jpg";
import image18 from "@/assets/images/design-project/8.jpg";

const workSteps = [
  {
    id: 1,
    title: "Обмеры, фото – и видео фиксация, анкетирование",
    image: image11,
    number: 1,
    description:
      "Мы выезжаем на объект для проведения тщательного анализа, выполнения точных замеров и фотофиксации всех необходимых деталей.",
  },
  {
    id: 2,
    title: "Работа над планировочными решениями",
    image: image12,
    number: 2,
    description:
      "Мы разрабатываем 3–4 варианта планировочного решения, каждый из которых адаптируется под ваши предпочтения, образ жизни и архитектурные особенности пространства. Такой подход позволяет выбрать оптимальную конфигурацию, идеально сочетающую эстетику, функциональность и комфорт.",
  },
  {
    id: 3,
    title: "Обсуждение, согласование концепций",
    image: image13,
    number: 3,
    description:
      "Для каждого помещения мы проводим детальное обсуждение концепции, учитывая функциональные задачи, эстетические предпочтения и особенности пространства. Такой подход гарантирует согласование решений, максимально отражающих ваш стиль и образ жизни.",
  },
  {
    id: 4,
    title: "Создание 3D визуализаций",
    image: image14,
    number: 4,
    description:
      "Создание 3D визуализаций позволяет вам заранее «увидеть» будущее пространство и оценить эстетические и функциональные решения в реалистичной форме. Мы тщательно прорисовываем материалы, свет, мебель и композицию, чтобы каждая деталь соответствовала концепции и вашему видению.",
  },
  {
    id: 5,
    title: "Внесение финальных правок по визуализациям, согласование",
    image: image15,
    number: 5,
    description:
      "После создания визуализаций мы внимательно анализируем каждую деталь вместе с вами, чтобы внести финальные корректировки. Этот этап гарантирует, что все элементы проекта — от материалов до расстановки мебели — полностью соответствуют вашему видению и ожиданиям.",
  },
  {
    id: 6,
    title: "Работа над технической документацией",
    image: image16,
    number: 6,
    description:
      "На этапе работы над технической документацией мы формируем полный пакет чертежей и спецификаций, необходимый для реализации проекта. Все детали — от планов электрики и сантехники до монтажных схем и ведомостей материалов — выполняются с высокой точностью и соответствием согласованной концепции, обеспечивая беспроблемную реализацию и контроль качества.",
  },
  {
    id: 7,
    title: "Верстка и печать альбома",
    image: image17,
    number: 7,
    description:
      "На финальном этапе осуществляется верстка и печать альбома проекта — мы компонуем материалы, чертежи, визуализации и технические сведения в единый документ, отражающий концепцию интерьера. Каждый разворот оформляется в соответствии с эстетикой проекта и бренда, а печатный альбом становится удобным инструментом для согласования, презентаций и дальнейшей реализации.",
  },
  {
    id: 8,
    title: "Сдача проекта и наши поздравления",
    image: image18,
    number: 8,
    description:
      "На завершающем этапе происходит официальная сдача проекта заказчику. Мы благодарим клиента за доверие и совместную работу. Этот момент — не просто финал, а начало новых возможностей. Мы рады быть частью истории, которую создаёт наш клиент.",
  },
];

const faqItems = [
  {
    id: 1,
    title: "Какие документы необходимы для старта проекта?",
    content: (
      <>
        Для начала работы с вами мы запрашиваем:
        <ul>
          <li>обмерный план</li>
          <li>
            техническое задание: пожелания по стилю, функционалу и бюджету
          </li>
          <li>фотографии и видео существующего состояния помещения</li>
        </ul>
        После получения этой информации наши специалисты проводят анализ и
        готовят коммерческое предложение
      </>
    ),
  },
  {
    id: 2,
    title: "Сколько времени занимает разработка дизайн-проекта?",
    content: (
      <>
        Сроки зависят от масштаба и сложности интерьера:
        <ol>
          <li>Мини-проект (одна зона, до 60 м²) — 70 рабочих дней</li>
          <li>Средний проект (квартира 60–100 м²) — 100 рабочих дней</li>
          <li>
            Большой проект (таунхаус, дом, или квартира более 100 м²) — от 120
            дней.
          </li>
        </ol>
        В каждом случае мы согласуем чёткий график и этапы работ
      </>
    ),
  },
  {
    id: 3,
    title: "Что входит в стоимость дизайн-проекта?",
    content: (
      <>
        В базовую комплектацию входят:
        <ul>
          <li>планировочные решения и зонирование</li>
          <li>рабочие чертежи (электрика, сантехника, потолки, полы)</li>
          <li>спецификация отделочных материалов</li>
          <li>подбор мебели, светильников и оборудования</li>
          <li>3D-визуализации ключевых зон</li>
        </ul>
        Опционально можно заказать услугу «Комплектация» — детальную проработку
        закупок и поставок у ведущих европейских брендов
      </>
    ),
  },
  {
    id: 4,
    title: "На каком этапе происходит комплектация интерьера?",
    content: (
      <>
        Комплектация — это дополнительный сервис, который мы подключаем после
        утверждения всех рабочих чертежей и визуализаций. Она включает:
        <ul>
          <li>финальный подбор и согласование артикулов</li>
          <li>расчёт точных объёмов и логистику</li>
          <li>подготовку спецификаций для поставщиков</li>
          <li>контроль сроков и качества поставок</li>
        </ul>
        Таким образом вы получаете «поставочный пакет» под ключ без лишних
        хлопот.
      </>
    ),
  },
  {
    id: 5,
    title: "Можно ли вносить изменения в процессе разработки?",
    content: (
      <>
        Да. Мы предусмотрели два раунда корректировок на этапе эскизов и один —
        после получения рабочих чертежей. Более серьёзные изменения после
        подписания чертежей оговариваются отдельно и могут скорректировать сроки
        и бюджет
      </>
    ),
  },
];

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
          <ImageZoom src={project1} className={styles.zoomed} id="first" />
          <ImageZoom src={zoom2} className={styles.zoomed} id="second" />
          <ImageZoom src={project3} className={styles.zoomed} id="third" />
        </div>

        <CircleButton
          className={styles.mobile}
          dark={true}
          openPopupName="feedback"
        >
          оставить заявку
        </CircleButton>
      </div>

      <DesignDrop items={workSteps} />

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
        subtitle={"[ Разработка дизайн проекта ]"}
        title={"Сроки Работы по дизайн проекту:*"}
      >
        Площадь 60 м2 – 70 рабочих дней <br />
        Площадь 90 м2 – 100 рабочих дней <br />
        Площадь 120 м2 – 120 рабочих дней <br />
        <br />
        *Сроки указаны ориентировочно, каждый проект индивидуален и сроки
        обговариваются отдельно
      </StepBlock>
      <StepBlock
        isReversed={true}
        image={stepBlock2}
        subtitle={"[ Ценовая политика ]"}
        title={"Стоимость Дизайн-проекта:*"}
      >
        Цена за метр ≈ 40$ м2 <br />
        Площадь 50 м2 - 2000$ <br />
        Площадь 70 м2 – 2800$ <br />
        Площадь 90 м2 – 3600$ <br />
        <br />
        *Площадь более 120м2 – цена договорная <br />
        *Площадь менее 50м2 – стоимость проекта 2000$ <br />
        *Цена за каждый проект индивидуальна и рассчитывается за каждый проект
        отдельно
      </StepBlock>

      <IncludesBlock />
      <PopularFaq items={faqItems} />

      <OurProjects title={"Реализованные проекты"} />
      <SeoText page="design-project" />
      <Feedback />
    </>
  );
};

export default page;
