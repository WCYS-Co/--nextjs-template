import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* GOOGLE FONTS ****
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=XXXXXXX:wght@XXX;XXX&display=swap"
            rel="stylesheet" />
      */}

      {/* ADOBE FONTS ****
      <link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css" />
      */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document;