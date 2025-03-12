"use client";
import clsx from "clsx";
import styles from "./FeedbackPopup.module.css";
import Link from "next/link";
import Image from "next/image";
import viber from "@/assets/icons/viber-color.svg";
import tg from "@/assets/icons/tg-color.svg";
import wa from "@/assets/icons/wa-color.svg";
import feed from "@/assets/images/form-service.png";
import { Form, Formik } from "formik";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import CommentInput from "@/components/Inputs/CommentInput/CommentInput";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";

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
            <Image src={feed} alt="" />
            <div className={styles.quest}>
              <div className={clsx("h3", styles.questTitle)}>
                Остались вопросы?
              </div>
              <p className={clsx("body-2", styles.text)}>
                Заполните форму обратной связи или свяжитесь с нами в удобном
                для вас мессенджере.
              </p>
              <div className={styles.links}>
                <Link href={"viber.com"}>
                  <Image src={viber} alt="" />
                </Link>
                <Link href={"t.me"}>
                  <Image src={tg} alt="" />
                </Link>
                <Link href={"whatsapp.com"}>
                  <Image src={wa} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className={clsx("desktop", styles.wrapper)}>
            <Formik
              initialValues={{
                name: "",
                phone: "",

                comment: "",
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
                      <h4 className={clsx("h4", styles.name)}>
                        Имя<span>*</span>
                      </h4>
                      <MainInput
                        className={styles.input}
                        type={"text"}
                        name={"name"}
                        placeholder={"Имя"}
                        onChange={(e) => {
                          const value = e.target.value || "";
                          setFieldValue("name", value);
                        }}
                      />
                    </div>
                    <div className={styles.field}>
                      <h4 className={clsx("h4", styles.name)}>
                        Телефон<span>*</span>
                      </h4>
                      <MainInput
                        className={styles.input}
                        mask={"+375 (99) 999-99-99"}
                        type={"text"}
                        name={"phone"}
                        placeholder={"+375 (99) 999-99-99"}
                        onChange={(e) => {
                          const value = e.target.value || "";
                          setFieldValue("phone", value);
                        }}
                      />
                    </div>

                    <div className={styles.field}>
                      <h4 className={clsx("h4", styles.name)}>Комментарий</h4>
                      <CommentInput
                        className={styles.input}
                        type={"textarea"}
                        name={"comment"}
                        placeholder={"Комментарий"}
                      />
                    </div>
                    <div className={styles.field}>
                      <Checkbox
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

          <div className={clsx("mobile", styles.wrapper)}>
            <Formik
              className={"mobile"}
              initialValues={{
                name: "",
                phone: "",
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
                      <h4 className={clsx("h4", styles.name)}>
                        Имя<span>*</span>
                      </h4>
                      <MainInput
                        className={styles.input}
                        type={"text"}
                        name={"name"}
                        placeholder={"Имя"}
                        onChange={(e) => {
                          const value = e.target.value || "";
                          setFieldValue("name", value);
                        }}
                      />
                    </div>
                    <div className={styles.field}>
                      <h4 className={clsx("h4", styles.name)}>
                        Телефон<span>*</span>
                      </h4>
                      <MainInput
                        className={styles.input}
                        mask={"+375 (99) 999-99-99"}
                        type={"text"}
                        name={"phone"}
                        placeholder={"+375 (99) 999-99-99"}
                        onChange={(e) => {
                          const value = e.target.value || "";
                          setFieldValue("phone", value);
                        }}
                      />
                    </div>

                    <div className={styles.field}>
                      <Checkbox
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
