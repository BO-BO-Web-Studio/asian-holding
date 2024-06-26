import { Header } from "@widgets/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal" />
        <div id="modal-root" />
      </body>
    </Html>
  );
}
