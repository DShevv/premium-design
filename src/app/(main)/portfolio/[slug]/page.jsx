"use client";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const page = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
        </div>

        <div className={styles.content}>
          <div className={styles.step}>
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

            <div className={styles.swiperBlock}>
              <Swiper
                slidesPerView={1}
                ref={sliderRef}
                className={styles.swiper}
                modules={[Pagination]}
                pagination={{
                  el: ".swiper-pagination", // Use a valid DOM element here
                  type: "bullets",
                  clickable: true,
                  bulletClass: `${styles.bullet}`,
                  bulletActiveClass: `${styles.bulletActive}`,
                }}
              >
                <SwiperSlide className={styles.slide}>
                  <Image src={portfolio1} alt="" />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <Image src={portfolio2} alt="" />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <Image src={portfolio3} alt="" />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <Image src={portfolio4} alt="" />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <Image src={portfolio5} alt="" />
                </SwiperSlide>
              </Swiper>
              <div
                className={clsx(
                  "swiper-pagination",
                  styles.pagination,
                  styles.paginationImportant
                )}
              ></div>
              <div className={styles.navigation}>
                <ArrowButton
                  className={clsx(styles.prev)}
                  onClick={handlePrev}
                />
                <ArrowButton
                  className={clsx(styles.next)}
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>

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
