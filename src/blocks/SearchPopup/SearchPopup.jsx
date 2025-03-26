"use client";
import clsx from "clsx";
import styles from "./SearchPopup.module.scss";
import Link from "next/link";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import IconButton from "@/components/Buttons/IconButton/IconButton";
import { SvgArrowCorner, SvgArrowRight, SvgPhone } from "@/assets/icons/svgs";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import service1 from "@/assets/images/services-1.png";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";
import Logo from "@/components/Logo/Logo";
import MenuButton from "@/components/Buttons/MenuButton/MenuButton";
import SearchInput from "@/components/Inputs/SearchInput/SearchInput";

const SearchPopup = observer(() => {
  const { popupStore } = globalStore;
  const { search, closePopup } = popupStore;
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const [results, setResults] = useState();

  const setRef = useCallback(
    (el, index) => {
      if (el && results !== undefined) {
        itemRefs.current[index] = el;
      }
    },
    [results]
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      itemRefs.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const itemCenterY = rect.top + rect.height / 2;
          if (
            itemCenterY >= centerY - rect.height / 2 &&
            itemCenterY <= centerY + rect.height / 2
          ) {
            setActiveIndex(index);
          }
        }
      });
    };
    containerRef.current.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (search) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "auto";
    }
  }, [search]);

  return (
    <div
      ref={containerRef}
      className={clsx(styles.bgWrapper, { [styles.active]: search })}
    >
      <div className={clsx(styles.container)}>
        <div className={styles.header}>
          <Logo className={styles.logo}>Logo</Logo>
          <MenuButton
            className={clsx(styles.laptop, styles.dark)}
            onClick={() => closePopup("search")}
            isOpened={true}
          >
            Закрыть
          </MenuButton>
          <div className={clsx(styles.buttons, styles.mobile)}>
            <Link
              href={"tel:+375299999999"}
              className={clsx("body-3", styles.link)}
            >
              <SvgPhone className={clsx(styles.phone)} />
            </Link>
            <MenuButton
              className={clsx(styles.dark)}
              onClick={() => closePopup("search")}
              isOpened={true}
            />
          </div>
        </div>

        <div className={styles.block}>
          <div className={clsx(styles.head, "body-1")}>Поиск по сайту</div>
          <SearchInput
            setResults={(value) => {
              setResults(value);
            }}
            placeholder={"Поиск по сайту"}
          />
          <div className={styles.results}>
            <AnimatePresence>
              {results &&
                results.map((elem, index) => (
                  <Link
                    key={index}
                    href={"/services/design-project"}
                    className={clsx(styles.service, {
                      [styles.activeService]: activeIndex === index,
                    })}
                    ref={(el) => setRef(el, index)}
                    data-index={index}
                    onClick={() => {
                      closePopup("search");
                      document.body.style.position = "static";
                    }}
                  >
                    <div className={styles.serviceBg}>
                      <Image src={service1} alt="" />
                    </div>
                    <div className={styles.caption}>
                      <span className="h4">Дизайн проект</span>
                      <InlineButton className={styles.more}>
                        Подробнее
                      </InlineButton>
                    </div>
                  </Link>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SearchPopup;
