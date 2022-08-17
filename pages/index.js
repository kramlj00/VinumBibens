import Head from "next/head";
import { useRouter } from "next/router";
import MainImage from "../components/commons/MainImage";
import HomeCard from "../components/HomeCard";
import Layout, { siteTitle } from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";

export default function Home() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? en : hr;
  
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainImage
        src="/images/pocetna.jpg"
        name="home.jpg"
        saying={t.homeSaying}
        author="Clifton Fadiman"
        showWinesButton
      />
      <HomeCard />
    </Layout>
  );
}
