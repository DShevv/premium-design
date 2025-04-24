import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProgressHistory from "@/blocks/ProgressHistory/ProgressHistory";
import Mission from "@/blocks/Mission/Mission";
import Principles from "@/blocks/Principles/Principles";
import AchievementsSlider from "@/blocks/AchivmentsSlider/AchievementsSlider";
import Companies from "@/blocks/Companies/Companies";
import VideoBlock from "@/blocks/VideoBlock/VideoBlock";
import { getSeoPage } from "@/services/getSeoPage";
import SeoText from "@/blocks/SeoText/SeoText";

export async function generateMetadata() {
  const { seo } = await getSeoPage("about");

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

const page = async () => {
  const certificates = await fetch(`${process.env.API_URL}/v1/brands`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => undefined);

  const aboutBlocks = await fetch(
    `${process.env.API_URL}/v1/design/about-company-blocks`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  const companyValues = await fetch(
    `${process.env.API_URL}/v1/design/company-values`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  const banner = await fetch(
    `${process.env.API_URL}/v1/design/about-company-banner`,
    {
      next: { revalidate: 0 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1 className={clsx("h1", styles.title)}>о компании</h1>
          <Breadcrumbs
            items={[
              {
                title: "Главная",
                href: "/",
              },
              {
                title: "о компании",
                href: "/",
              },
            ]}
          />
        </div>
      </div>
      <VideoBlock info={banner.banner} />

      {aboutBlocks.blocks.map((block, index) => (
        <Mission key={block.id} info={block} direction={index % 2 === 0} />
      ))}

      <Companies items={certificates.data} />
      <Principles values={companyValues} />
      <SeoText page="about" />
      <Feedback />
    </>
  );
};

export default page;
