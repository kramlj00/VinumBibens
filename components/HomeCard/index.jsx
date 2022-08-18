import { useRouter } from "next/router";
import React, { useState } from "react";
import en from "../../locales/en";
import hr from "../../locales/hr";
import TransitionedCardFan from "../TransitionedCardFan";
import styles from "./homeCard.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaMap } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaWineBottle } from "react-icons/fa";

const HomeCard = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const [shouldCount, setShouldCount] = useState(true);

  const countItems = [
    {
      icon: <FaMap />,
      number: 2,
      description: "Površina (ha)",
    },
    {
      icon: <FaSun />,
      number: 3000,
      description: "Sunčani sati (h)",
    },
    {
      icon: <FaCloudRain />,
      number: 700,
      description: "Padaline (mm)",
    },
    {
      icon: <FaWineBottle />,
      number: 600,
      description: "Godišnja proizvodnja (hL)",
    },
  ];

  return (
    <div>
      <section className={styles.cardContainer}>
        <div className={styles.leftSide}>
          <h1>{t.welcomeTitle}</h1>
          <p className={styles.description}>
            {t.description}
          </p>
        </div>
        <div className={styles.rightSide}>
          <TransitionedCardFan />
        </div>
      </section>
      <VisibilitySensor partialVisibility offset={{ bottom: 1 }}>
        {({ isVisible }) => (
          <section className={styles.countUpSection}>
            {countItems.map((item) => (
              <div className={styles.countUpItem} key={item.description}>
                <div className={styles.iconContainer}>{item.icon}</div>
                <div className={styles.numberContainer}>
                  {isVisible && shouldCount ? (
                    <CountUp
                      end={item.number}
                      duration={3}
                      onEnd={() => setShouldCount(false)}
                    />
                  ) : (
                    <h1>{item.number}</h1>
                  )}
                </div>
                <p className={styles.numberDescription}>{item.description}</p>
              </div>
            ))}
          </section>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default HomeCard;
