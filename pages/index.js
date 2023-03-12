import Script from "next/script";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Welcome from 'components/Welcome'

export default function Home() {
  const windowPresent = typeof window !== undefined;
  return (
    <div>
      <Head>
        <title>Koi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <Welcome/>
      <footer>
      
      </footer>
     </div>
  )
}
