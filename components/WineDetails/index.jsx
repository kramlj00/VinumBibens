import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../locales/en";
import hr from "../../locales/hr";
import styles from "./wineDetails.module.scss";
import Button from "../commons/Button";
import Link from "next/link";

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
      <section className={styles.wineSection}>
        <div className={styles.imageCarouselContainer}>
          <div className={styles.imageWrapper}>
            <Image src={images[0]} layout="fill" objectFit="fill" />
          </div>
        </div>
        <div className={styles.wineDetailsContainer}>
          <h1>{sort}</h1>
          <p className={styles.wineDescription}>{description}</p>
          <p>
            Postotak alkohola: <strong>{alcoholPercentage}%</strong>
          </p>
          <p>
            Vinogorje: <strong></strong>
          </p>
          <p>
            CIJENA: <strong>{price}HRK/0.75L</strong>
          </p>
          <Link href={"/contact"}>
            <a>
              <Button>{t.contact}</Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
