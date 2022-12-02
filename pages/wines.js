import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import useSiteConfig from "../shared/hooks/useSiteConfig";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";
import MainImage from "../components/commons/MainImage";
import WineList from "../components/WineList";

export default function Wines() {
  const config = useSiteConfig();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout activeTab={t.wines}>
      <NextSeo
        title={`${config.title} | ${t.wines}`}
        openGraph={{
          title: `${config.title} | ${t.wines}`,
          url: `${config.url}wines`,
          description: config.description,
          images: [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: 'Vina Ramljak',
            },
          ],
        }}
      />
      <MainImage
        src="/images/vino.jpg"
        name="wine.jpg"
        saying={t.winesSaying}
        author="Heraklit"
      />
      <WineList />
    </Layout>
  );
}
