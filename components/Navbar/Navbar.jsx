import Link from "next/link";
import React from "react";
import NavItem from "../NavItem/NavItem";
import Logo from "../commons/Logo";
import styles from "./navBar.module.scss";
import LanguageOptions from "../LanguageOptions";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";

const Navbar = ({ activeTab, toggle, isOpen }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const MENU_LIST = [
    { text: `${t.wines}`, href: "/wines" },
    { text: `${t.ourStory}`, href: "/our-story" },
    { text: `${t.contact}`, href: "/contact" },
  ];

  return (
    <header className={styles.navHeader}>
      <Link href={"/"}>
        <a>
          <Logo />
        </a>
      </Link>
      <div
        className={`${styles.hamburgerBar} ${
          isOpen && styles.openHamburgerBar
        }`}
        onClick={toggle}
      >
        <FaBars />
      </div>
      <div className={styles.headerContent}>
        <div className={styles.menuList}>
          {MENU_LIST.map((menu) => (
            <div key={menu.text}>
              <NavItem activeTab={activeTab} {...menu} />
            </div>
          ))}
          <div className={styles.languageOptionsContainer}>
            <LanguageOptions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
