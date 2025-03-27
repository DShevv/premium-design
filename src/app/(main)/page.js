import CompareBlock from "@/blocks/CompareBlock/CompareBlock";
import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import Hero from "@/blocks/Hero/Hero";
import History from "@/blocks/History/History";
import News from "@/blocks/News/News";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import Services from "@/blocks/Services/Services";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import BackButton from "@/components/Buttons/BackButton/BackButton";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import MenuButton from "@/components/Buttons/MenuButton/MenuButton";
import SearchButton from "@/components/Buttons/SearchButton/SearchButton";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import SearchInput from "@/components/Inputs/SearchInput/SearchInput";
import Pagination from "@/components/Pagination/Pagination";
import { getSeoPage } from "@/services/getSeoPage";

export async function generateMetadata() {
  const { seo } = await getSeoPage("main");

  return seo
    ? {
        title: seo.title || "Разработка",
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

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/v1/before-after`);
  let compareItems;
  if (res.ok) {
    compareItems = await res.json();
  }
  compareItems = compareItems.data.map((elem) => ({
    before: elem.before_image,
    after: elem.after_image,
  }));

  return (
    <>
      <Hero />
      <Services />
      <OurProjects />
      <History />
      <CompareBlock items={compareItems} />
      <Contacts />
      <Feedback />
    </>
  );
}
