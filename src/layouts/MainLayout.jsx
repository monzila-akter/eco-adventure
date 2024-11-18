import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar here */}
            <Navbar></Navbar>
            {/* Dynamic sections */}
            <div className="">
                <Outlet></Outlet>
            </div>
            {/* Footer here */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;