import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Home/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
           
            <Toaster/>
        </div>
    );
};

export default MainLayout;