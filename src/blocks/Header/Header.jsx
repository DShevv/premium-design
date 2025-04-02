"use client";
import MenuButton from "@/components/Buttons/MenuButton/MenuButton";
import styles from "./Header.module.scss";
import Link from "next/link";
import { SvgLogoHeader, SvgPhone } from "@/assets/icons/svgs";
import SearchButton from "@/components/Buttons/SearchButton/SearchButton";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import clsx from "clsx";
import Logo from "@/components/Logo/Logo";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import { AnimatePresence, useScroll, motion as m } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = observer(({ info }) => {
  const { popupStore } = globalStore;
  const { menu, openPopup, closePopup } = popupStore;
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isFixed, setFixed] = useState(false);

  const isDark = !(
    (pathname.includes("portfolio") && pathname.split("/").length > 2) ||
    pathname.length === 1 ||
    (pathname.includes("services") && pathname.split("/").length > 2)
  );

  const toggleMenu = () => {
    if (typeof window !== "undefined") {
      if (!menu) {
        const scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.style.position = "fixed";
        document.body.style.overflowY = "scroll";
        document.body.style.width = "100%";
      } else {
        const scrollY = Math.abs(parseInt(document.body.style.top, 10)) || 0;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflowY = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      }
      menu ? closePopup("menu") : openPopup("menu");
    }
  };

  useEffect(() => {
    if (
      (pathname.includes("portfolio") && pathname.split("/").length > 2) ||
      pathname.length === 1 ||
      (pathname.includes("services") && pathname.split("/").length > 2)
    ) {
      setFixed(false);
    } else {
      console.log("isDark " + isDark, "fixed false");
      setFixed(true);
    }

    const handleScroll = () => {
      if (window.screenX < 769) {
        if (window.scrollY > 50) {
          setFixed(true);
          return;
        } else {
          if (
            (pathname.includes("portfolio") &&
              pathname.split("/").length > 2) ||
            pathname.length === 1 ||
            (pathname.includes("services") && pathname.split("/").length > 2)
          ) {
            setFixed(false);
          }
          return;
        }
      } else {
        if (window.scrollY > 1000) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <m.header
      className={clsx(styles.header, {
        [styles.opened]: menu,
        [styles.dark]: isDark,
        [styles.fixed]: isFixed,
      })}
    >
      <div className={styles.wrapper}>
        <MenuButton
          className={clsx("desktop", styles.menu, {
            [styles.dark]: menu || isDark,
          })}
          onClick={toggleMenu}
          isOpened={menu}
        >
          {menu ? "Закрыть" : "Меню"}
        </MenuButton>

        <Logo
          className={clsx(styles.logo, {
            [styles.dark]: menu || isDark,
          })}
        >
          <SvgLogoHeader />
        </Logo>

        <AnimatePresence>
          {!menu && (
            <m.div
              key={"Menu"}
              className={styles.controls}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {info && info.phones[0] && (
                <Link
                  href={`tel:${info.phones[0]}`}
                  className={clsx("body-3", styles.link, {
                    [styles.dark]: isDark,
                  })}
                >
                  <SvgPhone className={styles.phone} />
                  <span>{info.phones[0]}</span>
                </Link>
              )}
              <SearchButton
                className={clsx(styles.search, {
                  [styles.dark]: isDark || isFixed,
                })}
                onClick={() => openPopup("search")}
              />
              <MenuButton
                className={clsx(styles.mobile, styles.menu, {
                  [styles.dark]: isDark,
                })}
                onClick={toggleMenu}
                isOpened={menu}
              ></MenuButton>

              <MainButton
                className={"desktop"}
                onClick={() => openPopup("feedback")}
              >
                Связаться с нами
              </MainButton>
            </m.div>
          )}
          <m.div
            key={"SecondMenu"}
            className={clsx(styles.mobile, styles.controls)}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {info && info.phones[0] && (
              <Link
                href={`tel:${info.phones[0]}`}
                className={clsx("body-3", styles.link, {
                  [styles.dark]: menu || isDark,
                })}
              >
                <SvgPhone
                  className={clsx(styles.phone, {
                    [styles.dark]: menu || isDark,
                  })}
                />
                <span>{info.phones[0]}</span>
              </Link>
            )}
            <SearchButton
              onClick={() => openPopup("search")}
              className={clsx(styles.search, {
                [styles.dark]: menu || isDark,
              })}
            />
            <MenuButton
              className={clsx(styles.mobile, styles.menu, {
                [styles.dark]: menu || isDark,
              })}
              onClick={toggleMenu}
              isOpened={menu}
            ></MenuButton>

            <MainButton
              className={"desktop"}
              onClick={() => openPopup("feedback")}
            >
              Связаться с нами
            </MainButton>
          </m.div>
        </AnimatePresence>
      </div>
    </m.header>
  );
});

export default Header;
