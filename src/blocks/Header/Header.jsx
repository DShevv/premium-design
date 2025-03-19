"use client";
import MenuButton from "@/components/Buttons/MenuButton/MenuButton";
import styles from "./Header.module.scss";
import Link from "next/link";
import { SvgPhone } from "@/assets/icons/svgs";
import SearchButton from "@/components/Buttons/SearchButton/SearchButton";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import clsx from "clsx";
import Logo from "@/components/Logo/Logo";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import { AnimatePresence, motion as m } from "motion/react";
import { usePathname } from "next/navigation";

const Header = observer(() => {
  const { popupStore } = globalStore;
  const { menu, openPopup, closePopup } = popupStore;
  const pathname = usePathname();

  const isDark =
    pathname.includes("contacts") ||
    (pathname.includes("portfolio") && pathname.split("/").length < 3) ||
    pathname.includes("policy") ||
    pathname.includes("404") ||
    pathname.includes("about");

  const toggleMenu = () => {
    if (window && menu) {
      document.body.style.position = "static";
      document.body.style.overflowX = "auto";
    }
    if (window && !menu) {
      document.body.style.overflowX = "scroll";
      document.body.style.position = "fixed";
    }
    menu ? closePopup("menu") : openPopup("menu");
  };

  return (
    <header
      className={clsx(styles.header, {
        [styles.opened]: menu,
        [styles.dark]: isDark,
      })}
    >
      <MenuButton
        className={clsx("desktop", {
          [styles.dark]: menu || isDark,
        })}
        onClick={toggleMenu}
        isOpened={menu}
      >
        {menu ? "Закрыть" : "Меню"}
      </MenuButton>

      <Logo
        className={clsx({
          [styles.dark]: menu || isDark,
        })}
      >
        Logo
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
            <Link
              href={"tel:+375299999999"}
              className={clsx("body-3", styles.link, {
                [styles.dark]: isDark,
              })}
            >
              <SvgPhone className={styles.phone} />
              <span>+375 (29) 999-99-99</span>
            </Link>
            <SearchButton
              className={clsx(styles.search, {
                [styles.dark]: isDark,
              })}
            />
            <MenuButton
              className={clsx(styles.mobile, {
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
          <Link
            href={"tel:+375299999999"}
            className={clsx("body-3", styles.link, {
              [styles.dark]: menu || isDark,
            })}
          >
            <SvgPhone
              className={clsx(styles.phone, {
                [styles.dark]: menu || isDark,
              })}
            />
            <span>+375 (29) 999-99-99</span>
          </Link>
          <SearchButton
            className={clsx(styles.search, {
              [styles.dark]: menu || isDark,
            })}
          />
          <MenuButton
            className={clsx(styles.mobile, {
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
    </header>
  );
});

export default Header;
