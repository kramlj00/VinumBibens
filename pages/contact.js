import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Layout from "../layout/layout";

export default function Contact() {
  return (
    <Layout activeTab="Contact us">
      <Head>
        <title>Contact Us</title>
      </Head>
      <ContactForm/>
    </Layout>
  );
}
