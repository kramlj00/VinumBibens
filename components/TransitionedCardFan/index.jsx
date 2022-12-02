import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "./cardFan.module.scss";
import { useInView } from "react-intersection-observer";

const TransitionedCardFan = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [isSpread, setIsSpread] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSpread(false);
    }, [5000]);
  }, []);

  return (
    <div>
      <div
        className={inView && isSpread ? styles.spreadCardfan : styles.cardfan}
        ref={ref}
      >
        <div className={`${styles.cardfanImage} ${styles.pic3}`}>
          <Image
            src="https://pickywallpapers.com/img/2018/10/wine-bottles-widescreen-desktop-wallpaper-536-545-hd-wallpapers.jpg"
            alt="cardfan_pic3"
            width={500}
            height={330}
          />
        </div>
        <div className={`${styles.pic2} ${styles.cardfanImage}`}>
          <Image
            src="https://i.pinimg.com/originals/3a/e9/31/3ae931705f3fcbca12ed5b5c45d87b8b.png"
            alt="cardfan_pic2"
            width={500}
            height={330}
          />
        </div>
        <div className={`${styles.pic1} ${styles.cardfanImage}`}>
          <Image
            src="https://www.columbustravelmedia.com/wp-content/uploads/2017/06/72827659_ml.jpg"
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
