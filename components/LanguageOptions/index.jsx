import styles from "./language.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LanguageOptions() {
  const router = useRouter();
  const lngs = {
    en: { nativeName: "English" },
    hr: { nativeName: "Hrvatski" },
  };

  const handleLanguageChange = (lng) => {
    const locale = lng;
    router.push(router.pathname, router.route, { locale });
  };

  return (
    <section className={styles.languageOptions}>
      {Object.keys(lngs).map((lng, index) => (
        <div key={index} className={styles.option}>
          <Image
            key={lng}
            width={40}
            height={23}
            src={`/images/${lng}-flag.png`}
            alt={`${lng.nativeName}-img`}
            onClick={() => handleLanguageChange(lng)}
          />
        </div>
      ))}
    </section>
  );
}
