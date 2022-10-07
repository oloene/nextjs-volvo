import Head from "next/head";

type PropTypes = {
    title: string;
    keywords: string;
    description: string;
};

const Meta = ({ title, keywords, description }: PropTypes) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link
                rel="icon"
                href="https://www.volvocars.com/static/shared/images/favicons/favicon-16x16.v2.png"
            />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: "Home - Volvo",
    keywords:
        "Volvo cars, Web development, Next js, React js, Cars, Sweden, Stockholm",
    description: "Home page for Volvo cars",
};

export default Meta;
