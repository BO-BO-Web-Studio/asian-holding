import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale}>
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
