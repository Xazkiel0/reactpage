import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="main">
            <Navbar />
            <div className="content container px-3 mx-auto mt-2">
            {children}
            </div>
        </div>
    );
}

export default Layout;