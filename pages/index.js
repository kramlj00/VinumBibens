import Head from "next/head";
import MainImage from "../components/commons/MainImage";
import Layout, { siteTitle } from "../layout/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainImage src="/images/home.jpg" name="home.jpg" sayingFirstPart="Enjoy a luxury" sayingSecondPart="experience"/>
    </Layout>
  );
}
