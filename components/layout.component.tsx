import Head from "next/head";
import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar.component";

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Box>
  </>
);

export default Layout;
