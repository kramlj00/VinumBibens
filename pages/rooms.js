import Link from "next/link";
import Head from 'next/head';
import Layout from '../layout/layout';

export default function Products() {
  return (
    <Layout>
    <Head>
        <title>Ponuda Vina</title>
      </Head>
      <h1>Ponuda vina</h1>
      <h2>
        <Link href="/">Povratak na početnu</Link>
      </h2>
    </Layout>
  );
}
