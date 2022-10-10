import Layout from "../src/components/Layout";
import React from "react";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "../public/css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme: "light" }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </React.StrictMode>
    );
}
