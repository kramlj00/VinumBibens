import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import hr from "../../locales/hr";
import TransitionedCardFan from "../TransitionedCardFan";
import styles from "./homeCard.module.scss";

const HomeCard = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <div>
      <section className={styles.cardContainer}>
        <div className={styles.leftSide}>
          <h1>{t.welcomeTitle}</h1>
          <p className={styles.description}>{t.houseInfo}</p>
        </div>
        <div className={styles.rightSide}>
          <TransitionedCardFan />
        </div>
      </section>
    </div>
  );
};

export default HomeCard;
