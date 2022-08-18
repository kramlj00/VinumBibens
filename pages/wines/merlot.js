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

  const images = ["/images/merlot.png"];

  return (
    <Layout>
      <Head>
        <title>Merlot</title>
      </Head>
      <WineDetails
        images={images}
        sort="Merlot"
        description={t.merlotInfo}
        alcoholPercentage={13}
        price={60}
      />
    </Layout>
  );
}
