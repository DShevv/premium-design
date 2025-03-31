import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/works-3.png";
import portfolio1 from "@/assets/images/portfolio2.png";
import portfolio2 from "@/assets/images/portfolio3.png";
import portfolio3 from "@/assets/images/portfolio4.png";
import portfolio4 from "@/assets/images/portfolio5.png";
import portfolio5 from "@/assets/images/portfolio6.png";
import Image from "next/image";
import BackButton from "@/components/Buttons/BackButton/BackButton";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import PortfolioSlider from "@/blocks/PortfolioSlider/PortfolioSlider";
import { slugifyWithOpts } from "@/utils/helper";
import { parsePortfolioContent } from "@/utils/parsePortfolioContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = await fetch(
    `${process.env.API_URL}/v1/portfolio/${slug.split("_")[1]}`
  ).then((res) => res.json());

  return seo
    ? {
        title: seo.title || "Портфолио",
        description: seo.subtitle,
        keywords: seo.keywords ?? "",
        alternates: {
          canonical: process.env.HOME_URL,
        },
        openGraph: {
          title: seo.title || "Портфолио",
          description: seo.subtitle,
        },
      }
    : {};
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.API_URL}/v1/portfolio`).then((res) =>
    res.json()
  );
  console.log(posts);
  return posts.data.map((post) => ({
    slug: `${slugifyWithOpts(post.title)}_${post.id}`,
  }));
}

const page = async ({ params }) => {
  const { slug } = await params;
  const workCase = await fetch(
    `${process.env.API_URL}/v1/portfolio/${slug.split("_")[1]}`
  ).then((res) => res.json());
  const parsedContent = parsePortfolioContent(workCase.content);
  console.log(parsedContent);
  console.log(workCase);

  return (
    <>
      <div className={styles.head}>
        <div className={styles.bg}>
          <Image src={hero} alt="" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.tags}>
            <div className={clsx(styles.tag, styles.active)}>Дизайн-проект</div>
          </div>
          <h1 className={clsx("h1-news", styles.title)}>
            Загородный дом в подмосковье
          </h1>
          <Breadcrumbs
            isWhite={true}
            items={[
              {
                title: "Главная",
                href: "/",
              },
              {
                title: "портфолио",
                href: "/portfolio",
              },
              {
                title: "Загородный дом в подмосковье",
                href: "/",
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.top}>
          <p className="body-1-regular">
            Разработка дизайн-проекта загородного дома в Подмосковье включала
            несколько ключевых этапов и подходов, направленных на создание
            уникального и функционального интерьера. Вот основные шаги, которые
            проходили при разработке проекта: Разработка дизайн-проекта
            загородного дома в Подмосковье включала несколько ключевых этапов и
            подходов, направленных на создание уникального и функционального
            интерьера. Вот основные шаги, которые проходили при разработке
            проекта:Разработка дизайн-проекта загородного дома в Подмосковье
            включала несколько ключевых этапов и подходов, направленных на
            создание уникального и функционального интерьера. Вот основные шаги,
            которые проходили при разработке проекта:Разработка дизайн-проекта
            загородного дома в Подмосковье включала несколько ключевых этапов и
            подходов, направленных на создание уникального и функционального
            интерьера. Вот основные шаги, которые проходили при разработке
            проекта:Разработка дизайн-проекта загородного дома в Подмосковье
            включала несколько ключевых этапов и подходов, направленных на
            создание уникального и функционального интерьера. Вот основные шаги,
            которые проходили при разработке проекта:
          </p>
          <div className={styles.side}>
            <h3 className={clsx("h3")}>О проекте</h3>
            <div dangerouslySetInnerHTML={{ __html: workCase.about }}></div>
            {/*     <div className={clsx("body-1-regular", styles.line)}>
              <span className="body-2">Название проекта:</span>
              Загородный дом в Подмосковье
            </div>
            <div className={clsx("body-1-regular", styles.line)}>
              <span className="body-2">Дизайнер:</span>
              Иван Иванов
            </div>
            <div className={clsx("body-1-regular", styles.line)}>
              <span className="body-2">Концепция:</span>
              Лофт с вставками ар-деко
            </div>
            <div className={clsx("body-1-regular", styles.line)}>
              <span className="body-2">Локация:</span>
              Барвиха
            </div>
            <div className={clsx("body-1-regular", styles.line)}>
              <span className="body-2">Период проектирования:</span>
              01.01.2024-01.01.2025
            </div> */}
          </div>
        </div>

        <div className={styles.content}>
          {parsedContent.map((item, index) => {
            if (item.img) {
              return (
                <div className={styles.step} key={index}>
                  <Image src={item.img} alt="" width={500} height={300} />
                  <div className={styles.text}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            }

            if (!item.img) {
              return (
                <div className={clsx(styles.step, styles.last)} key={index}>
                  {item.text && (
                    <div className={styles.text}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  )}
                  <PortfolioSlider items={workCase.gallery_images} />
                </div>
              );
            }

            return (
              <div className={styles.step} key={index}>
                <div className={styles.text}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
          {/*  <div className={styles.step}>
            <Image src={portfolio1} alt="" />
            <div className={styles.text}>
              <h4>Шаг 1: Сбор информации и анализ потребностей</h4>
              <p>
                Первый этап включает в себя сбор всех необходимых данных о
                будущем проекте. Специалисты компании посещают объект, выполняют
                все необходимые замеры, фиксируют особенности инженерных систем,
                такие как отопление, вентиляция и естественное освещение. Также
                учитываются предпочтения клиента по стилю, функциональности и
                бюджету. Первый этап включает в себя сбор всех необходимых
                данных о будущем проекте. Специалисты компании посещают объект,
                выполняют все необходимые замеры, фиксируют особенности
                инженерных систем, такие как отопление, вентиляция и
                естественное освещение. Также учитываются предпочтения клиента
                по стилю, функциональности и бюджету
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <Image src={portfolio2} alt="" />
            <div className={styles.text}>
              <h4>Шаг 2: Разработка общей концепции</h4>
              <p>
                Первый этап включает в себя сбор всех необходимых данных о
                будущем проекте. Специалисты компании посещают объект, выполняют
                все необходимые замеры, фиксируют особенности инженерных систем,
                такие как отопление, вентиляция и естественное освещение. Также
                учитываются предпочтения клиента по стилю, функциональности и
                бюджету. Первый этап включает в себя сбор всех необходимых
                данных о будущем проекте. Специалисты компании посещают объект,
                выполняют все необходимые замеры, фиксируют особенности
                инженерных систем, такие как отопление, вентиляция и
                естественное освещение. Также учитываются предпочтения клиента
                по стилю, функциональности и бюджету
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.text}>
              <h4>Шаг 3: Планировка и зонирование</h4>
              <p>
                На этом этапе выполняется распределение пространства и создание
                планировочных решений. Размещается мебель на обмерном плане, при
                необходимости готовятся предложения по перепланировке для более
                рационального использования имеющейся площади. Продумываются
                возможные решения, ориентированные на удобство использования
                каждой из комнат и зонирование помещения
              </p>
            </div>

            <PortfolioSlider items={workCase.gallery_images} />
          </div> */}

          <BackButton type="link" href={"/portfolio"} className={styles.back}>
            К портфолио
          </BackButton>
        </div>
      </div>
      <Feedback />
    </>
  );
};

export default page;
