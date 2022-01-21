import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    // Provide the client to your App
    <>
      <Head>
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
