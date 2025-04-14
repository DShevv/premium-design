import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import hero from "@/assets/images/steps2.png";
import Image from "next/image";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import Link from "next/link";
import OtherServices from "@/blocks/OtherServices/OtherServices";
import service1 from "@/assets/images/services-1.png";
import { slugifyWithOpts } from "@/utils/helper";
import { parseServiceContent } from "@/utils/parseServiceContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = await fetch(
    `${process.env.API_URL}/v1/additional-services/${slug.split("_")[1]}`,
    {
      next: { revalidate: 600 },
    }
  ).then((res) => res.json());

  return seo
    ? {
        title: seo.title || "Услуги",
        description: seo.subtitle,
        keywords: seo.keywords ?? "",
        alternates: {
          canonical: process.env.HOME_URL,
        },
        openGraph: {
          title: seo.title || "Услуги",
          description: seo.subtitle,
        },
      }
    : {};
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.API_URL}/v1/additional-services`, {
    next: { revalidate: 600 },
  }).then((res) => res.json());

  return posts.map((post) => ({
    slug: `${slugifyWithOpts(post.title)}_${post.id}`,
  }));
}

const page = async ({ params }) => {
  const { slug } = await params;
  const service = await fetch(
    `${process.env.API_URL}/v1/additional-services/${slug.split("_")[1]}`,
    {
      next: { revalidate: 600 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  return (
    <>
      <div className={styles.head}>
        <div className={styles.bg}>
          <Image
            src={`${process.env.STORE_URL}${service.photo_path}`}
            alt=""
            width={1630}
            height={250}
            unoptimized={true}
          />
        </div>
        <div className={styles.wrapper}>
          <h1 className={clsx("h1-news", styles.title)}>{service.title}</h1>
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
                title: service.title,
                href: "/",
              },
            ]}
          />
        </div>
      </div>

      <section className={styles.container}>
        <OtherServices />
        <div className={styles.content}>
          {service.content_blocks.map((item, index) => {
            if (item.type === "text") {
              const parsedContent = parseServiceContent(item.content);

              return (
                <>
                  {parsedContent.map((item, index) => {
                    if (item.type === "h4") {
                      return (
                        <h4 key={index} className="h4">
                          {item.content}
                        </h4>
                      );
                    }
                    if (item.type === "p-strong") {
                      return (
                        <p key={index} className="body-1-regular">
                          {item.content}
                        </p>
                      );
                    }
                    if (item.type === "p") {
                      return (
                        <p key={index} className="body-1">
                          {item.content}
                        </p>
                      );
                    }
                    if (item.type === "quote") {
                      return (
                        <div
                          key={index}
                          className={clsx(styles.quote, "body-1-regular")}
                        >
                          <svg
                            width="25"
                            height="20"
                            viewBox="0 0 25 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M8.96739 0L7.06522 20H0L3.62319 0H8.96739ZM25 0L23.0978 20H16.1232L19.6558 0H25Z"
                              fill="#FEFCFA"
                            />
                          </svg>
                          {item.content}
                        </div>
                      );
                    }
                  })}
                </>
              );
            }

            if (item.type === "image") {
              return (
                <div key={index} className={styles.imageBlock}>
                  {item.urls.map((item, index) => (
                    <Image
                      key={index}
                      src={`${process.env.STORE_URL}/${item}`}
                      alt=""
                      width={500}
                      height={300}
                    />
                  ))}
                </div>
              );
            }
          })}

          {/* {parsedContent.map((item, index) => {
            if (item.type === "h4") {
              return (
                <h4 key={index} className="h4">
                  {item.content}
                </h4>
              );
            }
            if (item.type === "p-strong") {
              return (
                <p key={index} className="body-1-regular">
                  {item.content}
                </p>
              );
            }
            if (item.type === "p") {
              return (
                <p key={index} className="body-1">
                  {item.content}
                </p>
              );
            }
            if (item.type === "quote") {
              return (
                <div
                  key={index}
                  className={clsx(styles.quote, "body-1-regular")}
                >
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M8.96739 0L7.06522 20H0L3.62319 0H8.96739ZM25 0L23.0978 20H16.1232L19.6558 0H25Z"
                      fill="#FEFCFA"
                    />
                  </svg>
                  {item.content}
                </div>
              );
            }
            if (item.type === "imageBlock") {
              return (
                <div key={index} className={styles.imageBlock}>
                  {item.content.map((src, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={src}
                      alt=""
                      width={500}
                      height={300}
                    />
                  ))}
                </div>
              );
            }
            return null;
          })} */}
        </div>
      </section>

      <OurProjects title={"Реализованные дизайн-проекты"} />
      <Feedback />
    </>
  );
};

export default page;
