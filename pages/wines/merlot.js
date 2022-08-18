import Head from "next/head";
import WineDetails from "../../components/WineDetails";
import Layout from "../../layout/layout";

export default function Merlot() {
  const images = ["/images/merlot.png"];

  return (
    <Layout>
      <Head>
        <title>Merlot</title>
      </Head>
      <WineDetails
        images={images}
        sort="Merlot"
        description="Vino je puno, harmonično, koncentriranih aroma, nešto izraženije svježine s dosta zrelih tanina. Brižnom dugotrajnom njegom u hrastovim bačvama i blagim ostatkom neprovrelog šećera, sljubljeno je u jedinstveno vino za odabrane trenutke."
        alcoholPercentage={13}
        price={60}
      />
    </Layout>
  );
}
