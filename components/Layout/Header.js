import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Frontend Web developer</title>
      <meta
        name="description"
        content="Hi, I'm Ifeanyichukwu Eze a Frontend web developer"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

export default Header;
