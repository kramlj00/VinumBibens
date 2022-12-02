import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import MainImage from "../components/commons/MainImage";
import HomeCard from "../components/HomeCard";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";
import useSiteConfig from "../shared/hooks/useSiteConfig";

export default function Home() {
  const config = useSiteConfig();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: config.title,
          url: config.url,
          description: config.description,
        }}
      />
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
