import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/components/Pagination/Pagination";
import PortfolioSort from "@/blocks/PortfolioSort/PortfolioSort";
import { getSeoPage } from "@/services/getSeoPage";

export async function generateMetadata() {
  const { seo } = await getSeoPage("portfolio");

  return seo
    ? {
        title: seo.title || "Портфолио",
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
        <h1 className={clsx("h1", styles.title)}>портфолио</h1>
        <Breadcrumbs
          items={[
            {
              title: "Главная",
              href: "/",
            },
            {
              title: "портфолио",
              href: "/",
            },
          ]}
        />
        <PortfolioSort />
        <div className={styles.pagination}>
          <Pagination max={8} maxPerView={4} current={1} />
        </div>
      </div>
    </>
  );
};

export default page;
