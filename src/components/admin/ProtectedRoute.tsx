import { Navigate, Outlet } from "react-router-dom";
type children = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: children) => {
    const { user } = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.id != 1) {
        return <Navigate to={"/"} />;
    }
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
