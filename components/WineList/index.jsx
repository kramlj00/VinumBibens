import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";
import styles from "./wineList.module.scss";
import Link from "next/link";

const WineList = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <section className={styles.wineListSection}>
      <div className={styles.wineBlock}>
        <div className={`${styles.wineBottle} ${styles.wineBottleLeft}`}>
          <div className={styles.imageContainer}>
            <Image src="/images/merlot.png" layout="fill" objectFit="fill" />
          </div>
          <div className={styles.squareCover}></div>
        </div>
        <div className={styles.wineDescriptionContainer}>
          <h1 className={styles.wineSort}>Merlot</h1>
          <p className={styles.wineDescription}>
            Neki lipi tekst, jedna rečenica ili maksimalno dvi.
          </p>
          <Link href={"/wines/merlot"}>
            <p className={styles.readMore}>{t.readMore}</p>
          </Link>
        </div>
      </div>
      <div className={`${styles.wineBlock} ${styles.wineBlockReverse}`}>
        <div className={styles.wineDescriptionContainer}>
          <h1 className={styles.wineSort}>Rose</h1>
          <p className={styles.wineDescription}>
            Neki lipi tekst, jedna rečenica ili maksimalno dvi.
          </p>
          <Link href={"/wines/rose"}>
            <p className={styles.readMore}>{t.readMore}</p>
          </Link>
        </div>
        <div className={styles.wineBottle}>
          <div className={styles.imageContainer}>
            <Image src="/images/rose.png" layout="fill" objectFit="fill" />
          </div>
          <div
            className={`${styles.squareCover} ${styles.roseSquareCover}`}
          ></div>
        </div>
      </div>
      <div className={styles.wineBlock}>
        <div className={`${styles.wineBottle} ${styles.wineBottleLeft}`}>
          <div className={styles.imageContainer}>
            <Image src="/images/canticum.png" layout="fill" objectFit="fill" />
          </div>
          <div
            className={`${styles.squareCover} ${styles.squareCoverCanticum}`}
          ></div>
        </div>
        <div className={styles.wineDescriptionContainer}>
          <h1 className={styles.wineSort}>Canticum</h1>
          <p className={styles.wineDescription}>
            Neki lipi tekst, jedna rečenica ili maksimalno dvi.
          </p>
          <Link href={"/wines/canticum"}>
            <p className={styles.readMore}>{t.readMore}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WineList;
