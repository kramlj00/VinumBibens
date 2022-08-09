import React from "react";
import styles from "./gallery.module.scss";
import Image from "next/image";

const ImageGallery = ({ imageList }) => {
  return (
    <div className={styles.imagesContainer}>
      {imageList.map((image, index) => (
        <div className={styles.imageContainer} key={image.title}>
            <Image src={image.src} alt={image.title} width={350} height={200} objectFit="cover"/>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
