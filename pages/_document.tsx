import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
          <link
            rel={"stylesheet"}
            href={
              "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap"
            }
            as={"font"}
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
