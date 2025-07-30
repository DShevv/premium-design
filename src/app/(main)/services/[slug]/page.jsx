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
import { getSeoPage } from "@/services/getSeoPage";
import SeoText from "@/blocks/SeoText/SeoText";
import Mission from "@/blocks/Mission/Mission";
import CompareBlock from "@/blocks/CompareBlock/CompareBlock";
import Companies from "@/blocks/Companies/Companies";
import Principles from "@/blocks/Principles/Principles";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = await fetch(
    `${process.env.API_URL}/v1/additional-services/${slug.split("_")[1]}`,
    {
      next: { revalidate: 60 },
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
    next: { revalidate: 60 },
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
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  if (!service) {
    notFound();
  }

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

  const certificates = await fetch(`${process.env.API_URL}/v1/brands`, {
    next: { revalidate: 60 },
  })
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
                  {parsedContent.map((item, idx) => {
                    if (item.type === "h4") {
                      return (
                        <h4 key={idx} className="h4">
                          {item.content}
                        </h4>
                      );
                    }
                    if (item.type === "p-strong") {
                      return (
                        <p key={idx} className="body-1-regular">
                          {item.content}
                        </p>
                      );
                    }
                    if (item.type === "p") {
                      return (
                        <p key={idx} className="body-1">
                          {item.content}
                        </p>
                      );
                    }
                    if (item.type === "quote") {
                      return (
                        <div
                          key={idx}
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
                  {item.urls.map((item, idx) => (
                    <Image
                      key={`${idx}-${index}`}
                      src={`${process.env.STORE_URL}/${item}`}
                      alt=""
                      width={500}
                      height={300}
                    />
                  ))}
                </div>
              );
            }

            if (item.type === "image-text") {
              return (
                <div
                  className={clsx(styles.step, {
                    [styles.left]: item.content.layout !== "image-left",
                  })}
                  key={index}
                >
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

      <OurProjects title={"Реализованные проекты"} />
      {service.content_blocks
        .filter(
          (item) =>
            item.type === "before-after" ||
            item.type === "brands" ||
            item.type === "values"
        )
        .map((item, index) => {
          if (item.type === "before-after") {
            return <CompareBlock items={compareItems} key={index} />;
          }
          if (item.type === "brands") {
            return <Companies items={certificates.data} key={index} />;
          }
          if (item.type === "values") {
            const values = {
              section: {
                title: item.content.mainTitle,
              },
              values: item.content.subBlocks.map((elem) => ({
                title: elem.title,
                description: elem.description,
                photo_path: elem.photoPath.replace("storage/", ""),
              })),
            };

            return <Principles key={index} values={values} />;
          }
        })}
      <SeoText page={slugifyWithOpts(service.title)} />
      <Feedback />
    </>
  );
};

export default page;
