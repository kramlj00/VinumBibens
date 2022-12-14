import Image from "next/legacy/image";
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
          <div
            className={styles.imageContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <Image src="/images/merlot.png" layout="fill" objectFit="fill" />
          </div>
          <div className={styles.squareCover}>
            <Image
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              src="/images/logo.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className={styles.wineDescriptionContainer}
        >
          <h1 className={styles.wineSort}>Merlot</h1>
          <p className={styles.wineDescription}>
            Neki lipi tekst, jedna rečenica ili maksimalno dvi.
          </p>
          <Link href={"/wines/merlot"} legacyBehavior>
            <p className={styles.readMore}>{t.readMore}</p>
          </Link>
        </div>
      </div>
      <div className={`${styles.wineBlock} ${styles.wineBlockReverse}`}>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className={styles.wineDescriptionContainer}
        >
          <h1 className={styles.wineSort}>Rose</h1>
          <p className={styles.wineDescription}>
            Neki lipi tekst, jedna rečenica ili maksimalno dvi.
          </p>
          <Link href={"/wines/rose"} legacyBehavior>
            <p className={styles.readMore}>{t.readMore}</p>
          </Link>
        </div>
        <div className={styles.wineBottle}>
          <div
            className={styles.imageContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <Image src="/images/rose.png" layout="fill" objectFit="fill" />
          </div>
          <div className={`${styles.squareCover} ${styles.roseSquareCover}`}>
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
              src="/images/logo.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className={styles.wineBlock}>
        <div className={`${styles.wineBottle} ${styles.wineBottleLeft}`}>
          <div
            className={styles.imageContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <Image src="/images/canticum.png" layout="fill" objectFit="fill" />
          </div>
          <div
            className={`${styles.squareCover} ${styles.squareCoverCanticum}`}
          >
            {/* <div className={styles.logoContainer}> */}
            <Image
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
              src="/images/logo.png"
              layout="fill"
              objectFit="cover"
            />
            {/* </div> */}
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className={styles.wineDescriptionContainer}
        >
          <h1 className={styles.wineSort}>Canticum</h1>
          <p className={styles.wineDescription}>
            Neki lipi tekst, jedna rečenica ili maksimalno dvi.
          </p>
          <Link href={"/wines/canticum"} legacyBehavior>
            <p className={styles.readMore}>{t.readMore}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WineList;
