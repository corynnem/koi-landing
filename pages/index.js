import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "components/Welcome";

export default function Home() {
  const windowPresent = typeof window !== undefined;
  return (
    <div>
      <Head>
        <title>Koi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
    </div>
  );
}
