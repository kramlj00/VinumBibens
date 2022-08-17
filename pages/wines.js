import { useRouter } from "next/router";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";
import Head from "next/head";
import MainImage from "../components/commons/MainImage";

export default function Wines() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <Layout activeTab={t.wines}>
      <Head>
        <title>{t.wines}</title>
      </Head>
      <MainImage
        src="/images/vino.jpg"
        name="wine.jpg"
        saying={t.winesSaying}
        author="Heraklit"
      />
    </Layout>
  );
}
