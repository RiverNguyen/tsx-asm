import { Outlet } from "react-router-dom";
import HeaderAdmin from "../website/admin/HeaderAdmin";
import SideBar from "../website/admin/Sidebar";

const LayoutAdmin = () => {
    return (
        <div>
            <div>
                <HeaderAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <SideBar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;
