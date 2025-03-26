import FeedbackPopup from "@/blocks/FeedbackPopup/FeedbackPopup";
import Footer from "@/blocks/Footer/Footer";
import Header from "@/blocks/Header/Header";
import MenuPopup from "@/blocks/MenuPopup/MenuPopup";
import SearchPopup from "@/blocks/SearchPopup/SearchPopup";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
      <MenuPopup />
      <FeedbackPopup />
      <SearchPopup />
    </>
  );
}
