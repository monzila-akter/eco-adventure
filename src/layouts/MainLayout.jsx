import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";


const MainLayout = () => {

    const location = useLocation();

    const dynamicTitles = {
        "/": "Home | Eco Adventure",
        "/adventures": "Adventures | Eco Adventure",
        "/updateProfile": "Update Profile | Eco Adventure",
        "/myProfile": "My Profile | Eco Adventure",
        "/login": "Log In | Eco Adventure",
        "/register": "Sign Up | Eco Adventure",
        "/details": "Adventure Details | Eco Adventure",
    }

    useEffect(() => {
        const currentPath = location.pathname;
        const title = dynamicTitles[currentPath] || "Eco Adventure";
        document.title = title;
    }, [location])

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