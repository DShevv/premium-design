"use client";
import Contacts from "@/blocks/Contacts/Contacts";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./page.module.scss";
import clsx from "clsx";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { useRef, useState } from "react";
import ProgressHistory from "@/blocks/ProgressHistory/ProgressHistory";
import Mission from "@/blocks/Mission/Mission";
import Principles from "@/blocks/Principles/Principles";
import Workers from "@/blocks/Workers/Workers";
import AchievementsSlider from "@/blocks/AchivmentsSlider/AchievementsSlider";
import YourImagine from "@/blocks/YourImagine/YourImagine";
import DreamRework from "@/blocks/DreamRework/DreamRework";
import BuyAssets from "@/blocks/BuyAssets/BuyAssets";
import Companies from "@/blocks/Companies/Companies";

const page = () => {
  const videoRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1 className={clsx("h1", styles.title)}>о компании</h1>
          <Breadcrumbs
            items={[
              {
                title: "Главная",
                href: "/",
              },
              {
                title: "о компании",
                href: "/",
              },
            ]}
          />
        </div>
      </div>
      <div
        className={clsx(styles.videoContainer, { [styles.playing]: isPlaying })}
        onClick={() => {
          if (isPlaying) {
            videoRef.current.pause();
            setPlaying(false);
          } else {
            videoRef.current.play();
            setPlaying(true);
          }
        }}
      >
        <video
          ref={videoRef}
          src={"/video.mp4"}
          className={styles.video}
        ></video>
        <div className={styles.play}>
          {isPlaying ? (
            <svg
              fill="#121318"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>pause</title>
                <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>
              </g>
            </svg>
          ) : (
            <svg
              width="45"
              height="52"
              viewBox="0 0 45 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.6201 32.7068L10.7255 50.3566C5.91349 53.1977 0 49.4997 0 43.6496V8.34985C0 2.49981 5.91349 -1.19796 10.7255 1.64304L40.6201 19.2928C45.5709 22.2163 45.5709 29.7834 40.6201 32.7068Z"
                fill="#121318"
              />
            </svg>
          )}
        </div>
      </div>

      <Mission />
      <YourImagine />
      <DreamRework />
      <BuyAssets />
      <Companies />
      <Principles />
      <Feedback />
    </>
  );
};

export default page;
