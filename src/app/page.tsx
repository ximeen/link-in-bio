/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "./components/Header";
import ProductLinks from "./components/ProductLinks";
import SocialMedias from "./components/SocialMedias";

export default function Home() {
  return (
    <main className="px-4 mb-10">
      <Head >
        <title>Meus produtos</title>
      </Head>
      <Header />
      <SocialMedias />
      <ProductLinks />
    </main>
  )
}