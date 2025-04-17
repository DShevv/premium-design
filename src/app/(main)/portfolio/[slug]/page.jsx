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
import { parsePortfolioAbout } from "@/utils/parsePortfolioAbout";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = await fetch(
    `${process.env.API_URL}/v1/portfolio/${slug.split("_")[1]}`,
    {
      next: { revalidate: 600 },
    }
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
  const posts = await fetch(`${process.env.API_URL}/v1/portfolio`, {
    next: { revalidate: 600 },
  }).then((res) => res.json());

  return posts.data.map((post) => ({
    slug: `${slugifyWithOpts(post.title)}_${post.id}`,
  }));
}

const page = async ({ params }) => {
  const { slug } = await params;
  const workCase = await fetch(
    `${process.env.API_URL}/v1/portfolio/${slug.split("_")[1]}`,
    {
      next: { revalidate: 600 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  if (!workCase) {
    notFound();
  }

  const parsedAbout = workCase.about && parsePortfolioAbout(workCase.about);

  return (
    <>
      <div className={styles.head}>
        <div className={styles.bg}>
          <Image
            src={`${process.env.STORE_URL}/${workCase.photo_path}`}
            alt=""
            width={1630}
            height={940}
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.tags}>
            <div className={clsx(styles.tag, styles.active)}>
              {workCase.tag}
            </div>
          </div>
          <h1 className={clsx("h1-news", styles.title)}>{workCase.title}</h1>
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
                title: workCase.title,
                href: "/",
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.top}>
          <div
            className="body-1-regular"
            dangerouslySetInnerHTML={{
              __html: workCase.content_blocks[0].content,
            }}
          ></div>
          <div className={styles.side}>
            <h3 className={clsx("h3")}>О проекте</h3>

            {parsedAbout.map((item, index) => {
              if (item.type === "h3") {
                return (
                  <h3 className={clsx("body-2", styles.line)} key={index}>
                    {item.content}
                  </h3>
                );
              }
              if (item.type === "p") {
                return (
                  <p key={index} className="body-1-regular">
                    {item.content}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className={styles.content}>
          {workCase.content_blocks.map((item, index) => {
            if (index === 0) {
              return null;
            }

            if (item.type === "image-text") {
              return (
                <div className={styles.step} key={index}>
                  <Image
                    src={`${process.env.STORE_URL}/storage/${item.content.imageUrl}`}
                    alt=""
                    width={664}
                    height={469}
                  />
                  <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: item.content.text }}
                  ></div>
                </div>
              );
            }

            if (item.type === "text") {
              return (
                <div className={styles.step} key={index}>
                  <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </div>
              );
            }

            if (item.type === "image") {
              return (
                <div className={styles.step} key={index}>
                  {item.urls.map((elem, index) => (
                    <Image
                      className={styles.singleImage}
                      key={index}
                      src={`${process.env.STORE_URL}/${elem}`}
                      alt=""
                      width={664}
                      height={469}
                    />
                  ))}
                </div>
              );
            }
          })}
          <div className={styles.step}>
            <PortfolioSlider items={workCase.gallery_images} />
          </div>

          <BackButton type="link" href={"/portfolio"} className={styles.back}>
            К портфолио
          </BackButton>
        </div>
      </div>

      <OurProjects title={"Реализованные проекты"} />
      <Feedback />
    </>
  );
};

export default page;
