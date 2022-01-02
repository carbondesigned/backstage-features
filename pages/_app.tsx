import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "../contexts/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
