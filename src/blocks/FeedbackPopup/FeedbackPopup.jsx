"use client";
import clsx from "clsx";
import styles from "./FeedbackPopup.module.scss";
import Link from "next/link";
import Image from "next/image";
import pic from "@/assets/images/popup.png";
import { Form, Formik } from "formik";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import CommentInput from "@/components/Inputs/CommentInput/CommentInput";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import FileInput from "@/components/Inputs/FileInput/FileInput";

const FeedbackPopup = observer(() => {
  const { popupStore, notificationStore } = globalStore;
  const { feedback, closePopup } = popupStore;
  const { setNotification } = notificationStore;

  return (
    <div
      className={clsx(styles.bgWrapper, { [styles.active]: feedback })}
      onClick={() => closePopup("feedback")}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={clsx("body-1", styles.hint)}>
              [ Свяжитесь с нами ]
            </div>
            <div className={clsx("h2", styles.title)}>Форма обратной связи</div>
            <Image src={pic} alt="" />
          </div>

          <div className={clsx(styles.wrapper)}>
            <div className="mobile">
              <div className={clsx("body-1", styles.hint)}>
                [ Свяжитесь с нами ]
              </div>
              <div className={clsx("h2", styles.title)}>
                Форма обратной связи
              </div>
            </div>
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
                        className={styles.file}
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
      </div>
    </div>
  );
});

export default FeedbackPopup;
