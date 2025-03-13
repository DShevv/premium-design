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

const Header = observer(() => {
  const { popupStore } = globalStore;
  const { menu, openPopup, closePopup } = popupStore;

  const toggleMenu = () => {
    menu ? closePopup("menu") : openPopup("menu");
  };

  return (
    <header className={styles.header}>
      <MenuButton className={"desktop"} onClick={toggleMenu} isOpened={menu}>
        {menu ? "Закрыть" : "Меню"}
      </MenuButton>

      <Logo>Logo</Logo>

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
              className={clsx("body-3", styles.link)}
            >
              <SvgPhone className={styles.phone} />
              <span>+375 (29) 999-99-99</span>
            </Link>
            <SearchButton />
            <MenuButton
              className={styles.mobile}
              onClick={toggleMenu}
              isOpened={menu}
            ></MenuButton>

            <MainButton className={"desktop"}>Связаться с нами</MainButton>
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
            className={clsx("body-3", styles.link)}
          >
            <SvgPhone className={styles.phone} />
            <span>+375 (29) 999-99-99</span>
          </Link>
          <SearchButton />
          <MenuButton
            className={styles.mobile}
            onClick={toggleMenu}
            isOpened={menu}
          ></MenuButton>

          <MainButton className={"desktop"}>Связаться с нами</MainButton>
        </m.div>
      </AnimatePresence>
    </header>
  );
});

export default Header;
