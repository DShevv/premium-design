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
import { validateFeedBack } from "@/utils/validateFeedBack";
import { useEffect } from "react";

const FeedbackPopup = observer(() => {
  const { popupStore, notificationStore } = globalStore;
  const { feedback, closePopup } = popupStore;
  const { setNotification } = notificationStore;

  useEffect(() => {
    if (feedback) {
      const scrollPosition = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.overflowY = "auto";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [feedback]);

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
              onSubmit={async (values, { resetForm }) => {
                try {
                  const formData = new FormData();
                  formData.append("name", values.name);
                  formData.append("phone", values.phone);
                  formData.append("email", values.email);
                  formData.append("comment", values.comment);
                  console.log(values.file);

                  if (values.file) {
                    formData.append("file", values.file, values.file.name);
                  }

                  const res = await fetch(
                    `${process.env.API_URL}/v1/feedback`,
                    {
                      method: "POST",
                      headers: {
                        accept: "application/json",
                      },
                      body: formData,
                    }
                  );

                  console.log(res);

                  if (res.status === 201) {
                    setNotification(
                      "ваша заявка принята",
                      "success",
                      "Наш менеджер свяжется с вами в ближайшее время"
                    );
                    resetForm();
                    closePopup("feedback");
                  }
                  if (!res.ok) {
                    throw new Error("Ошибка при отправке заявки");
                  }
                } catch (e) {
                  console.log(e);
                  setNotification(
                    "ваша заявка не принята",
                    "error",
                    "Пожалуйста, повторите попытку ещё раз"
                  );
                }
              }}
              validate={validateFeedBack}
              validateOnBlur={false}
              validateOnMount={false}
              validateOnChange={false}
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
                        value={values.name}
                        error={errors.name}
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
                        type={"number"}
                        name={"phone"}
                        value={values.phone}
                        placeholder={"Телефон*"}
                        error={errors.phone}
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
                        value={values.email}
                        placeholder={"Email*"}
                        error={errors.email}
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
                        onChange={(e) => {
                          const value = e.target.value || "";
                          setFieldValue("comment", value);
                        }}
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
