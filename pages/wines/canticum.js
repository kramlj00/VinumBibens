import Head from "next/head";
import { useRouter } from "next/router";
import WineDetails from "../../components/WineDetails";
import Layout from "../../layout/layout";
import en from "../../locales/en";
import hr from "../../locales/hr";

export default function Merlot() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const images = ["/images/canticum.png"];

  return (
    <Layout>
      <Head>
        <title>Canticum</title>
      </Head>
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
