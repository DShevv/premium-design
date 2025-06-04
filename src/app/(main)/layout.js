import FeedbackPopup from "@/blocks/FeedbackPopup/FeedbackPopup";
import Footer from "@/blocks/Footer/Footer";
import Header from "@/blocks/Header/Header";
import MenuPopup from "@/blocks/MenuPopup/MenuPopup";
import SearchPopup from "@/blocks/SearchPopup/SearchPopup";
import Notification from "@/components/Notification/Notification";
import { getSeoPage } from "@/services/getSeoPage";

export async function generateMetadata() {
  try {
    const { seo } = await getSeoPage("main");

    return seo
      ? {
          title: seo.title,
          description: seo.description,
          keywords: seo.keywords,
          alternates: {
            canonical: process.env.HOME_URL,
          },
          openGraph: {
            title: seo.title,
            description: seo.description,
          },
        }
      : {};
  } catch (error) {
    return {};
  }
}

export default async function Layout({ children }) {
  const info = await fetch(`${process.env.API_URL}/v1/design/settings`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => undefined);
  const headerLogo = await fetch(
    `${process.env.STORE_URL}/storage/${info.logo_path}`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.text())
    .catch((err) => undefined);
  const footerLogo = await fetch(
    `${process.env.STORE_URL}/storage/${info.logo_path_2}`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.text())
    .catch((err) => undefined);
  info.logo_path = headerLogo;
  info.logo_path_2 = footerLogo;

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

  return (
    <>
      <Header info={info} />
      <main>{children}</main>

      <Footer info={info} services={servicesItems} />
      <MenuPopup info={info} />
      <FeedbackPopup />
      <SearchPopup info={info} />
      <Notification />
    </>
  );
}
