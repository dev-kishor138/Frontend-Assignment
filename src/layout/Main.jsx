import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="relative ">
             <ToastContainer />
            <Navbar/>
           <div className="mt-20 container mx-auto">
           <Outlet/>
           </div>
        </div>
    );
};

export default Main;