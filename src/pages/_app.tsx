import '@styles/index.scss'
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return <>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
  </>;
}


