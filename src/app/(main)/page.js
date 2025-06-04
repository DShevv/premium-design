import CompareBlock from "@/blocks/CompareBlock/CompareBlock";
import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import Hero from "@/blocks/Hero/Hero";
import History from "@/blocks/History/History";
import News from "@/blocks/News/News";
import OurProjects from "@/blocks/OurProjects/OurProjects";
import SeoText from "@/blocks/SeoText/SeoText";
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
  const res = await fetch(`${process.env.API_URL}/v1/before-after`, {
    next: { revalidate: 60 },
  });
  let compareItems;
  if (res.ok) {
    compareItems = await res.json();
  }

  const services = await fetch(
    `${process.env.API_URL}/v1/additional-services`,
    {
      next: { revalidate: 60 },
    }
  );
  let servicesItems;
  if (services.ok) {
    servicesItems = await services.json();
  }

  compareItems = compareItems?.data
    .filter((elem) => elem.active)
    .map((elem) => ({
      before: elem.before_image,
      after: elem.after_image,
    }));

  const info = await fetch(`${process.env.API_URL}/v1/design/settings`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => undefined);

  const hero = await fetch(`${process.env.API_URL}/v1/design/main-banner`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => undefined);

  const history = await fetch(
    `${process.env.API_URL}/v1/design/about-company`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((err) => undefined);

  return (
    <>
      <Hero info={hero.banner} />
      <Services items={servicesItems} />
      <OurProjects />
      <History info={history.about_company} />
      <CompareBlock items={compareItems} />
      <Contacts />
      <SeoText page="main" />
      <Feedback />
    </>
  );
}
