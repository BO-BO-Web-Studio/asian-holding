import '@styles/index.scss'
import { Header } from '@widgets/header';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
        <Header />
        <Component {...pageProps} />
  </>;
}

