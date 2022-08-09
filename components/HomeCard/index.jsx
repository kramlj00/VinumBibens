import React from "react";
import TransitionedCardFan from "../TransitionedCardFan";
import styles from "./homeCard.module.scss";

const HomeCard = () => {
    return (
        <div>
            <section className={styles.cardContainer}>
                <div className={styles.leftSide}>
                    <h1>Welcome!</h1>
                    <p className={styles.description}>Vacation House for 4 persons in place Zaglav/Karbuni Blato. House has fully equipped kitchen, living room, bathroom, two bedrooms and big covered terrace. Guests can use private barbecue, canoe and rent a boat. House is in the first row near sea and has private beach with beach umbrella, deck chairs and outdoor shower. Gravel public beach is 150 m from house. Private parking for 3 cars and free WiFi are available for our guests.</p>
                </div>
                <div className={styles.rightSide}>
                    <TransitionedCardFan/>
                </div>
            </section>
            <section className={styles.locationContainer}>
                <h1>Location</h1>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11686.976429150827!2d16.715967!3d42.9204375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a720c5f6330cf%3A0x810796f65a20ec98!2sAndriji%C4%87%20House!5e0!3m2!1shr!2shr!4v1613756560386!5m2!1shr!2shr" />
            </section>
        </div>
    )
}

export default HomeCard;
