import { AppProvider } from '../contexts/AppContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
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
