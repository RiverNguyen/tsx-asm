import { Outlet } from "react-router-dom";
import Footer from "../website/Footer";
import Header from "../website/header/Header";

const LayoutWebsite = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LayoutWebsite;
