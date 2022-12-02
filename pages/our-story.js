import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import useSiteConfig from "../shared/hooks/useSiteConfig";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";
import OurStoryComponent from "../components/OurStoryComponent/OurStoryComponent";

export default function OurStory() {
  const config = useSiteConfig();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout activeTab={t.ourStory}>
      <NextSeo
        title={`${config.title} | ${t.ourStory}`}
        openGraph={{
          title: `${config.title} | ${t.ourStory}`,
          url: `${config.url}our-story`,
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
      <OurStoryComponent />
    </Layout>
  );
}
