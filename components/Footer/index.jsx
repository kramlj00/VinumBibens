import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const footerItems = [
    { label: `${t.wines}`, path: "/wines" },
    { label: `${t.ourStory}`, path: "/our-story" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <section className={styles.separatorBar}>
        <div className={styles.horizontalLine} />
        <Link href={"/"}>
          <h1 className={styles.footerLogo}>Vinum Bibens</h1>
        </Link>
        <div className={styles.horizontalLine} />
      </section>

      <section className={styles.footerItemsContainer}>
        <div className={styles.itemContainer}>
          <Link href={"/contact"}>
            <div className={styles.footerItemTitle}>{t.contactUs}</div>
          </Link>
          <div className={styles.footerItemSubtitle}>vinumbibens@gmail.com</div>
          <div className={styles.footerItemSubtitle}>+385 98 985 6445</div>
          <div className={styles.footerItemSubtitle}>Ramljaci 11, Siverić</div>
        </div>
        {footerItems.map((footerItem) => (
          <div className={styles.itemContainer} key={footerItem.path}>
            <Link href={footerItem.path}>
              <div className={styles.footerItemTitle}>{footerItem.label}</div>
            </Link>
          </div>
        ))}
      </section>

      <div className={styles.rightsContainer}>
        Vinum Bibens &copy; {new Date().getFullYear()} {t.rightsInfo}
      </div>
    </footer>
  );
};

export default Footer;
