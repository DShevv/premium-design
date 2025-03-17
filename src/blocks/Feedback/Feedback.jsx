"use client";
import clsx from "clsx";
import styles from "./Feedback.module.scss";
import Link from "next/link";
import Image from "next/image";
import feed from "@/assets/images/feedback.png";
import { Form, Formik } from "formik";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import CommentInput from "@/components/Inputs/CommentInput/CommentInput";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import FileInput from "@/components/Inputs/FileInput/FileInput";

const Feedback = observer(() => {
  const { notificationStore } = globalStore;
  const { setNotification } = notificationStore;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={feed} alt="" />
        </div>

        <div className={styles.wrapper}>
          <h3 className={clsx("h3", styles.title)}>
            Сделайте шаг в мир (название){" "}
          </h3>
          <p className={clsx("body-1", styles.text)}>
            Место, где ваши идеи обретают форму в оригинальном исполнении нашей
            студии. Мы с нетерпением ждем возможности начать это вдохновляющее
            путешествие и воплотить ваш проект в реальность
          </p>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              comment: "",
              file: undefined,
              isAgree: false,
            }}
            onSubmit={(values) => {
              setNotification(
                "Спасибо за вашу заявку!",
                "success",
                "Скоро с вами свяжется наш менеджер и ответит на все ваши вопросы"
              );
            }}
          >
            {(formik) => {
              const { values, errors, setFieldValue } = formik;

              return (
                <Form className={styles.form}>
                  <div className={styles.field}>
                    <MainInput
                      className={styles.input}
                      dark={true}
                      type={"text"}
                      name={"name"}
                      placeholder={"Имя*"}
                      onChange={(e) => {
                        const value = e.target.value || "";
                        setFieldValue("name", value);
                      }}
                    />
                  </div>
                  <div className={styles.field}>
                    <MainInput
                      dark={true}
                      className={styles.input}
                      mask={"+7 (999) 999-99-99"}
                      type={"text"}
                      name={"phone"}
                      placeholder={"Телефон*"}
                      onChange={(e) => {
                        const value = e.target.value || "";
                        setFieldValue("phone", value);
                      }}
                    />
                  </div>
                  <div className={styles.field}>
                    <MainInput
                      className={styles.input}
                      dark={true}
                      type={"text"}
                      name={"email"}
                      placeholder={"Email*"}
                      onChange={(e) => {
                        const value = e.target.value || "";
                        setFieldValue("email", value);
                      }}
                    />
                  </div>
                  <div className={styles.field}>
                    <CommentInput
                      className={styles.input}
                      dark={true}
                      type={"textarea"}
                      name={"comment"}
                      placeholder={
                        "Комментарий (желаемый тип ремонта, площадь и т.д.)"
                      }
                    />
                  </div>

                  <div className={styles.field}>
                    <FileInput
                      setFieldValue={(value) => setFieldValue("file", value)}
                    />
                  </div>

                  <div className={styles.field}>
                    <Checkbox
                      dark={true}
                      className={styles.input}
                      name={"isAgree"}
                      style={{ maxWidth: "fit-content" }}
                    >
                      Согласие на{" "}
                      <Link href={"#"} target="_blank">
                        обработку персональных данных
                      </Link>
                    </Checkbox>
                  </div>

                  <MainButton
                    disabled={!values.isAgree}
                    type="submit"
                    className={styles.button}
                  >
                    Отправить
                  </MainButton>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
});

export default Feedback;
