import React from "react";
import TransitionedCardFan from "../TransitionedCardFan";
import styles from "./homeCard.module.scss";

const HomeCard = () => {

    return (
        <section className={styles.cardContainer}>
            <div className={styles.leftSide}>
                <h1 className={styles.welcomeTitle}>Welcome!</h1>
                <p className={styles.description}>Vacation House for 4 persons in place Zaglav/Karbuni Blato. House has fully equipped kitchen, living room, bathroom, two bedrooms and big covered terrace. Guests can use private barbecue, canoe and rent a boat. House is in the first row near sea and has private beach with beach umbrella, deck chairs and outdoor shower. Gravel public beach is 150 m from house. Private parking for 3 cars and free WiFi are available for our guests.</p>
            </div>
            <div className={styles.rightSide}>
                <TransitionedCardFan/>
            </div>
        </section>
    )
}

export default HomeCard;