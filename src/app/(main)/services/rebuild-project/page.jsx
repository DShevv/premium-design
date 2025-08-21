import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/rebuild-project/bg.jpg";
import conditions from "@/assets/images/rebuild-project/conditions.jpg";
import zoom1 from "@/assets/images/rebuild-project/project-1.jpg";
import zoom2 from "@/assets/images/rebuild-project/project-2.jpg";
import zoom3 from "@/assets/images/rebuild-project/project-3.jpg";
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
import SeoText from "@/blocks/SeoText/SeoText";
import image11 from "@/assets/images/rebuild-project/1.jpg";
import image12 from "@/assets/images/rebuild-project/2.png";
import image13 from "@/assets/images/rebuild-project/3.png";
import image14 from "@/assets/images/rebuild-project/4.jpg";
import image15 from "@/assets/images/rebuild-project/5.jpg";
import image16 from "@/assets/images/rebuild-project/6.jpg";
import image17 from "@/assets/images/rebuild-project/7.jpg";
import image18 from "@/assets/images/rebuild-project/8.jpg";

const workSteps = [
  {
    id: 1,
    title: "Заявка",
    image: image11,
    number: 1,
    description:
      "Вы оставляете заявку на сайте или звоните нам по короткому номеру 7728.",
  },
  {
    id: 2,
    title: "Подготовительная работа и выезд на объект",
    image: image12,
    number: 2,
    description:
      "Выезжаем на объект для точных замеров, оценки состояния помещения и фотофиксации всех деталей. Уточняем ваши пожелания, сроки и изучаем дизайн-проект с технической документацией.",
  },
  {
    id: 3,
    title: "Коммерческое предложение",
    image: image13,
    number: 3,
    description:
      "Готовим подробную смету работ, подбираем материалы и рассчитываем общую стоимость ремонта.",
  },
  {
    id: 4,
    title: "Заключение договора",
    image: image14,
    number: 4,
    description:
      "Оформляем договор, в котором фиксируем сроки, этапы работ и окончательный бюджет проекта.",
  },
  {
    id: 5,
    title: "Начало работ",
    image: image15,
    number: 5,
    description:
      "В течение 2 рабочих дней после подписания договора наша команда приступает к реализации вашего проекта",
  },
  {
    id: 6,
    title: "Контроль",
    image: image16,
    number: 6,
    description:
      "Каждую неделю вы получаете фото- и текстовый отчёт о проделанных работах и текущем статусе. Раз в месяц подписываем акт, подтверждающий объёмы и качество выполненного ремонта.",
  },
  {
    id: 7,
    title: "Финальная приёмка",
    image: image17,
    number: 7,
    description:
      "После окончания работ организуем приёмку объекта, передаём ключи.",
  },
  {
    id: 8,
    title: "Гарантии и поддержка",
    image: image18,
    number: 8,
    description:
      "Предоставляем официальную гарантию на все виды выполненных работ.",
  },
];

const faqItems = [
  {
    id: 1,
    title: "На каком этапе согласовывается дизайн-проект?",
    content: (
      <>
        <p>
          Дизайн-проект разрабатывается до начала строительных работ, чтобы
          зафиксировать все стилистические, функциональные и технические
          решения.
        </p>
        <p>
          Перед подписанием договора мы проводим презентацию визуализаций,
          вносим правки и утверждаем итоговые планы.
        </p>
        <p>
          Это позволяет избежать переделок в процессе ремонта и гарантирует
          полное соответствие ваших ожиданий и готового результата.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Как рассчитывается стоимость ремонта «под ключ»?",
    content: (
      <>
        <p>
          Мы готовим детальную смету на основе утверждённого дизайн-проекта.
        </p>
        <p>
          В неё входят все этапы работ, материалы отделки и инженерные услуги.
        </p>
        <p>
          Наш специалист выезжает на объект для разбора нюансов планировки и
          фиксирует дополнительные пожелания, что обеспечивает точность расчёта
          и отсутствие скрытых платежей.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Что входит в услугу «ремонт под ключ»?",
    content: (
      <>
        <ul>
          <li>
            Полный цикл работ: от демонтажа до уборки после финишной отделки
          </li>
          <li>Закупка и доставка материалов по утверждённой смете</li>
          <li>Координация всех подрядчиков</li>
          <li>Ежедневный контроль качества и сроков</li>
          <li>Финальная приёмка с оформлением актов выполненных работ</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Сколько времени занимает полный цикл ремонта?",
    content: (
      <>
        Срок ремонта зависит от площади и сложности проекта. Итоговый график мы
        согласуем перед стартом и регулярно обновляем по факту выполнения
        ключевых этапов.
      </>
    ),
  },
  {
    id: 5,
    title: "Кто отвечает за контроль качества и соблюдение сроков?",
    content: (
      <>
        За организацию и контроль отвечает прораб, который:
        <ul>
          <li>Координирует работу всех бригад</li>
          <li>Проводит ежедневные обходы и фотоотчёты</li>
          <li>
            Своевременно информирует вас о ходе работ и возможных изменениях
          </li>
        </ul>
        Дизайнер проверяет соответствие отделки визуализациям, а вы всегда
        остаётесь в курсе через личный кабинет или мессенджеры
      </>
    ),
  },
  {
    id: 6,
    title: "Какие гарантии на работы и материалы вы предоставляете?",
    content: (
      <>
        Мы даём официальную гарантию:
        <ul>
          <li>2 года на все строительные и отделочные работы</li>
          <li>От 1 до 5 лет на материалы в зависимости от производителя</li>
        </ul>
        Гарантийное сопровождение включает выезд специалиста и оперативное
        решение любых вопросов в течение установленного срока.
      </>
    ),
  },
];

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
          <h1 className={clsx("h1-news", styles.title)}>Ремонт «Под ключ»</h1>
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
                title: "Ремонт «Под ключ»",
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
                Планируете отделку новостройки, но не знаете, с чего начать? Или
                затеяли ремонт с перепланировкой и беспокоитесь, что все ли
                будет сделано правильно, без переделок, чтобы не выйти за рамки
                желаемого бюджета?
              </span>

              <span>
                Все эти вопросы отпадают, если заказать ремонт под ключ. Наша
                команда профессионалов возьмет на себя все зависящие от нас
                этапы работы.
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

      <DesignDrop items={workSteps} />

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
        image={conditions}
        subtitle={"[ Как мы работаем ]"}
        title={"Условия работы"}
      >
        МЫ БЕРЕМ В РАБОТУ:
        <ul>
          <li>Квартиры под ключ любой площади</li>
          <li>Новостройки</li>
          <li>Нежилые вторички, свободные от старой мебели и личных вещей</li>
          <li>
            Квартиры с наличием дизайн-проекта: наших дизайнеров либо работы
            других дизайн-студий
          </li>
        </ul>
        <br />
        МЫ НЕ БЕРЕМ В РАБОТУ:
        <ul>
          <li>Без дизайн-проекта</li>
          <li>Жилые квартиры</li>
          <li>Отдельные комнаты/кухни/санузлы</li>
        </ul>
      </StepBlock>

      <PopularFaq items={faqItems} />

      <OurProjects title={"Реализованные проекты"} />
      <SeoText page="rebuild-project" />
      <Feedback />
    </>
  );
};

export default page;
