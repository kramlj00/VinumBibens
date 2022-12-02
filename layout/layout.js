import Footer from "../components/Footer";
import ToggleBars from "../helpers/toggleBars";
import React, { useState } from "react";
import Head from "next/head";
import styles from "./layout.module.scss";

export const siteTitle = "Vina Ramljak";

export default function Layout({ children, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${isOpen && styles.pageContainer}`}>
        <header>
          <ToggleBars
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeTab={activeTab}
          />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
