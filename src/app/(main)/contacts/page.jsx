import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { getSeoPage } from "@/services/getSeoPage";
import SeoText from "@/blocks/SeoText/SeoText";

export async function generateMetadata() {
  const { seo } = await getSeoPage("contacts");

  return seo
    ? {
        title: seo.title || "О компании",
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
      <div className={styles.wrapper}>
        <h1 className={clsx("h1", styles.title)}>контакты</h1>
        <Breadcrumbs
          items={[
            {
              title: "Главная",
              href: "/",
            },
            {
              title: "контакты",
              href: "/",
            },
          ]}
        />
      </div>
      <Contacts header={true} />
      <SeoText page="contacts" />
      <Feedback />
    </>
  );
};

export default page;
