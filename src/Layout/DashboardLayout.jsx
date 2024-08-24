import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import Header_deshboard from "../components/Dashboard/Header_deshboard";

const DashboardLayout = () => {
    return (
        <div>
            <div className="flex h-screen bg-[#F8F8F8]">
                {/* Sidebar */}
                <Sidebar />
                <div className="flex-1 flex flex-col ml-64">
                    {/* Top Navbar */}
                    <Header_deshboard />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;