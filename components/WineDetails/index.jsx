import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";
import styles from "./wineDetails.module.scss";
import Button from "../commons/Button";
import Link from "next/link";
import ImageCarousel from "../commons/ImageCarousel";

export default function WineDetails({
  images,
  sort,
  description,
  alcoholPercentage,
  price,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <div className={styles.container}>
      <section
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="500"
        className={styles.wineSection}
      >
        <div className={styles.imageCarouselContainer}>
          <div className={styles.imageWrapper}>
            <ImageCarousel images={images} />
          </div>
        </div>
        <div className={styles.wineDetailsContainer}>
          <h1>{sort}</h1>
          <p className={styles.wineDescription}>{description}</p>
          <p>
            {t.alcoholPercentage} <strong>{alcoholPercentage}%</strong>
          </p>
          <p>
            {t.vineyard} <strong>Drniš</strong>
          </p>
          <p>
            {t.price} <strong>{price}HRK/0.75L</strong>
          </p>
          <Link href={"/contact"}>
            <Button>{t.contact}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
