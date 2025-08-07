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
import DesignDrop from "@/blocks/DesignDrop/DesignDrop";
import SeoText from "@/blocks/SeoText/SeoText";
import image11 from "@/assets/images/about.png";
import Companies from "@/blocks/Companies/Companies";

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
    image: image11,
    number: 2,
    description:
      "Мы разрабатываем 3–4 варианта планировочного решения, каждый из которых адаптируется под ваши предпочтения, образ жизни и архитектурные особенности пространства. Такой подход позволяет выбрать оптимальную конфигурацию, идеально сочетающую эстетику, функциональность и комфорт.",
  },
  {
    id: 3,
    title: "Обсуждение, согласование концепций",
    image: image11,
    number: 3,
    description:
      "Для каждого помещения мы проводим детальное обсуждение концепции, учитывая функциональные задачи, эстетические предпочтения и особенности пространства. Такой подход гарантирует согласование решений, максимально отражающих ваш стиль и образ жизни.",
  },
  {
    id: 4,
    title: "Создание 3D визуализаций",
    image: image11,
    number: 4,
    description:
      "Создание 3D визуализаций позволяет вам заранее «увидеть» будущее пространство и оценить эстетические и функциональные решения в реалистичной форме. Мы тщательно прорисовываем материалы, свет, мебель и композицию, чтобы каждая деталь соответствовала концепции и вашему видению.",
  },
  {
    id: 5,
    title: "Внесение финальных правок по визуализациям, согласование",
    image: image11,
    number: 5,
    description:
      "После создания визуализаций мы внимательно анализируем каждую деталь вместе с вами, чтобы внести финальные корректировки. Этот этап гарантирует, что все элементы проекта — от материалов до расстановки мебели — полностью соответствуют вашему видению и ожиданиям.",
  },
  {
    id: 6,
    title: "Работа над технической документацией",
    image: image11,
    number: 6,
    description:
      "На этапе работы над технической документацией мы формируем полный пакет чертежей и спецификаций, необходимый для реализации проекта. Все детали — от планов электрики и сантехники до монтажных схем и ведомостей материалов — выполняются с высокой точностью и соответствием согласованной концепции, обеспечивая беспроблемную реализацию и контроль качества.",
  },
  {
    id: 7,
    title: "Верстка и печать альбома",
    image: image11,
    number: 7,
    description:
      "На финальном этапе осуществляется верстка и печать альбома проекта — мы компонуем материалы, чертежи, визуализации и технические сведения в единый документ, отражающий концепцию интерьера. Каждый разворот оформляется в соответствии с эстетикой проекта и бренда, а печатный альбом становится удобным инструментом для согласования, презентаций и дальнейшей реализации.",
  },
  {
    id: 8,
    title: "Сдача проекта и наши поздравления",
    image: image11,
    number: 8,
    description:
      "На завершающем этапе происходит официальная сдача проекта заказчику. Мы благодарим клиента за доверие и совместную работу. Этот момент — не просто финал, а начало новых возможностей. Мы рады быть частью истории, которую создаёт наш клиент.",
  },
];

const faqItems = [
  {
    id: 1,
    title: "На каком этапе происходит комплектация интерьера?",
    content: (
      <>
        Комплектация стартует после утверждения дизайн-проекта и подписания
        договора. На этом этапе мы финализируем все чертежи, 3D-визуализации и
        спецификации. Затем наши специалисты подготавливают подробный список
        материалов, мебели и оборудования, согласуют его с вами и запускают
        закупку
      </>
    ),
  },
  {
    id: 2,
    title: "Как формируется спецификация материалов и мебели?",
    content: (
      <>
        Мы собираем информацию из трёх источников: технического задания,
        дизайн-концепции и ваших личных пожеланий. Каждый элемент проходит
        детальную проработку: размеры, цвета, фактуры, артикулы поставщиков. В
        результате вы получаете полный PDF-файл с фотографиями, описаниями,
        ценами и сроками поставки
      </>
    ),
  },
  {
    id: 3,
    title: "Что включено в стоимость комплектации?",
    content: (
      <>
        Стоимость покрытия включает:
        <ul>
          <li>закупку и доставку всех позиций по спецификации;</li>
          <li>услуги менеджера проекта по координации поставок;</li>
          <li>хранение материалов на складе (до 30 дней);</li>
          <li>
            проверку качества и соответствия каждой позиции заказанным образцам.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Как учитываются пожелания и правки заказчика?",
    content: (
      <>
        После первого согласования спецификации вы можете вносить до двух
        раундов правок без перерасчёта цены. Если потребуются дополнительные
        изменения — мы оперативно пересчитаем стоимость и согласуем новый график
        поставок. Все изменения фиксируются в приложении к договору, чтобы
        исключить недоразумения.
      </>
    ),
  },
  {
    id: 5,
    title: "Как организована логистика и хранение материалов?",
    content: (
      <>
        Доставка осуществляется «до двери» объекта с разгрузкой и проверкой
        сохранности упаковки. Мы обеспечиваем складирование на наших складах под
        охраной и оптимальные условия хранения (температура, влажность). При
        необходимости организуем поэтапную подачу материалов на объект согласно
        монтажному графику.
      </>
    ),
  },
  {
    id: 6,
    title: "Что делать при непредвиденных задержках поставок?",
    content: (
      <>
        Если поставщик не успевает поставить товар в сроки, мы сразу предлагаем:
        <ul>
          <li>
            подбор альтернативных позиций той же ценовой категории и стиля;
          </li>
          <li>ускоренный докуп или частичную поставку готовых элементов;</li>
          <li>компенсационные опции (скидки или бонусные услуги).</li>
        </ul>
        В любом случае вы всегда получите полную прозрачность статуса заказа и
        предложений по выходу из ситуации.
      </>
    ),
  },
];

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

const page = async () => {
  const certificates = await fetch(`${process.env.API_URL}/v1/brands`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => undefined);

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
              Комплектация дизайн-проекта — ключевой этап, на котором мы
              подбираем и координируем поставки мебели, отделочных материалов,
              освещения, сантехники, декора и текстиля.Наши основные партнёры —
              ведущие европейские бренды Pianca, Flos, FMG, B&B Italia,
              Poliform,ЕDG и др., чьи изделия отличаются безупречным качеством и
              уникальным стилем.С нами вы экономите своё время и получаете
              бескомпромиссный результат.Мы обеспечиваем полный пакет
              комплектации для любых объектов — частных домов, квартир, офисов,
              ресторанов и отелей, продумывая каждую деталь, чтобы все элементы
              интерьера гармонично сочетались между собой.
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

      <DesignDrop items={workSteps} />

      {/*  <DesignSlider
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
      /> */}

      <CorrectConfiguration />
      <ConfigRevenue />
      <Companies items={certificates.data} />

      <PopularFaq items={faqItems} />

      <OurProjects title={"Реализованные проекты"} />
      <SeoText page="design-complect" />
      <Feedback />
    </>
  );
};

export default page;
