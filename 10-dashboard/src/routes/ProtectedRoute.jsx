import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute() {
    const { user,loading } = useContext(AuthContext);

    if (loading) {
        return null;
    }
    // Not logged in → go to login
    if (!user?.isLogin) {
        return <Navigate to="/?mode=login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
