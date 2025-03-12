"use client";
import styles from "./Popup.module.css";
import clsx from "clsx";
import image from "@/assets/images/popup.png";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import validateFeedback from "@/utils/validateFeedback";
import MainInput from "../Inputs/MainInput/MainInput";
import CommentInput from "../Inputs/CommentInput/CommentInput";
import Checkbox from "../Inputs/Checkbox/Checkbox";
import MainButton from "../Buttons/MainButton/MainButton";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import api from "@/http";

const Popup = observer(() => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const modal = searchParams.get("modal");
  const { notificationStore } = globalStore;
  const { setNotification } = notificationStore;

  const closeModal = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.delete("modal");
    router.replace(`${pathname}?${nextSearchParams}`);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  }, [modal]);

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: modal })}
      onClick={closeModal}
    >
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Formik
          initialValues={{
            phone: "",
            comment: "",
            isAgree: false,
          }}
          validate={validateFeedback}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values) => {
            try {
              const res = await api.post("/feedback", {
                name: "feedback",
                phone: values.phone,
                email: "test@test.com",
                comment: values.comment,
              });

              console.log(res);

              if (res.status === 201) {
                setNotification(
                  "Спасибо за заявку!",
                  true,
                  undefined,
                  "С вами скоро свяжется наш менеджер и ответит на волнующие вас вопросы."
                );

                return;
              }
            } catch (e) {
              console.log(e);
              setNotification(
                "Мы не получили вашу заявку",
                false,
                undefined,
                "Произошла ошибка и мы не получили вашу заявку. Пожалуйста, повторите еще раз."
              );
            }
          }}
        >
          {(formik) => {
            const { values, errors, setFieldValue } = formik;

            return (
              <Form className={styles.form}>
                <div>
                  <div className={clsx("t-h-44", styles.title)}>
                    Связаться с нами
                  </div>
                  <div className={clsx("t-b-18")}>
                    Задайте волнующие вас вопросы, оформим заявку на сайте
                  </div>
                </div>

                <div>
                  <div className={clsx("t-h-18", styles.name)}>
                    Ваш телефон
                    <span>*</span>
                  </div>
                  <MainInput
                    type={"tel"}
                    name="phone"
                    placeholder="+375 (99) 999-99-99"
                    mask="+375 (99) 999-99-99"
                    error={errors.phone ? errors.phone : undefined}
                    onChange={(e) => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("phone", value);
                    }}
                  />
                </div>
                <div>
                  <div className={clsx("t-h-18", styles.name)}>Комментарий</div>
                  <CommentInput name="comment" placeholder="Ваш комментарий" />
                </div>
                <div className={styles.controls}>
                  <Checkbox
                    name="isAgree"
                    text="Согласна(-ен) на обработку персональных данных"
                  />
                </div>
                <MainButton type="submit" disabled={!values.isAgree}>
                  Отправить
                </MainButton>
              </Form>
            );
          }}
        </Formik>
        <Image src={image} alt="Обратная связь" className={styles.image} />
      </div>
    </div>
  );
});

export default Popup;
