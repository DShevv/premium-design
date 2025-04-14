import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { getSeoPage } from "@/services/getSeoPage";
import { parseLegalContent } from "@/utils/parseLegalContent";

export async function generateMetadata() {
  const { seo } = await getSeoPage("policy");

  return seo
    ? {
        title: seo.title || "Политика",
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
  const info = await fetch(`${process.env.API_URL}/v1/design/settings`, {
    next: { revalidate: 600 },
  })
    .then((res) => res.json())
    .catch((err) => undefined);
  const parsedContend = info && parseLegalContent(info.privacy_policy_text);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={clsx("h1", styles.title)} lang="ru">
          политика конфиденциальности
        </h1>
        <Breadcrumbs
          items={[
            {
              title: "Главная",
              href: "/",
            },
            {
              title: "политика конфиденциальности",
              href: "/",
            },
          ]}
        />
        <section className={styles.text}>
          {parsedContend &&
            parsedContend.map((item, index) => {
              if (item.type === "h4") {
                return (
                  <h4 key={index} className="h4">
                    {item.content}
                  </h4>
                );
              }
              if (item.type === "p-regular") {
                return (
                  <p key={index} className="body-1-regular">
                    {item.content}
                  </p>
                );
              }

              return null;
            })}
        </section>
      </div>
    </>
  );
};

export default page;
