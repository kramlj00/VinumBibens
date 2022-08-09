import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import Logo from "../commons/Logo";
import styles from "./navBar.module.scss";

const MENU_LIST = [
  { text: "Rooms", href: "/rooms" },
  { text: "Exterior", href: "/exterior" },
  { text: "Contact us", href: "/contact-us" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <a>
            <Logo/>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menuBar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} ${styles.nav__menuList}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
