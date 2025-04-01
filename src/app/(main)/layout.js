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
  const res = await fetch(`${process.env.API_URL}/v1/design/settings`);
  const info = await res.json();

  return (
    <>
      <Header info={info} />
      <main>{children}</main>

      <Footer info={info} />
      <MenuPopup info={info} />
      <FeedbackPopup />
      <SearchPopup />
      <Notification />
    </>
  );
}
