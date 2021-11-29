import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/dist/server/router";
import Nprogress from "nprogress";
import Head from "next/head";
import Layout from "../components/layout.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
