import { NextSeo } from 'next-seo';
import useSiteConfig from "../../shared/hooks/useSiteConfig";
import { useRouter } from "next/router";
import WineDetails from "../../components/WineDetails";
import Layout from "../../layout/layout";
import en from "../../locales/en";
import hr from "../../locales/hr";

export default function Merlot() {
  const config = useSiteConfig();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const images = ["/images/rose.png"];

  return (
    <Layout>
      <NextSeo
        title={`${config.title} | Rose`}
        openGraph={{
          title: `${config.title} | Rose`,
          url: `${config.url}rose`,
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
      <WineDetails
        images={images}
        sort="Rose"
        description={t.roseInfo}
        alcoholPercentage={12}
        price={70}
      />
    </Layout>
  );
}
