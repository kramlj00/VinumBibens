import styles from "./imageCarousel.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ImageCarousel() {
  const images = [
    "/images/canticum.png",
    "/images/rose.png",
    "/images/merlot.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMoveClicked, setIsMoveClicked] = useState(false);

  useEffect(() => {
    if (!isMoveClicked) {
      setTimeout(() => {
        handleInfiniteSlide();
      }, 5000);
    }
  }, [currentSlide]);

  const handleInfiniteSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handleNextSlide = () => {
    setIsMoveClicked(true);
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    setIsMoveClicked(true);
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.arrow} ${styles.leftArrow}`}>
        <AiOutlineLeft onClick={handlePrevSlide} />
      </div>
      <div className={styles.swiper}>
        <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePrevSlide}>
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div className={styles.imageContainer}>
                  <Image
                    priority
                    key={image.id}
                    src={image}
                    layout="fill"
                    objectFit="contain"
                    className="animate-fadeIn"
                  />
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <div className={`${styles.arrow} ${styles.rightArrow}`}>
        <AiOutlineRight onClick={handleNextSlide} />
      </div>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? styles.currentSlideDot
                  : styles.slideDot
              }
              key={index}
              onClick={() => {
                setIsMoveClicked(true);
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
