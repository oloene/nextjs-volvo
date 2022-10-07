import Layout from "../src/components/Layout";
import React from "react";
import { Button, MantineProvider, MantineTheme } from "@mantine/core";
import type { AppProps } from "next/app";
import "../public/css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] =
        React.useState<MantineTheme["colorScheme"]>("light");

    return (
        <React.StrictMode>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme: theme }}
            >
                <Button
                    style={{
                        position: "fixed",
                        top: 10,
                        right: 10,
                    }}
                    onClick={() =>
                        setTheme((prev) =>
                            prev === "light" ? "dark" : "light"
                        )
                    }
                >
                    Toggle theme
                </Button>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </React.StrictMode>
    );
}
