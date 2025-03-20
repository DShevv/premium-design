import clsx from "clsx";
import styles from "./not-found.module.scss";
import Header from "@/blocks/Header/Header";
import Footer from "@/blocks/Footer/Footer";
import "./globals.scss";
import Layout from "./(main)/layout";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import Image from "next/image";
import pic from "@/assets/images/404.png";

const NotFound = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <h2 className={clsx("h2", styles.subtitle)}>страница не найдена</h2>
            <CircleButton dark={true} type="link" href={"/"}>
              Вернуться на главную
            </CircleButton>
          </div>

          <Image src={pic} alt="" className={styles.image} />
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
