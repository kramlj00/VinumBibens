import Image from "next/image";
import styles from "./mainImage.module.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import en from "../../../locales/en";
import hr from "../../../locales/hr";

export default function MainImage({
  src,
  name,
  saying,
  author,
  showWinesButton,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    changeOpacity();
    return () => {
      setIsScrolling(false); //clean the state in the unmount of the component
    };
  }, []);

  const changeOpacity = () => {
    if (window.scrollY >= 450) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeOpacity);

  return (
    <div className={`${styles.imageContainer}`}>
      <Image
        priority
        src={src}
        placeholder={isScrolling && "blur"}
        blurDataURL={src}
        layout="fill"
        objectFit="cover"
        alt={name}
        unoptimized={true}
      />
      <section className={styles.sayingWrapper}>
        <h1 className={styles.saying}>{saying}</h1>
        <p className={styles.sayingAuthor}>- {author}</p>
      </section>
      {showWinesButton && (
        <div className={styles.winesButtonContainer}>
          <Link href={"/wines"}>
            <a>
              <button className={styles.winesHomeBtn}>{t.wines}</button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
