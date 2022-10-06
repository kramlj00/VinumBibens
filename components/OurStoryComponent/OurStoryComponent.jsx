import Image from "next/image";
import styles from "./ourStory.module.scss";

export default function OurStoryComponent() {
  return (
    <div className={styles.allContentContainer}>
      <div className={styles.mediaContainer}>
        <Image
          src="https://pickywallpapers.com/img/2018/10/wine-bottles-widescreen-desktop-wallpaper-536-545-hd-wallpapers.jpg"
          alt="cardfan_pic2"
          width={600}
          height={370}
        />
      </div>
      <div className={styles.aboutUsContainer}>
        <h1>O nama</h1>
        <p className={styles.aboutUsDescription}>
          Tu triba napisat nešto o dobroj poziciji vinograda, bogatstva tla.
          Triba spomenit da je nositelj vinarije Vinum Bibens OPG Ramljak. Kad
          smo se počeli bavit s tim. Triba napist da je to obiteljska
          tradicija,... bla bla bla
        </p>
      </div>
      <div className={[styles.aboutUsContainer]}>
        <h1>O nama</h1>
        <p className={styles.aboutUsDescription}>
          Tu triba napisat nešto o dobroj poziciji vinograda, bogatstva tla.
          Triba spomenit da je nositelj vinarije Vinum Bibens OPG Ramljak. Kad
          smo se počeli bavit s tim. Triba napist da je to obiteljska
          tradicija,... bla bla bla
        </p>
      </div>
      <div className={styles.mediaContainer}>
        <Image
          src="https://pickywallpapers.com/img/2018/10/wine-bottles-widescreen-desktop-wallpaper-536-545-hd-wallpapers.jpg"
          alt="cardfan_pic2"
          width={600}
          height={370}
        />
      </div>
    </div>
  );
}
