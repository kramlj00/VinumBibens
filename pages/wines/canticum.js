import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import useSiteConfig from "../../shared/hooks/useSiteConfig";
import WineDetails from "../../components/WineDetails";
import Layout from "../../layout/layout";
import en from "../../locales/en";
import hr from "../../locales/hr";

export default function Merlot() {
  const config = useSiteConfig();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const images = ["/images/canticum.png"];

  return (
    <Layout>
      <NextSeo
        title={`${config.title} | Canticum`}
        openGraph={{
          title: `${config.title} | Canticum`,
          url: `${config.url}canticum`,
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
        sort="Canticum"
        description={t.canticumInfo}
        alcoholPercentage={12}
        price={40}
      />
    </Layout>
  );
}
