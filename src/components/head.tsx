import NextHead from "next/head";

export function Head() {
  return (
    <NextHead>
      <title>NextJS Blog</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/unicorn-face_1f984.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/unicorn-face_1f984.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/unicorn-face_1f984.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  );
}
