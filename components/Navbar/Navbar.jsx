import Link from "next/link";
import React from "react";
import NavItem from "../NavItem/NavItem";
import Logo from "../commons/Logo";
import styles from "./navBar.module.scss";
import LanguageOptions from "../LanguageOptions";

const MENU_LIST = [
  { text: "Rooms", href: "/rooms" },
  { text: "Exterior", href: "/exterior" },
  { text: "Contact us", href: "/contact-us" },
];
const Navbar = ({ activeTab }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <a>
            <Logo/>
          </a>
        </Link>
        <div className={styles.nav__menuList}>
          {MENU_LIST.map(menu => (
            <div
              key={menu.text}
            >
              <NavItem activeTab={activeTab} {...menu} />
            </div>
          ))}
          <a
             href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
             target="_blank"
             rel="noreferrer"
          >
            <button className={styles.bookNowBtn}>Book now</button>
          </a>
        </div>
        <LanguageOptions/>
      </nav>
    </header>
  );
};

export default Navbar;
