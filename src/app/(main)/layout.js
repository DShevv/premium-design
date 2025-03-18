import Footer from "@/blocks/Footer/Footer";
import Header from "@/blocks/Header/Header";
import MenuPopup from "@/blocks/MenuPopup/MenuPopup";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
      <MenuPopup />
    </>
  );
}
