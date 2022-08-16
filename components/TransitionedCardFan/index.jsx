import Image from "next/image";
import styles from "./cardFan.module.scss";

const TransitionedCardFan = () => {
  return (
    <div>
      <div className={styles.cardfan}>
        <div className={`${styles.cardfanImage} ${styles.pic3}`}>
          <Image
            src="https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room17-image_ir36t2.jpg"
            alt="cardfan_pic3"
            width={500}
            height={330}
          />
        </div>
        <div className={`${styles.pic2} ${styles.cardfanImage}`}>
          <Image
            src="https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior15-image_unyat4.jpg"
            alt="cardfan_pic2"
            width={500}
            height={330}
          />
        </div>
        <div className={`${styles.pic1} ${styles.cardfanImage}`}>
          <Image
            src="https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior18-image_fi613x.jpg"
            alt="cardfan_pic1"
            width={500}
            height={330}
          />
        </div>
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </svg>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="greyscale">
          <feColorMatrix
            type="matrix"
            values="0.3333 0.3333 0.3333 0 0
0.3333 0.3333 0.3333 0 0
0.3333 0.3333 0.3333 0 0
0 0 0 1 0"
          />
        </filter>
      </svg>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="sepia">
          <feColorMatrix
            values="0.14 0.45 0.05 0 0
0.12 0.39 0.04 0 0
0.08 0.28 0.03 0 0
0 0 0 1 0"
          />
        </filter>
      </svg>
    </div>
  );
};

export default TransitionedCardFan;
