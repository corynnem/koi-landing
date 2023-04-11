import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "components/Welcome";
import { ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "components/Navbar";
import dynamic from 'next/dynamic'


export default function Home() {
  const WelcomeNoSSR = dynamic(() => import('../components/Welcome'), {
    ssr: false,
  })
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Koi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <WelcomeNoSSR />
        {/* All other comonents are now loaded inside Slogan to achive ripples background */}
        
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
