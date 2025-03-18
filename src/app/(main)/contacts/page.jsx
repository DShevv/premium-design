import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

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
      <Feedback />
    </>
  );
};

export default page;
