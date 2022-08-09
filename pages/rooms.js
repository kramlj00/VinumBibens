import Link from "next/link";
import Head from 'next/head';
import Layout from '../layout/layout';

export default function Rooms() {
  return (
    <Layout activeTab="Rooms">
    <Head>
        <title>Rooms</title>
      </Head>
      <h1>Rooms</h1>
      <h2>
        <Link href="/">Povratak na početnu</Link>
      </h2>
    </Layout>
  );
}
