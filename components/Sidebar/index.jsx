import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import hr from "../../locales/hr";
import LanguageOptions from "../LanguageOptions";
import NavItem from "../NavItem/NavItem";
import styles from "./sidebar.module.scss";

const Sidebar = ({ activeTab }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const MENU_LIST = [
    { text: `${t.wines}`, href: "/wines" },
    { text: `${t.ourStory}`, href: "/our-story" },
    { text: `${t.contact}`, href: "/contact" },
  ];

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.menuList}>
        {MENU_LIST.map((menu) => (
          <NavItem key={menu.text} activeTab={activeTab} {...menu} />
        ))}
      </div>
      <LanguageOptions />
    </div>
  );
};

export default Sidebar;
