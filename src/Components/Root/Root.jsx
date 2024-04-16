import { Outlet } from "react-router-dom";
import Navbar from "../../Shared-Files/Header";
import Footer from "../../Shared-Files/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;
