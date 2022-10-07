import Meta from "./Meta";

type PropTypes = {
    children: React.ReactNode;
};

const Layout = ({ children }: PropTypes) => {
    return (
        <>
            <Meta />
            <main>{children}</main>
        </>
    );
};

export default Layout;
