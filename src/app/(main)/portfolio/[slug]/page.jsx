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
import CompareBlock from "@/blocks/CompareBlock/CompareBlock";
import BackButton from "@/components/Buttons/BackButton/BackButton";

const page = () => {
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
        <div className={styles.side}>
          <h3 className={clsx("h3")}>О проекте</h3>
          <div className={clsx("body-1-regular", styles.line)}>
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
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Разработка дизайн-проекта загородного дома в Подмосковье включала
            несколько ключевых этапов и подходов, направленных на создание
            уникального и функционального интерьера. Вот основные шаги, которые
            проходили при разработке проекта:
          </p>
          <h4>Шаг 1: Сбор информации и анализ потребностей</h4>
          <p>
            Первый этап включает в себя сбор всех необходимых данных о будущем
            проекте. Специалисты компании посещают объект, выполняют все
            необходимые замеры, фиксируют особенности инженерных систем, такие
            как отопление, вентиляция и естественное освещение. Также
            учитываются предпочтения клиента по стилю, функциональности и
            бюджету
          </p>
          <div className={styles.imageContainer}>
            <Image src={portfolio1} alt="" />
            <Image src={portfolio2} alt="" />
          </div>
          <h4>Шаг 2: Разработка общей концепции</h4>
          <p>
            На основе собранной информации формируется техническое задание,
            которое отражает основные задачи и ориентиры по возможному бюджету.
            Разрабатывается общая концепция дизайна, которая учитывает стиль,
            цветовую гамму и материалы, которые будут использоваться в проекте
          </p>
          <Image src={portfolio3} alt="" />
          <h4>Шаг 3: Планировка и зонирование</h4>
          <p>
            На этом этапе выполняется распределение пространства и создание
            планировочных решений. Размещается мебель на обмерном плане, при
            необходимости готовятся предложения по перепланировке для более
            рационального использования имеющейся площади. Продумываются
            возможные решения, ориентированные на удобство использования каждой
            из комнат и зонирование помещения
          </p>
          <div className={styles.imageContainer}>
            <Image src={portfolio4} alt="" />
            <Image src={portfolio5} alt="" />
            <Image src={portfolio2} alt="" />
          </div>
          <h4>Шаг 4: Визуализация и презентация проекта</h4>
          <p>
            Для демонстрации выбранного дизайна формируются коллажи или
            трехмерная модель помещения с отделкой, мебелью, техникой и декором.
            Дополняются развертки стен и спецификация материалов. Такой подход
            позволяет заказчику получить прогнозируемый материал, оценить бюджет
            и сроки ремонта. Выбор решений, доработки или изменения проекта
            значительно проще и дешевле, чем изменение непредвиденных сложностей
            в процессе ремонтных работ
          </p>
          <CompareBlock className={styles.compare} inside={true} />
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
