import { useRouter } from "next/router";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";
import Head from "next/head";
import OurStoryComponent from "../components/OurStoryComponent/OurStoryComponent";

export default function OurStory() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout activeTab={t.ourStory}>
      <Head>
        <title>{t.ourStory}</title>
      </Head>
      <OurStoryComponent />
    </Layout>
  );
}
